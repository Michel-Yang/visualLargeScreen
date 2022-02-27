// 前端工程的自动化
const path = require('path');
const files = require.context('./modules', true, /\.js$/);

const modules = {};
files.keys().forEach(key => {
  const name = path.basename(key, '.js'); // 回key的最后一部分
  modules[name] = files(key).default || files(key);
});

export default modules;
