import { useEffect, useState, useRef } from "react";
import { getPaginatedProducts } from "../services/api";
import Card from "../components/card/card";

function Products() {
    const [products, setProducts] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    /*
    const totalProducts = {
        current: undefined
    }
     */
    const totalProducts = useRef();
    const buttonRef = useRef();

    const pageQty = 5;


    useEffect(() => {
        getPaginatedProducts(pageNo, pageQty)
            .then(data => {
                setProducts(data.products);
                if (!totalProducts.current) totalProducts.current = data.total;
            })
            .catch(error => console.log(error))
    }, [pageNo])

    const handleDelete = (productIndex) => {
        console.log(productIndex)
        const filteredProducts = products.filter((products, index) => index !== productIndex);
        setProducts(filteredProducts)
    }

    const handlePrev = () => {
        setPageNo((state) => state - 1);
    }

    const handleNext = () => {
        setPageNo((state) => state + 1);
    }

    console.log(buttonRef)
    return (
        <div>
            <div className="pagination-control">
                <button onClick={handlePrev} ref={buttonRef}>Prev</button>
                <div className="pagination-display">{`${pageNo + 1}/${Math.ceil(totalProducts.current / pageQty)}`}</div>
                <button onClick={handleNext}>Next</button>
            </div>
            {products.map((product, index) => {
                return <Card
                    handleDelete={() => handleDelete(index)}
                    key={product?.id}
                    image={product?.thumbnail}
                    title={product?.title}
                    description={product?.description}
                    discountPercentage={product?.discountPercentage + '%'}
                    price={'$' + ' ' + product?.price}
                />
            })}
        </div>
    );
}

export default Products;