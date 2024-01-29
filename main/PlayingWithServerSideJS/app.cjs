const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//This code will start a node.js app listening on port 3000. 
//It will display Hello World in the browser at url http://localhost:3000/
//Run node main\PlayingWithServerSideJS\app.cjs in the terminal to start the app, then navigate to the url to see the output.
//Use netstat -ano | findstr :3000 and tskill typeyourPIDhere to kill the app