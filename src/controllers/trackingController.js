const fs = require('fs');
const path = require('path');

trackingList = fs.readFileSync(path.join(__dirname, '../db/tracking.json'), 'utf8');
trackingList = JSON.parse(trackingList);

module.exports = {
    trackingList: function(req, res) {       
        res.send(trackingList);
    },   
    tracking: (req, res) => {

        let trackingId = req.params.id;
        trackingList.forEach(function(elemento) {
            if(elemento.id == trackingId) {
           	     res.send(elemento);
		    }
        });	

    }
}