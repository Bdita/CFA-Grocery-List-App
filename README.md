### About Project
  A simple application that render the grocery list items passed in JSON format as a html table in browser. This application is built to practice making web applications using Node.js, Express.js and EJS templates.

### Installation Instruction
#### Dependencies:
  * express 4.15.2: Express is a minimalist, unopinionated and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  * ejs 2.5.6: EJS is a client-side templating language.
  * path 0.12.7: It provides utilities for working with file and directory paths.
#### Requirements:
  This application is made using node and npm.
  * node 6.10.3 - a server side JavaScript platform built on chrome v8 Javascript engine. It allows to write javascript based application that can be run outside of the browser.
  * npm 3.10.10 - a package manager for javascript. It is used to install, share and distribute code and manage dependencies in projects.
  * nodemon 1.11.0 - for convenience in running the server): a utility that will monitor for any changes in your source and automatically restart your server.

#### Usage Instruction
  Clone the repository.
  ```
  $ cd repoName
  $ npm install  //to install the dependencies in the local _modules folder
  $ npm start  //to run the server
  ```

  To verify the output using your browser, type localhost:3000 .
  You should see as below (in a html table).
  ```
  Welcome to my Grocery list for 14/05/2017
  Name          Type
  Apple         Fruit
  Egg Plant     Vegetable
  Broccoli      Vegetable
  ```

  To verify the json output using your browser, type localhost:3000 .
  ```
  {"list":{"name":"Grocery","date":"14/05/2017"},"items":[{"id":"1","name":"Apple","type":"Fruit"},{"id":"2","name":"Egg Plant","type":"Vegetable"},{"id":"3","name":"Broccoli","type":"Vegetable"}]}
  ```
