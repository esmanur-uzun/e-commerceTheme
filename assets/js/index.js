const toggleBtn = document.querySelector(".toggle-btn")
const toggleBtnIcon = document.querySelector(".toggle-btn i")
const dropdownMenu = document.querySelector(".dropdown_menu")
toggleBtn.onClick= function (){
    dropdownMenu.classList.toggle('open')
}
