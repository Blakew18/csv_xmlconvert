import React, { useState } from 'react';
import {  observer } from 'mobx-react';
import { InputText } from 'primereact/inputtext';
import { RootStore } from '../models/root-store';
import { useStores } from './RootStoreProvider';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
const PageOne = observer(() => {

  const rootStore: RootStore = useStores(); 
  const [inputData, setInputData] = useState<string>(" ")

  const submitValue = () => {
    rootStore.changeMyData(inputData)
    setInputData(" ")
  }

  return (
    <div className="text-xl">
      <Link to="/">
        <button className="bg-gray-400 p-1 rounded-lg">
        Page One
        </button>
      </Link> 
      <Link to="/pagetwo">
        <button className="bg-gray-400 p-1 rounded-lg">
          Page Two
        </button>
      </Link> 
      <Link to="/pagethree">
        <button className="bg-gray-400 p-1 rounded-lg">
          Page Three
        </button>
      </Link>   
      <h1>Page Two</h1>
      <p> On this page you will be able to input some text. After this go back to page one and check out your Test Data again</p>
        <InputText value={inputData} onChange={(e) => setInputData(e.target.value)} />    
        <Button label="Submit" icon="pi pi-check" onClick={submitValue} /> 
    </div>
  );
});

export default PageOne;
