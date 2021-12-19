const expres = require('express');

const app = express();

app.use(available)

app.use(expres.static(dirname + '/Public'));

app.get('/', (req,res)=>{
    res.send('Try a valid path: http://localhost:3000/HomePage , http://localhost:3000/OurServices or http://localhost:3000/ContactUs%27)
})

app.get('/HomePage', (req,res)=>{
    res.sendFile(dirname+'/home.html')
})

app.get('/OurServices', (req,res)=>{
    res.sendFile(dirname+'/Our_Services.html')
})

app.get('/ContactUs', (req,res)=>{
    res.sendFile(dirname+'/Contact_us.html')
})

function available (req,res,next){
    let d= new Date()
    let b=d.getHours()
    let e=d.getDay()
    if(b>=9 && b<=17 && e>=1 && e<=5){ next() }
    else {
    res.send('<h2>The web application is not Available at this day or hour, try during the working hours (Monday to Friday,  from 9 to 17).</h2>')
    }
}

app.listen(3000, (err)=>{
    if (err) console.log('error')
    else console.log('server is running')
})