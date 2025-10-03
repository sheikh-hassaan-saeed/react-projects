import React from 'react'
import Service from '../../components/service/Service'
import bloodIcon from '../../assets/images/blood icon.png'
import './Packages.css'
const Packages = () => {
    return (
        <div>
            <h1>Our Services</h1>
            <Service name="Blood Test" image={bloodIcon} paragraph="Book Your Blood Test" />
        </div>
    )
}

export default Packages