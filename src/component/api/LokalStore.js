
//   get store 
const getStoreCart = ()=>{
    const storeBookString = localStorage.getItem('booking')
    if(storeBookString){
        return JSON.parse(storeBookString)

    }

    return []
}

 const saveCartLs =  cart =>{
     const cartStringified = JSON.stringify(cart)
     localStorage.setItem('booking',cartStringified)
 }

const addLS = id =>{
     const cart = getStoreCart()
     cart.push(id)
    //  save LS

    saveCartLs(cart)
}

export {addLS, getStoreCart}
