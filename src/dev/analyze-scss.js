"use strict";
exports.__esModule = true;
/* eslint-disable import/no-extraneous-dependencies */
var path = require("path");
var sass = require("sass");
var CSSJSON = require("cssjson");
var fs = require("fs");
// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)
var projectRootPath = path.resolve(__dirname, '../../');
function getAllScssFilePaths(rootPath) {
    var result = [];
    var readItems = fs.readdirSync(rootPath);
    readItems.forEach(function (item) {
        var itemPath = "".concat(rootPath, "/").concat(item);
        var itemLstat = fs.lstatSync(itemPath);
        if (itemLstat.isDirectory()) {
            result.push.apply(result, getAllScssFilePaths(itemPath));
        }
        else if (itemLstat.isFile() && item.endsWith('.scss')) {
            result.push(itemPath);
        }
    });
    return result;
}
function getAllStyles(paths) {
    var result = [];
    paths.forEach(function (path) {
        console.log(path);
        result.push(CSSJSON.toJSON(sass.compile(path).css).children);
    });
    return result;
}
console.log(getAllScssFilePaths(projectRootPath).length);
console.log(getAllStyles(getAllScssFilePaths(projectRootPath)));
