import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const ButtonStyle = {

        width: 100,
        height: 60,
        backgroundColor: "orange",
        border: "2px solid black",
    }

    return (
        <div>
            <h2>Counter App - Count: {count}</h2>
            <button style={ButtonStyle} onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )

};

export default Counter;
