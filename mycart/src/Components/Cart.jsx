import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()
    if(isEmpty) return <h2 className='text-center'>Your Cart Is Empty</h2>
    return (
        <section className='py-4 container'>
           <div className='row justify-content-center'> 
            <div className='col-12'>
             <h3>Cart ({totalUniqueItems}) total Items: ({totalItems})</h3>
             <table className='table table-dark m-1'>
                <tbody>
                {items.map((item,index)=>{
                return(
                    <tr key={index}>
                    <td>
                        <img src={item.img} style={{height: '5rem'}}/>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity{item.quantity}</td>
                    <td>
                        <button className='btn btn-primary ms-2'
                          onClick={()=>updateItemQuantity(item.id, item.quantity +1)}
                        >+</button>
                        <button  className='btn btn-primary ms-2'
                        onClick={()=>updateItemQuantity(item.id, item.quantity -1)}
                        >-</button>
                        <button  
                        className='btn btn-danger ms-2'
                        onClick={()=>removeItem(item.id)}
                        >Remove Item</button>
                    </td>
                </tr>
                )
              
                })}
                </tbody>
             </table>
            </div>
            <div className='text-center ms-auto'>
               <h1>Total Price: Rs/- {cartTotal}</h1>
            </div>
            <div>
                <button className='btn btn-danger'
                onClick={()=>emptyCart()}
                >Remove All products</button>
            </div>
            </div>
        </section>
       
    );
};

export default Cart;