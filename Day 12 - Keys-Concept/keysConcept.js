import { useState } from "react";

function ProductList() {
    const [products, setProducts] = useState([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Headphones" },
    ]);

    const addProduct = () => {
        const newProduct = {
            id: Date.now(), 
            name: `Product ${products.length + 1}`,
        };
        setProducts(prev => [...prev, newProduct]);
    };

    const removeProduct = (id) => {
        setProducts(prev => prev.filter(product => product.id !== id));
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Product List</h1>
            <button onClick={addProduct} >Add Product</button>

            {products.map(product => (
                <div key={product.id} style={{ padding: "10px" }}>
                    {product.name}
                    <button onClick={() => removeProduct(product.id)} style={{ padding: "10px" }}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
