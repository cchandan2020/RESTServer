const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id:1, name:'Richaa'},
    {id:2, name:'Ruchie'},
    {id:3, name:'Ruma'},
    {id:4, name:'Chandan'}
];

app.get('/',(req, res) => {
    res.send('Hello World');
});

app.get('/api/courses',(req,res)=> {
  res.send([1,2,3,4,5]);
});

app.get('api/courses/:id',(req,res)=> {
    let course = courses.find(c => c.id == parseInt(req.params.id))
    
    if(!course) //404
     {
         res.status(404).send('course with id not found');
     }else
     res.send('found');
    
});



app.post('/api/courses', (req,res) =>{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

//app.get('api/courses/',(req,res)=> {
  //  res.send(req.params);
//});
app.listen(5000, ()=> console.log('Listeming on 5000'));

//change the hardcoded value for port .. as port is dynamically assigned
//PORT
//const port = process.env.PORT || 3000;
//app.listen(port, ()=> console.log ('Listening on port ${port}'));

// call back function 
//endpoints 
//app.post()
//app.put()
//app.delete()

