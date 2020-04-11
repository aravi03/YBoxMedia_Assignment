const express=require('express');
const mongoose=require('mongoose');
const app=express();

mongoose.connect('mongodb://localhost/YBoxMedia_Assignment');
const ObjectId = require('mongodb').ObjectID;


app.listen(3000);

  const fn1=async function(element){
    var MongoClient = require('mongodb').MongoClient;
        const client = await MongoClient.connect('mongodb://localhost:27017');
        var db=client.db('YBoxMedia_Assignment');
        id=element._id.toString();
               name=element.name;
               description=element.description;
              var collection=db.collection('users');
                authorid=ObjectId(element.author);
                var authormatch=await collection.findOne({ _id: authorid });
    
                author=new Object({
                    id:  authormatch._id.toString(),
                    name: authormatch.name,
                    email: authormatch.email
                   });
                   var collection1=db.collection('submissions');
    
            var items1= await collection1.find({competition:id}).toArray();
            submissions=items1.length;
                        var newobject= {
                            id:id,
                            name:name,
                            description:description,
                            author:author,
                            submissions:submissions
                        };
                        return newobject;


  };
  const fn=async function(element){
    var MongoClient = require('mongodb').MongoClient;
        const client = await MongoClient.connect('mongodb://localhost:27017');
        var db=client.db('YBoxMedia_Assignment');
   id=element._id.toString();
   image=element.image;
   
   competition=element.competition;
   
   var collection=db.collection('users');

authorid=ObjectId(element.author);
var authormatch=await collection.findOne({ _id: authorid });
    
    author=new Object({
        id:  authormatch._id.toString(),
        name: authormatch.name,
        email: authormatch.email
       });
       
    var collection1=db.collection('submission_likes');
    
   var items1= await collection1.find({submission : id }).toArray();
        

        likes=items1.length;
        var newobject= {
            id:id,
            image:image,
            author:author,
            competition:competition,
            likes:likes
        };
        
        return newobject;
        
      
        
   
        
        
} 
  app.get('/competitions',async function(req,res){
    var competitions=new Array();
    var id,name,description,submissions;
    var author;
    var MongoClient = require('mongodb').MongoClient;
    const client = await MongoClient.connect('mongodb://localhost:27017');
    var db=client.db('YBoxMedia_Assignment');
    var collection=db.collection('competitions');
    var items=await collection.find().toArray();
     
            
               
              
               for (var element of items) {
                  competitions.push(await fn1(element));           
       }
       
                res.send(competitions);

  })





    app.get('/competition/:id/submissions',async function(req,res){
        var competition_id = req.params.id;
        var submissions=new Array();
        var id,image,competition,likes;
        var author;
        var length;
        
        var MongoClient = require('mongodb').MongoClient;
        const client = await MongoClient.connect('mongodb://localhost:27017');
        var db=client.db('YBoxMedia_Assignment');
           var collection=db.collection('submissions');
           var items=await collection.find({ competition: competition_id }).toArray();
            
               length=items.length;
               var i=0;
               for (var element of items) {
                  submissions.push(await fn(element));           
       }
               
                res.send(submissions);

    });
   