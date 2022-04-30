// const data = require('./data.json');
const data = require('./single.json');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
const College = require("./Models/college.js");

app.use(cors())

// const image = "https://img.lovepik.com/photo/20211121/small/lovepik-overlooking-the-panorama-of-the-bund-picture_500604745.jpg";

mongoose.connect(
    "mongodb+srv://Manish:Manish4044@cluster0.gbmrq.mongodb.net/college?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  ).then(() => console.log("Connection Successful")).catch(err => console.log(err));

  const VR = [
    {
      "location":"Location 1",
      "image":"https://img.lovepik.com/photo/20211121/small/lovepik-overlooking-the-panorama-of-the-bund-picture_500604745.jpg"
    },
    {
        "location": "Location 2", 
        "image": "https://media.istockphoto.com/photos/equirectangular-panoramic-interior-of-modern-kitchen-with-white-and-picture-id1332262856",
    },
    {
        "location": "Location 4", 
        "image": "https://images.unsplash.com/photo-1596263576925-d90d63691097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1922&q=80",
    }
  ];

const JSONdata = [
  {
    title:"C.V. Raman Global University",
    description:"Some Description",
    courses:[
      "Bachelors in Technology",
      "Master in Business and Administration",
      "Diploma"
    ],
    city:"Bhubaneshwar",
    state:"Odisha",
    email:"admin@cgu-odisha.ac.in",
    phone:"9456979934",
    established: "1997",
    type:"Private",
    lat:20.2193,
    lng:85.7358,
    vr: VR
  },
  {
    title:"Institue of Technical Education and Research",
    description:"Some Description",
    courses:[
      "Bachelors in Technology",
      "Master in Business and Administration",
    ],
    city:"Bhubaneshwar",
    state:"Odisha",
    email:"admin@iter.ac.in",
    phone:"8776979934",
    established: "2000",
    type:"Private",
    lat:20.2493,
    lng:85.8011,
    vr: VR
  },
  {
    title:"Centurion University of Technology",
    description:"Some Description",
    courses:[
      "Bachelors in Technology",
      "Hotel Management",
    ],
    city:"Bhubaneshwar",
    state:"Odisha",
    email:"admin@centurion.ac.in",
    phone:"5678979934",
    established: "2010",
    type:"Private",
    lat:25.8640,
    lng:28.0889,
    vr: VR
  },
  {
    title:"Ravenshaw University",
    description:"Some Description",
    courses:[
      "Bachelors in Technology",
      "Media, Mass communication, and Journalism",
      "Commerce"
    ],
    city:"Cuttack",
    state:"Odisha",
    email:"admin@ravenshaw.ac.in",
    phone:"5678979934",
    established: "2006",
    type:"Private",
    lat:25.8640,
    lng:28.0889,
    vr: VR
  },
  {
    title:"National Law University",
    description:"Some Description",
    courses:[
      "BA LLB Hons",
      "BBA LLB Hons",
    ],
    city:"Cuttack",
    state:"Odisha",
    email:"admin@law.ac.in",
    phone:"5678979934",
    established: "2009",
    type:"Government",
    lat:25.8640,
    lng:28.0889,
    vr: VR
  },
  {
    title:"Ajay Binay Institute of Technology",
    description:"Some Description",
    courses:[
      "Computer Application and IT",
      "Management and Business Administration"
    ],
    city:"Cuttack",
    state:"Odisha",
    email:"admin@law.ac.in",
    phone:"5678979934",
    established: "2009",
    type:"Private",
    lat:25.8640,
    lng:28.0889,
    vr: VR
  },
  {
    title:"Anna University",
    description:"Some Description",
    courses:[
      "Animation and Design",
      "Computer Application and IT",
      "Art, Humanities and Social Science"
    ],
    city:"Chennai",
    state:"Tamil Nadu",
    email:"admin@anna.ac.in",
    phone:"5678979934",
    established: "2009",
    type:"Government",
    lat:25.8640,
    lng:28.0889,
    vr: VR
  },
  {
    title:"Alliance University",
    description:"Alliance University is a private university that was established in the State of Karnataka by act no. 34 of year 2010    under the recognition of University Grants Commission of Ministry of Education.",
    courses:[
      "Animation and Design",
      "Computer Application and IT",
      "Art, Humanities and Social Science"
    ],
    city:"Chennai",
    state:"Tamil Nadu",
    email:"admin@anna.ac.in",
    phone:"080 4619 9000",
    established: "2009",
    type:"Government",
    lat:12.73047,
    lng:77.70651,
    vr: VR
  },
  {
    title:"Gandhi Institute of Technology and Management",
    description:"Gandhi Institute of Technology and Management, popularly known as GITAM, was founded in 1980 by an inspired group of eminent intellectuals and industrialists of Andhra Pradesh led by Dr. M. V. V. S. Murthi, former Member of Parliament and popular philanthropist.The vision of MAHATMA, the Father of the Nation was to see India as a socially and economically resurgent country and he looked upon education as an important means to achieve this goal. Gandhiji’s view of education was not narrow or sectarian. He envisaged universities as institutions of higher learning that transcend all linguistic, racial and other barriers. GITAM is committed to imbibe his values and abide by his philosophy.",
    courses:[
      "Animation and Design",
      "Computer Application and IT",
      "Art, Humanities and Social Science"
    ],
    city:"Visakhapatnam",
    state:"Andhra Pradesh",
    email:"admin@anna.ac.in",
    phone:"0891-2840501",
    established: "2009",
    type:"Government",
    lat:13.28744,
    lng:77.59573,
    vr: VR
  }
]

app.get('/insert',(req, res) => {
  console.log(data);
  College.insertMany(data)
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
})

app.get('/delete',(req, res) => {
  College.deleteMany({})
  .then(() => res.send("Deleted"))
  .catch((err) => console.log(err));
})  

app.get('/colleges',async(req, res) => {
  const options = {...req.query};
  
  const colleges = await College.find({}).select(req.query);
  res.send(colleges);
})

app.get('/college/:id',async(req, res) => {
  // const options = {...req.query};

  const college_id = req.params.id;
  const college = await College.findById(college_id);
  console.log(college);
  res.send(college);
})

app.get('/place',async (req, res) => {
  const city = req.query.city;
  console.log(city);

  await College.find({ city: city}, function (err, docs) {
    if (err){
        console.log("Place",err);
    }
    else{
        console.log("First function call : ", docs);
        res.status(200)
        res.send(docs);
    }
  });

  // res.send(["Madarchod"]);

});

app.get('/vr/:id',async(req, res) => {
  const college_id = req.params.id;
  console.log(college_id);
  const college = await College.findById(college_id, {vr:1,_id:0});
  console.log("College",college);
  res.send(college);
})  

app.get('/list',async(req, res) => {
  College.find().distinct('city', function(error, list) {
    console.log(list);
    res.send(list);
  });
})  

app.get('/',(req,res) => {
  const name = req.query.name ? req.query.name : "null";
  res.send("Welcome to CAMPA");
});

app.listen(4000, () => console.log("Server running at 4000"));
