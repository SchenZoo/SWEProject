let express = require('express');
let app = express();
let mysql = require('mysql');


app.post('/person', function(req, res){
    let personInfo = req.body;
    
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       let newPerson = new Person({
          name: personInfo.name,
          age: personInfo.age,
          nationality: personInfo.nationality
       });
         
       let con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
    }
 });