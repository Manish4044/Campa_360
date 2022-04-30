import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams} from "react-router-dom";

function College() {
  const { college_id } = useParams();
  const [college, setCollege] = useState({});

  useEffect(() => {

    axios.get(`http://localhost:4000/college/${college_id}`)
    .then(data => setCollege(data.data))
    .catch(err => console.log(err))

  },[college_id])

  console.log(college);

  return (
    <div className='college'>
        <h1>{college.title}</h1>
        <p>{college.description}
        </p>
        <div className="courses">
            <h3>Courses Provided</h3>
        </div>
        <Link to={`/vr/${college._id}`}>Have a virtual tour</Link>
    </div>
  )
}

export default College