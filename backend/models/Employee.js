const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const ExperienceSchema = new Schema({
    position: { type: String, required: true },
    company: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    salary: { type: Number, required: true }
}, { _id: false });

const EducationSchema = new Schema({
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    cgpa: { type: Number, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true }
}, { _id: false });

const EmployeeSchema = new Schema({
    name: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    location: { type: String },
    experience: [ExperienceSchema],
    education: [EducationSchema],
    skills: [{ type: String }], 
    linkedin: { type: String },
    gitHub: { type: String},
    applications: [{ type: Schema.Types.ObjectId, ref: 'Job' }]
});


module.exports=mongoose.model('Employee',EmployeeSchema);