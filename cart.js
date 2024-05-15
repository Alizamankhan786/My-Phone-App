// console.log(`cart items`);


const cartItems = JSON.parse(localStorage.getItem(`cartItems`));

// console.log(cartItems);

const div = document.querySelector(`div`);
const h1 = document.querySelector(`#totalamount`);
// const button = document.querySelector(`#btn`);

function renderItems(){
    let totalamount = 0;
    totalamount.innerHTML = ``;
    if(cartItems != null && cartItems.length > 0){
        for (let i = 0; i < cartItems.length; i++) {
            // console.log(cartItems[i]);
            totalamount += cartItems[i].price * cartItems[i].quantity
            div.innerHTML += `
            <div class = "text-light border border-light rounded m-5 p-3">
            <h5 class="card-title">Brand: ${cartItems[i].brand}</h5>
            <h5 class="card-text">Model: ${cartItems[i].model}</h5>
            <h5 class="card-text">Ram: ${cartItems[i].ram}</h5>
            <h5 class="card-text">Rom: ${cartItems[i].rom}</h5>
            <h5 class="card-text">Camera: ${cartItems[i].camera}</h5>
            <h5 class="card-text">Price: ${cartItems[i].price}</h5>
            <h5 class="card-text">Total-Price: ${cartItems[i].price * cartItems[i].quantity }</h5>
            <button class="btn btn-primary" onclick="increaseQuantity(${i})">+</button>
            <span>${cartItems[i].quantity}</span>
            <button class="btn btn-primary" onclick="lessQuantity(${i})">-</button>
            <br>
            <br>
            <button class=" rounded-md px-2 py-1 btn btn-danger " onclick="deletecartItem(${i})">Delete</button>
            </div>
            `
            totalamount.innerHTML = `
            <h1 class = "text-light text-center">Total Amount</h1>
            `
        }
    }else{
        console.log(`Cart Items Empty`);
        div.innerHTML = `
        <h3 class = " text-light text-center mt-3">No items Found!!!</h3>
        `
    }
}


renderItems()


//increase and less function


function increaseQuantity(index){

    div.innerHTML = ``;
    console.log(cartItems[index]);
    cartItems[index].quantity += 1;
    renderItems()

}


function lessQuantity(index){

    div.innerHTML = ``;
    console.log(cartItems[index]);
    cartItems[index].quantity -= 1;
    // renderItems()
    if(cartItems[index].quantity === 0){
        cartItems.splice(index , 1);
        // renderItems()

    }
    renderItems()
}


// renderItems()



// delete cartItems function

function deletecartItems(index){
    div.innerHTML = ``;
    cartItems.splice(index , 1);
    renderItems();


}


function gotohome(){
    window.location = `index.html`;
    localStorage.setItem
}