import { useState } from "react";

function ToggleApp() {
    const [show, setShow] = useState(false);

    return (
        <div className="center">
            <button className="button" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"} Message
            </button>
            {show && <p className="text">Access Granted</p>}
        </div>
    );
}

export default ToggleApp;
