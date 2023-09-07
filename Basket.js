
import Items from "./Items";
import "./Basket.css";

   function Basket({basketData, onDelete}){
   //console.log(basketData);
  
   

   const totalPrice = basketData.reduce((total,c)=> total+ c.price*c.qty, 0);
   return (
      <>
         <div className="block col-1">
        
            <h1>Cart</h1>
            {
               basketData?.map((cart, idx) => {
                  return <Items key={idx}  {...cart} onDelete={() =>onDelete(cart.id)} qty={cart.qty} />
               })

            }
            <div>
             <h3>Total Price of Cart is =${totalPrice} </h3>
            </div>
           
         </div>
         
      </>
   );

}

export default Basket;

