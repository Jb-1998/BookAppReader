## Book Reader App
![Bookreaderapp](https://user-images.githubusercontent.com/57854970/90471084-cf037e00-e14f-11ea-84b9-401c2abd3865.png)



### Working with the repo 
This repositories contains the sample template for buidling RESTFul API for user Authentication using MongoDB, Express.Js and Node.Js. You can clone this repository to test inside your local machine and start using it on your own project.

To clone this, use `git clone <repository path>` command to have a copy of repository to your local machine.

### Build Process
Before you can start to use this project, there are prerequisite required tools and frameworks that you need to install. **Make sure to install all the neccessary frameworks listed below**:

* `Node js` you can install the latest version of node through this site [download latest Node.js version](https://nodejs.org/en/download/).
* `MongoDB` for us to test our api, we should have a database that will accept data and store to handle different request. You can download and read the instructions through this site [download latest MongoDB version](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) 

After you've installed all the necessary requirements, you can now install npm packages. Please refer to it's documentation. [npm documentation](https://docs.npmjs.com/downloading-and-installing-packages-locally).

Use `npm install` from your terminal to install all necessary node modules required for build process. This process needs to be repeated whenever any changes to `package.json` are made.

On the root folder create a `.env` file and paste the following details below. This file allows you to connect to the database and provide also a token secret. The database is intended for testing only.

* `DB_CONNECTION = mongodb+srv://testjb:sampletest@cluster0-tigkz.mongodb.net/Cluster0?retryWrites=true&w=majority`
* `TOKEN_SECRET = ashdioasjdiajoidjaodoapj`


### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in the development mode. <br>

### Testing API Endpoints

To test different request, we will be using Postman. Please download and install postman to your local machine. You can found it here [Postman download](https://www.postman.com/).

To Test POST and GET request you can go to this link:
* **POST** For registration of users access the url `http://localhost:3000/api/user/register` and provide user details required such as name, email and password.
* **POST** For login of users access the url `http://localhost:3000/api/user/login` and provide user details required such as email and password.

* **GET** Users can access to post url `http://localhost:3000/api/posts`, users that already login is given an access token wherein you can copy and paste it on the header section where you will add an **auth-token** key and paste the token as a value to that key. 

You can do several testing for authentication of login and registration as well as validation of different object inputs.




 
