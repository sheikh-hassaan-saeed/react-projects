import { useState } from "react";

function ConditionalToggle() {

    const [loggenIn, setLoggedIn] = useState(true);


    const BtnStyle = {
        padding: "10px 30px",
        backgroundColor: "#65fe08",
        fontSize: "20px",
        borderRadius: "6px",
    };


    return (

        <>
            {loggenIn ? <h2 style={BtnStyle}>Welcome</h2> : <button style={BtnStyle}>Log In</button>}
        </>

    )

}

export default ConditionalToggle;
