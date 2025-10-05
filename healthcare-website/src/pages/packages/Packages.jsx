import React from "react"
import PackageCard from "../../components/packageCard/PackageCard"
import packages from "../../assets/packages"
import "./Packages.css"

const Packages = () => {
    return (
        <div>
            <h1 className="packages-h1">Our Packages</h1>
            <div className="packages-container">
                <PackageCard />
            </div>
        </div>
    )
}

export default Packages
