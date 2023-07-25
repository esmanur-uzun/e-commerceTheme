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

// $(window).scroll(function() {
// 	var $height = $(window).scrollTop();
//   if($height > 80) {
// 		// $(".menu-bar").css("position","fixed")
// 	} 
//     else if($height <50){
//         $(".d").css("background-color","blue")
//     }
// });