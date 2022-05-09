import React, { useState } from 'react';
import {  observer } from 'mobx-react';
import { Button } from 'primereact/button';
import { RootStore } from '../models/root-store';
import { useStores } from './RootStoreProvider';
import { Link } from 'react-router-dom'
import { InputText } from 'primereact/inputtext';
import {fetchSomeData} from '../services/Services';


const PageOne = observer(() => {

  const rootStore: RootStore = useStores(); 
  const [fileToUpdate, setFileToUpdate] = useState<string>('')

  const handleClickUpdate = (e: any) =>{
    
    if (e.length !== 1) return 
    const file = e[0]
    const filePath = file.path
    setFileToUpdate(filePath)
  }

  const handleUpdateFile = async (e:any) => {
    const newCSVData: any[][] =  []
    const filepath = e.target.files[0].path 
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      var XMLParser = require('react-xml-parser');
      var xml:any = new XMLParser().parseFromString(text);

      Array.from(xml.children[1].children).forEach((xmlPart:any) => {

        let csvPart = Array.from(xmlPart.children).map((part:any) => {
          //console.log(part.children)
          const value = part.children[2].value
          return value

        })
        
        newCSVData.push(csvPart)
      } )

       fetchSomeData(filepath, newCSVData)
    };
  
    reader.readAsText(e.target.files[0]);     
  }

  return (
    <div className="text-xl">
        <h1>AC Australia XML to CSV Converter</h1>
        <div className="p-formgroup-inline"> 
          <label style={{borderRadius: '4px', display: 'inline-block', padding: '6px 12px', cursor: 'pointer', backgroundColor:'#239AAB', color:'White'}}>
          <i className="pi pi-file" style={{padding: '6px 12px'}}></i>
          Select File
            <input style={{display: 'none'}} type="file" accept=".dxt" onChange={(e) => {
              handleUpdateFile(e)
              }}
            />
          </label>
          {/* <InputText id="inputtext" value={fileToUpdate} onChange={(e) => setFileToUpdate(e.target.value)} style={{margin: '6px 12px'}}/> */}
        </div>
          {/* <Button label="Submit" icon="pi pi-check"  onClick={handleUpdateFile} style={{backgroundColor:'#239AAB'}}/> */}
          {/* {errorMessage()} */}
    </div>
  );
});

export default PageOne;
