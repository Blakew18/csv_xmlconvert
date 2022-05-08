import React, { useState } from 'react';
import {  observer } from 'mobx-react';
import { Button } from 'primereact/button';
import { RootStore } from '../models/root-store';
import { useStores } from './RootStoreProvider';
import { Link } from 'react-router-dom'
const PageOne = observer(() => {

  const rootStore: RootStore = useStores(); 
  const [showData, setShowData] = useState<boolean>(false)

  const clickHandle = () => {
    setShowData(!showData)
  }

  const showStoreData = () => {
    if (showData){
      return<h5>{rootStore.showMeSomeData}</h5>
    }
  }

  return (
    <div className="text-xl">
      <div className="inline">
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
      </div>  
      <h1>Page One</h1>
      <p> On this page you will be able to click the bellow 
        button and see the infomation in Root Store Displayed On the 
        Screen</p>
        <Button label="Show Store Data" className="bg-gray-400 p-1 rounded-lg" onClick={clickHandle} />    
        {showStoreData()}    
    </div>
  );
});

export default PageOne;
