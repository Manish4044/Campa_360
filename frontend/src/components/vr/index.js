import React, { useEffect, useState } from 'react'
import './style.css';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import VRBox from './VRBox';
import NavBar from '../navbar/NavBar';

function VR() {

    const {college_id} = useParams();
    const [vr, setVr] = useState([]);
    // const [vr, setVr] = useState([{location:"Wow Building", image:"https://img.lovepik.com/photo/20211121/small/lovepik-overlooking-the-panorama-of-the-bund-picture_500604745.jpg"}]);
    // const [vr,setVr] = useState([
                                // {
                                //     location: 'MBA Building', 
                                //     image: 'https://media.istockphoto.com/photos/equirectangular-panoramic-interior-of-modern-kitchen-with-white-and-picture-id1332262856',
                                //      _id: '623bf2af4c985477a461495d'
                                // },
                                // {
                                //     location: 'Mech Lawn', 
                                //     image: 'https://media.istockphoto.com/photos/hdri-of-modern-classroom-picture-id1328642670?b=1&k=20&m=1328642670&s=170667a&w=0&h=RJJYjc-xjFqNWKzLTfd1LmCgbZzA6Vg_7wmpnCh35BY=',
                                //      _id: '623bf2af4c985477a461495d'
                                // },
                                // {
                                //     location: 'Back Gate', 
                                //     image: 'https://images.unsplash.com/photo-1596263576925-d90d63691097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1922&q=80',
                                //      _id: '623bf2af4c985477a461495d'
                                // },
                            // ]);
    const [currentVR, setCurrentVR] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4000/vr/${college_id}`)
        .then(data =>  {
                console.log(data);
                setVr(data.data.vr) ; 
            })
        .catch(err => console.log(err))
    },[college_id])

    const handleClick = (item) => {
        setCurrentVR(item.image);
    }

  return (
      <>
        <NavBar/>
        <div className="vr">

            <div className="sidebar">
                {vr? vr.map(item => (
                    <p className="vr-item" onClick={() => handleClick(item)}>
                        {item.location} 
                    </p>
                )) : ""}
            </div>

            {currentVR ? (
                <div className='right'>
                    <VRBox image={currentVR}/>
                </div>
            ) : (
                <div className='right'>
                    <h1>Select a place to see 360 Image</h1>
                </div>
            )}
        </div>
    </>
  )
}

export default VR