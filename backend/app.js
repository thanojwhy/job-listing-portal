const express=require('express')
const cors=require('cors');
const bodyParser=require('body-parser')
const mongoose = require('mongoose')

const userRoutes=require('./routes/user-routes');
const employeeRoutes=require('./routes/employee-routes');
const jobRoutes=require('./routes/job-routes');
const HttpError=require('./models/http-error');

const app=express();

app.use(cors());

app.use(bodyParser.json())

app.use('/api/users',userRoutes);
app.use('/api/employee',employeeRoutes);
app.use('/api/jobs',jobRoutes)

app.use((req,res,next)=>{
    const error=new HttpError('Could not find this route',404);
    throw error;
})

app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message:error.message || "An unknown error occurred"})
});

url="mongodb+srv://thanoj1992:t3y7z7x8@job-listing-portal.xfqzz.mongodb.net/JobListings?retryWrites=true&w=majority&appName=job-listing-portal"
mongoose.connect(url)
    .then(()=>{
        app.listen(5000)
    })
    .catch((err)=>{
        console.log(err);
    })