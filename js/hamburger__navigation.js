document.getElementById("navigation__trigger",).onclick = function() {navOpen()};

function navOpen() {
    document.getElementById("navigation__menu").classList.toggle("navigation__show");
    document.getElementById("navigation__navbar").classList.toggle("navigation__hamburger");
    document.getElementById("navigation__trigger").classList.toggle("navigation__cross");
}

document.getElementById("menu__trigger",).onclick = function() {menuOpen()};

function menuOpen() {
    document.getElementById("menu__navbar").classList.toggle("menu__show");
    document.getElementById("menu__container").classList.toggle("menu__hamburger");
    document.getElementById("menu__trigger").classList.toggle("menu__cross");
}

document.getElementById("menu__trigger-icons",).onclick = function() {menuIconOpen()};

function menuIconOpen() {
    document.getElementById("menu__navbar-icons").classList.toggle("menu__show");
    document.getElementById("menu__container-icons").classList.toggle("menu__hamburger");
    document.getElementById("menu__trigger-icons").classList.toggle("menu__cross");
}

document.getElementById("navigation__trigger-primary",).onclick = function() {navPrimaryOpen()};

function navPrimaryOpen() {
    document.getElementById("navigation__menu-primary").classList.toggle("navigation__show");
    document.getElementById("navigation__navbar-primary").classList.toggle("navigation__hamburger");
    document.getElementById("navigation__trigger-primary").classList.toggle("navigation__cross");
}

document.getElementById("navigation__trigger-info",).onclick = function() {navInfoOpen()};

function navInfoOpen() {
    document.getElementById("navigation__menu-info").classList.toggle("navigation__show");
    document.getElementById("navigation__navbar-info").classList.toggle("navigation__hamburger");
    document.getElementById("navigation__trigger-info").classList.toggle("navigation__cross");
}

document.getElementById("navigation__trigger-success",).onclick = function() {navSuccessOpen()};

function navSuccessOpen() {
    document.getElementById("navigation__menu-success").classList.toggle("navigation__show");
    document.getElementById("navigation__navbar-success").classList.toggle("navigation__hamburger");
    document.getElementById("navigation__trigger-success").classList.toggle("navigation__cross");
}

document.getElementById("navigation__trigger-warning",).onclick = function() {navWarningOpen()};

function navWarningOpen() {
    document.getElementById("navigation__menu-warning").classList.toggle("navigation__show");
    document.getElementById("navigation__navbar-warning").classList.toggle("navigation__hamburger");
    document.getElementById("navigation__trigger-warning").classList.toggle("navigation__cross");
}

document.getElementById("tab__trigger",).onclick = function() {tabOpen()};

function tabOpen() {
    document.getElementById("tab__container").classList.toggle("tab__show");
    document.getElementById("tab__navbar").classList.toggle("tab__hamburger");
    document.getElementById("tab__trigger").classList.toggle("tab__cross");
}