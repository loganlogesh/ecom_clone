# ecom_clone
1. fist download the softwares : ( Environment setup) > Install node.js ( check once in cmd both node and npm version) > create the new folder and open with vscode

2 . To form the structure of application :

    // Download the extension of vscode :

        > ES7 + react/Redux/React-Native Snippets
        > DotENV
        > html to JSX

        > Go to setting --> Search 'format' --> mush enable to format on save ( optional )

        > prettier - code formatter

    // Create the rest API :

        > Install the package.json ( "npm init -y ")
            >change the name , discription , In script add --> start : " node server.js " ( "npm start" command to run the server)


3. install the express.js and colors ( " npm i express colors)
4. create the file called server.js
        > create the server

            >const express = require('express')

            // rest object
            const app = express()

            // rest api
            app.get('/',(req , res) => {
                res.send({
                    message:'welcome to ecommerce app'
                })
            })

            //PORT
            const PORT = 8080

            // Run listen
            app.listen(PORT, () => {
                console.log(`server running on ${PORT}`)
            })

5. install the nodemon ( " npm i nodemon ")

        > In package.json , IN script to add --> "server" : "nodemon server.js" ( "npm run server" command to run the server)
    
        > In package.json to add --> ( "type" : "module" ) In this change one error will come

            > ERROR : require is not defined in ES module 
                > we can use [Import express from 'express'] instead of  [const express = require('express') ]

6. install the DotENV (Environment variable file) --> use to security porpose ( credential date like port no. , mongodb psw)
        > Install dotENV ( npm i dotenv)
        > config dotenv ( dotenv.config() || dotenv.config([ path: ' ..foldername/filename ']) )

---------------------------- Basic setup will be completed -------------------------------

7. To connect mongodb server to node.js -->

        > First create the cluster
            > shared 
            > select cloud provided and region 
            > cluster name 
            > click create cluster
        > Second create the collection 
            > click create database ->> enter database name and collection name.
            > click create 
        > conectien a mogodb compass
            > click I have mongodb compass
            > copy the url and change the user name and password
            > open the Manogodb compass and past the url 
            > open the mongodb compass.





