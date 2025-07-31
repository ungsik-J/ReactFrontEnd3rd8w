import React, { useEffect, useState } from "react";

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3002/products")

                if (!response.ok) {
                    throw new Error(`Http error! status : ${response.status}`)
                }

                const data = await response.json();

                console.log(data)

                setProducts(data)
            } catch (error) {
                console.error(`Error!! ${error}`)
                setProducts([])
            }
        }

        fetchProducts();
    }, [])


    return (
        <>
            <div>
                {Array.isArray(products) && products.length > 0 ? (
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                <strong>{product.name}</strong> -  ${product.price} ({product.category})
                                {product.inStock ? '(재고 있음)' : '(재고 없음)'}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>
                        {Array.isArray(products) && products.length === 0 ? 'NO DATA' : 'Loding...'}
                    </p>
                )}
            </div>
        </>
    )
}

export default ProductList