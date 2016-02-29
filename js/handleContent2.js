$(function() {
    var contentContainer = document.getElementById("content");
    contentContainer.style.opacity = '0';
	contentSelectionCircle = document.getElementsByClassName("circle");
    for(var i=0; i<contentSelectionCircle.length; i++) { 
      contentSelectionCircle[i].addEventListener("click", updateGuide);
      contentSelectionCircle[i].addEventListener("click", smoothScroll);


    }
    
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } 
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        setTimeout(function(){ contentContainer.style.opacity = '1.0'; }, 600);


        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            setTimeout(function(){ contentContainer.innerHTML = xmlhttp.responseText;}, 600);

        }
    };
    xmlhttp.open("GET","ajaxRequests/aboutMe.html",true);
    xmlhttp.send();
        

    function updateGuide($guide) {
        console.dir($guide);
        var contentSelection = event.target.attributes.id.value;
        contentContainer.style.opacity = '0';

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } 
        else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function() {
            setTimeout(function(){ contentContainer.style.opacity = '1.0'; }, 600);


            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                setTimeout(function(){ contentContainer.innerHTML = xmlhttp.responseText;}, 600);

            }
        };
        xmlhttp.open("GET","ajaxRequests/" + contentSelection + ".html",true);
        xmlhttp.send();
    }
    
   function smoothScroll() {
       console.dir('smoooooth');
           $('html, body').animate({
        scrollTop: $("#content").offset().top
    }, 1000);
   }
    
    
});