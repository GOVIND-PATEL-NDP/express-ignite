const express = require('express');

const app = express();

const isAuthenticated = (req,res,next)=>{
    const user = false;
    if(user){
       next();
    }
    else{
       res.status(401).send("User not authenticated");
    }
}
app.get('/',(req,res)=>(
    res.send("Hello welcome to home page")
));
app.get('/user',(req,res)=>(
    res.send("Hello welcome to user page")
));
app.get('/protecteduser', isAuthenticated,(req,res)=>(
    res.send("welcome to secure user page")
));

app.listen(3000,()=>(console.log("server is running on port 3000")
));





