var express = require('express');
var app = express();
   

app.get('/allstudents', async(req,res) => {
    let htmlcode = `<h1>All students data!</h1>`;
    students = await storage.values();
    for(let i=0;i<students.length;i++){
        htmlcode +=`
        <h2>101:${students[i].id}</h2>
        <h3>Ram:${students[i].name}</h3>
        <h3>4.5:${students[i].gpa}</h3><br/><br/>
        <h2>102:${students[i].id}</h2>
        <h3>Gopal:${students[i].name}</h3>
        <h3>4.6:${students[i].gpa}</h3><br/><br/>
        <h2>103:${students[i].id}</h2>
        <h3>Varma:${students[i].name}</h3>
        <h3>4.7:${students[i].gpa}</h3>
        ` }
        res.send(htmlcode);

    res.send(await storage.getItem(req.params.id));
});


app.listen(5000,()=>{
    console.log("server has started");
})