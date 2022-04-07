 const express=require('express');

 const server=express();

 const middleware1=(req,res,next)=>{
     console.log('this is the middleware1');
     next()
 }

 const middleware2=(req,res,next)=>{
     console.log('2nd middleware');
     next()
 }

server.use(middleware1);
// server.use(middleware2);

 server.get('/',(req,res)=>{
     res.send('<h1>welcome here !!!</h1>');
 })

 server.get('/user',middleware2,(req,res)=>{
    res.send('hello user !!!');
})

 server.listen(8000,()=>{
     console.log('server running...');
 });