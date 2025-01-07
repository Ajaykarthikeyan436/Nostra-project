//Selecting ad Section
var ad = document.getElementById("ad_section")
var closead = document.getElementById("close_ad")

closead.addEventListener("click",function(){
    ad.style.display = "none"
})

//Selecting Side nav,Menu icon
var sidenav = document.getElementById("side_nav")
var menu = document.getElementById("menuicon")

menu.addEventListener("click", function () {
    sidenav.style.left = 0;
})

//Selecting Close Navbar
var closenav = document.getElementById("close_nav")

closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%";
})



