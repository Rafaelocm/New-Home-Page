
function darkTheme() {
    document.getElementById("body").style.backgroundColor = "#36384F";

    document.getElementById("body").style.transitionDuration = '.5s';

    document.getElementById("header").style.backgroundColor = "#36384F";
    
    document.getElementById("header").style.transitionDuration = ".5s";

    document.getElementById("nav-item-ul").style.color = "white";

    document.getElementById("future").style.color = 'white';

    document.getElementById("paragrafoFuture").style.color = 'white';

    document.getElementById("New").style.backgroundColor = '#3B3C51';

    document.getElementById("grid-item-textOne").style.color = 'white';

    document.getElementById("grid-item-textTwo").style.color = 'white';

    document.getElementById("grid-item-textThree").style.color = 'white';

    document.getElementById("spanOne").style.color = 'white';

    document.getElementById("spanTwo").style.color = 'white';

    document.getElementById("spanThree").style.color = 'white';

    document.getElementById("buttonLight").style.color = 'white';

    document.getElementById("buttonHamburguer").style.backgroundColor = 'white';

    document.getElementById("offcanvasNavbar").style.backgroundColor = "#36384F";

    document.getElementById("logo").src = 'assets/images/logoBranca.jpg';

    document.getElementById("offcanvasNavbarLabel").src = 'assets/images/logoBranca.jpg';

    document.getElementById("close").style.backgroundColor = 'white';

    document.getElementById("buttonDark").style.color = 'white';

    document.getElementById("buttonLight").style.color = 'white';

    document.getElementById("nav-linkOne").style.color = 'white';

    document.getElementById("nav-linkTwo").style.color = 'white';

    document.getElementById("nav-linkThree").style.color = 'white';

    document.getElementById("buttonDarkNavBar").style.color = "white";

    document.getElementById("buttonLightNavBar").style.color = "white";
}



function lightTheme() {
    var body = document.getElementById("body");
    body.style.backgroundColor = "transparent";
    body.style.transitionDuration = '.5s'

    document.getElementById("header").style.backgroundColor = "hsl(36, 100%, 99%)";

    document.getElementById("header").style.transitionDuration = ".5s";

    document.getElementById("nav-item-ul").style.color = "hsl(236, 13%, 42%)";

    document.getElementById("buttonDark").style.color = "hsl(236, 13%, 42%)";

    document.getElementById("future").style.color = '#212529';

    document.getElementById("paragrafoFuture").style.color = 'hsl(236, 13%, 42%)';

    document.getElementById("New").style.backgroundColor = 'hsl(240, 100%, 5%)';

    document.getElementById("grid-item-textOne").style.color = 'black';

    document.getElementById("grid-item-textTwo").style.color = 'black';

    document.getElementById("grid-item-textThree").style.color = 'black';

    document.getElementById("spanOne").style.color = 'hsla(236, 13%, 42%, 0.651)';

    document.getElementById("spanTwo").style.color = 'hsla(236, 13%, 42%, 0.651)';

    document.getElementById("spanThree").style.color = 'hsla(236, 13%, 42%, 0.651)';

    document.getElementById("buttonLight").style.color = 'hsl(236, 13%, 42%)';

    document.getElementById("logo").src = 'assets/images/logo.svg';

    document.getElementById("offcanvasNavbar").style.backgroundColor = "white";

    document.getElementById("offcanvasNavbarLabel").src = 'assets/images/logo.svg';

    document.getElementById("close").style.backgroundColor = 'white';

    document.getElementById("nav-linkOne").style.color = 'hsl(236, 13%, 42%)';

    document.getElementById("nav-linkTwo").style.color = 'hsl(236, 13%, 42%)';

    document.getElementById("nav-linkThree").style.color = 'hsl(236, 13%, 42%)';

    document.getElementById("buttonDarkNavBar").style.color = "hsl(236, 13%, 42%)";

    document.getElementById("buttonLightNavBar").style.color = "hsl(236, 13%, 42%)";

    document.getElementById("buttonHamburguer").style.backgroundColor = 'transparent';
}