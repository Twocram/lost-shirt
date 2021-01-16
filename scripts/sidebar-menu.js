(function(){
    const openingBtn = document.querySelector('.sidebar__hamburger');
    const closingBtn = document.querySelector('.sidebar__close');
    const sideBar = document.querySelector('.sidebar');
    
    openingBtn.addEventListener("click", function(){
        sideBar.classList.add('sidebar--opened');
    });
    
    closingBtn.addEventListener('click', function(){
        sideBar.classList.remove('sidebar--opened');
    })
}())
