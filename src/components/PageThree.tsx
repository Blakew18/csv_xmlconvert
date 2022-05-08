import React, { useState } from 'react';
import {  observer } from 'mobx-react';
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button';
import { RootStore } from '../models/root-store';
import { useStores } from './RootStoreProvider';

const PageThree = observer(() => {

  const rootStore: RootStore = useStores(); 
  const [showData, setShowData] = useState<boolean>(false)

  const clickHandle = async () => {
    setShowData(!showData)
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
      <h1>Page Three</h1>
      <p> On this page you will be able to click the bellow 
        button The infomation will from our Express App will added into our store.
        Click the button then go back to page on and test out the button</p>
        <Button label="Fetch Express Data" className="bg-gray-400 p-1 rounded-lg" onClick={clickHandle} />
    </div>
  );
});

export default PageThree;
