(function(){
    const wrappers = document.querySelectorAll('.size__wrapper');
    const activeClass = 'active';
    const rounds = document.querySelectorAll(".round");
    const tshirts = document.querySelectorAll(".tshirt_view");

    wrappers.forEach(function(wrapper){
        wrapper.addEventListener("click", function(e){

            if(!wrapper.hasAttribute("data-disabled")){
                wrappers.forEach(function(link ){
                    link.classList.remove(activeClass);
                });
                wrapper.classList.add(activeClass);
            }
        });
    });


    rounds.forEach(function(round){
        round.addEventListener("click", function(){
            let currentRound = round;

            let roundId = currentRound.getAttribute("data-tshirt");

            let currentTshirt = document.querySelector(roundId);

            if(!round.classList.contains(activeClass)){
                rounds.forEach(function(link){
                    link.classList.remove(activeClass);
                });

                tshirts.forEach(function(tshirt){
                    tshirt.classList.remove(activeClass);
                });

                round.classList.add(activeClass);
                currentTshirt.classList.add(activeClass);
            }
        });
    });
}());