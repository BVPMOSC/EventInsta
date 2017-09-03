var dotenv = require('dotenv').config()
var fs = require('fs')

var obj = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
}

fs.writeFile("src/config/firebase_constants.js", 'export default ' + JSON.stringify(obj), 'binary', (err)=>{
  if(err) console.log(err)
  else console.log('Firebase constants file created')
})