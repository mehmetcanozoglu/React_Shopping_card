import ProductItem from "./ProductItem"
import ProductaData from "../ProductaData";

const Products = (props) => {
    return (
        <div className=" container d-flex flex-row flex-wrap justify-content-between mb-3">
            {ProductaData.map((product) =>(
                <ProductItem key={product.id} product={product}
                 setcart={props.setcart}/>
            ))}
        </div>  
    )
}

export default Products 