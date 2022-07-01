Technology Used:

1. Front end developed in react Js using HTML,CSS and Bootstrap.
2. Back end developed in Node Js using Express Web Framework Mongoose.
3. MongoDB is used as Cloud Database.

Directory Structure:

front end is coded in client folder.
backend is coded in server folder.

Client Side: 

(Profile Page in Navbar is only accessed by Authenticated User after login.)

client--> parent folder for front-end of the Web page

client\node_modules --> contains all the installed modules

client\src --> source folder which contain all the component

client\src\images --> contains all images used in the web page

client\src\components --> contains all the components of created for the header, navbar and body of web page. 

client\package.json --> all the installed modules are defined.


Server Side : 

server--> parent folder for back-end of the Web page

server\node_modules --> contains all the installed modules

server\db --> contains conn.js file where database connection is setup using mongooose.

server\middleware --> contains authenticate.js file where JWT (Json Web Token) Authentication is done. JW Token is verified for authentic user.

server\model--> contains userSchema.js file where schema structure is designed for mongoDB database, JWT token is generated and password is encrypted using hash function.


server\router--> contains auth.js file where the login form's id and password is authenticated and data from signup form is send to database. This act as route between client and database to fetch and retrieve information from DB.

server\config.env --> contains Databse connnection path and SECRET_KEY (used for password encryption) 


server\package.json --> all the installed modules are defined.


Installation process of Node.js:


1. Install Node Js (https://nodejs.org/en/) - Install the most recommended one.

cmd - > node -v (to check version)

2. npm - node package manager. (comes with node)

cmd -> npm -v (to check version)

3. Install React Js, Mongooose, Express Js

https://reactjs.org/docs/getting-started.html

npm i express
npm install -g nodemon
npm i mongoose
npm i bcryptjs  

npm create-react-app client (create client)

4. Install VS Code (IDE)

5. Open folder NITKPortal

8. To run the application on browser:

Open VS Code -> split terminal

one side -> cd client -> npm start (to run client at PORT 3000)
one side -> cd server -> nodemon app.js (to run server at PORT 5000)

END OF DOCUMENT
