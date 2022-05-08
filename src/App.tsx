//NPM Imports
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import "firebase/auth";
import { Messages } from 'primereact/messages';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

//Internal Imports
import { RootStoreProvider } from './components/RootStoreProvider';
import { RootStore, setupRootStore } from './models/root-store';
import { getVersionDetail } from './services/Services'
import LoadingPage from './components/LoadingPage'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import { APP_NAME } from './constants'
const { ipcRenderer } = window.require("electron");

function App() {

  const [rootStore, setRootStore] = useState<RootStore>();
  const [versionShowing, setVersionShowing] = useState<boolean>(false)
  const updateAvalible = useRef(null);
  const showVersionDetail = useRef(null)

  
  ipcRenderer.on('updateAvalible', (( event:any, message:string ) =>{
      return (
        updateAvalible.current.show([
          { life: 10000 , severity: 'info', summary: '', detail: `Hi there, looks like we have made some updates. Changes will be applied next time you open the app.` }
        ])
      )
  }))

  const showVersionData = () => {
    if ( versionShowing ) {
      setVersionShowing(false)
      showVersionDetail.current.clear()
    } else {
      setVersionShowing(true)
      return (
        showVersionDetail.current.show([
          { closable: false, life: 10000 , severity: 'info', summary: '', detail: `${getVersionDetail()}` }
        ])
      )
    }
  }

  useEffect(() => {
      if (rootStore) return;
        setupRootStore()
          .then((rs) => {
            setRootStore(rs);
          })
          .catch((err) => {
            console.log('failed to initialize root store');
            console.log(err)
          });
  }, [rootStore]);

  if (!rootStore) return(
    <div className='text-center'>
      <LoadingPage />
    </div>
  );

  return (
    <div className='text-center h-full'>
      <h1>{APP_NAME}</h1>
      <RootStoreProvider value={rootStore}>
        <div className="popup-messages-fixed">
          <div className = 'fixed top-0 right-0 m-1'>
            <Button icon="pi pi-info-circle" className="p-button-rounded p-button-secondary" onClick={showVersionData} />
          </div>
          <div className = 'fixed my-10'>
            <Messages ref={updateAvalible} />
          </div>
          <div className = 'fixed right-0 my-10'>
            <Messages ref={showVersionDetail} onClick={showVersionData} />
          </div>
        </div>
        <HashRouter>
          <Switch>
          <Route path='/pagethree' component={PageThree} />
          <Route path='/pagetwo' component={PageTwo} />
          <Route component={PageOne} />
          </Switch>  
        </HashRouter>
      </RootStoreProvider>
    </div>
  );
}

export default App;
