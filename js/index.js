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


const nav = document.querySelector('nav');

const navItems = document.querySelectorAll('a');

const navArray = Array.from(navItems);

// new link
const newLink = document.createElement('a');
newLink.textContent = 'Brendan';
newLink.style.color = 'blue';

//new link 2
const newLink2 = document.createElement('a');
newLink2.textContent = 'Is Cool!!!';
newLink2.style.color = 'blue';


nav.prepend(newLink);

nav.appendChild(newLink2);

const ogNav = siteContent.nav;

const navValues = Object.entries(ogNav);


navArray.forEach((navItems, index) => {
  navItems.textContent = navValues[index][1]; 
  navItems.style.color = 'green';
});





const cta = siteContent.cta;
const ctaArray = Array.from(cta);
ctaValues = Object.entries(cta);



const h1 = document.querySelector('h1');

const button = document.querySelector('button');

const img = document.getElementById('cta-img');

const text = document.querySelector('.cta-text');

h1.textContent = ctaValues[0][1];
button.textContent = ctaValues[1][1];
img.src = ctaValues[2][1];

const newButton = document.createElement("BUTTON");
newButton.style.width = 100;
newButton.style.height = 100;
newButton.textContent = "PARTY TIME!!!";
newButton.addEventListener('click', get_rand_color);
document.body.appendChild(newButton);


function get_rand_color(){
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    let color2 = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    document.body.style.color = "#" + color2;
    document.body.style.backgroundColor = "#" + color;
}


const newButton2 = document.createElement("BUTTON");
newButton2.style.width = 100;
newButton2.style.height = 100;
newButton2.textContent = "PARTY over!!!";
newButton2.addEventListener('click', set_Normal);
document.body.appendChild(newButton2);

function set_Normal(){
  document.body.style.color = "black";
  document.body.style.backgroundColor = "white"
}






const mainContent = siteContent['main-content'];
const mainContentArray = Object.entries(mainContent);



let textContent = document.querySelectorAll('.main-content .text-content h4, .main-content .text-content p')
const mainKeys = Object.keys(siteContent['main-content']);

//my god that took a long time to figure that one line out....
mainKeys.splice(4,1);

textContent = Array.from(textContent);


textContent.forEach((elements, i) => {
  elements.textContent = siteContent['main-content'][mainKeys[i]];
});


const middleImage = document.getElementById('middle-img');
middleImage.src =  "img/mid-page-accent.jpg";




const contactText = document.querySelectorAll('.contact h4, .contact p');

const contact = Array.from(contactText);

const contactKeys = Object.keys(siteContent.contact);
const contactValues = Object.values(siteContent.contact);
contact.forEach((element, index) => {
  element.textContent = contactValues[index];
});




const footer = document.querySelector('footer p');
const footerValue = Object.values(siteContent.footer);
footer.textContent = footerValue;
