const code = document.createElement('div');
code.classList.add('code');
code.innerHTML = `
<header class="header">
        <div class="header-1">
            <a href="#" class="logo"><i class="fas fa-book"></i>RBookStore</a>

            <form action="" class="search-form">
                <input type="search" name="" placeholder="Search..." id="search-box">
                <label for="search-box" class="fas fa-search"></label>
            </form>

            <div class="icons">
                <div id="search-btn" class="fas fa-search"></div>
                <button class="shop" id="order-btn"><a href="#" class="fas fa-shopping-cart"></a></button>
            </div>
        </div>

        <div class="header-2">
            <nav class="navbar">
                <a href="#home">home</a>
                <a href="#featured">featured</a>
            </nav>
        </div>

        <!--bottom navbar-->

        <nav class="bottom-navbar">
            <a href="#home" class="fas fa-home"></a>
            <a href="#featured" class="fas fa-list"></a>
        </nav>

    <!-- order-form -->
    <div class="order-form-container">
        <div id="close-order-btn" class="fas fa-times"></div>
        <div class="left" id="left">
        <form action="">
            <h3>Make an order</h3>
            <span>Name</span>
            <input type="text" name="" class="box" placeholder="Enter your name" id="">
            <span>Surname</span>
            <input type="text" name="" class="box" placeholder="Enter your surname" id="">
            <span>Phone number</span>
            <input type="tel" name="" class="box" placeholder="Enter your phone-number" id="">
            <span>E-mail</span>
            <input type="email" name="" class="box" placeholder="Enter your email" id="">
            <span>Adress</span>
            <input type="text" name="" class="box" placeholder="Enter your adress" id="">
            <input type="submit" value="Order" class="btn">
        </form>
    </div>
    <div class="right" id="right">
        <h3>your order</h3>
        <div class="order-books">

        </div>
        <h2 class="total">Total:<span class="price"> </span></h2>
    </div>
    </div>
    <!--order form ends-->

    </header>

    <!--header section ends-->

    <!--home section start-->

    <section class="home" id="home">

        <div class="row">
            <div class="content">
                <h3>IT-related books for sale</h3>
                <p>Grab must-have educational books to become a successful engineer</p>
                <a href="#" class="btn">shop now</a>
            </div>

            <div class="swiper books-slider">
                <div class="swiper-wrapper">

                </div>
                
                <img src="/stand.png" class="stand" alt="">
            </div>
        </div>
    </section>

    <!--home section ends-->


    <!--icons section starts-->
    <section class="icons-container">

        <div class="icons">
            <i class="fas fa-plane"></i>
            <div class="content">
                <h3>free shipping</h3>
                <p>Order over 50$</p>
            </div>
        </div>

        <div class="icons">
            <i class="fas fa-lock"></i>
            <div class="content">
                <h3>secure payments</h3>
                <p>100% secure payments all around the world</p>
            </div>
        </div>

        <div class="icons">
            <i class="fas fa-redo-alt"></i>
            <div class="content">
                <h3>easy returns</h3>
                <p>return products within 10 days after buying</p>
            </div>
        </div>


    </section>

    <!--icons section ends-->

    <!--featured section starts-->
    <section class="featured" id="featured">

        <h1 class="heading"><span>featured books</span></h1>

        <div class="swiper featured-slider">

            <div class="swiper-wrapper">

            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>

        </div>

    </section>
    <!--featured section ends-->

    <!--deal section starts-->
    <section class="deal">
    <div class="content">
        <h3>Sales up to 50%</h3>
        <p>Don't miss the opportunity to buy book you really wanted to!</p>
        <a href="#" class="btn">shop now</a>
    </div>

    <div class="image">
        <img src="/deal.png" alt="">
    </div>

</section>

<!--deal section ends-->
<!--loader -->

<div class="loader-container">
  <img src="loader-img.gif" alt-"">
</div>

<!--loader ends-->
<!--footer section starts-->
<!--footer section ends-->


`;
document.body.append(code);
const swiperOne = document.getElementById('swiperOne');
const swiperTwo = document.getElementById('swiperTwo');
const wrapperOne = document.querySelector('.books-slider .swiper-wrapper')
const wrapperTwo = document.querySelector('.featured-slider .swiper-wrapper')
let cartBtn = document.getElementById('order-btn');
let cartCount = 0;
let total = 0;
let totalArray = [];
let sumArr = [];
/*show more
document.getElementById('show-more').addEventListener('click', function(){
  document.querySelector('.popup').style.display = 'flex';
})*/


function renderData(books){
  books.forEach((book) => {
    wrapperOne.innerHTML = wrapperOne.innerHTML+`
      <a href="#"class="swiper-slide"><img src="${book.imageLink}" alt=""></a>
    `;
    const slideBox  = document.createElement('div');
    slideBox.classList.add('swiper-slide');
    slideBox.classList.add('box')
    slideBox.innerHTML = `
        <div class="icons">
            <button><i class="fas fa-eye"><p>Show more</p></i></button>
        </div>
        
        <div class="image">
            <img src="${book.imageLink}" alt="">
        </div>
            <div class="content">
                <h3>${book.title}</h3>
                <h1>${book.author}</h1>
                <div class="price">${book.price}$ <span>${book.price + 20}$</span></div>
                <button class="btn">add to cart</button>
            </div>
    `;
    //--------------------------
    const orders = document.querySelector('.order-form-container .order-books')
    const totalPrice = document.querySelector('.order-form-container .right .total');
    const addToCartBtn = slideBox.querySelectorAll('button')[1];
    addToCartBtn.addEventListener('click', function(){
      const cart = document.createElement('div');
      cart.classList.add('order-books');
      cart.innerHTML = `
      <div class="book-content">
      <img class="order-book" src="${book.imageLink}">
      <p>Price:<span class="price">${book.price} $</span></p>
      </div>
      `;
      orders.appendChild(cart);

      total=+book.price;
      totalArray.push(total);
      let sum = totalArray.reduce(function (result, current) {
        return result + current;
      }, 0);
      const price = totalPrice.querySelector('span');
      price.innerText = `
        ${sum}$
      `;
      cartCount++;
      cartBtn.setAttribute('count', cartCount)
    })
    //----------------------

    const showMoreBtn = slideBox.querySelectorAll('button')[0];
    showMoreBtn.addEventListener('click', function(){
      const popup = document.createElement('div');
      popup.classList.add('popup');
      popup.innerHTML = `
        <div class="popup-content">
          <button id="close-popup-btn" class="fas fa-times"></button>
          <h3>${book.title}</h3>
          <h4>By ${book.author}</h4>
          <p>${book.description}</p>
        </div>
      `
      const showLessBtn = popup.querySelectorAll('button')[0];
      showLessBtn.addEventListener('click', function(){
        slideBox.removeChild(popup);
      })
      slideBox.appendChild(popup);
    })
    wrapperTwo.appendChild(slideBox);
  });
  
  initializeSwiper('.books-slider')
  initializeFeatureSwiper('.featured-slider')
}
fetch("/books.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderData(data);
  });
/*---------------------------------------------*/
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let orderForm = document.querySelector('.order-form-container');

document.querySelector('#order-btn').onclick = () =>{
  orderForm.classList.toggle('active');
}

document.querySelector('#close-order-btn').onclick = () =>{
  orderForm.classList.remove('active');
}

window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }


}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();
}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 2500)
}

/*swiper*/
function initializeSwiper(selector){
  var swiper = new Swiper(selector, {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

function initializeFeatureSwiper(selector){
  var swiper = new Swiper(selector, {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
}
