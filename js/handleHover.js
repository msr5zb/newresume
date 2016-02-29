$(function() {
    var contentContainer = document.getElementById("content");
    contentContainer.style.opacity = '0';
	contentSelectionCircle = document.getElementsByClassName("circle");
    for(var i=0; i<contentSelectionCircle.length; i++) { 
      contentSelectionCircle[i].addEventListener("mouseover", updateGuide);
    }
    

    function updateGuide($guide) {
        console.dir($guide);
        var contentSelectionCircleChoice = event.target;
        console.dir(contentSelectionCircleChoice);
        //contentSelectionCircleChoice.animate({height: "300px"},2000);
        //contentSelectionCircleChoice.animate({transform: "rotate(180deg)"});
       //contentSelectionCircleChoice.animate([{transform: getComputedStyle(contentSelectionCircleChoice).transform}, {transform: 'rotate(720deg)'}],'slow','swing' );


        $("#aboutMe").on("mouseenter",function(){
                $(this).flippy({
                    color_target: "red",
                    verso:"jippii",
                    duration:"500",
                    direction: "TOP",
                });
                $(".aboutMe").off("mouseenter");
        });
        $(".aboutMe").on("mouseleave",function(){
                $(this).flippyReverse();
                $(".aboutMe").on("mouseenter",function(){
                $(this).flippy({
                    color_target: "red",
                    verso:"jippii",
                    duration:"500",
                    direction: "TOP",
                });
                $(".aboutMe").off("mouseenter");
        });

        });                                
                                             
                                             
                                             
                                             
                                             
    }
});