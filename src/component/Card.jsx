
const Card = ({cart, setcart, emtyCart}) => {
    let deleteBtn = (id) =>{
        let newİd = cart.filter(item => item.id !== id) 
       setcart(newİd)}

    if(cart.length === 0) return
    return (
        <div className="sepet container ">
            <div class="row">
                <div className="sepet-box">
                    <ul> 
                        <h3>Sepet</h3>
                        {cart.map((item) =>(
                        <li key={item.id} className="list-unstyled d-flex justify-content-between">
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                            <button className="btn btn-danger mb-1" onClick={() => deleteBtn(item.id)}>sil </button>
                        </li>
                        ))}
                        <hr />
                        <p className="fw-bold">Toplam: 100 tl</p>
                        <button className="btn btn-danger w-100" onClick={emtyCart}>Sepeti boşalt</button>
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default Card