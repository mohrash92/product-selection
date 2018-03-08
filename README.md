# Product Selection Application

### Prerequisites 
- node v6.2.2
- Target browsers: 
  - `Google Chrome (built with Version Version 64.0.3282.186)`
  - `Safari Version 11.0.3 `
  - `Firefox Version 49.0.2`
- mongodb installed on your local machine 

## Installation
### MongoDB
##### Important: This application relies on you running mongodb on your local machine. If you have not installed it then you can do so easily with a tool like brew. 
- Ensure that you have port `27017` free (as it is the default port for mongodb) and run your mongo daemon proccess with the command `mongod`
- Clone the application `git clone https://github.com/mohrash92/product-selection.git` and navigate inside `product-selection/server/data` and run the following two commands to insert the data into your mongo database:

1) `mongoimport --jsonArray --db product-selection-development --collection products --file products.json`
2) `mongoimport --jsonArray --db product-selection-development --collection users --file users.json`

- you can verify that the database and collections have been inserted by logging into mongo cli:

- `mongo`
- `use product-selection-development`
- `db.users.find()` and `db.products.find()`

you are now ready to start the application. 

## Starting the application
In order for you to run the application, you must start the node server to gain exposure to the endpoints that the front end applcition will consume from.

- Navigate inside `product-selection/server` and install dependencies `npm install`. Now start the application by running `node server.js`
- Start the Client side application by opening a new terminal window and navigating into `product-selection/client` and run:
 1) npm install (go get a coffee :coffee:)
 2) npm run dev 
 3) Visit localhost:8080 in your browser window

## Using the Product Selection interface
To use the interface assuming that you have done the steps in the installation part:
 
- When visiting `localhost:8080`, you will see a list of results coming directly from the server side via an onload Ajax request. The channel choices will be based on a London user by default corresponding to the customerID cookie set in `client/src/components/App.js` on line 21.

  if you remove all cookies from your browser, change the customer ID set in the same file on line 18, and reload the page then you will see different results. Currently User 123 and 124 have a corresponding location of London so you will expect to see London base channels. However if you change this value to 125, you will see Liverpool based channels as the customer is at a different location.
   
   News Channels remain unaffected and are always displaying. 

## Running the Tests
- When in the `client` folder, you can run all test by running `npm run test`. This command will first run eslint and then the unit tests and you will see the results in the terminal window.