# simple-react-template

## Description

### About Template
It's my simple react template created from **scratch** using webpack 4, it's use _redux_, _react-router-dom_, _sass compiler_, _file loader_ and others.

Clone this repository to local folder then open the terminal in the cloneted folder and run `npm i` or `npm install` to install all necessary modules to this template work 

### About Folder and files
1. Inside __root__ folder there is __*package.json*__ with *scripts* *modules* and other initial *config*, __*license*__ file with *license of template* __*.babelrc*__ with *babel config* and __*README.md*__ with *descriptions*.
2. __public__ folder have the __*index.html*__ template,
  > __consider not put any more files in there__.
3. __config__ folder have webpack __*development*__ and __*production*__ configurations
4. __src__ folder have
 4. __components__ there are personal react components
 4. __media__ there are images and other media files
 4. __store__ there is the redux
 4. __pages__ there are the 'pages' of the SPA
 4. __style__ have the sass style file
 4. __*App.js*__ is the principal component of react
 4. __*index.js*__ is the principal js file to react work on html page
  
### About Scripts
- _npm start_: initialize server in dev mode and open browser automatically
- _npm run build_: create the build folder with the files for production
- _npm run prod_: create the build folder with the files for production and run a http server with builded files
- _npm test_: at the moment don't have integration with tests
