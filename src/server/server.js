const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const fs = require('fs');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//This sends a Get Request for all original materials. 
app.put('/api', async(req,res) => {
  
  const filePath = req.body.filepath
  const newFilePath = req.body.filepath.replace(/\.[^.]+$/, '.csv')
  const csvData = req.body.csvData

  let textForCSV = 'FileName,UnitName,PartName,PartId,Length,Width,Thickness,Material,UnitNumber,Quantity,AllowRotate,RotationAngle,Mirrored,Job Number,Drawing Name,Cabinet Type,Cabinet Label,Component ID,Component Type,Component Comment,Edging Code,Label Edge,Label Edge,Label Edge,Label Edge,Label Edge,Label Edge,Label Edge,Label Edge Material,Label Edge Material,Material Full,Label Edge Material,Label Edge Material,Label Edge Material,LabelPositionX,LabelPositionY,CabCommentPart' + `\n`
  

  fs.writeFile(newFilePath, textForCSV, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
    }})

    csvData.forEach(part => {

      console.log(part.join(","))
      fs.appendFile(newFilePath, part.join(",") + `\n` , (err) => {
        if (err) {
          console.log(err);
        }
        else {
          // Get the file contents after the append operation
          console.log("\nFile Contents of file after append:",
        );
        }
      })
    })
  
      
  

});

const startExpress = () => {
    const port = process.env.expressPort;
    app.listen(port);
    console.log('App is listening on port ' + port);
}



module.exports.startExpress = startExpress;