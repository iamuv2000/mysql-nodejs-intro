const express =  require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const chalk = require('chalk');
const bodyParser = require('body-parser')
dotenv.config();

//MySQL Configuration object
const db = mysql.createConnection({
    url:"localhost",
    user:'root',
    password:'123456789',
    database:'TEST',
    insecureAuth:true
})

//Connecting Database
db.connect((e)=>{
    if(e){
        console.log(chalk.red("Connection "+e));
    }
    else{
        console.log(chalk.green("MySQL Connected!"))
    }
})

const app = express();
app.use(bodyParser.json());

app.listen(process.env.PORT,()=>{
    console.log("Listening on "+process.env.PORT);
})