const storage = require('node-persist')
const express = require('express');
const app = express();

app.get('/allstudents', function(req,res){
    console.log(req.item);
    res.end(`
    <h1>ALL Students data!</h1><br>
    <div>
    <h2>student id:101 ${req.item.id}</h2>
    <h2>Name:Ram ${req.item.name}</h2>
    <h2>GPA:4 ${req.item.gpa}</h2>
    </div>
    <div>
    <h2>student id:102 ${req.item.id}</h2>
    <h2>Name:Gopal ${req.item.name}</h2>
    <h2>GPA:5 ${req.item.gpa}</h2>
    </div>
    <div>
    <h2>student id:103 ${req.item.id}</h2>
    <h2>Name:Varma ${req.item.name}</h2>
    <h2>GPA:6 ${req.item.gpa}</h2>
    </div>
    `)
});

app.get('/allstudents/:id',function(req,res){
    console.log(req.item);
    res.end(`
    <h1>ALL Students data!</h1><br></br>
    <div>
    <h2>student id:101 ${req.item.id}</h2>
    <h2>Name:Ram ${req.item.name}</h2>
    <h2>GPA:4 ${req.item.gpa}</h2>
    </div>
    `)
});

app.get('/allstudents/:id',function(req,res){
    console.log(req.item);
    res.end(`
    <h1>ALL Students data!</h1><br></br>
    <div>
    <h2>student id:102 ${req.item.id}</h2>
    <h2>Name:Gopal ${req.item.name}</h2>
    <h2>GPA:5 ${req.item.gpa}</h2>
    </div>
    `)
});

app.get('/allstudents/:id',function(req,res){
    console.log(req.item);
    res.end(`
    <h1>ALL Students data!</h1><br></br>
    <div>
    <h2>student id:103 ${req.item.id}</h2>
    <h2>Name:Varma ${req.item.name}</h2>
    <h2>GPA:6 ${req.item.gpa}</h2>
    </div>
    `)
});
   
app.listen(5000, () => {
    console.log("server has started!")
});