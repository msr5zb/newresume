  $(document).ready(function(){    
        
    console.log('game');
    $("#game").css("boxShadow", "0px 0px 13px white");
    $("#game").css("opacity", "0.93");
    $("#dnfansite").css("boxShadow", "");
    $("#dnfansite").css("opacity", "0.7");
    $("#myzou").css("boxShadow", "");
    $("#myzou").css("opacity", "0.7");
    $("#reelz").css("boxShadow", "");
    $("#reelz").css("opacity", "0.7");
      
    $(".projectPreview").click(function(){
        switch(this.id){
            case 'game': {
                console.log('game');
                $("#game").css("boxShadow", "0px 0px 13px white");
                $("#game").css("opacity", "0.93");
                $("#dnfansite").css("boxShadow", "");
                $("#dnfansite").css("opacity", "0.7");
                $("#myzou").css("boxShadow", "");
                $("#myzou").css("opacity", "0.7");
                $("#reelz").css("boxShadow", "");
                $("#reelz").css("opacity", "0.7");
                $("#projectContent").css("opacity", "0.0");
                setTimeout(function(){$("#projectContent").html(" <h3>Visualizer Game (Solo Project)</h3> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: This game was developed entirely using Java. It utilizes JavaFX to give the user a nice Interface. Is user friendly, and allows users to a variety of levels, bands, and variety of functions.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Ultilizes Java's Extensive libraries on visual Effects</li> <li>Made using JavaFX</li> <li>Personal Song Selection</li> <li>HighScores</li> <li>Multiple Levels</li> <li>Can Pause Mid-Session</li> <li>Demonstrates Threading via enemies!</li> <li>Enemies Randomly Spawn</li> <li>Multiple Bands Selection</li> <li>Live/Fluid Transitions between levels</li> </ul> <h5>How it Works: Simply open a music file by going to File>Open and select your song. Then, Choose a level to play on while the song is playing. Enjoy :)</h5> <h5>Download Here: <a onclick=\"window.open('Msr5zbGameVisualizer.jar');\">Game Download</a></h5> </div> <div class='col-md-7 gameOverview' id='gameBackground'></div> </div>");}, 600);
                
                setTimeout(function(){$("#projectContent").css("opacity", "1.0");}, 600);
                break;
            }

            case 'dnfansite': {
                console.log('dnfansite');
                
                $("#dnfansite").css("boxShadow", "0px 0px 13px white");
                $("#dnfansite").css("opacity", "0.93");
                $("#game").css("boxShadow", "");
                $("#game").css("opacity", "0.7");
                $("#myzou").css("boxShadow", "");
                $("#myzou").css("opacity", "0.7");
                $("#reelz").css("boxShadow", "");
                $("#reelz").css("opacity", "0.7");
                $("#projectContent").css("opacity", "0.0");
                setTimeout(function(){$("#projectContent").html("<h3>Dragon Nest FanSite (Solo Project)</h3> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: This Site was created for Dragon Nest fans, new and old. It provides guides, recommended tactics, as well as an entertainment section (music/commenting section). Also utilizes PostGres and PHP to manage the user database and security.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Well Uniformed Layout</li> <li>Guides/Tactics on Raids</li> <li>Organized Descriptions of Classes</li> <li>Log-In System</li> <li>Ability to Register</li> <li>Music Visualizer</li> <li>Commenting System</li> </ul> <h5>How it Works: Users curious about Dragon Nest may use this site to get abetter understanding of the game as a whole. It also allows players to communicate with others.</h5> <h5>Check it Out Here: <a href='https://fansite-dragonnest.rhcloud.com' target='_blank'>Dragon Nest Fansite</a></h5> </div> <div class='col-md-7 gameOverview' id='dnBackground'></div> </div>");}, 600);
                setTimeout(function(){$("#projectContent").css("opacity", "1.0");}, 600);
                
                break;
            }
            case 'myzou': {
                console.log('myzou');
                $("#myzou").css("boxShadow", "0px 0px 13px white");
                $("#myzou").css("opacity", "0.93");
                $("#dnfansite").css("boxShadow", "");
                $("#dnfansite").css("opacity", "0.7");
                $("#game").css("boxShadow", "");
                $("#game").css("opacity", "0.7");
                $("#reelz").css("boxShadow", "");
                $("#reelz").css("opacity", "0.7");
                $("#projectContent").css("opacity", "0.0");
                setTimeout(function(){$("#projectContent").html(" <h3>AcessZou (Group Project)</h3><div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: AccessZou is an application developed as an attempt to replace the current protocol for asking for security records for students. This application was developed using the PHP Framework: Laravel. I was responsible for setting up the framework, site design, controllers, views, PaaS, as well as PDF Generation for release forms.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Utilizes Laravel to model MVC protocols.</li> <li>Log-In System</li> <li>Highly Secured</li> <li>User Friendly UI to Guide Faculty through the process</li> <li>Ability to Generate PDFs without using File System (jsPDF)</li> <li>Organized/Personalized Document Navigation</li> <li>Smart Routing</li> </ul> <h5>How it Works: Faculty sign into the site, where they are prompted if they'd like to fill out forms or print them. They go through a simple questionaire whose data is stored in a PostGres Database. JsPDF uses that data to generate PDFs on the fly. For access to the site, please email me.</h5> <h5>Check it Out Here: <a href='http://php-accesszou.rhcloud.com' target='_blank'>AcessZou Site</a></h5> </div> <div class='col-md-7 gameOverview' id='myzouBackground'></div> </div>");}, 600);
                setTimeout(function(){$("#projectContent").css("opacity", "1.0");}, 600);
                break;
            }
            case 'reelz': {
                console.log('reelz');
                $("#reelz").css("boxShadow", "0px 0px 13px white");
                $("#reelz").css("opacity", "0.93");
                $("#dnfansite").css("boxShadow", "");
                $("#dnfansite").css("opacity", "0.7");
                $("#myzou").css("boxShadow", "");
                $("#myzou").css("opacity", "0.7");
                $("#game").css("boxShadow", "");
                $("#game").css("opacity", "0.7");
                $("#projectContent").css("opacity", "0.0");
                setTimeout(function(){$("#projectContent").html("<h3>4Reelz (Group Project)</h3> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: 4Reelz was a WebApp developed to challenge our DataBasing knowledge. Using PostGres and the IMDB api, we were able to recreate a version of IMDB. Our database contained over a million records, from which we could query through and return Specific information.</h4> <h5 style='margin-bottom:0px;'>Key Features:</h5> <ul style='margin-left:15px;'> <li>Over a Million Data Entries</li> <li>Can Search through Movies, Actors, Or/And Directors</li> <li>Recommended Movie Generation</li> <li>Can See Image, Information, and Related Content to specific Query.</li> <li>Desciptions Contained Cast, OverView, Titles, etc., all of which are InterConnected!</li> <li>Utilized Google API to bring images of Movies/Actors/Directors</li> <li>Log-In System</li> <li>Ability to Register</li> <li>Ability to Rate Movies/Actors/Directors!</li> <li>Ability to Comment on Movies</li> <li>Admin Implementation</li> <li>Top Movies, Actors, and Directors based off User Ratings</li> </ul> <h5>How it Works: Each Search Queried and Selected Lead to specific page in which the Movie, it's description, related Actors, and Directors were displayed. Users are given ability to rate and comment on selected content if registers and logged-in.</h5> <h5>Check it Out Here: <a>Site Discontinued.</a></h5> </div> <div class='col-md-7 gameOverview' id='reelzBackground'></div></div> ");}, 600);
                setTimeout(function(){$("#projectContent").css("opacity", "1.0");}, 600);
                break;
            }
        }
        smoothScroll3();
        
    function smoothScroll3() {
       $('html, body').animate({
           scrollTop: $("#projectContent").offset().top-50
        }, 400);
    }
        
    });  
  });  