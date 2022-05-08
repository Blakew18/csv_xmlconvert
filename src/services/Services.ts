import axios from 'axios'
const { ipcRenderer } = window.require("electron");
let expressAPI:string
let expressPort: string
let versionNumber: string
//NPM Imports

//App Locations to be updated to ENV locaitons
ipcRenderer.send('variable-request', ['expressPort', "appVersion"]);
ipcRenderer.on('variable-reply', function (event:any, args:string[]) {
  versionNumber = args[1]
  expressPort = args[0];
  expressAPI = `http://localhost:${expressPort}/`;
});

axios.interceptors.request.use(async config => {
  config.headers.token = "This Could be set to add some Auth to your requests"
  return config
 }, (error) => {
  console.log("error")
  return
 })

export const fetchSomeData = async () => {
  try {
    const someData = await axios.get(`${expressAPI}api`);
    return someData
  } catch (err) {
    console.log(err);
  }
};

export const getVersionDetail = () => {
  return versionNumber
}



