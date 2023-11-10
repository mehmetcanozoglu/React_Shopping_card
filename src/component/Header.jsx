import Carditem from "./Carditem";

export default function Header({cart}) {
    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>React Bootstrap sepet uygulaması</h2>
                    <Carditem cart={cart}/>
                </div>
            </div>
        </div>
    )
}
