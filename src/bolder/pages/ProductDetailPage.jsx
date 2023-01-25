import { Link, useLocation } from "react-router-dom";
import { Header, ProductResume } from "../components";

export const ProductDetailPage = () => {
    const { state } = useLocation();

    return (
        <div className="product-detail-container h-100 vov fade-in slow">
            <Header />
            <div className="bt-breadcrumbs">
                <Link to="/" className="white">Volver</Link>
            </div>
            <ProductResume { ...state } />
        </div>
    )
}
