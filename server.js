const express = require('express')
const app = express()
const port = 3000
const path=require('path')
app.use(express.static('web'))
const getDate = (req, res, next) => {
  console.log("Time:", new Date())
  if ((new Date().getDay() > 0 && new Date().getDay() < 6) && (new Date().getHours() >= 9 && (new Date().getHours() + 1) <= 17)) {
      console.log("app is open 🕖")
      next()
  } else {
      //console.error(err.stack);
      //res.status(500).send('Something broke ⛔!');
      res.send("app error ⛔")
  }
}
// application level middleware
app.use(getDate);

app.get('/:page' , (req, res) => {

 
  res.sendFile(__dirname+'/web/'+req.params.page+'.html')
  
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})