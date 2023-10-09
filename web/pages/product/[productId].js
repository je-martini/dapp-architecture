import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
    const { query : { productId }, } = useRouter()
    
    return(
        <div>
            <h2>product page: {productId}</h2>
        </div>
    );
};

export default ProductItem;