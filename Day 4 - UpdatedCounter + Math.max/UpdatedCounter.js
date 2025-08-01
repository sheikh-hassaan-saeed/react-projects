

//Updated counter with decrement functionality + learned new function ( math.max ) that prevents the counter from going below 0.

import { useState } from "react";

function UpdatedCounter() {


    const [count, setCount] = useState(0);

    const style = {
        design: {
            width: 100,
            backgroundColor: "blue",
            color: "white",
        },
    };

    return (
        <>
            <h1>Updated Counter - {count}</h1>
            <h2>Added Decrement - </h2>
            <button style={style.design} onClick={() => setCount(count + 1)}  >Increment</button>
            <button style={style.design} onClick={() => setCount(prev => Math.max(prev - 1, 0))}  >Decrement</button>

        </>
    )

}

export default UpdatedCounter;
