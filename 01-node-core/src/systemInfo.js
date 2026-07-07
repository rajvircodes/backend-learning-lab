const os = require("os");

const systemInfo = () => {
  console.log(os.hostname());
  console.log(os.platform());
  console.log(os.arch());
  console.log(os.cpus().length);
  const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
  console.log(totalMemory + " GB");
  console.log(totalMemory + " GB");
  console.log(os.freemem());
  console.log(os.uptime());
};

systemInfo();
