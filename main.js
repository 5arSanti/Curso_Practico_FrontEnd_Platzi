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
    const isShoppingCartClosed = shoppingCartContainer.classList.contains("inactive"); //Si contiene inactive esta cerrado
    const isProductDetailAsideClosed = productDetailContainer.classList.contains("inactive");

    if(!isShoppingCartClosed){
        //Abre el mobile menu
        shoppingCartContainer.classList.add("inactive");
    }
    if(!isProductDetailAsideClosed){
        productDetailContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}


//--------------------------------------------------------------
//Shopping Cart
const cartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer =document.querySelector("#shoppingCartContainer");

cartIcon.addEventListener("click", toggleShoppingCart);
function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive"); //Si contiene inactive esta cerrado
    const isProductDetailAsideClosed = productDetailContainer.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
    if(!isProductDetailAsideClosed){
        productDetailContainer.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");
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
const cardsContainer = document.querySelector(".cards-container");

function renderProducts(array){
    for(product of array){
        //Product Card
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        //IMG
        //product = {name, price, image} --> product.image
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);


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


        productCard.append(productImg, productInfo);

        productInfo.append(productInfoDiv, productInfoFigure);

        productInfoDiv.append(productPrice, productName);

        productInfoFigure.appendChild(figureIcon);

        //Append al container principal "cards-container"
        cardsContainer.appendChild(productCard);


    }
}

renderProducts(productList);


//------------------------------------------------------------
//Funciones
//Abrir Detalles del Producto
const productDetailContainer = document.querySelector("#productDetail");
function openProductDetailAside(){
    const isProductDetailAsideClosed = productDetailContainer.classList.contains("inactive");
    const isShoppingCartClosed = shoppingCartContainer.classList.contains("inactive"); //Si contiene inactive esta cerrado
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive"); //Si contiene inactive esta cerrado

    if(!isShoppingCartClosed){
        shoppingCartContainer.classList.add("inactive");
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
    productDetailContainer.classList.remove("inactive");
}
//Cerrar Detalles del Producto
const closeDetailContainer = document.querySelector(".product-detail-close");
closeDetailContainer.addEventListener("click", closeProductDetailAside);
function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

