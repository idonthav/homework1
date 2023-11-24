const express = require("express");
const app = express();
const path = require("path");
const { exec } = require('child_process');

const PORT = process.env.PORT || 5500;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);

  // 启动 localtunnel
  const tunnelCommand = `npx localtunnel --port ${PORT} --subdomain my-two-sum`;
  const tunnelProcess = exec(tunnelCommand);

  tunnelProcess.stdout.on('data', (data) => {
    console.log(`localtunnel: ${data}`);
    const match = data.match(/your url is: (.+)/);
    if (match) {
      console.log(`Public URL: ${match[1]}`);
    }
  });

  tunnelProcess.stderr.on('data', (data) => {
    console.error(`localtunnel error: ${data}`);
  });

  tunnelProcess.on('close', (code) => {
    console.log(`localtunnel process exited with code ${code}`);
  });
});
