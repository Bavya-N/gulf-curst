//------------------------------- Header-------------------//
document.addEventListener("scroll", () => {
    const header = document.querySelector('.navbar'); // Use querySelector instead of getElementsByClassName
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//---------------------ToggleBar-----------------------------//
const navLinks = document.querySelectorAll('.navbar-nav a');
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.navbar-collapse');
        if (navMenu.classList.contains('show'))
         {
            navMenu.classList.remove('show');
        }
    });
});
// -----------------------SLIDER------------------------------//

            //---------- slider-image-button-1----------//
function changeBorderColor() {
    var button = document.getElementById('hoverButton');
    button.style.border = '2px solid #17a2b8';
    button.style.color = '#ffffff';
    button.style.fontWeight = 'bold';
}

function restoreBorderColor() {
    var button = document.getElementById('hoverButton');
    button.style.border = '2px solid #17a2b8';
    button.style.color = '#ffffff';
    button.style.fontWeight = 'bold';
}
//------------------------------ slider-button-2------------------------//

function changeBorder() {
    var button = document.getElementById('hover');
    button.style.border = '2px solid #17a2b8';
    button.style.color = '#ffffff';
    button.style.fontWeight = 'bold';
}

function restoreBorder() {
    var button = document.getElementById('hover');
    button.style.border = '2px solid #17a2b8';
    button.style.color = '#ffffff';
    button.style.fontWeight = 'bold';
}

// -----------------------ABOUT US------------------------------//
function changeDotBorder() {
    var button = document.getElementById('dot');
    button.style.border = '2px solid #00000';
    button.style.border = 'dotted';
    button.style.color = '#ffffff';
    button.style.backgroundColor = '#17a2b8';
    button.style.fontWeight = 'bold';
}

function restoreDotBorder() {
    var button = document.getElementById('dot');
    button.style.border = '2px solid #17a2b8';
    button.style.color = 'black';
    button.style.backgroundColor = '';
    button.style.fontWeight = 'bold';
}
// -----------------------WHY CHoose US------------------------------//
//quality
const quality = document.getElementById("quality");
quality.addEventListener("mouseover", () => {
    quality.style.transform = "scale(1.2)"
})
quality.addEventListener("mouseout", () => {
    quality.style.transform = ""
})
//innovation
const innovation = document.getElementById("innovation");
innovation.addEventListener("mouseover", () => {
    innovation.style.transform = "scale(1.2)"
})
innovation.addEventListener("mouseout", () => {
    innovation.style.transform = ""
})
//customer
const customer = document.getElementById("customer");
customer.addEventListener("mouseover", () => {
    customer.style.transform = "scale(1.2)"
})
customer.addEventListener("mouseout", () => {
    customer.style.transform = ""
})
// Team
const team = document.getElementById("team");
team.addEventListener("mouseover", () => {
    team.style.transform = "scale(1.2)"
})
team.addEventListener("mouseout", () => {
    team.style.transform = ""
})

// -----------------------SERVICES------------------------------//

document.getElementById("services").style.borderColor = "1px solid #17a2b8";
document.getElementById("services").style.paddingTop = "50px";
//-------------icon----------//
var icon = document.getElementById("prj1");
var rotation = 0;
function rotateIcon() {
    rotation++; 
    icon.style.transform = "rotate(" + rotation + "deg)";
}
setInterval(rotateIcon, 5);
//   remodeling
var icon1 = document.getElementById("prj2");
var rotation1 = 0;
function reModeling() {
    rotation1++; 
    icon1.style.transform = "rotate(" + rotation1 + "deg)";
}
setInterval(reModeling, 5);

// construction
var icon2 = document.getElementById("prj3");
var rotation2 = 0;
function conStruction() {
    rotation2++;
    icon2.style.transform = "rotate(" + rotation2 + "deg)";
}
setInterval(conStruction, 5)

