var fs = require('fs')
var jsonfile = require('jsonfile')
var set = require('lodash.set')
var prompt = require('prompt');
var colors = require('colors');
var odata;
var data;
var current = ""
getInput()
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
/**
 * [deal description]
 * @param  {[type]} files    [文件地址数组]
 * @param  {[type]} langname [语言名称数组]
 * @return {[type]}          [description]
 */
 async function deal(files, langname){
  console.log(langname)
  let filelen = files.length
  for(var i = 0,len = data.length;i<len;i++){
    if(i%(filelen+2) == 0) {
      current = data[i]
      console.log(`  ${data[i]}`.cyan)
    } else if(i%(filelen+2) < (filelen+1)) {
      let txtsource = data[i]
      let langindex = i%(filelen+2) - 1
      try{
        console.log('current:', current)
        console.log('translation:', data[i])
        console.log('translationFile:' ,files[langindex])
        await writeTranslationsToDisk(current, txtsource, files[langindex]);
        let lang = langname[langindex];
        console.log(`√ ${lang}:${txtsource}`.green)
      }catch(e){
        console.log(e.message.red)
      }
    }
  }
  console.log('\n')
  console.log('√ 文件输出成功'.green)
  console.timeEnd('useTime')
}

async function init(result) {
  console.log('  读取数据源文件…'.green)
  odata = fs.readFileSync(`./${result.url}`)
  data = String(odata).split(/\r?\n/ig)
  console.log(data.length)
  console.log('√ 数据源文件读取成功'.green)
  console.log('  删除已生成文件…'.green)
  let langFlolder = './lang'
  deleteFolderRecursive(langFlolder)
  console.log('√ 原文件删除成功'.green)
  let exist = await isExist(langFlolder)
  if(!exist) {
    fs.mkdirSync(langFlolder)
  }
  console.log('√ 初始化文件目录成功'.green)
  let files = result.lang.split(',')
  let nfiles = files.map(item => {
    return `${langFlolder}/${item}.json`
  })
  deal(nfiles, files)

}

function getInput() {
  prompt.start();
  prompt.get([{
    name: 'lang',
    default: 'en,zh_CN',
    description: '请输入需要生成的语言类型，多语言以英文逗号隔开',
    required: true
  },
  {
    name: 'url',
    default: 'lang.txt',
    description: '请输入源文件名(当前目录下)',
    required: true
  }], function(err, result) {
    init(result)
    console.time('useTime')
  })
}

function isExist(url) {
  return new Promise((resolve, reject) => {
    fs.exists(url, function(exists){
      if(exists) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}


function deleteFolderRecursive(path) {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file) {
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};