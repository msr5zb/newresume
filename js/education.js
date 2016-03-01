  $(document).ready(function(){    
        
    console.log('mizzouNew');
    $("#mizzouNew").css("boxShadow", "0px 0px 13px white");
    $("#mizzouNew").css("opacity", "0.93");
    $("#lindenwoodNew").css("boxShadow", "");
    $("#lindenwoodNew").css("opacity", "0.7");
    $("#sccNew").css("boxShadow", "");
    $("#sccNew").css("opacity", "0.7");
    $("#fznNew").css("boxShadow", "");
    $("#fznNew").css("opacity", "0.7");
      
    $(".workBall").click(function(){
        smoothScroll2();
        switch(this.id){
            case 'mizzouNew': {
                console.log('mizzouNew');
                $("#mizzouNew").css("boxShadow", "0px 0px 13px white");
                $("#mizzouNew").css("opacity", "0.93");
                $("#lindenwoodNew").css("boxShadow", "");
                $("#lindenwoodNew").css("opacity", "0.7");
                $("#sccNew").css("boxShadow", "");
                $("#sccNew").css("opacity", "0.7");
                $("#fznNews").css("boxShadow", "");
                $("#fznNew").css("opacity", "0.7");
                $("#workContent").css("opacity", "0.0");
                $("#workContent").html(" <h2><a href='http://missouri.edu/' target='_blank' class='schoolLink'>University of Missouri-Columbia</a></h2> <h5><div class='italics'>Columbia, MO 65211</div></h5> <h4><div class='bold'>Currently Enrolled:Senior</div></h4> <h4>GPA: 3.74/4.00 | <a href='http://registrar.missouri.edu/grades-calculators/grading-system.php' target='_blank'>Grading Scale Here</a></h4> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: My Time spent at Mizzou was the most impactful education I have recieved for the Computer Science Field. Mizzou taught me the ins-and-outs of what goes into ideal, efficient programming development. I have learned the important things that go into the development and construction of good programming. Most importantly, I leanred how to collaborated with others in my field.</h4> <h5 style='margin-bottom:0px;'>Highlights:</h5> <ul style='margin-left:15px;'> <li>Intensive Algorithm Design</li> <li>Learned/Applied Multiple Programming Languages</li> <li>Worked with PostgreSQL servers and the PHP/SQL language.</li> <li>Designed and Developed Web Apps with PHP, Html5, SQL, JavaScript, jQuery, and the Laravel Framework</li> <li>Developed Applications in Java including audio and visual apps.</li> <li>Worked with GitHub on many Assignments and Team Projects</li> <li> Have Collaborated with Groups to Create, Document, and Implement Multiple Applications</li> <li> Developed Countless C Programs that Manipulate Data, Files, Bits, and more via pointers, arrays, structures, etc. </li> </ul> </div> <div class='col-md-7 gameOverview' id='mizzouNewBG'></div> </div>");
                setTimeout(function(){$("#workContent").css("opacity", "1.0");}, 600);

                break;
            }

            case 'lindenwoodNew': {
                console.log('lindenwoodNew');
                $("#lindenwoodNew").css("boxShadow", "0px 0px 13px white");
                $("#lindenwoodNew").css("opacity", "0.93");
                $("#mizzouNew").css("boxShadow", "");
                $("#mizzouNew").css("opacity", "0.7");
                $("#sccNew").css("boxShadow", "");
                $("#sccNew").css("opacity", "0.7");
                $("#fznNew").css("boxShadow", "");
                $("#fznNew").css("opacity", "0.7");
                $("#workContent").css("opacity", "0.0");              
                setTimeout(function(){$("#workContent").html(" <h2><a href='http://www.lindenwood.edu/' target='_blank' class='schoolLink'>Lindenwood University</a></h2> <h5><div class='italics'>209 S Kingshighway St, St Charles, MO 63301</div></h5> <h4><div class='bold'>Past Transferee</div></h4> <h4>GPA: 4.00/4.00</h4> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: Though my time at Lindenwood was breif, I still had the chance to learn very important skills for the real world. I broadened my knowledge on the different teachs and approaches to programming languages.</h4> <h5 style='margin-bottom:0px;'>Highlights:</h5> <ul style='margin-left:15px;'> <li>High Level Mathimatics</li> <li>File Manipulation with C++</li> <li>Several English Courses - Up to date articles on Current Tech of the World</li> <li>Close Team Co-Operations</li> </ul> </div> <div class='col-md-7 gameOverview' id='lindenwoodNewBG'></div> </div> ");}, 600);
                setTimeout(function(){$("#workContent").css("opacity", "1.0");}, 600);

                break;
            }
            case 'sccNew': {
                console.log('sccNew');
                $("#sccNew").css("boxShadow", "0px 0px 13px white");
                $("#sccNew").css("opacity", "0.93");
                $("#lindenwoodNew").css("boxShadow", "");
                $("#lindenwoodNew").css("opacity", "0.7");
                $("#mizzouNew").css("boxShadow", "");
                $("#mizzouNew").css("opacity", "0.7");
                $("#fznNew").css("boxShadow", "");
                $("#fznNew").css("opacity", "0.7");
                $("#workContent").css("opacity", "0.0");     
                setTimeout(function(){$("#workContent").html(" <h2><a href='https://www.stchas.edu/' target='_blank' class='schoolLink'>St. Charles Community College</a></h2> <h5><div class='italics'>4601 Mid Rivers Mall Dr, Cottleville, MO 63376</div></h5> <h4><div class='bold'>Graduated with Associates of Arts Degree</div></h4> <h4>GPA: 4.00/4.00</h4> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: St. Charles Community College was my first Computer Science Intensive School. I took my first programming class here (Java) and fell in love with programming as a whole. It is what sparked my passion for CS. While here, I also gained much experience with how computers operate and work.</h4> <h5 style='margin-bottom:0px;'>Highlights:</h5> <ul style='margin-left:15px;'> <li>Developed High Quality Computer Skills/Troubleshooting Skills. </li> <li>Proficient in computer repair, maintenance, programming, and troubleshooting (A+ Maintenence Courses)</li> <li>Gained Windows Server Experience</li> <li>Courses on various Operating Systems and their ins-and-outs</li> <li>Developed Skills with Team Web Design and Development</li> <li>Built Several Java Applications</li> <li>Obtained Associates of Arts Degree with Highest Honors</li> </ul> </div> <div class='col-md-7 gameOverview' id='sccNewBG'></div> </div> ");}, 600);
                setTimeout(function(){$("#workContent").css("opacity", "1.0");}, 600);
                break;
            }
            case 'fznNew': {
                console.log('fznNew');
                $("#fznNew").css("boxShadow", "0px 0px 13px white");
                $("#fznNew").css("opacity", "0.93");
                $("#lindenwoodNew").css("boxShadow", "");
                $("#lindenwoodNew").css("opacity", "0.7");
                $("#sccNew").css("boxShadow", "");
                $("#sccNew").css("opacity", "0.7");
                $("#mizzouNew").css("boxShadow", "");
                $("#mizzouNew").css("opacity", "0.7");
                $("#workContent").css("opacity", "0.0");  
                setTimeout(function(){$("#workContent").css("opacity", "1.0");}, 600);
                setTimeout(function(){$("#workContent").html(" <h2><a href='http://nhs.fz.k12.mo.us/pages/FZ_NHS' target='_blank' class='schoolLink'>Fort Zumwalt North High</a></h2> <h5><div class='italics'>1230 Tom Ginnever Ave, O'Fallon, MO 63366</div></h5> <h4><div class='bold'>Graduated with High School Diploma</div></h4> <h4>GPA: 4.00/4.00</h4> <div class='row'> <div class='col-md-5' id='projectContentAlign'> <h4>Overview: Fort Zumwalt North High School was where I first learned how important academics are. Each field relates and overlaps with others. Having the chance, I took many science courses that created a better understanding on how things work (technologically wise). Though I took regirous courses, I always was able to kick butt and take names !</h4> <h5 style='margin-bottom:0px;'>Highlights:</h5> <ul style='margin-left:15px;'> <li>Took Many College-Leveled Science Courses (Physics, Chemistry, Mathmatics)</li> <li>Courses on various Operating Systems and their ins-and-outs</li> <li>Created many PowerPoint Presentations, as well as Videos for Project Demonstrations.</li> <li>Created some Animations (Adobe Flash)</li> <li>Letters of Recommendation from Science Professors</li> <li>Graduated with Highest Honors</li> <li>Graduated in the Top <strong>1%</strong> of my class</li> </ul> </div> <div class='col-md-7 gameOverview' id='fznNewBG'></div> </div> ");}, 600);
                break;
            }
        }
        
    function smoothScroll2() {
       $('html, body').animate({
           scrollTop: $("#workContent").offset().top-50
        }, 400);
    }
        //$("#workContent").css("opacity", "0.0");
       // smoothScroll();
        
    });  
  });  