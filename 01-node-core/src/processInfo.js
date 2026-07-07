console.log("===========================");
console.log(process.env.APP_NAME, "Started");
console.log("===========================");

console.log("Node version: ", process.version);
console.log("PID: ", process.pid);
console.log("Working directory:", process.cwd());
console.log("Platform: ", process.platform);
const env = process.env.NODE_ENV || "development";
console.log("Environment: ", env);

console.log("====================================");

// console.log(process.argv);
// console.log(process.arch);

// console.log(process.env.PATH);
// console.log(process.env.OS);
// console.log(process.env.USERNAME);
