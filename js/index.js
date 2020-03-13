const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav Bar
let navText = document.querySelectorAll('nav a');
navText[0].textContent = siteContent.nav["nav-item-1"];
navText[1].textContent = siteContent.nav["nav-item-2"];
navText[2].textContent = siteContent.nav["nav-item-3"];
navText[3].textContent = siteContent.nav["nav-item-4"];
navText[4].textContent = siteContent.nav["nav-item-5"];
navText[5].textContent = siteContent.nav["nav-item-6"];

  //change text color to green
navText[0].style.color = 'green';
navText[1].style.color = 'green';
navText[2].style.color = 'green';
navText[3].style.color = 'green';
navText[4].style.color = 'green';
navText[5].style.color = 'green';

  //create 2 new naviagtion items
let home = document.createElement('a');
home.textContent = 'Home';
home.href = '#';
home.style.color = 'green';

let logIn = document.createElement('a');
logIn.textContent = 'Log In';
logIn.href = '#';
logIn.style.color = 'green';

let navBar = document.querySelector('nav');
navBar.prepend(home);
navBar.appendChild(logIn);



//Title Content
let titleText = document.querySelector('h1');
titleText.textContent = siteContent.cta.h1; 

let button = document.querySelector('button');
button.textContent = siteContent.cta.button;

let titleImg = document.querySelector('#cta-img');
titleImg.src = siteContent.cta["img-src"];

//Main Content

  // titles
let sectionTitles = document.querySelectorAll('.main-content h4');
sectionTitles[0].textContent = siteContent['main-content']["features-h4"];
sectionTitles[1].textContent = siteContent['main-content']["about-h4"];
sectionTitles[2].textContent = siteContent['main-content']["services-h4"];
sectionTitles[3].textContent = siteContent['main-content']["product-h4"];
sectionTitles[4].textContent = siteContent['main-content']["vision-h4"];

  //image
let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']["middle-img-src"];

  //text
let sectionText = document.querySelectorAll('.main-content p');
sectionText[0].textContent = siteContent['main-content']["features-content"];
sectionText[1].textContent = siteContent['main-content']["about-content"];
sectionText[2].textContent = siteContent['main-content']["services-content"];
sectionText[3].textContent = siteContent['main-content']["product-content"];
sectionText[4].textContent = siteContent['main-content']["vision-content"];

// Contact info

let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent.contact['contact-h4'];

let contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent.contact.address;
contactContent[1].textContent = siteContent.contact.phone;
contactContent[2].textContent = siteContent.contact.email;

//Footer

let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;
