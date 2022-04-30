import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';

function CollegeCard(props) {
  return (
    <div className="college-card">
        <div className="college-image"></div>
        <div className="college-info">
            <h2 className='college-name heading'>{props.title}</h2>
            <p className='college-location'><GoLocation/> {props.city}, Odisha</p>
            <div className="extras">
              <div className="item">
                  <p>Established</p>
                  <b>{props.established}</b>
              </div>
              <div className="item">
                  Type
                  <b>{props.type}</b>
              </div>
              <Link to={`/college/${props.id}`}>
                <button>
                  More..
                </button>
              </Link>
            </div>
        </div>

    </div>
  )
}

export default CollegeCard