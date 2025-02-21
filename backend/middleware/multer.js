const multer =require("multer")

const path =require("path")
console.log()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${path.join(__dirname,'../upload')}`)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random())
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })
  module.exports=upload;