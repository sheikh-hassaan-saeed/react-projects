import { useState } from "react";

function LivePreview() {

    const [text, setText] = useState("");


    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Live Preview</h1>

            <input type="text" value={text} placeholder="Type Something" onChange={(e) => setText(e.target.value)}
                style={{ padding: "10px 20px", fontSize: "20px" }} />

            <p style={{ marginTop: "20px", fontSize: "18px" }}>
                You typed: <strong>{text}</strong>
            </p>


        </div>
    )
}

export default LivePreview;