//Team
var icon3 = document.getElementById("prj4");
var rotation3 = 0;
function reTeam() {
    rotation3++;
    icon3.style.transform = "rotate(" + rotation3 + "deg)";
}
setInterval(reTeam, 5)

// -----------------------PROJECTS------------------------------//

const first = document.getElementById("first");
first.addEventListener("mouseover", () => {
    first.style.transform = "scale(1.2)";
    first.style.transition = "1s";
})
first.addEventListener("mouseout", () => {
    first.style.transform = ""
})
// second image
const second = document.getElementById("second");
second.addEventListener("mouseover", () => {
    second.style.transform = "scale(1.2)";
    second.style.transition = "1s";
})
second.addEventListener("mouseout", () => {
    second.style.transform = ""
})
// third image
const third = document.getElementById("third");
third.addEventListener("mouseover", () => {
    third.style.transform = "scale(1.2)";
    third.style.transition = "1s";
})
third.addEventListener("mouseout", () => {
    third.style.transform = ""
})
// Fourth image
const fourth = document.getElementById("four");
fourth.addEventListener("mouseover", () => {
    fourth.style.transform = "scale(1.2)";
    fourth.style.transition = "1s";
})
fourth.addEventListener("mouseout", () => {
    fourth.style.transform = ""
})
// fifth image
const fifth = document.getElementById("five");
fifth.addEventListener("mouseover", () => {
    fifth.style.transform = "scale(1.2)";
    fifth.style.transition = "1s";
})
fifth.addEventListener("mouseout", () => {
    fifth.style.transform = ""
})
// six image
const six = document.getElementById("six");
six.addEventListener("mouseover", () => {
    six.style.transform = "scale(1.2)";
    six.style.transition = "1s";
})
six.addEventListener("mouseout", () => {
    six.style.transform = ""
})
// seven image
const seven = document.getElementById("seven");
seven.addEventListener("mouseover", () => {
    seven.style.transform = "scale(1.2)";
    seven.style.transition = "1s";
})
seven.addEventListener("mouseout", () => {
    seven.style.transform = ""
})
// Eight image
const eight = document.getElementById("eight");
eight.addEventListener("mouseover", () => {
    eight.style.transform = "scale(1.2)";
    eight.style.transition = "1s";
})
eight.addEventListener("mouseout", () => {
    eight.style.transform = ""
})
// ---------------------------Clients-------------------------//
function startMarquee() {
    document.getElementById("marquee").start();
}

function stopMarquee() {
    document.getElementById("marquee").stop();
}
setTimeout(startMarquee, 10000);

// --------------------------Testi------------------------------//

// -----------------------CONTACT US------------------------------//


function validateForm() {
    let name = document.contactForm.name.value;
    let email = document.contactForm.email.value;
    let phone = document.contactForm.phone.value;

    let nameErr = emailErr = phoneErr = false;

    // Validate name
    let nameField = document.getElementById('name');
    if (name === "") {
        nameField.style.borderColor = 'red';
        document.getElementById('nameErr').innerHTML = "Please enter your name";
        nameErr = true;
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(name)) {
            nameField.style.borderColor = 'red';
            document.getElementById('nameErr').innerHTML = "Please enter a valid name";
            nameErr = true;
        } else {
            nameField.style.borderColor = 'green'; 
            document.getElementById('nameErr').innerHTML = "";
        }
    }

    // Validate email
    let emailField = document.getElementById('email');
    if (email === "") {
        emailField.style.borderColor = 'red';
        document.getElementById('emailErr').innerHTML = "Please enter your email address";
        emailErr = true;
    } else {
        let regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(email)) {
            emailField.style.borderColor = 'red';
            document.getElementById('emailErr').innerHTML = "Please enter a valid email address";
            emailErr = true;
        } else {
            emailField.style.borderColor = 'green'; 
            document.getElementById('emailErr').innerHTML = "";
        }
    }

    // Validate phone
    let phoneField = document.getElementById('phone');
    if (phone === "") {
        phoneField.style.borderColor = 'red';
        document.getElementById('phoneErr').innerHTML = "Please enter your phone number";
        phoneErr = true;
    } else {
        let regex = /^[1-9]\d{9}$/;
        if (!regex.test(phone)) {
            phoneField.style.borderColor = 'red';
            document.getElementById('phoneErr').innerHTML = "Please enter a valid 10 digit phone number";
            phoneErr = true;
        } else {
            phoneField.style.borderColor = 'green'; 
            document.getElementById('phoneErr').innerHTML = "";
        }
    }
    if (nameErr || emailErr || phoneErr) {
        return false;
    } else {
        let dataPreview = "You've entered the following details:\n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Phone Number: " + phone + "\n";

        alert(dataPreview);
        return true; 
    }
}

