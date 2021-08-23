
let express = require('express');
let app = express();

let router = require('./router');

app.use(require('cors')());

app.use(router);
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(3000,(req,res)=>{
    console.log('http://localhost:3000')
})
