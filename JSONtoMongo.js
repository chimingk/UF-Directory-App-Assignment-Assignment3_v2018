'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri);




/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 

  Remember that we need to read in a file like we did in Bootcamp Assignment #1.

  Listing is defined from the './ListingSchema.js'
  So take all listings in the .json file and save it to a variable theListings
  Then insert all entries of theListings into my database collection

 */

var theListings = require('./listings.json');
Listing.collection.insertMany(theListings.entries);




/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */