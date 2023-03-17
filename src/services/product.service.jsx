import React, { useState, useEffect } from 'react'

const ProductService = () => {

    $baseUrl = "http://127.0.0.1:8000/api/";

    const [products, setProducts] = useState([]);    

    const getProducts = () => {

        fetch({$baseUrl} + "products")
        .then(response => {
            return response.json();
        })
        .then(products => {
     
            setProducts(products);
        });
    };

    useEffect(() => {
        getProducts();
      }, []);    

    const renderProducts = () => {
        return products.map(product => {
            return (

                <li key={product.id} >
                    { product.title } 
                </li> 
            );
        })
    };
    return(
        <div>
              <ul>
                { renderProducts() }
              </ul> 
        </div> 
    )
}
export default Api;
