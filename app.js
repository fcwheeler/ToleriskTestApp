//Include the exporter module

const express = require('express');
const exporter = require('./exporter');
const bodyParser = require('body-parser');

const exportjson = require('./chart.json');


const app = express();

const port = process.env.PORT || 1337;

console.log(port);
app.listen(port, function() {
  console.log('We are live on ' + port);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



//console.log(JSON.stringify(exportSettings));

//console.log(exportjson);
var exportSettings = {
    type: 'png',
    options: {
        title: {
            text: 'My Chart'
        },
        xAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        series: [
            {
                type: 'line',
                data: [1, 3, 2, 4]
            },
            {
                type: 'line',
                data: [5, 3, 4, 2]
            }
        ]
    }
};



app.get('/', function(req,res){
   
    res.send("Test Index");
    
});
        



app.get('/export', function(req,res){
   
    
   
    filestring = exporter.render(exportSettings , function(resp){
        
           //res.send(resp);
         res.send("Test Get Export");
   
    });

    
});



app.post('/export', function(req,res){
   

   
   /* filestring = exporter.render(exportjson, function(resp){
        
           res.send(resp);
        
   
    
    });*/
    
});





