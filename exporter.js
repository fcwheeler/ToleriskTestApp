//Export settings 
const exporter = require('./highcharts-export-server');


module.exports = {
    
    render: function (exportSettings,cb){    
  

//Set up a pool of PhantomJS workers
exporter.initPool();

//Perform an export
/*
    Export settings corresponds to the available CLI arguments described
    above.
*/
exporter.export(exportSettings, function (err, res) {
    //The export result is now in res.
    //If the output is not PDF or SVG, it will be base64 encoded (res.data).
    //If the output is a PDF or SVG, it will contain a filename (res.filename).

    if(err)
        {
            console.log(err);
            cb(err);
        }
    
    //console.log(res);
     cb(res);
    console.log("Data pulled successfully")
    
    //Kill the pool when we're done with it, and exit the application
    exporter.killPool();
    //process.exit(1);
    
    
   
}); 
    
    
    
}
}
