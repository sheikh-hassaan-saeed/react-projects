import React from 'react'
import './Facilities.css'
import facility1 from '../../assets/images/facility1.jpg'
import facility2 from '../../assets/images/facility2.jpg'

const Facilities = () => {
    return (
        <section className="facilities-section">
            <div className="facilities-container">

                {/* Image Side */}
                <div className="facilities-visual">
                    <div className="image-stack">
                        <img src={facility1} alt="Laboratory" className="img-main" />
                        <img src={facility2} alt="Medical Equipment" className="img-sub" />
                        <div className="decorative-box"></div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="facilities-text">
                    <span className="accent-text">Advanced Technology</span>
                    <h2 className='h2-facilities'>Our Facilities</h2>
                    <h3 className='h3-facilities'>
                        Clinical facilities are the backbone of <br />
                        <span>modern healthcare systems.</span>
                    </h3>
                    <p className="facilities-description">
                        Equipped with the latest diagnostic technology, our labs provide
                        accurate results with a focus on patient comfort and safety.
                    </p>
                    <div className="btn-facilities">
                        <button className="primary-btn">Find Out More</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Facilities