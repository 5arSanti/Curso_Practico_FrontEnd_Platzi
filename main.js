//--------------------------------------------------------------
//Desktop Menu
const navEmail = document.querySelector(".user");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}



//--------------------------------------------------------------
//Mobile Menu
const burgerIcon = document.querySelector(".menu");
const mobileMenu =document.querySelector(".mobile-menu")

burgerIcon.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCartMenu.classList.contains("inactive"); //Si contiene inactive esta cerrado

    if(isShoppingCartClosed){
        //Abre el mobile menu
        mobileMenu.classList.toggle("inactive");
    }
    else{
        shoppingCartMenu.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    }
}


//--------------------------------------------------------------
//Shopping Cart
const cartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartMenu =document.querySelector(".product-detail")

cartIcon.addEventListener("click", toggleShoppingCart);
function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive"); //Si contiene inactive esta cerrado

    if(isMobileMenuClosed){
        //Abre el shopping cart
        shoppingCartMenu.classList.toggle("inactive");
    }
    else{
        mobileMenu.classList.add("inactive");
        shoppingCartMenu.classList.toggle("inactive");
    }
}



//--------------------------------------------------------------
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: "Car",
    price: 20000,
    image: "https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    
});
productList.push({
    name: "Pantalla",
    price: 1000,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    
});



//-------------------------------------------------------------------
const cardsContainer = document.querySelector(".cards-container")

function renderProducts(array){
    for(product of array){
        //Product Card
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        //IMG
        //product = {name, price, image} --> product.image
        const img = document.createElement("img");
        img.setAttribute("src", product.image);


        //Product Info
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        //DIV
        const productInfoDiv = document.createElement("div");
        //p
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        //p
        const productName = document.createElement("p");
        productName.innerText = product.name;

        //Figure
        const productInfoFigure = document.createElement("figure");
        //Img
        const figureIcon = document.createElement("img");
        figureIcon.setAttribute("src", "./Icons/bt_add_to_cart.svg");


        productCard.append(img, productInfo);

        productInfo.append(productInfoDiv, productInfoFigure);

        productInfoDiv.append(productPrice, productName);

        productInfoFigure.appendChild(figureIcon);

        //Append al container principal "cards-container"
        cardsContainer.appendChild(productCard);


    }
}

renderProducts(productList);