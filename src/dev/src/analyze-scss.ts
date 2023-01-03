/* eslint-disable import/no-extraneous-dependencies */
import * as path from 'path'
import * as sass from 'sass'
import * as fs from 'fs'
import { pathToFileURL } from 'url'

const CSSJSON = require('cssjson')

const projectRootPath = path.resolve(__dirname, '../../../')

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

interface Style {
  [Key: string]: {
    children: Style
    attributes: Record<string, string>
  }
}

function getAllStyles(paths: string[]) {
  const result: Style[] = []
  paths.forEach(path => {
    result.push(
      CSSJSON.toJSON(
        sass.compile(path, {
          importers: [
            {
              findFileUrl: url => {
                return pathToFileURL(`${projectRootPath}/${url}`)
              },
            },
          ],
        }).css
      ).children
    )
  })

  return result
}

export default function getAnalyze() {
  const styles = getAllStyles(getAllScssFilePaths(projectRootPath))

  function getAttrs(style: Style) {
    const attrs: Record<string, string>[] = []
    for (const key of Object.keys(style)) {
      attrs.push(style[key].attributes)
      if (Object.keys(style[key].children).length) attrs.push(...getAttrs(style[key].children))
    }
    return attrs
  }

  const cssPropertiesFrequency: Record<string, number> = {}

  styles
    .map(style => getAttrs(style))
    .flat()
    .forEach(style => {
      for (const cssProperty of Object.keys(style)) {
        if (cssPropertiesFrequency[cssProperty] !== undefined) cssPropertiesFrequency[cssProperty] += 1
        else cssPropertiesFrequency[cssProperty] = 1
      }
    })

  return Object.entries(cssPropertiesFrequency)
    .sort((a, b) => (a[1] > b[1] ? -1 : 1))
    .map(entry => entry.join('___'))
}
