(function(){

    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        console.log("hola2");

        
        let skill = document.querySelectorAll(".one-skill");

        skill.forEach(sk => {
            sk.addEventListener("click", function(sk){

                console.log(skill);

                var skills;
                skills.push(skill);

                /*
                skill.forEach(e => {
                    console.log(e);
                    var i = 0;
                    e.setAttribute("id", "id"+i);
                    i=i+1;
                });
                */
            }());
        });

        function openSkill(){
            
            console.log(skill);
        
        };
        
    });

})();