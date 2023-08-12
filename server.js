import express from 'express'

const app = express();
const port = 80;

app.get('/',(req,res)=>{
    res.send("Root / Home");
})

app.get('/api/whoami', (req,res)=>{
    const ip = req.headers['x-forwarded-for']
    const lang = req.headers['accept-language'];
      const soft = req.headers['user-agent'];
      res.json({ipaddress:ip, language: lang, software: soft});
  })

app.listen(port,()=>{
    console.log('http://localhost:80');
})