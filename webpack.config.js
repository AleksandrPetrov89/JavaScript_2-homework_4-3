const path = require('path'); // Node.js модуль для разрешения путей файлов

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};
