console.log(`cart items`);


const cartItems = JSON.parse(localStorage.getItem(`cartItems`));

// console.log(cartItems);

const div = document.querySelector(`div`);

function renderItems(){
    if(cartItems != null && cartItems.length > 0){
        for (let i = 0; i < cartItems.length; i++) {
            console.log(cartItems[i]);
            div.innerHTML += `
            <div class = "border border-light rounded m-5 p-3">
            <h5 class="card-title">Brand: ${cartItems[i].brand}</h5>
            <h5 class="card-text">Model: ${cartItems[i].model}</h5>
            <h5 class="card-text">Ram: ${cartItems[i].ram}</h5>
            <h5 class="card-text">Rom: ${cartItems[i].rom}</h5>
            <h5 class="card-text">Camera: ${cartItems[i].camera}</h5>
            <h5 class="card-text">Price: ${cartItems[i].price}</h5>
            </div>
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

