# :hourglass: Social Media Project Structure :hourglass:
This is a dummy project for Social Media.

## How to start the project 
    first you clone the project using the following command : 
    git clone https://github.com/sahilfullstack/demo_social_media.git 

# Setting Up Backend

    Open Terminal
    ```
    cd core
    npm i
    ```

    Then you create a postgres database Named socialmedia with the following credintials 
    ``` 
    username : postgres 
    password : password
    ``` 
    Run the migration using the following command :
    ```
    npx sequelize-cli db:migrate
    ```

    Seed users
    ```
    npx sequelize-cli db:seed:all 
   
    Start the project
    ```
    npm start
    ```

# Setting Up Frontend

    Open Terminal
    ```
    cd app
    npm i
    ```

    Start the project
    ```
    npm start
    ```

# Key Features of backend
1. Async/Await support 
2. WinstonJs Logger Implementation
3. Error Handling
4. Sequelize Support 
5. Open url http://localhost:3000/api/docs  to see the swagger docs for apis exposed. Api Specification implemented through swagger-jsdocs and swagger-ui
6. Enviroment variables to hold configuration values .env file
7. OOP (object oriented programming)
 
# Key Features of frontend
1. Hooks used in App.js.
2. Code is bundled using webpack, required loaders are used (babel-loader, css-loader etc).
3. Unit test has been written for App.js. Rest coverage & improvent is required to be done.
4. Bootstrap is used for handling structure of UI.

Please feel free to contact me :star:  happy programming :v: 
