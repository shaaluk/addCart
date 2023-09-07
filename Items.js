import { useState } from "react";

const Items = (props) => {
    const { image, name,price,onDelete, qty} = props;

    const [quantity, setQuantity] = useState(qty);

    const handleInc = () => {
        setQuantity(quantity + 1);
    };

    const handleDec = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        else if (quantity === 1) {
            onDelete();
        }
    }
    
    

    return (
        <>

            <div className="items-info">

                <div className="order-child">
                    <div id="newOrder">
                    <div className="imageBox">
                        <img className="newImage" src={image} alt="hi" />
                    </div>

                    <div className="title1">
                        <h3 className="nameItem">{name}</h3>
                        <button className="btn" onClick={handleInc}>+</button>
                        <span>{quantity}</span>

                        <button className="btn" onClick={handleDec}>-</button>

                        <div class="dollarSign">${price*quantity}</div>
                    </div>

                    <div className="buttonBox">
                        <button className="deleteBtn" onClick={onDelete}>Delete</button>
                    </div>
                    </div>

                </div>

            </div>

            <hr/>
           
        
             
        </>
        
    )
}

export default Items;



