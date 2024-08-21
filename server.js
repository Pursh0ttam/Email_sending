// let http = require('http')
// const { subscribe } = require('diagnostics_channel')
// const subscribemail = require('./mail')
// // const { url } = require('inspector')

// let server = http.createServer((req,res)=>{

//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     // req.method="POST";
//     if(req.url === "/sendmail" /*&& req.method ==="POST"*/ ){
        
        
//         req.on("data",(body)=>{
//             console.log("hello")
//             console.log(body.toString())
//             let {email} = JSON.parse(body.toString())
//             console.log(email)
//          subscribemail(email)
//          res.end(`email send successfully`)
//         })
//     }
//         else if(req.url === "/login"){
//             console.log("hello")

//             console.log(req)
//         }
        
    
// })
// server.listen(4000)
// console.log("sever started at port 4000")




let http = require('http')
const { subscribe } = require('diagnostics_channel')
const subscribemail = require('./mail')

let server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.url === "/sendmail") {
    let body = '';
    req.on('data', (chunk) => {
        console.log("Enter");
      body += chunk.toString();
    });
    req.on('end', () => {
        console.log(req.method);

        console.log( body.toString(),"fgfgr");
      let email  = body.toString();

      console.log(email);
    //   subscribemail(email);
      res.end(`email send successfully`);
    });
  } else if (req.url === "/login") {
    console.log("hello");
    console.log(req);
  }
});

server.listen(8000)
console.log("server started at port 8000")