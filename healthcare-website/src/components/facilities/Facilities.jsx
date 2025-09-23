import React from 'react'
import './Facilities.css'
import facility1 from '../../assets/images/facility1.jpg'
import facility2 from '../../assets/images/facility2.jpg'

const Facilities = () => {
    return (
        <div className="facilites-container">

            <div className="text-area">
                <h3>Clinical facilites are the backbone of <br />modern healthcare system</h3>
                <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Saepe, molestiae?</p>


                <div className="btn">
                    <button>Find Out More</button>
                </div>
            </div>

            <div className="facilites-img">
                <img src={facility1} />
                <img src={facility2} />
            </div>

        </div>
    )
}

export default Facilities