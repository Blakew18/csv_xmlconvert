const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//This sends a Get Request for all original materials. 
app.get('/api', async(req,res) => {
    try{
    list = "returning Some Data From Express";
    res.json(list);
    } catch(err) {
      res.json(err);  
    }
});

const startExpress = () => {
    const port = process.env.expressPort;
    app.listen(port);
    console.log('App is listening on port ' + port);
}



module.exports.startExpress = startExpress;