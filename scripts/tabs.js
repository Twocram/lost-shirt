(function(){
   const controlls = document.querySelectorAll('.filter__item');
   const activeClass = 'filter__item--active';
   const tabsItems = document.querySelectorAll(".tabs-item");

   controlls.forEach(function(control){
       control.addEventListener("click", function(){

           let currentBtn = control;

           let tabId = currentBtn.getAttribute('data-tab');

           let currentTab = document.querySelector(tabId);

           if(!currentTab.classList.contains('active')){
            controlls.forEach(function(link){
                link.closest('.filter__item').classList.remove(activeClass);
            });
 
            tabsItems.forEach(function(item){
                item.classList.remove('active');
            })
 
            control.closest('.filter__item').classList.add(activeClass);
            currentTab.classList.add('active');
           }
        });
   });

   document.querySelector('.filter__item').click();
}());
