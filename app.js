const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Hello World - DevSecOps Assignment 1</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          font-family: 'Segoe UI', sans-serif;
          color: #fff;
        }
        .card {
          text-align: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 60px 80px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        h1 { font-size: 3rem; margin-bottom: 16px; letter-spacing: 2px; }
        p  { font-size: 1.1rem; opacity: 0.75; margin-bottom: 8px; }
        .badge {
          display: inline-block;
          margin-top: 24px;
          padding: 6px 18px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 50px;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🌍 Hello, World!</h1>
        <p>Assignment 1 – Automated Container Build Pipeline</p>
        <p>DevSecOps | Node.js + Docker + GitHub Actions</p>
        <div class="badge">Running on port ${PORT}</div>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, HOST, () => {
  console.log(`[INFO] Server running at http://${HOST}:${PORT}/`);
});
