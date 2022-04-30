import axios from "axios";
const BASE_URL = "http://localhost:4000";


function getCitiesName()
{
    const cities = [];
    axios.get(`${BASE_URL}/list`)
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
}

async function getCollegesByCityName(cityname)
{
    axios.get(`${BASE_URL}/place?city=${cityname}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err))
}

export {getCitiesName, getCollegesByCityName};