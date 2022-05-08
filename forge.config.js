require('dotenv').config()

module.exports = {
  "packagerConfig": {
    "icon": "src/icons/assistant.ico",
    "name": "electron-react-express-ts-mobx",
    "authors": "Blake Wiley",
    "description": "electron-react-express-ts-mobx",
    "asar": true,
    "extraResource": [
      "vbs",
      "adodb.js"
    ]
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "electron-react-express-ts-mobx-starter",
        "authors": "Blake Wiley",
        "description": "electron-react-express-ts-mobx-starter"
      }
    }
  ],
  "publishers": [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "GITHUB USERNAME",
          name: "GITHUB REPO NAME"
        },
        authToken: process.env.GITHUB_TOKEN,
      }
    }
  ]
}