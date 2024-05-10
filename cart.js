console.log(`cart items`);


const cartItems = JSON.parse(localStorage.getItem(`cartItems`));

console.log(cartItems);

const div = document.querySelector(`div`);

function renderItems(){
    if(cartItems != null && cartItems.length > 0){
        for (let i = 0; i < cartItems.length; i++) {
            console.log(cartItems[i]);
            div.innerHTML += `
            <div class = "border border-light rounded m-5 p-3">
            <h5 class="card-title">Brand: ${phones[i].brand}</h5>
            <h5 class="card-text">Model: ${phones[i].model}</h5>
            <h5 class="card-text">Ram: ${phones[i].ram}</h5>
            <h5 class="card-text">Rom: ${phones[i].rom}</h5>
            <h5 class="card-text">Camera: ${phones[i].camera}</h5>
            <h5 class="card-text">Price: ${phones[i].price}</h5>
            </div>
            `
        }
    }else{
        console.log(`Cart Items Empty`);
        div.innerHTML = `
        <h3 class = " text-light text-center mt-3">No items Found!</h3>
        `
    }
}


renderItems()

