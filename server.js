/**
 * 
 * @authors liming.liu (liming.liu@71bird.com)
 * @date    2018-08-17 14:54:54
 * @version $Id$
 */
// var fs = require('fs')
// var jsonfile = require('jsonfile')
// var set = require('lodash.set')
// let odata = fs.readFileSync('./lang.txt')
// let data = String(odata).split(/\r?\n/ig)
// let files=["","./lang/en.json","./lang/zh_CN.json"]
// let flen = files.length
// var current = ""
// deal()
// function writeTranslationsToDisk (key, translation,translationFile) {
//   return new Promise((resolve, reject) => {
//     jsonfile.readFile(translationFile, (e, obj) => {
//       obj = obj || {}
//       set(obj, key, translation)
//       jsonfile.writeFile(translationFile, obj, { spaces: 2 }, err => { reject(err) })
//       resolve()
//     })
//   })
// }
//  async function deal(){
//   for(var i = 0,len = data.length;i<len;i++){
//     if(i%(flen+1) == 0) {
//       current = data[i]
//     } else if(i%(flen+1) < flen) {
//       await writeTranslationsToDisk(current,data[i],files[i%(flen+1)])
//     }
//   }
// }

var fs = require('fs')
var jsonfile = require('jsonfile')
var set = require('lodash.set')
let odata = fs.readFileSync('./lang.txt')
let data = String(odata).split(/\r?\n/ig)
let files=["","./lang/en.json","./lang/zh_CN.json"]
var current = ""
// deleteAllfile()
deal()
function writeTranslationsToDisk (key, translation,translationFile) {
  return new Promise((resolve, reject) => {
    jsonfile.readFile(translationFile, (e, obj) => {
      obj = obj || {}
      set(obj, key, translation)
      jsonfile.writeFile(translationFile, obj, { spaces: 2 }, err => { reject(err) })
      resolve()
    })
  })
}
 async function deal(){
  for(var i = 0,len = data.length;i<len;i++){
    if(i%4 == 0) {
      current = data[i]
    } else if(i%4 < 3) {
      await writeTranslationsToDisk(current,data[i],files[i%4])
    }
  }
}

async function deleteAllfile() {
  for(var i in files) {
    if(files[i]){
      await deletefile(files[i])
    }
  }
  
}

function deletefile(url) {
  return new Promise((resolve, reject) => {
    fs.unlink(url, function(err) {
      if(err){
        reject(err)
      }
      resolve(true)
    })
  })
}