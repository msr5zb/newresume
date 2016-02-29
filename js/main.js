$(document).ready(function(){
    
    
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
           scrollTop: $("#content").offset().top
        }, 1000);
    }
    
    var contentSelection;

    
            $('#content').html("<h1>About Me!</h1> <div id='aboutMeContent'> <h5><strong>Name:</strong> Michael Rallo</h5> <h5><strong>Address:</strong> 5024 Clark Ln. Apt. No. 101 Columbia, Missouri 65202</h5> <h5><strong>Phone Number:</strong> (314)-322-0042</h5> <h5><strong>Email:</strong> rallomikework@gmail.com</h5> <h5><strong>Career Objective:</strong> I am approaching my final year studying Bachelor of Computer Science at the University of MissouriColumbia. I am seeking a position in the Software Engineering/Web Development field where I can utilize my knowledge of programming languages, layout, design, and documentation to help meet and exceed the company’s goals. I aim to excel with hard work and dedication, as reflected in my academic achievements, making me an ideal candidate for this position.</h5> <h5> Hello! My name is Michael Rallo. Born and raised in O'Fallon, Missouri, I am a Computer Science student enrolled at the University of Missouri-Columbia. I enjoy programming, designing, and experimenting with new things. Flexible, friendly, and look foward to developing with a fun, hard-working team. </h5> <h5>Currently I am looking for an internship in the Redmond/Lynnwood/Seattle (WA) Area; for after graduation (May 2017) I plan to relocate there. </h5><h5>Quick Resumee Print-Out:</h5> <h5><button type='button' onclick='window.open(\"resume.pdf\");' id='printPDFButton' class='btn btn-primary'>View/Print Resume !</button></h5> <!-- Looks foward to accomplishing big things that can change the world. --> </div> ");
        
    
    $(".loader").click(function(){
        console.log("boom");
        contentSelection = this.id;
        console.log(contentSelection);
        
        $('#aboutMeLi').parent().removeClass("active");
        $('#educationLi').parent().removeClass("active");
        $('#experienceLi').parent().removeClass("active");
        $('#projectsLi').parent().removeClass("active");
        $('#pastWorkLi').parent().removeClass("active");
         
        
        smoothScroll();
         $("#content").css("opacity", "0.0");
        
        
        if(contentSelection == 'aboutMe' || contentSelection == 'aboutMeLi'){
            $('#aboutMeLi').parent().addClass('active');
            setTimeout(function(){
            $('#content').html("<h1>About Me!</h1> <div id='aboutMeContent'> <h5><strong>Name:</strong> Michael Rallo</h5> <h5><strong>Address:</strong> 5024 Clark Ln. Apt. No. 101 Columbia, Missouri 65202</h5> <h5><strong>Phone Number:</strong> (314)-322-0042</h5> <h5><strong>Email:</strong> rallomikework@gmail.com</h5> <h5><strong>Career Objective:</strong> I am approaching my final year studying Bachelor of Computer Science at the University of MissouriColumbia. I am seeking a position in the Software Engineering/Web Development field where I can utilize my knowledge of programming languages, layout, design, and documentation to help meet and exceed the company’s goals. I aim to excel with hard work and dedication, as reflected in my academic achievements, making me an ideal candidate for this position.</h5> <h5> Hello! My name is Michael Rallo. Born and raised in O'Fallon, Missouri, I am a Computer Science student enrolled at the University of Missouri-Columbia. I enjoy programming, designing, and experimenting with new things. Flexible, friendly, and look foward to developing with a fun, hard-working team. </h5> <h5>Currently I am looking for an internship in the Redmond/Lynnwood/Seattle (WA) Area; for after graduation (May 2017) I plan to relocate there. </h5><h5>Quick Resumee Print-Out:</h5> <h5><button type='button' onclick='window.open(\"resume.pdf\");' id='printPDFButton' class='btn btn-primary'>View/Print Resume !</button></h5> <!-- Looks foward to accomplishing big things that can change the world. --> </div> ");
        
        }, 600);}
        if(contentSelection == 'education' || contentSelection == 'educationLi'){
            $('#educationLi').parent().addClass('active');
            setTimeout(function(){
                
         $('#content').html("<h2>Education!</h2> <h5>Majors: Computer Science, Computer Engineering </h5> <h5>Minor: Mathematics</h5> <hr><hr> <h3><a href='http://missouri.edu/' target='_blank' class='schoolLink'>University of Missouri-Columbia</a></h3> <h6>Columbia, MO 65211</h6> <div id='mizzou'></div> <h3>Currently Enrolled:Senior</h3> <h5>GPA: 3.74/4.00 | <a href='http://registrar.missouri.edu/grades-calculators/grading-system.php'></a></h5> <hr><hr> <h3><a href='https://www.stchas.edu/' target='_blank' class='schoolLink'>St. Charles Community College</a></h3> <h6>4601 Mid Rivers Mall Dr, Cottleville, MO 63376</h6> <div id='stchas'></div> <h3>Obtained Degree: Associate of Arts (May 2013)</h3> <h5>GPA: 4.00/4.00</h5> <hr><hr> <h3><a href='http://nhs.fz.k12.mo.us/pages/FZ_NHS' target='_blank' class='schoolLink'>Fort Zumwalt North High</a></h3> <h6>1230 Tom Ginnever Ave, O'Fallon, MO 63366</h6> <div id='fzn'></div> <h3>Graduated May 2012</h3> <h5>Graduated Top 1% of Class</h5> <h5>Graduated with Highest Honors (summa cum laude)</h5> <hr><hr> ");
            }, 600);
            
        }
        
        if(contentSelection == 'experience' || contentSelection == 'experienceLi'){
            $('#experienceLi').parent().addClass('active');
             setTimeout(function(){
                
         $('#content').html("");
            }, 600);
        }
        
        if(contentSelection == 'pastWork' || contentSelection == 'pastWorkLi'){
            $('#pastWorkLi').parent().addClass('active');
             setTimeout(function(){
                
         $('#content').html("");
            }, 600);
        }
        if(contentSelection == 'projects' || contentSelection == 'projectsLi'){
            $('#projectsLi').parent().addClass('active');
             setTimeout(function(){
                
         $('#content').html(" <script> $(document).ready(function(){ console.log('game'); $('#game').css('boxShadow', '0px 0px 13px white'); $('#game').css('opacity', '0.93'); $('#dnfansite').css('boxShadow', ''); $('#dnfansite').css('opacity', '0.7'); $('#myzou').css('boxShadow', ''); $('#myzou').css('opacity', '0.7'); $('#reelz').css('boxShadow', ''); $('#reelz').css('opacity', '0.7'); $('.projectPreview').click(function(){ smoothScroll(); switch(this.id){ case 'game': { console.log('game'); $('#game').css('boxShadow', '0px 0px 13px white'); $('#game').css('opacity', '0.93'); $('#dnfansite').css('boxShadow', ''); $('#dnfansite').css('opacity', '0.7'); $('#myzou').css('boxShadow', ''); $('#myzou').css('opacity', '0.7'); $('#reelz').css('boxShadow', ''); $('#reelz').css('opacity', '0.7'); $('#projectContent').css('opacity', '0.0'); setTimeout(function(){$('#projectContent').html(' <h3>Visualizer Game (Solo Project)</h3> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: This game was developed entirely using Java. It utilizes JavaFX to give the user a nice Interface. Is user friendly, and allows users to a variety of levels, bands, and variety of functions.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Ultilizes Java's Extensive libraries on visual Effects</li> <li>Made using JavaFX</li> <li>Personal Song Selection</li> <li>HighScores</li> <li>Multiple Levels</li> <li>Can Pause Mid-Session</li> <li>Demonstrates Threading via enemies!</li> <li>Enemies Randomly Spawn</li> <li>Multiple Bands Selection</li> <li>Live/Fluid Transitions between levels</li> </ul> <h5>How it Works: Simply open a music file by going to File>Open and select your song. Then, Choose a level to play on while the song is playing. Enjoy :)</h5> <h5>Download Here: <a onclick=\'window.open('Msr5zbGameVisualizer.jar');\'>Game Download</a></h5> </div> <div class='col-md-7 gameOverview' id='gameBackground'></div> </div>');}, 600); setTimeout(function(){$('#projectContent').css('opacity', '1.0');}, 600); break; } case 'dnfansite': { console.log('dnfansite'); $('#dnfansite').css('boxShadow', '0px 0px 13px white'); $('#dnfansite').css('opacity', '0.93'); $('#game').css('boxShadow', ''); $('#game').css('opacity', '0.7'); $('#myzou').css('boxShadow', ''); $('#myzou').css('opacity', '0.7'); $('#reelz').css('boxShadow', ''); $('#reelz').css('opacity', '0.7'); $('#projectContent').css('opacity', '0.0'); setTimeout(function(){$('#projectContent').html('<h3>Dragon Nest FanSite (Solo Project)</h3> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: This Site was created for Dragon Nest fans, new and old. It provides guides, recommended tactics, as well as an entertainment section (music/commenting section). Also utilizes PostGres and PHP to manage the user database and security.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Well Uniformed Layout</li> <li>Guides/Tactics on Raids</li> <li>Organized Descriptions of Classes</li> <li>Log-In System</li> <li>Ability to Register</li> <li>Music Visualizer</li> <li>Commenting System</li> </ul> <h5>How it Works: Users curious about Dragon Nest may use this site to get abetter understanding of the game as a whole. It also allows players to communicate with others.</h5> <h5>Check it Out Here: <a href='https://fansite-dragonnest.rhcloud.com' target='_blank'>Dragon Nest Fansite</a></h5> </div> <div class='col-md-7 gameOverview' id='dnBackground'></div> </div>');}, 600); setTimeout(function(){$('#projectContent').css('opacity', '1.0');}, 600); break; } case 'myzou': { console.log('myzou'); $('#myzou').css('boxShadow', '0px 0px 13px white'); $('#myzou').css('opacity', '0.93'); $('#dnfansite').css('boxShadow', ''); $('#dnfansite').css('opacity', '0.7'); $('#game').css('boxShadow', ''); $('#game').css('opacity', '0.7'); $('#reelz').css('boxShadow', ''); $('#reelz').css('opacity', '0.7'); $('#projectContent').css('opacity', '0.0'); setTimeout(function(){$('#projectContent').html(' <h3>AcessZou (Group Project)</h3><div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: AccessZou is an application developed as an attempt to replace the current protocol for asking for security records for students. This application was developed using the PHP Framework: Laravel. I was responsible for setting up the framework, site design, controllers, views, PaaS, as well as PDF Generation for release forms.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Utilizes Laravel to model MVC protocols.</li> <li>Log-In System</li> <li>Highly Secured</li> <li>User Friendly UI to Guide Faculty through the process</li> <li>Ability to Generate PDFs without using File System (jsPDF)</li> <li>Organized/Personalized Document Navigation</li> <li>Smart Routing</li> </ul> <h5>How it Works: Faculty sign into the site, where they are prompted if they'd like to fill out forms or print them. They go through a simple questionaire whose data is stored in a PostGres Database. JsPDF uses that data to generate PDFs on the fly. For access to the site, please email me.</h5> <h5>Check it Out Here: <a href='http://php-accesszou.rhcloud.com' target='_blank'>AcessZou Site</a></h5> </div> <div class='col-md-7 gameOverview' id='myzouBackground'></div> </div>');}, 600); setTimeout(function(){$('#projectContent').css('opacity', '1.0');}, 600); break; } case 'reelz': { console.log('reelz'); $('#reelz').css('boxShadow', '0px 0px 13px white'); $('#reelz').css('opacity', '0.93'); $('#dnfansite').css('boxShadow', ''); $('#dnfansite').css('opacity', '0.7'); $('#myzou').css('boxShadow', ''); $('#myzou').css('opacity', '0.7'); $('#game').css('boxShadow', ''); $('#game').css('opacity', '0.7'); $('#projectContent').css('opacity', '0.0'); setTimeout(function(){$('#projectContent').html('<h3>4Reelz (Group Project)</h3> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: 4Reelz was a WebApp developed to challenge our DataBasing knowledge. Using PostGres and the IMDB api, we were able to recreate a version of IMDB. Our database contained over a million records, from which we could query through and return Specific information.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Over a Million Data Entries</li> <li>Can Search through Movies, Actors, Or/And Directors</li> <li>Recommended Movie Generation</li> <li>Can See Image, Information, and Related Content to specific Query.</li> <li>Desciptions Contained Cast, OverView, Titles, etc., all of which are InterConnected!</li> <li>Utilized Google API to bring images of Movies/Actors/Directors</li> <li>Log-In System</li> <li>Ability to Register</li> <li>Ability to Rate Movies/Actors/Directors!</li> <li>Ability to Comment on Movies</li> <li>Admin Implementation</li> <li>Top Movies, Actors, and Directors based off User Ratings</li> </ul> <h5>How it Works: Each Search Queried and Selected Lead to specific page in which the Movie, it's description, related Actors, and Directors were displayed. Users are given ability to rate and comment on selected content if registers and logged-in.</h5> <h5>Check it Out Here: <a>Site Discontinued.</a></h5> </div> <div class='col-md-7 gameOverview' id='reelzBackground'></div></div> ');}, 600); setTimeout(function(){$('#projectContent').css('opacity', '1.0');}, 600); break; } } function smoothScroll() { $('html, body').animate({ scrollTop: $('#projectContent').offset().top }, 400); } //$('#projectContent').css('opacity', '0.0'); // smoothScroll(); }); }); </script> <h1>Projects!</h1> <div class='projectPreviewContainer'> <div class='projectPreview' id='game'></div> <div class='projectPreview' id='dnfansite'></div> </div> <div class='projectPreviewContainer'> <div class='projectPreview' id='myzou'></div> <div class='projectPreview' id='reelz'></div> </div> <div id='projectContent'> <h3>Visualizer Game (Solo Project)</h3> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: This game was developed entirely using Java. It utilizes JavaFX to give the user a nice Interface. Is user friendly, and allows users to a variety of levels, bands, and variety of functions.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Ultilizes Java's Extensive libraries on visual Effects</li> <li>Made using JavaFX</li> <li>Personal Song Selection</li> <li>HighScores</li> <li>Multiple Levels</li> <li>Can Pause Mid-Session</li> <li>Demonstrates Threading via enemies!</li> <li>Enemies Randomly Spawn</li> <li>Multiple Bands Selection</li> <li>Live/Fluid Transitions between levels</li> </ul> <h5>How it Works: Simply open a music file by going to File>Open and select your song. Then, Choose a level to play on while the song is playing. Enjoy :)</h5> <h5>Download Here: <a onclick='window.open('Msr5zbGameVisualizer.jar');'>Game Download</a></h5> </div> <div class='col-md-7 gameOverview' id='gameBackground'></div> </div> <!-- <h3>Dragon Nest FanSite (Solo Project)</h3> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: This Site was created for Dragon Nest fans, new and old. It provides guides, recommended tactics, as well as a entertainment section (music/commenting section). Also utilizes PostGres and PHP to manage the user database and security.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Well Uniformed Layout</li> <li>Guides/Tactics on Raids</li> <li>Organized Descriptions of Classes</li> <li>Log-In System</li> <li>Ability to Register</li> <li>Music Visualizer</li> <li>Commenting System</li> </ul> <h5>How it Works: Users curious about Dragon Nest may use this site to get abetter understanding of the game as a whole. It also allows players to communicate with others.</h5> <h5>Check it Out Here: <a href='https://fansite-dragonnest.rhcloud.com' target='_blank'>Dragon Nest Fansite</a></h5> </div> <div class='col-md-7 gameOverview' id='dnBackground'></div> </div> --> <!-- <h3>AcessZou (Group Project)</h3> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: AccessZou is an application developed as an attempt to replace the current protocol for asking for security records for students. This application was developed using the PHP Framework: Laravel. I was responsible for setting up the framework, site design, controllers, views, PaaS, as well as PDF Generation for release forms.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Utilizes Laravel to model MVC protocols.</li> <li>Log-In System</li> <li>Highly Secured</li> <li>User Friendly UI to Guide Faculty through the process</li> <li>Ability to Generate PDFs without using File System (jsPDF)</li> <li>Organized/Personalized Document Navigation</li> <li>Smart Routing</li> </ul> <h5>How it Works: Faculty sign into the site, where they are prompted if they'd like to fill out forms or print them. They go through a simple questionaire whose data is stored in a PostGres Database. JsPDF uses that data to generate PDFs on the fly. For access to the site, please email me.</h5> <h5>Check it Out Here: <a href='http://php-accesszou.rhcloud.com' target='_blank'>AcessZou Site</a></h5> </div> <div class='col-md-7 gameOverview' id='myzouBackground'></div> </div> --> <!-- <h3>4Reelz (Group Project)</h3> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: 4Reelz was a WebApp developed to challenge our DataBasing knowledge. Using PostGres and the IMDB api, we were able to recreate a version of IMDB. Our database contained over a million records, from which we could query through and return Specific information.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Over a Million Data Entries</li> <li>Can Search through Movies, Actors, Or/And Directors</li> <li>Recommended Movie Generation</li> <li>Can See Image, Information, and Related Content to specific Query.</li> <li>Desciptions Contained Cast, OverView, Titles, etc., all of which are InterConnected!</li> <li>Utilized Google API to bring images of Movies/Actors/Directors</li> <li>Log-In System</li> <li>Ability to Register</li> <li>Ability to Rate Movies/Actors/Directors!</li> <li>Ability to Comment on Movies</li> <li>Admin Implementation</li> <li>Top Movies, Actors, and Directors based off User Ratings</li> </ul> <h5>How it Works: Each Search Queried and Selected Lead to specific page in which the Movie, it's description, related Actors, and Directors were displayed. Users are given ability to rate and comment on selected content if registers and logged-in.</h5> <h5>Check it Out Here: <a>Site Discontinued.</a></h5> </div> <div class='col-md-7 gameOverview' id='reelzBackground'></div> </div> --> </div> ");
            }, 600);
        }
        
   //<script type=\"text/javascript\" src=\"js/projects.js\"></script>
                setTimeout(function(){$("#content").css("opacity", "1.0");}, 600);
                $('#content').css("height", "auto");

       
    });   
    //////////////////////////////////////////////////////////////////////////
  
    
});

