
export const ProductResume = (product) => {
    
    const { brend, model, name, description, image, price, rating, category } = product;

    const starRating = {
        '--rating': rating
    }
    
    return (
    <div className="product-resume-card">
        <div className="image-product">
            <img src={ image[0]} className="image" alt="Image of the product"/>
        </div>
        <div className="product-body">
            <div className="product-details">
                <h3>{ name }</h3>
                <p>{ description }</p>
                <p>
                    <span>Marca: </span>
                    { brend }
                    <span className={ !model ? "hide" : "model" }>Modelo: </span>
                    { model }
                </p>
                <div className="stars" style={ starRating }></div>
            </div>
            <div className="product-price">
                <span className="price">{ price.toFixed(2) || '' } €</span>
            </div>
            
        </div>
    </div>
  )
}

