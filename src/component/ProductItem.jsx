const ProductItem = ({ product, setcart }) => {

    let addtodocart = (product) => {
        setcart((prevState) => [...prevState, product])
    }
    return (
        <div>
            <div className="col">
                <div class="card">
                    <img src={product.image} className="card-img-top p-3" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}</p>
                        <a className="btn btn-outline-success w-100"
                            onClick={() => addtodocart(product)}>Sepete ekle</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductItem