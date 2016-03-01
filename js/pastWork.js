     
  $(document).ready(function(){    
        
    console.log('hyvee');
    $("#hyvee").css("boxShadow", "0px 0px 13px white");
    $("#hyvee").css("opacity", "0.93");
    $("#shopnsave").css("boxShadow", "");
    $("#shopnsave").css("opacity", "0.7");
    $("#cellairis").css("boxShadow", "");
    $("#cellairis").css("opacity", "0.7");
    $("#ozellas").css("boxShadow", "");
    $("#ozellas").css("opacity", "0.7");
      
    $(".workBall").click(function(){
        smoothScroll();
        switch(this.id){
            case 'hyvee': {
                console.log('hyvee');
                $("#hyvee").css("boxShadow", "0px 0px 13px white");
                $("#hyvee").css("opacity", "0.93");
                $("#shopnsave").css("boxShadow", "");
                $("#shopnsave").css("opacity", "0.7");
                $("#cellairis").css("boxShadow", "");
                $("#cellairis").css("opacity", "0.7");
                $("#ozellas").css("boxShadow", "");
                $("#ozellas").css("opacity", "0.7");
                $("#workContent").css("opacity", "0.0");
                $("#workContent").html("<h3>HyVee</h3> <h5>Adress: <div class='italics'>Hy-Vee, Rock Bridge Shopping Center, 405 E Nifong Blvd, Columbia, MO 65201</div></h5> <h5>Occupation: <div class='bold'>Night Shift Unloader/Stocker 2015-2016</div></h5> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: Working at Hy-Vee, I gained much experienced with working on a team. Being the night shift, we were responsible to making sure the store was ready by each and every morning. Unloaded Trucks, organized and stocked product. Worked lifts and worked by manager’s side. </h4> <h5 style='margin-bottom:0px;'>Key Experience:</h5> <ul style='margin-left:15px;'> <li>Close Team-Work</li> <li>Utilization of Time</li> <li>Machinery</li> <li>Memorization of Product Placement/Prices</li> <li>Heavy Lifting</li> <li>Long Shifts</li> </ul> </div> <div class='col-md-7 gameOverview' id='hyveeBG'></div> </div> ");
                setTimeout(function(){$("#workContent").css("opacity", "1.0");}, 600);

                break;
            }

            case 'shopnsave': {
                console.log('shopnsave');
                $("#shopnsave").css("boxShadow", "0px 0px 13px white");
                $("#shopnsave").css("opacity", "0.93");
                $("#hyvee").css("boxShadow", "");
                $("#hyvee").css("opacity", "0.7");
                $("#cellairis").css("boxShadow", "");
                $("#cellairis").css("opacity", "0.7");
                $("#ozellas").css("boxShadow", "");
                $("#ozellas").css("opacity", "0.7");
                $("#workContent").css("opacity", "0.0");              
                setTimeout(function(){$("#workContent").html("<h3>Shop 'n' Save</h3> <h5>Adress: <div class='italics'>Shop N Save, 1421 Mexico Loop Rd E, O'Fallon, MO 63366</div></h5> <h5>Occupation: <div class='bold'>Frozen Foods/Unloader 2014-2015</div></h5> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: I assisted many customers. I assisted in unloading morning trucks. Day shifts included maintaining and restocking Frozen Foods/Dairy. Did price checks, intercom calls, and guided customers when in need of help. </h4> <h5 style='margin-bottom:0px;'>Key Experience:</h5> <ul style='margin-left:15px;'> <li>Close Team-Work</li> <li>Utilization of Time</li> <li>Maintenance of Food</li> <li>Rotations</li> <li>Memorization of Product Placement/Prices</li> <li>Heavy Lifting</li> <li>Customer Assistance and Service</li> <li>Intercom</li> </ul> </div> <div class='col-md-7 gameOverview' id='shopnsaveBG'></div> </div> ");}, 600);
                setTimeout(function(){$("#workContent").css("opacity", "1.0");}, 600);

                break;
            }
            case 'cellairis': {
                console.log('cellairis');
                $("#cellairis").css("boxShadow", "0px 0px 13px white");
                $("#cellairis").css("opacity", "0.93");
                $("#shopnsave").css("boxShadow", "");
                $("#shopnsave").css("opacity", "0.7");
                $("#hyvee").css("boxShadow", "");
                $("#hyvee").css("opacity", "0.7");
                $("#ozellas").css("boxShadow", "");
                $("#ozellas").css("opacity", "0.7");
                $("#workContent").css("opacity", "0.0");     
                setTimeout(function(){$("#workContent").html("<h3>Cellairis</h3> <h5>Adress: <div class='italics'>Cellairis, 1600 Mid Rivers Mall Dr., St Peters, MO, 63376</div></h5> <h5>Occupation: <div class='bold'>Sales Rep 2012-2013</div></h5> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: While working at Cellairis I helped customers pick out phone accessories to best fit their needs, as well as provide screen protector services. I distinguished between phone provider's services and products to communicate with customers which products would most suit their position. I was able to improve my social skills and get a better grasp of newer technology kinds of cellular devices in the modern world. </h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Evaluated new technologies, equipment, vendors and product marketability</li> <li>Easily establish rapport with people of all ages, cultures, and beliefs</li> <li> Earned a reputation as a valuable and cooperative coworker by: being fair, honest, and willing to help others when needed; effectively resolving conflicts at appropriate times; and assisting new managers and other staff to become familiar with policy and operations</li> <li> Friendly, personable, and easy to work with</li> <li> Maintained and encouraged customer loyalty through the courteous and efficient resolution of disputes, complaints, and discrepancies</li> </ul> </div> <div class='col-md-7 gameOverview' id='cellairisBG'></div> </div> ");}, 600);
                setTimeout(function(){$("#workContent").css("opacity", "1.0");}, 600);
                break;
            }
            case 'ozellas': {
                console.log('ozellas');
                $("#ozellas").css("boxShadow", "0px 0px 13px white");
                $("#ozellas").css("opacity", "0.93");
                $("#shopnsave").css("boxShadow", "");
                $("#shopnsave").css("opacity", "0.7");
                $("#cellairis").css("boxShadow", "");
                $("#cellairis").css("opacity", "0.7");
                $("#hyvee").css("boxShadow", "");
                $("#hyvee").css("opacity", "0.7");
                $("#workContent").css("opacity", "0.0");  
                setTimeout(function(){$("#workContent").css("opacity", "1.0");}, 600);
                setTimeout(function(){$("#workContent").html("<h3>O'Zellas</h3> <h5>Adress: <div class='italics'>O'Zellas, 468 Highway P, O'Fallon, Missouri, 63366</div></h5> <h5>Occupation: <div class='bold'>Jack-of-all-trades 2010-2012</div></h5> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: Within the workplace I took care of preparing ingredients and food to be served to the customers. I made pizzas and verified that food met requirements for quality and quantity. I also took care of ensuring that food preparation areas, cooking surfaces, and utensils were up to and above average cleaning standards. </h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Working at O'Zellas was my first job. This being said, I learned for the first time how the workplace worked.</li> <li>The years I have spent at O'Zellas have undoubtedly allowed me to gain skills in working well with others and dealing well with customers.</li> <li> Developed team building skills and the ability to overcome obstacles under pressure.</li> </ul> </div> <div class='col-md-7 gameOverview' id='ozellasBG'></div> </div> ");}, 600);
                break;
            }
        }
        
    function smoothScroll() {
       $('html, body').animate({
           scrollTop: $("#navigation").offset().top
        }, 400);
    }
        //$("#workContent").css("opacity", "0.0");
       // smoothScroll();
        
    });  
  });  
    