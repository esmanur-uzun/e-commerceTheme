const toggleBtn = document.querySelector(".toggle-btn")
const toggleBtnIcon = document.querySelector(".toggle-btn i")
const dropdownMenu = document.querySelector(".dropdown_menu")
toggleBtn.addEventListener("click",()=>{
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa fa-times'
    : 'fa fa-bars'
})

$(document).ready(function(){
    $(".exercise").waypoint(function(){
        $(".train").animate({opacity: '1'},800)
    });
    $(".notification").waypoint(function(){
        $(".train").css("opacity","0.5")
    })
    $('.parallax-window').parallax({imageSrc: './assets/medias/fachry-zella-devandra-Yta-zdP9PVM-unsplash.jpg'});
    $(".t-feature").waypoint(function(){
        $(".animate-img").addClass("animate__animated animate__fadeInUp")
    })
})
