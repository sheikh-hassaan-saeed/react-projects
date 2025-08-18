import { useState } from "react";

function ListRendering() {

    const [products] = useState([
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Headphones", price: 200 },
        { id: 3, name: "Keyboard", price: 100 }
    ]);

    return (

        <div style={{ textAlign: "center" }}>

            <h1>Available Products</h1>
            {products.map((product) => {
                return (

                    <div key={product.id} style={{ border: "2px solid black", padding: "8px", margin: "20px" }}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>

                    </div>
                )
            })}

        </div>
    )
};

export default ListRendering;
