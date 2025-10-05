import React from "react"
import Service from "../service/Service"
import Packages from "../../assets/packages"
import './PackageCard.css'
const PackageCard = () => {
    return (
        <div className="packagecard-container">
            {Packages.map((value, index) => {
                return (
                    <div key={index} className="package-card">
                        <div className="img">
                            <img src={value.image} alt={value.name} />
                        </div>
                        <h2>{value.name}</h2>
                        <p>{value.paragraph}</p>
                        <p>⭐ {value.rating}</p>
                        <p>Price: {value.price}</p>
                        <div className="package-btn">
                            <button>Book Now</button>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default PackageCard
