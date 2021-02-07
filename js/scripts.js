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

        let html_css = document.getElementById("html_css");
        html_css.addEventListener('click', e=>{
            openModal(html_css);
        });

        let java = document.getElementById("java");
        java.addEventListener('click', e=>{
            openModal(java);
        });

        let c_sharp = document.getElementById("c-sharp");
        c_sharp.addEventListener('click', e=>{
            openModal(c_sharp);
        });

        let js = document.getElementById("js");
        js.addEventListener('click', e=>{
            openModal(js);
        });

        let close = document.getElementsByClassName("close");
        close[0].addEventListener('click', e=>{
            document.getElementsByClassName("background")[0].style.display="none";
            document.getElementsByClassName("title")[0].innerHTML = " ";
        });

        

        function openModal(skill){

            let fondo = document.getElementsByClassName("background");

            fondo[0].style.display="block";

            let title = document.getElementsByClassName("title")[0];

            var string = "";

            string = skill.getElementsByClassName("title-skill")[0].innerHTML;

            let h2 = document.createElement("h2");

            let text = document.createTextNode(string);

            h2.append(text);

            title.append(h2);

            return false;
        };  

    
        
    });

})();