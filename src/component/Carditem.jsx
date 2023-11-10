import { CiShoppingCart } from "react-icons/ci"

const Carditem = ({cart}) => {
  return (
    <div>
        <div className="position-relative">
                <CiShoppingCart className="fs-3" />
                <span className="small ">
                  {cart.length}
                </span>
            </div>
    </div>
  )
}

export default Carditem 