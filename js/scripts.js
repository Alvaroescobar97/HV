(function(){

    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        let uiux = document.getElementById("ui-ux");
        uiux.addEventListener('click', e=>{
            openModal(uiux);
        });

        let web = document.getElementById("web");
        web.addEventListener('click', e=>{
            openModal(web);
        });

        let ia = document.getElementById("ia");
        ia.addEventListener('click', e=>{
            openModal(ia);
        });

        let cloud = document.getElementById("cloud");
        cloud.addEventListener('click', e=>{
            openModal(cloud);
        });

        let teamwork = document.getElementById("teamwork");
        teamwork.addEventListener('click', e=>{
            openModal(teamwork);
        });
        
        let leadership = document.getElementById("leadership");
        leadership.addEventListener('click', e=>{
            openModal(leadership);
        });

        let creativity = document.getElementById("creativity");
        creativity.addEventListener('click', e=>{
            openModal(creativity);
        });

        let spanish = document.getElementById("spanish");
        spanish.addEventListener('click', e=>{
            openModal(spanish);
        });

        let english = document.getElementById("english");
        english.addEventListener('click', e=>{
            openModal(english);
        });

        
        let close = document.getElementsByClassName("close");
        close[0].addEventListener('click', e=>{
            document.getElementsByClassName("background")[0].style.display="none";
        });

        function openModal(skill){

            let fondo = document.getElementsByClassName("background");
            fondo[0].style.display="block";

            let title = document.getElementsByClassName("title")[0];
            var string = "";
            string = skill.getElementsByClassName("title-skill")[0].innerHTML;
            let text = document.createTextNode(''+string);
            title.append(text);

            return false;
        };  

    
        
    });

})();