<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://www.mongosheet.com/doubleslash.png" width="120" alt="Nest Logo" /></a>
</p>

## Description

[mongosheet](https://mongosheet.com) is a Google Spreadsheet Addon that use can use to run all CRUD operation on mongoDB database. You can think this a spreadsheet interface for mongoDB.


## Setup
Clone this project.<br/>
Change the connection string in the .env file.<br/>
Deploy the project on your server.<br/>

Go to Google Spreadsheet and click on Extentions > Add-ons > Get add-ons > Search for MongoSheet > Install.

Or click on the link below to install the addon.<br/>
https://gsuite.google.com/u/0/marketplace/app/mongosheet/373297131098

Open the addon in the sidebar and it will be asking to provide the connection setup. 

In the project name field you can give any name, its an identifier for you.<br/>
In the App URL field provide the URL of the project that you deployed in the earlier step.<br/>
In the Collection field provide the name of collection that you want to connect to.<br/>

BANG! you are done. Now can run queries, and run update command on the collection. This is fast, safe and easiet method to bring your mongoDB data to a spreadsheet.


For testing the addon you can use following properties.<br/>
Project: Sample<br/>
App URL: https://mongosheet-api.appspot.com<br/>
Collection: family<br/>

In the spreadsheet create a new sheet called "Main". Sheet "Main" is  the entry for the addon.<br/>
In the first row give the following column names.<br/>
A1: _id<br/>
B1: father<br/>
C1: mother<br/>
D1: kids:array<br/>

## Issues
For bugs and feature request feel free to open a issue.


## Support
Send me an email at hello@mongosheet.com