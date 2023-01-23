import { useLocation } from "react-router-dom";

export const AddingToCart = ({ stock }) => {
    
    const maxAmount = Array(stock).fill().map((el, i) => i);

    return (
        <div className="cart">
            <label htmlFor="amount">Cantidad:</label>
            <select name="cart" id="cart">
                {
                    maxAmount.map(number => (
                        <option key={ number } value={ number }>{ number + 1 }</option>
                    ))
                }
            </select>
        </div>
    )
}
