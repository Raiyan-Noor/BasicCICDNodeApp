const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port 8000`)
})

console.log("Hello World")
console.log("Software Design Lab")