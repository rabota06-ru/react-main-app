/* eslint-disable import/no-extraneous-dependencies */
import * as path from 'path'
import * as sass from 'sass'
import * as fs from 'fs'
// import * as CSSJSON from 'cssjson'
const CSSJSON = require('cssjson')

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)
const projectRootPath = path.resolve(__dirname, '../../')

function getAllScssFilePaths(rootPath: string) {
  const result: string[] = []
  const readItems = fs.readdirSync(rootPath)
  readItems.forEach(item => {
    const itemPath = `${rootPath}/${item}`
    const itemLstat = fs.lstatSync(itemPath)
    if (itemLstat.isDirectory()) {
      result.push(...getAllScssFilePaths(itemPath))
    } else if (itemLstat.isFile() && item.endsWith('.scss')) {
      result.push(itemPath)
    }
  })

  return result
}

function getAllStyles(paths: string[]) {
  const result: any[] = []
  paths.forEach(path => {
    console.log(path)
    result.push(CSSJSON.toJSON(sass.compile(path).css).children)
  })

  return result
}

console.log(getAllScssFilePaths(projectRootPath).length)

console.log(getAllStyles(getAllScssFilePaths(projectRootPath)))
