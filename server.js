var fs = require('fs')
var jsonfile = require('jsonfile')
var set = require('lodash.set')
let odata = fs.readFileSync('./lang.txt')
let data = String(odata).split(/\r?\n/ig)
let files=["","./lang/zh_CN.json","./lang/zh_TW.json","./lang/en_US.json"]
var current = ""
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
    if(i%5 == 0) {
      current = data[i]
    } else if(i%5 < 4) {
      await writeTranslationsToDisk(current,data[i],files[i%5])
    }
  }
}