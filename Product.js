import React from "react";

function Product(props) {
  const { product, setBasketData, basketData } = props;

  let newProduct = product;
  newProduct.total = product?.price * product?.qty;

  return (
    <div className="order-child">
      <img className="small" src={product.image} alt="no-img" />
      <h3>{product.name}</h3>
      <div>{product.content}</div>
      <div>${product.price}</div>

      <div>
        <button
          className="cartBtn"
          onClick={() => {
            let uniqueData = basketData?.find(
              (data) => data?.id === product?.id
            );
            console.log("basketData", uniqueData);
            if (uniqueData === null || uniqueData === undefined) {
              setBasketData((data) => [...data, newProduct]);
            } else {
              window.alert("Item is already added");
            }
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default Product;

//   let cart =[];

//    function addCart(id){
//    // console.log(id);
//     const newItem = products.find((product)=> product.id === id) ;
//     //console.log(newItem);
//     cart.push(newItem);
//     console.log(cart);

//     localStorage.setItem("products",JSON.stringify(cart));
//  }