// -----------------------FOOTER------------------------------//

        // -----------social-links-----------------//
const social=document.getElementById("social-links1");
social.addEventListener("mouseover",()=>{
    social.style.color='#17a2b8';
})
social.addEventListener("mouseout",()=>{
    social.style.color='';
})
const social1=document.getElementById("social-links2");
social1.addEventListener("mouseover",()=>{
    social1.style.color='#17a2b8';
})
social1.addEventListener("mouseout",()=>{
    social1.style.color='';
})
const social2=document.getElementById("social-links3");
social2.addEventListener("mouseover",()=>{
    social2.style.color='#17a2b8';
})
social2.addEventListener("mouseout",()=>{
    social2.style.color='';
})
const social3=document.getElementById("social-links4");
social3.addEventListener("mouseover",()=>{
    social3.style.color='#17a2b8';
})
social3.addEventListener("mouseout",()=>{
    social3.style.color='';
})

// -----------------scroll-Reveal------------------// 
document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.section-title .image', {
        delay: 600,
        origin: 'bottom',
        reset: true,
        distance: '60px',
        duration: 2500
    });
    ScrollReveal().reveal('.section-title .con', {
        delay: 700,
        origin: 'bottom',
        reset: true,
        distance: '60px',
        duration: 2500
    });
    ScrollReveal().reveal('.section-title .img', {
        delay: 700,
        origin: 'bottom',
        reset: true,
        distance: '60px',
        duration: 2500
    });
    ScrollReveal().reveal('.section-title .design', {
        delay: 600,
        origin: 'bottom',
        reset: true,
        distance: '60px',
        duration: 2500
    });
    ScrollReveal().reveal('.section-title .remodeling', {
        delay: 500,
        origin: 'bottom',
        reset: true,
        distance: '60px',
        duration: 2500
    });
    ScrollReveal().reveal('.section-title .construction', {
        delay: 400,
        origin: 'bottom',
        reset: true,
        distance: '60px',
        duration: 2500
    });
    ScrollReveal().reveal('.section-title .interior', {
        delay: 300,
        origin: 'bottom',
        reset: true,
        distance: '60px',
        duration: 2500
    });
    ScrollReveal().reveal('.testimonial-1', {
        delay: 300,
        origin: 'top',
        reset: true,
        distance: '60px',
        duration: 2500
    });
    ScrollReveal().reveal('.testimonial-2', {
        delay: 300,
        origin: 'bottom',
        reset: true,
        distance: '60px',
        duration: 2500
    });
    ScrollReveal().reveal('.testimonial-3', {
        delay: 300,
        origin: 'top',
        reset: true,
        distance: '60px',
        duration: 2500
    });
    ScrollReveal().reveal('.testimonial-4', {
        delay: 300,
        origin: 'bottom',
        reset: true,
        distance: '60px',
        duration: 2500
    });
    ScrollReveal().reveal('.social-links', {
        delay: 300,
        origin: 'bottom',
        reset: true,
        distance: '60px',
        duration: 2500
    });
});

