// Displaying my code and hosting the program.

let express = require("express");
let app = express();

let http = require('http').createServer(app);

var port = process.env.port || 8080;

app.use(express.static(__dirname + '/public'));

http.listen(port,()=>{
    console.log("The MPV of Scott West for SIT775!", "Please tune in to the port", port);
});

// Database Connections. 
// database connection. 

//const url = 
//const client = new MogoClient(url, )


async function main() {
    const MongoClient = require('mongodb').MongoClient;
    const uri =
      'mongodb+srv://dbUser:<o-6TI5s_>@cluster0.dcu5m.mongodb.net/sample_airbnb?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect((err) => {
      const collection = client.db('test').collection('devices');
      // perform actions on the collection object
      client.close();
    });
  }
  main().catch(console.error);
