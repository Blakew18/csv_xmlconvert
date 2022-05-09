require('dotenv').config()

module.exports = {
  "packagerConfig": {
    "icon": "src/icons/acauslogo.ico",
    "name": "XML to CSV Converter",
    "authors": "AC Australia - BW",
    "description": "Converts and XML file to a CSV",
    "asar": true,
    "extraResource": []
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "XML-to-CSV-Converter",
        "authors": "AC Australia - BW",
        "icon": "src/icons/acauslogo.ico",
        "description": "Converts and XML file to a CSV"
      }
    }
  ],
  "publishers": [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "AC-Australia",
          name: "ac-aus-xml-csv-converter"
        },
        authToken: process.env.GITHUB_TOKEN,
      }
    }
  ]
}