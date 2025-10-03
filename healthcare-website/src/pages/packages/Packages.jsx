import React from 'react'
import Service from '../../components/service/Service'
import bloodIcon from '../../assets/images/blood icon.png'
import brainIcon from '../../assets/images/brain icon.png'
import immuneIcon from '../../assets/images/immune.png'
import thyroidIcon from '../../assets/images/thyroid.png'

import './Packages.css'
const Packages = () => {
    return (
        <>
            <h1 className='packages-h1'>Our Packages</h1>

            <div className='packages-container'>

                <Service name="Blood Test" image={bloodIcon} paragraph="Book Your Blood Test" className="packages-box" />
                <Service name="Blood Test" image={brainIcon} paragraph="Book Your Blood Test" className="packages-box" />
                <Service name="Blood Test" image={immuneIcon} paragraph="Book Your Blood Test" className="packages-box" />
                <Service name="Blood Test" image={thyroidIcon} paragraph="Book Your Blood Test" className="packages-box" />
            </div>
        </>
    )
}

export default Packages