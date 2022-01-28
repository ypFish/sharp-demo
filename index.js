const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

//格式转化
async function format(fileName) {
  const result = await sharp(path.join(__dirname, 'input', fileName))
    // .resize({ width: 500, height: 500 })
    .png({
      quality: 10,
      compressionLevel: 9,
      colours: 8,
    })
    .toFile(
      path.join(__dirname, 'output', fileName.replace(/.[^/.]+$/, '.png'))
    )
  return result
}

//读取input文件夹内容
const files = fs.readdirSync(path.join(__dirname, 'input'))
files.forEach(async (item) => {
  if (path.extname(item).toLocaleLowerCase() !== '.svg') {
    return
  }
  const result = await format(item)
  console.log(result)
})
