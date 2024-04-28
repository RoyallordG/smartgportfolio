const typed = document.querySelector('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


  let portfolio = [
    {
       id : 1,
       img : "birthday1.jpeg",
       category : 'birthday'
    },
    {
       id : 2,
       img : "birthday2.jpeg",
       category : 'birthday'
    },
    {
       id : 3,
       img : "birthday3.jpeg",
       category : 'birthday'
    },
    {
       id : 4,
       img : "birthday4.jpeg",
       category : 'birthday'
    },
    {
       id : 5,
       img : "church.jpeg",
       category : 'church'
    },
    {
       id : 6,
       img : "church2.jpeg",
       category : 'church'
    },
    {
       id : 7,
       img : "church3.jpeg",
       category : 'church'
    },
    {
       id : 8,
       img : "church4.jpeg",
       category : 'church'
    },
    {
       id : 9,
       img : "logo.png",
       category : 'logo'
    },
    {
       id : 10,
       img : "logo2.jpg",
       category : 'logo'
    },
    {
     id : 11,
     img : "logo3.jpg",
     category : 'logo'
  },
  {
     id : 12,
     img : "logo4.png",
       category : 'logo'
  },
  {
    id : 13,
    img : "mockup.png",
      category : 'mockup'
 },
 {
  id : 14,
  img : "mockup2.png",
      category : 'mockup'
},
{
  id : 15,
  img : "mockup3.jpg",
  category : 'mockup'
},
{
  id : 16,
  img : "mockup5.png",
  category : 'mockup'
},
{
  id : 17,
  img : "smm.jpeg",
    category : 'smm'
},
{
  id : 19,
  img : "smm2.jpeg",
    category : 'smm'
},
{
  id : 20,
  img : "smm3.jpeg",
    category : 'smm'
},
{
  id : 21,
  img : "smm4.jpeg",
    category : 'smm'
},
{
  id : 12,
  img : "smm5.jpeg",
    category : 'smm'
}
 ]
 
 
 let currentCategory = 'all';
 let count = 0;
 let showSixItems = portfolio.slice(0, 6);
 let showTheRest = portfolio.slice(6);
 let portfolioContainer = document.querySelector('.portfolio-container');
 let loadMoreBtn = document.querySelector('.load-btn');
 let portfolioCategory
 
 
 function setLoadMoreVisibility(items) {
     if (items.length <= 6) {
         loadMoreBtn.style.display = 'none';
     } else {
         loadMoreBtn.style.display = 'block';
     }
 }
 
 window.addEventListener('DOMContentLoaded', function () {
     showItem(showSixItems);
     setLoadMoreVisibility(portfolio); 
 });
 
 function showItem(menuItem) {
         // Display portfolio items
         let portfolioItem = menuItem.map(function (item) {
             return `<div class="box">
                 <a href=""><img src="${item.img}" alt=""></a>
             </div>`;
         }).join("");
         portfolioContainer.innerHTML = portfolioItem;
 }
 
 let filterBtns = document.querySelectorAll('.filter-btn');
 filterBtns.forEach(function (btn) {
     btn.addEventListener('click', function (e) {
         currentCategory = e.currentTarget.id;
         count = 0; // Reset count whenever category changes
         if (currentCategory === 'all' || currentCategory === '') {
             showItem(showSixItems);
         } else {
             portfolioCategory = portfolio.filter(function (item) {
                 return item.category === currentCategory;
             });
             let showSixCategory = portfolioCategory.slice(0, 6);
             remainingCategory = portfolioCategory.slice(6);
             showItem(showSixCategory);
         }
         loadMoreBtn.innerHTML = 'LOAD MORE';
         setLoadMoreVisibility(portfolioCategory); 
     });
 });
 
 loadMoreBtn.addEventListener('click', function () {
     if (currentCategory === 'all' || currentCategory === '') {
         if (count === 0) {
             let allItems = showSixItems.concat(showTheRest);
             showItem(allItems);
             loadMoreBtn.innerHTML = 'LOAD LESS';
             count = 1;
         } else {
             showItem(showSixItems);
             loadMoreBtn.innerHTML = 'LOAD MORE';
             count = 0;
         }
     } else {
         let portfolioCategory = portfolio.filter(function (item) {
             return item.category === currentCategory;
         });
         let showSixCategory = portfolioCategory.slice(0, 6);
         remainingCategory = portfolioCategory.slice(6);
         
         if (count === 0) {
             let allCate = showSixCategory.concat(remainingCategory);
             showItem(allCate);
             loadMoreBtn.innerHTML = 'LOAD LESS';
             count = 1;
         } else {
             showItem(showSixCategory);
             loadMoreBtn.innerHTML = 'LOAD MORE';
             count = 0;
         }
     }
     setLoadMoreVisibility();  
 });
 
 



 let menu = document.querySelector('#menu-icon');
let sideNav = document.querySelector('.side-nav')
let header = document.querySelector('header')
let overlay = document.querySelector('.overlay')

menu.addEventListener('click', function(){
  console.log('Hello')
})

menu.onclick = () => {
   menu.classList.toggle('bx-x');
   sideNav.classList.toggle('active')
   overlay.classList.toggle('active')
}
window.onscroll = () => {
   menu.classList.remove('bx-x');
   sideNav.classList.remove('active')
   overlay.classList.remove('active')
}