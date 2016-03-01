$(document).ready(function(){
    
      $( "#enterSite" ).click(function() {
            
               $('.repeatingBG').css('opacity','0');
                setTimeout(function(){ $('.repeatingBG').remove(); }, 600);
               
                setTimeout(function(){ $('#contentContainer').css('visibility','visible'); }, 600);
               setTimeout(function(){ $('#contentContainer').css('opacity','1'); }, 600);
              
                 
        });

    
            function entersite() {
                console.log("Entering Site . . .");
              $('#splash').css('visibility','hidden');
            }
            
       
            
            
            
            
            
            
            
            //Returns an Unique Random Number
            var uniqueRandoms = [];
            var numRandoms = 10;
            function makeUniqueRandom() {
                if (!uniqueRandoms.length) {
                    for (var i = 0; i < numRandoms; i++) {
                        uniqueRandoms.push(i);
                    }
                }
                var index = Math.floor(Math.random() * uniqueRandoms.length);
                var val = uniqueRandoms[index];
                uniqueRandoms.splice(index, 1);
                return val;

            }
            
            
            //Adjective Word Array
            var wordArray = ["Amazing.", "Brilliant.", 
                                  "Significant.", "Memorable.", 
                                  "Breath-Taking.", "Genius.", 
                                  "Creative.", "Fun.", "World-Changing.", 
                                  "Ground-Breaking."];
            //fill Word
            var word = wordArray[makeUniqueRandom()];
            $("#changingAdjective").html(word);
            
            //Set on Interval
            var tid = setInterval(mycode, 3200);
            function mycode() {
                
                $('#changingAdjective').css('opacity','0');
                word = wordArray[makeUniqueRandom()];
                setTimeout(function(){ $("#changingAdjective").html(word); }, 600);
                setTimeout(function(){ $('#changingAdjective').css('opacity','1'); }, 1000);
                
            }
            function abortTimer() { // to be called when you want to stop the timer
              clearInterval(tid);
            }
    
    
 function preloader() {
        if (document.images) {
            var img1 = new Image();
            var img2 = new Image();
            var img3 = new Image();
            var img4 = new Image();
            var img5 = new Image();
            var img6 = new Image();
            var img7 = new Image();
            var img8 = new Image();
            var img9 = new Image();
            var img10 = new Image();
            var img11 = new Image();
            var img12 = new Image();
            var img13 = new Image();
            var img14 = new Image();
            var img15 = new Image();
            var img16 = new Image();
            var img17 = new Image();
            var sliderb1 = new Image();
            var sliderb2 = new Image();
            var sliderb3 = new Image();
            var sliderb4 = new Image();
            var sliderb5 = new Image();
            var sliderb6 = new Image();
            var sliderb7 = new Image();
            var sliderb8 = new Image();
            var sliderb9 = new Image();
            var sliderb10 = new Image();
            var sliderb11 = new Image();
           
            
         

            img1.src = "images/stchas.jpg";
            img2.src = "images/mizzou.jpg";
            img3.src = "images/fzn.jpg";
            img4.src = "images/sliderPics/postgres.jpg";
            img5.src = "images/sliderPics/jquery.jpg";
            img6.src = "images/sliderPics/javascript.jpg";
            img7.src = "images/sliderPics/java.jpg";
            img8.src = "images/sliderPics/html5.jpg";
            img9.src = "images/sliderPics/css3.jpg";
            img10.src = "images/sliderPics/cplusplus.jpg";
            img11.src = "images/sliderPics/c.jpg";
            img12.src = "images/sliderPics/ajax.jpg";
            img13.src = "images/sliderPics/php.jpg";
            img14.src = "images/loading.gif";
            img15.src = "images/a22.png";
            img16.src = "images/b05.png";
            img17.src = "images/sliderPics/microcontroller.jpg";
            
            
            
            
            var gameimg = new Image();
            var dnimg = new Image();
            var myzouimg = new Image();
            var reelzimg = new Image();

            gameimg.src = "images/projects/game1.jpg";
            dnimg.src = "images/projects/dn1.jpg";
            myzouimg.src = "images/projects/myzou1.jpg";
            reelzimg.src = "images/projects/reelz1.jpg";            
            
            var hyvee = new Image();
            var shopnsave = new Image();
            var cellairis = new Image();
            var ozellas = new Image();
   
            hyvee.src = "images/hyveeBG2.jpg";
            shopnsave.src = "images/shopnsaveBG2.jpg";
            cellairis.src = "images/cellairisBG2.jpg";
            ozellas.src = "images/ozellasBG2.jpg"; 
            
            sliderb1.src = "images/sliderPics/laravel.jpg";
            sliderb2.src = "images/sliderPics/virtualBox.jpg";
            sliderb3.src = "images/sliderPics/vmware.jpg";
            sliderb4.src = "images/sliderPics/office.jpg";
            sliderb5.src = "images/sliderPics/vegasPro.jpg";
            sliderb6.src = "images/sliderPics/ps.jpg";
            sliderb7.src = "images/sliderPics/netbeans.jpg";
            sliderb8.src = "images/sliderPics/github.jpg";
            sliderb9.src = "images/sliderPics/sourcetree.jpg";
            sliderb10.src = "images/sliderPics/openshift.jpg";
            sliderb11.src = "images/sliderPics/azure.jpg";
        }
    }
    
    function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    }
    
    addLoadEvent(preloader);     
    
    function smoothScroll() {
       $('html, body').animate({
           scrollTop: $("#navigation").offset().top
        }, 1000);
    }
    
    function clearNavs() {
        $('#aboutMeLi').parent().removeClass("active");
        $('#educationLi').parent().removeClass("active");
        $('#experienceLi').parent().removeClass("active");
        $('#projectsLi').parent().removeClass("active");
        $('#pastWorkLi').parent().removeClass("active");
        $('#pastCourseWorkLi').parent().removeClass("active");
        
        $('#aboutMe').css("background-image", "url(images/navbg1.jpg");
        $('#education').css("background-image", "url(images/navbg1.jpg");
        $('#experience').css("background-image", "url(images/navbg1.jpg");
        $('#projects').css("background-image", "url(images/navbg1.jpg");
        $('#pastWork').css("background-image", "url(images/navbg1.jpg");
        $('#pastCourseWork').css("background-image", "url(images/navbg1.jpg");
    }
    
   function load_projectsJS()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'js/projects.js';
      head.appendChild(script);
   }    
   function load_pastWorkJS()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'js/pastWork.js';
      head.appendChild(script);
   }   
   function load_pastCourseWorkJS()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'js/pastCourseWork.js';
      head.appendChild(script);
   }   
    
    function load_educationJS()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'js/education.js';
      head.appendChild(script);
   }
    
   function load_sliderSubJS()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'js/jssor.slider.mini.js';
      head.appendChild(script);
       
       
       var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'js/sliderSub.js';
      head.appendChild(script);

   }
    
    var contentSelection;

    
            $('#content').html("<h1>About Me!</h1> <div id='aboutMeContent'> <h3><strong>Personal Information:</strong></h3><h4><strong>Name: </strong>Michael Rallo</h4><h4><strong>Age: </strong>22</h4><h4><strong>Address:</strong> 5024 Clark Ln. Apt. No. 101 Columbia, Missouri 65202</h4> <h4><strong>Phone Number:</strong> (314)-322-0042</h4> <h4><h3><strong>Email:</strong></h3> rallomikework@gmail.com</h4> <h4><h3><strong>Career Objective:</strong></h3> I am approaching my final year studying <strong><i>Bachelor of Computer Science at the University of MissouriColumbia.</i></strong> I am seeking a position in the Software Engineering/Web Development field where I can utilize my knowledge of programming languages, layout, design, and documentation to help meet and exceed the company’s goals to achieve something significant and memorable.</h4> <h3><strong>Introduction:</strong></h3><h4> Hello! My name is Michael Rallo. Born and raised in O'Fallon, Missouri, I am a Computer Science student enrolled at the University of Missouri-Columbia. I enjoy programming, designing, and experimenting with new things. Flexible, friendly, and look foward to developing with a fun, hard-working team. </h4> <h4>Currently I am looking for an internship in the Redmond/Lynnwood/Seattle (WA) Area; for after graduation (May 2017) I plan to relocate there. </h4><h4>Quick Resumee Print-Out:</h4> <h5><button type='button' onclick='window.open(\"resume.pdf\");' id='printPDFButton' class='btn btn-primary'>View/Print Resume !</button></h5> <!-- Looks foward to accomplishing big things that can change the world. --> </div>  ");
        
    
    $(".loader").click(function(){
        console.log("boom");
        contentSelection = this.id;
        console.log(contentSelection);
        

        
        clearNavs();
        
        
        smoothScroll();
         $("#content").css("opacity", "0.0");
        
        
        if(contentSelection == 'aboutMe' || contentSelection == 'aboutMeLi'){
            $('#aboutMeLi').parent().addClass('active');
            $('#aboutMe').css("background-image", "url(images/navbg2.jpg");
            setTimeout(function(){
            $('#content').html("<h1>About Me!</h1> <div id='aboutMeContent'> <h3><strong>Personal Information:</strong></h3><h4><strong>Name: </strong>Michael Rallo</h4><h4><strong>Age: </strong>22</h4><h4><strong>Address:</strong> 5024 Clark Ln. Apt. No. 101 Columbia, Missouri 65202</h4> <h4><strong>Phone Number:</strong> (314)-322-0042</h4> <h4><h3><strong>Email:</strong></h3> rallomikework@gmail.com</h4> <h4><h3><strong>Career Objective:</strong></h3> I am approaching my final year studying <strong><i>Bachelor of Computer Science at the University of MissouriColumbia.</i></strong> I am seeking a position in the Software Engineering/Web Development field where I can utilize my knowledge of programming languages, layout, design, and documentation to help meet and exceed the company’s goals to achieve something significant and memorable.</h4> <h3><strong>Introduction:</strong></h3><h4> Hello! My name is Michael Rallo. Born and raised in O'Fallon, Missouri, I am a Computer Science student enrolled at the University of Missouri-Columbia. I enjoy programming, designing, and experimenting with new things. Flexible, friendly, and look foward to developing with a fun, hard-working team. </h4> <h4>Currently I am looking for an internship in the Redmond/Lynnwood/Seattle (WA) Area; for after graduation (May 2017) I plan to relocate there. </h4><h4>Quick Resumee Print-Out:</h4> <h5><button type='button' onclick='window.open(\"resume.pdf\");' id='printPDFButton' class='btn btn-primary'>View/Print Resume !</button></h5> <!-- Looks foward to accomplishing big things that can change the world. --> </div>  ");
        
        }, 600);}
        if(contentSelection == 'education' || contentSelection == 'educationLi'){
            $('#educationLi').parent().addClass('active');
            $('#education').css("background-image", "url(images/navbg2.jpg");
            setTimeout(function(){
                 load_educationJS();
                
         $('#content').html("<h1>Education!</h1> <h5>Majors: Computer Science, Computer Engineering </h5> <h5>Minor: Mathematics</h5> <hr><hr> <div class='workBallContainer'> <div class='workBall' id='mizzouNew'></div> <div class='workBall' id='lindenwoodNew'></div> </div> <div class='workBallContainer'> <div class='workBall' id='sccNew'></div> <div class='workBall' id='fznNew'></div> </div> <div id='workContent'> <h2><a href='http://missouri.edu/' target='_blank' class='schoolLink'>University of Missouri-Columbia</a></h2> <h5><div class='italics'>Columbia, MO 65211</div></h5> <h4><div class='bold'>Currently Enrolled:Senior</div></h4> <h4>GPA: 3.74/4.00 | <a href='http://registrar.missouri.edu/grades-calculators/grading-system.php' target='_blank'>Grading Scale Here</a></h4> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: My Time spent at Mizzou was the most impactful education I have recieved for the Computer Science Field. Mizzou taught me the ins-and-outs of what goes into ideal, efficient programming development. I have learned the important things that go into the development and construction of good programming. Most importantly, I leanred how to collaborated with others in my field.</h4> <h5 style='margin-bottom:0px;'>Highlights:</h5> <ul style='margin-left:15px;'> <li>Intensive Algorithm Design</li> <li>Learned/Applied Multiple Programming Languages</li> <li>Worked with PostgreSQL servers and the PHP/SQL language.</li> <li>Designed and Developed Web Apps with PHP, Html5, SQL, JavaScript, jQuery, and the Laravel Framework</li> <li>Developed Applications in Java including audio and visual apps.</li> <li>Worked with GitHub on many Assignments and Team Projects</li> <li> Have Collaborated with Groups to Create, Document, and Implement Multiple Applications</li> <li> Developed Countless C Programs that Manipulate Data, Files, Bits, and more via pointers, arrays, structures, etc. </li> </ul> </div> <div class='col-md-7 gameOverview' id='mizzouNewBG'></div> </div> </div>");
            }, 600);
            
        }
        
        if(contentSelection == 'experience' || contentSelection == 'experienceLi'){
            $('#experienceLi').parent().addClass('active');
            $('#experience').css("background-image", "url(images/navbg2.jpg");
             setTimeout(function(){
                 
                 load_sliderSubJS();
                 
                
         $('#content').html("<link rel='stylesheet' type='text/css' href='css/sliderJS.css' /> <!-- use jssor.slider.debug.js instead for debug --> <button type='button' id='sliderButton1' class='btn btn-primary sliderButton'>Programming Languages</button> <button type='button' id='sliderButton2' class='btn btn-primary sliderButton'>Applications</button> <div id='sliderContent'> <!-- Slide Container --> <div id='jssor_1' style='position: relative; margin: 0 auto; top: 0px; left: 0px; width: 960px; height: 420px; overflow: hidden; visibility: hidden;'> <!-- Loading Screen --> <div data-u='loading' style='position: absolute; top: 0px; left: 0px;'> <div style='filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;'></div> <div style='position:absolute;display:block;background:url('images/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;'></div> </div> <!-- ************* Start Slides ************* --> <div data-u='slides' style='cursor: default; position: relative; top: 0px; left: 0px; width: 960px; height: 420px; overflow: hidden;'> <!--Slide 1 --> <div data-p='225.00' style='display: none;'> <img data-u='image' src='images/sliderPics/java.jpg' /> <div style='position: absolute; top: 50px; left: 450px; width: 480px; height: 120px; font-size: 30px; color: #ffffff; line-height: 38px;'> Knowledge in object creation and manipulation, theading, structures, hash maps, and much more. Has worked with JavaFX as well. </div> </div> <!--Slide 2 --> <div data-p='225.00' style='display: none;'> <img data-u='image' src='images/sliderPics/javascript.jpg' /> <div style='position: absolute; top: 250px; left: 50px; width: 480px; height: 120px; font-size: 30px; color: #ffffff; line-height: 38px;'> Object and file manipulation, effects and transitions. </div> </div> <!--Slide 3 --> <div data-p='225.00' style='display: none;'> <img data-u='image' src='images/sliderPics/c.jpg' /> <div style='position: absolute; top: 80px; left: 50px; width: 480px; height: 120px; font-size: 30px; color: #ffffff; line-height: 38px;'> Thoroughly worked with sorting and searching algorithms including binary trees and merge sorts. Knows how to allocate memory where needed and create header/make files. </div> </div> <!--Slide 4 --> <div data-p='225.00' style='display: none;'> <img data-u='image' src='images/sliderPics/cplusplus.jpg' /> <div style='position: absolute; top: 80px; left: 50px; width: 480px; height: 120px; font-size: 30px; color: #ffffff; line-height: 38px;'> Experience with file input and output. Knowledge of function/structure creation. </div> </div> <!--Slide 5 --> <div data-p='225.00' style='display: none;'> <img data-u='image' src='images/sliderPics/php.jpg' /> <div style='position: absolute; top: 260px; left: 120px; width: 740px; height: 120px; font-size: 28px; color: #ffffff; line-height: 36px;'> Experienced with creating log-in systems using PHP and sessions. Have made small site commenting systems. Knows how to manipulate data and can do basic algorithms retrieving data from databases. </div> </div> <!--Slide 6 --> <div data-p='225.00' style='display: none;'> <img data-u='image' src='images/sliderPics/postgres.jpg' /> <div style='position: absolute; top: 180px; left: 450px; width: 480px; height: 120px; font-size: 30px; color: #ffffff; line-height: 38px;'> Ability to create databases. Knowledge of schema and table construction and how to write queries, as well as indexing. </div> </div> <!--Slide 7 --> <div data-p='225.00' style='display: none;'> <img data-u='image' src='images/sliderPics/html5.jpg' /> <div style='position: absolute; top: 160px; left: 50px; width: 480px; height: 120px; font-size: 30px; color: #ffffff; line-height: 38px;'> Experience with site design and creation. Knows how to link libraries and use classes/id’s correctly. </div> </div> <!--Slide 8 --> <div data-p='225.00' style='display: none;'> <img data-u='image' src='images/sliderPics/css3.jpg' /> <div style='position: absolute; top: 160px; left: 50px; width: 480px; height: 120px; font-size: 30px; color: #ffffff; line-height: 38px;'> Much knowledge in site design, styling, animations, and transitions. </div> </div> <!--Slide 9 --> <div data-p='225.00' style='display: none;'> <img data-u='image' src='images/sliderPics/ajax.jpg' /> <div style='position: absolute; top: 60px; left: 120px; width: 740px; height: 120px; font-size: 28px; color: #ffffff; line-height: 36px;'> Knowledge in how to use ajax calls to retrieve data from particular file formats (http, xml, json) and use that data to populate objects. </div> </div> <!--Slide 10 --> <div data-p='225.00' style='display: none;'> <img data-u='image' src='images/sliderPics/jquery.jpg' /> <div style='position: absolute; top: 180px; left: 450px; width: 480px; height: 120px; font-size: 30px; color: #ffffff; line-height: 38px;'> Can Create on-load functions and extract/manipulate DOM objects. </div> </div> <!--Slide 11 --> <div data-p='225.00' style='display: none;'> <img data-u='image' src='images/sliderPics/microController.jpg' /> <div style='position: absolute; top: 50px; left: 450px; width: 480px; height: 120px; font-size: 30px; color: #ffffff; line-height: 38px;'> Worked with Assembly Language for the Motorola MC68HC11 microcontroller. Experience with register/stack manipulation as well as I/O. </div> </div> </div> <!-- ************* End Slides ************* --> <!-- Bullet Navigator --> <div data-u='navigator' class='jssorb05' style='bottom:16px;right:16px;' data-autocenter='1'> <!-- bullet navigator item prototype --> <div data-u='prototype' style='width:16px;height:16px;'></div> </div> <!-- Arrow Navigator --> <span data-u='arrowleft' class='jssora22l' style='top:0px;left:12px;width:40px;height:58px;' data-autocenter='2'></span> <span data-u='arrowright' class='jssora22r' style='top:0px;right:32px;width:40px;height:58px;' data-autocenter='2'></span> </div> </div>");
            }, 600);
        }
        
        if(contentSelection == 'pastWork' || contentSelection == 'pastWorkLi'){
            $('#pastWorkLi').parent().addClass('active');
            $('#pastWork').css("background-image", "url(images/navbg2.jpg");
             setTimeout(function(){
                load_pastWorkJS();
         $('#content').html(" <h1>Past Work!</h1> <div class='workBallContainer'> <div class='workBall' id='hyvee'></div> <div class='workBall' id='shopnsave'></div> </div><div class='workBallContainer'> <div class='workBall' id='cellairis'></div> <div class='workBall' id='ozellas'></div> </div> <div id='workContent'> <h3>HyVee</h3> <h5>Adress: <div class='italics'>Hy-Vee, Rock Bridge Shopping Center, 405 E Nifong Blvd, Columbia, MO 65201</div></h5> <h5>Occupation: <div class='bold'>Night Shift Unloader/Stocker 2015-2016</div></h5> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: Working at Hy-Vee, I gained much experienced with working on a team. Being the night shift, we were responsible to making sure the store was ready by each and every morning. Unloaded Trucks, organized and stocked product. Worked lifts and worked by manager’s side. </h4> <h5 style='margin-bottom:0px;'>Key Experience:</h5> <ul style='margin-left:15px;'> <li>Close Team-Work</li> <li>Utilization of Time</li> <li>Machinery</li> <li>Memorization of Product Placement/Prices</li> <li>Heavy Lifting</li> <li>Long Shifts</li> </ul> </div> <div class='col-md-7 gameOverview' id='hyveeBG'></div> </div> </div>");
            }, 600);
        }
        if(contentSelection == 'projects' || contentSelection == 'projectsLi'){
            $('#projectsLi').parent().addClass('active');
            $('#projects').css("background-image", "url(images/navbg2.jpg");
             setTimeout(function(){
                load_projectsJS();
                 
         $('#content').html(" <h1>Projects!</h1> <div class='projectPreviewContainer'> <div class='projectPreview' id='game'></div> <div class='projectPreview' id='dnfansite'></div> </div> <div class='projectPreviewContainer'> <div class='projectPreview' id='myzou'></div> <div class='projectPreview' id='reelz'></div> </div> <div id='projectContent'> <h3>Visualizer Game (Solo Project)</h3> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: This game was developed entirely using Java. It utilizes JavaFX to give the user a nice Interface. Is user friendly, and allows users to a variety of levels, bands, and variety of functions.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Ultilizes Java's Extensive libraries on visual Effects</li> <li>Made using JavaFX</li> <li>Personal Song Selection</li> <li>HighScores</li> <li>Multiple Levels</li> <li>Can Pause Mid-Session</li> <li>Demonstrates Threading via enemies!</li> <li>Enemies Randomly Spawn</li> <li>Multiple Bands Selection</li> <li>Live/Fluid Transitions between levels</li> </ul> <h5>How it Works: Simply open a music file by going to File>Open and select your song. Then, Choose a level to play on while the song is playing. Enjoy :)</h5> <h5>Download Here: <a onclick='window.open('Msr5zbGameVisualizer.jar');'>Game Download</a></h5> </div> <div class='col-md-7 gameOverview' id='gameBackground'></div> </div> </div>");
                 
            }, 600);
            
            
        }
        
        
        if(contentSelection == 'pastCourseWork' || contentSelection == 'pastCourseWorkLi'){
            $('#pastCourseWorkLi').parent().addClass('active');
            $('#pastCourseWork').css("background-image", "url(images/navbg2.jpg");
             setTimeout(function(){
                load_pastCourseWorkJS();
         $('#content').html("<h1>Past Course Work!</h1> <div class='projectPreviewContainer'> <div class='projectPreview' id='coreCourses'></div> <div class='projectPreview' id='operatingSystems'></div> </div> <div class='projectPreviewContainer'> <div class='projectPreview' id='computerRepair'></div> <div class='projectPreview' id='math'></div> </div> <div id='projectContent'><h3>Core Programming Courses</h3> <div class='row'> <div class='col-md-12' id='projectContentAlign'> <div class='course'> <div class='courseName'>Java - Intermediate</div> <div class='courseNumber'>Computer Science CS3330 <span class='courseMetaData'> | Spring 2015 | Dale Mussuer | Mizzou</span></div> <div class='courseDescription'>Java Application Development. Used NetBeans and JavaFX to develop user friendly interface applications.</div> </div> <hr><div class='course'> <div class='courseName'>Database</div> <div class='courseNumber'>Computer Science CS3380 <span class='courseMetaData'> | Spring 2015 | Kleric | Mizzou</span></div> <div class='courseDescription'>Discussed and Developed algorithms for efficient, effective programming.</div> </div> <hr><div class='course'> <div class='courseName'>Software Engineering</div> <div class='courseNumber'>Computer Science CS4320 <span class='courseMetaData'> | Fall 2015 | Grant Scott | Mizzou</span></div> <div class='courseDescription'>Learned the processes that go into Application Development. Gained great experience in Requirements Analysis, Documentation, and team work.</div> </div> <hr><div class='course'> <div class='courseName'>Web Development</div> <div class='courseNumber'>Computer Science CS2830 <span class='courseMetaData'> | Fall 2015 | Justin Schuelar | Mizzou</span></div> <div class='courseDescription'>Created Multiple Web Applications that utilized HTML5, CS3, Javascripting, JQuery, and Ajax. Also worked with Site hosting.</div> </div> <hr><div class='course'> <div class='courseName'>Assembly Language</div> <div class='courseNumber'>Computer Science CS3280 <span class='courseMetaData'> | Fall 2015 | Michael Yursky | Mizzou</span></div> <div class='courseDescription'>Programmed for the Motorola MC68HC11 micro-controller. Learned about processor architecture and byte manipulation.</div> </div><hr> <div class='course'> <div class='courseName'>C Programming</div> <div class='courseNumber'>Computer Science CS2050 <span class='courseMetaData'>| Fall 2014 | Joe Guilliams | Mizzou</span></div> <div class='courseDescription'>Developed Programs in the C Language. Discussed algorithms and pointer math..</div> </div> <hr><div class='course'> <div class='courseName'>C++ - Intermediate</div> <div class='courseNumber'>Computer Science CCSC 24400 <span class='courseMetaData'>| Spring 2014 | Vandyke | Lindenwood</span></div> <div class='courseDescription'>Developed Many applications that would Manipulate data and files. Learned C++ syntax and structures.</div> </div> <hr><div class='course'> <div class='courseName'>Java - Beginner</div> <div class='courseNumber'>Computer Science CCPT 284 <span class='courseMetaData'>| Fall 2013 | Rex | SCC</span></div> <div class='courseDescription'>Learned Basics of Java. Object Creation, Manipulation, Standard Libraries, and more.</div> </div> </div> </div> </div>");
            }, 600);
        }
        
        
        
                setTimeout(function(){$("#content").css("opacity", "1.0");}, 600);
                $('#content').css("height", "auto");
       
       
    });   
  
    
});

