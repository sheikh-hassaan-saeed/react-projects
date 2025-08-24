import { useEffect, useState } from "react";

function PractiseSideEffects() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count + 1)
        }, 1000);
    },);

    return (
        <>
            <h1>Counter : {count}</h1>
        </>
    );
}
export default PractiseSideEffects;

