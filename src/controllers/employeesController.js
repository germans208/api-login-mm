const fs = require('fs');
const path = require('path');

employeesList = fs.readFileSync(path.join(__dirname, '../db/employees.json'), 'utf8');
employeesList = JSON.parse(employeesList);

module.exports = {
    employeesList: function(req, res) {       
        res.send(employeesList);
    }   
}