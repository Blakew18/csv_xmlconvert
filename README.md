# electron-react-express-ts-mobx Demo App  
**THIS IS A WINDOWS SET UP FOR ELECTRON FORGES BUILD AND PACKGE FUNCTIONS**  
  
  
**Installation:**  
  
```sh  
npm i && npm run dev  
```  
  
Extra Steps    
  1 - You will need to have an active Github Account and commit and push this to a new repositry  
  2 - rename the `DOT ENV TEMPLATE DO NOT COMMITY YOUR DOT ENV FILE to .env  
  3 - On your github Got to Settings => Developer Settings => Personal Access Tokens => Generate A new Token => Make sure 'REPO' is selected as a scope => Generate token and use it in your .ENV FILE  
  4 - AGAIN DO NOT LET YOUR .ENV File Commit  
  5 - Check out https://nuts.gitbook.com/deploy.html and set up a nuts service to auto update your app from github releases  
  6 - Once this is set up you can also check out https://nuts.gitbook.com/github.html to set up a webhook for the auto updates  
  7 - Fill in Github Info inside the forge.config.json file in the root directory  
  8 - Run on of the following scripts depending on what you need to do  
  
**Scripts**  

Use This Script To Open the App in development Mode. AutoUpdates will be off Dev tools will be installed and opened  
```sh  
    npm run dev
```  
Use this Script To Package your app but not create a windows installer. Use this option to test finished apps with out having to complete install them  
```sh  
    npm run package 
```  
Use this Script to Pakage your app and create distrabutable files - You Do Not Need to Run Package and Then this, This will Package the App then create the distrbutables  
```sh  
    npm run make
```  
Use this Script to Publish a distrabutable as a release to github.  
```sh  
    npm run publish
```  
  
**THIS IS A WINDOWS SET UP FOR ELECTRON FORGES BUILD AND PACKGE FUNCTIONS**  
  
**Tutorial:**  
  
Coming Soon 👩‍💻  