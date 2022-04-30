import React, { useEffect, useRef, useState } from 'react'
import './style.css';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import CollegeCard from '../college-card/CollegeCard';
import Map from '../Maps/map';
import axios from 'axios';

function Home() {

  const BASE_URL = "http://localhost:4000";
  const [cities, setCities] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [selected, setSelected] = useState('');
  const selectRef = useRef();

  useEffect(() => {
    axios.get(`${BASE_URL}/list`)
    .then(res => {
      setCities(res.data);
    }).catch(err => {
      console.log(err);
    })

  },[])

  useEffect(() => {
    console.log(selected);
    if(!selected) return;
    
    axios.get(`${BASE_URL}/place?city=${selected}`)
    .then(res => {

      setColleges(res.data);
    }).catch(err => console.log(err)) 
    
    console.log("Colleges",colleges);
  },[selected]) 

  return (
    <div className='home'>
        <NavBar/>
        <div className='home-search'>
          <div className="container">
            <h2>College Search</h2>
            <select
              ref={selectRef} 
              onChange={() => {setSelected(selectRef.current.value)}}
            >
              <option value="">Select a City</option>
              
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <Map
            colleges={colleges}
          />
        </div>
        {/* <div className='home-results'>
            {colleges.map(item => (
              <CollegeCard 
                key={item._id}
                title={item.title}
                city={item.city}
                id={item._id}
                established={item.established}
                type={item.type}
              />
            ))}
        </div> */}
        <Footer/>
    </div>
  )
}

export default Home