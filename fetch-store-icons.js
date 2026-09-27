const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const apps = [
  { id: 'rooflink', url: 'https://play.google.com/store/apps/details?id=com.rooflink&hl=en' },
  { id: 'reekolect', url: 'https://play.google.com/store/apps/details?id=com.reekolect&hl=en' },
  { id: 'myborderpass', url: 'https://play.google.com/store/apps/details?id=com.application.Myborderpass&hl=en' },
  { id: 'myrc', url: 'https://play.google.com/store/apps/details?id=com.tris.myrc.MyRegistere' },
  { id: 'missio', url: 'https://play.google.com/store/apps/details?id=app.missio&hl=en' },
  { id: 'claudia', url: 'https://apps.apple.com/in/app/claudia-dean-world/id6443443761' },
  { id: 'skoolfame', url: 'https://apps.apple.com/in/app/skoolfame-app/id1671482360' }
];

const destDir = path.join(__dirname, 'assets', 'apps');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchPage(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
  });
}

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve, reject) => {
    const client = fileUrl.startsWith('https') ? https : http;
    const req = client.get(fileUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(destPath);
      });
    });
    req.on('error', reject);
  });
}

async function run() {
  for (const app of apps) {
    try {
      console.log(`Fetching HTML for ${app.id}...`);
      const html = await fetchPage(app.url);
      
      // Extract og:image or twitter:image
      let imageUrl = null;
      const ogMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i) ||
                      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i) ||
                      html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i) ||
                      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']twitter:image["']/i);
      
      if (ogMatch && ogMatch[1]) {
        imageUrl = ogMatch[1].replace(/&amp;/g, '&');
      } else {
        // Fallback match for play-lh.googleusercontent.com or mzstatic.com
        const imgMatch = html.match(/(https:\/\/(play-lh\.googleusercontent\.com|is[0-9]-ssl\.mzstatic\.com)\/[^"'\s>]+)/i);
        if (imgMatch) imageUrl = imgMatch[1];
      }

      if (imageUrl) {
        console.log(`Found image URL for ${app.id}: ${imageUrl}`);
        const ext = imageUrl.includes('.png') ? '.png' : '.jpg';
        const destPath = path.join(destDir, `${app.id}${ext}`);
        await downloadFile(imageUrl, destPath);
        console.log(`Downloaded ${app.id} image to ${destPath}`);
      } else {
        console.warn(`No image URL found for ${app.id}`);
      }
    } catch (err) {
      console.error(`Error for ${app.id}:`, err.message);
    }
  }
}

run();
