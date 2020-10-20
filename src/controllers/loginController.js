const fs = require('fs');
const path = require('path');

usuarios = fs.readFileSync(path.join(__dirname, '../db/user.json'), 'utf8');
usuarios = JSON.parse(usuarios);

token = fs.readFileSync(path.join(__dirname, '../db/token.json'), 'utf8');
token = JSON.parse(token);

error = fs.readFileSync(path.join(__dirname, '../db/error.json'), 'utf8');
error = JSON.parse(error);


module.exports = {
    
    auth: function(req, res) { 
        let usr = req.body;
        if(usr.username === usuarios.username && usr.password === usuarios.password){
            res.send(token);
        } else {
            res.send(error);
        }    
        
    },
 
    
}