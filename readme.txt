Package.josn..
I have used some dependencies like body-parser, express,dotenv, mongoose and nodemon.
Let me tell you each of above module with some explanation that why I need above modules.
body-parser:
	body-parser is responsible for parsing the middleware before we handle it. when we use middleware in our app we should use this module for parsing the middleware request.
express: 
	express is fast, unopinionated, minimalist web framework for node.js without express node.js is incomplete.
dotenv:
	dotenv is library for ingnoring files which have ".env" extension.
mongoose: 
	mongoose is a library to connect mongodb database with node.js app. It make so much easy to connect our app with database.
nodemon:
	Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.


I have build three API's here first one is "/nameprice" in which would take input from user "iten_name" and its "price" and store it on database.
Second one is "/price" which will take input item_name form user and fetch price according to the database record if no data present according to the query then output will be null[].
Third and the last one is "/" this is API will fetch all the records from database and show the user in json formate.

I have connected this app with mongodb atlas.

Now let me tell you the Schema of my database.

The first column name of my database is item_name and it take input in string form and the field of this is require : true.
Second column name of my database is price and it will also take input for user in string form, field of this is required : true.
