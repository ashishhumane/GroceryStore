const buttons = document.getElementsByClassName("cart-button");
const order = document.querySelector('.orders')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior

        let item = e.target.closest(".item"); // Get closest parent with class "item"

        if (item) {
            let cloneditem = item.cloneNode(true)
            // let createElement = document.createElement('a>button')
            
            order.appendChild(cloneditem)
            console.log(cloneditem);

        } else {
            console.warn("⚠️ No parent '.item' found! Check HTML structure.");
        }
    });
}



// console.log(order);
