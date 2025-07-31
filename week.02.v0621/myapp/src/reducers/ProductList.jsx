import React, { useEffect, useReducer } from 'react';

import { dataReducer, initialState } from '../reducers/dataReducer'


const ProductList = () => {


    const [state, dispatch] = useReducer(dataReducer, initialState)
    const { loading, data: products, error } = state;

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({ type: 'FETCH_INIT' })

            try {
                const response = await fetch('http://localhost:3002/products')
                if (!response.ok) {
                    throw new Error(`Http error! status : ${response.status}`)
                }
                const data = await response.json();
                dispatch({ type: 'FETCH_SUCCESS', payload: data })

            } catch (error) {
                console.error(`Error!! ${error}`)
                dispatch({ type: 'FETCH_ERROR', error: error.message })
            }
        }
        fetchProducts()
    }, [])


    return (
        <div>
            <h2>상품 목록(Reducers)</h2>
            {loading && <p>상품 데이터를 불러오는 중...</p>}
            {error && <p>에러 발생 :{error}</p>}
            {!loading && products.length === 0 && <p>상품 데이터가 없습니다.</p>}

            {products.map((product) => (
                <li key={product.id}>
                    <strong>{product.name}</strong>
                    {product.inStock ? '(재고 있음)' : '(재고 없음)'}
                </li>
            ))}
        </div>
    );
};

export default ProductList;