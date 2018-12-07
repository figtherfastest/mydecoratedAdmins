const path = require('path')
require('ts-node').register({ files: [path.resolve(__dirname, '@types', 'index.d.ts')] })
let file = path.resolve(__dirname, 'data.xlsx')
require('./src/generate-java').generate({
  file,
  packageName: 'com.dm.data.manager',
  target: path.resolve(__dirname, 'dist', 'java')
})
