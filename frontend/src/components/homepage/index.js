import React, { useEffect, useRef, useState } from 'react'
import './style.css';
import  { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {GoogleMap, Marker, InfoWindow} from '@react-google-maps/api';

function Home() {

  const KEY = "AIzaSyBnfe3EXzDem4fUp1edpbv3hCfpZ9KTvUU";
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState('');
  const [markerOpen, setMarkerOpen] = useState(null);
  const [center, setCenter] = useState({lat:20.2093, lng:85.7358});
  const selectRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    axios.get(`http://localhost:4000/list`)
    .then(res => {
      setCities(res.data);
    }).catch(err => {
      console.log(err);
    })

  },[])

  useEffect(() => {
    if(!selected) return;
    
    axios.get(`http://localhost:4000/place?city=${selected}`)
    .then(res => {

      setMarkers(res.data);
    }).catch(err => console.log(err))
    
  },[selected]) 
  
  useEffect(() => {
    if(markers.length === 0) return;
    // eslint-disable-next-line no-undef
    // var a =  new google.maps.LatLng(markers[0].lat,markers[0].lng);
    // console.log("A",a);
    mapRef.current.panTo({lat:markers[0].lat, lng:markers[0].lng});
      
  },[markers])


  return (
    <div className='home'>
       <select 
        ref={selectRef} 
        onChange={(value) => {setSelected(selectRef.current.value)}}
      >
        {cities.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <GoogleMap
        mapContainerStyle={{width:"100%",height:"100vh"}}
        zoom={15}
        center={center}
        onLoad={(map => mapRef.current=map)}
      >
      {markers.map(marker => {
        return (
          <Marker 
            key={marker._id}
            position={{lat:marker.lat, lng:marker.lng}} 
            onClick={() => navigate(`/college/${marker._id}`)}
          />
        )
      })}
      </GoogleMap>
    </div>
  )
}

export default Home