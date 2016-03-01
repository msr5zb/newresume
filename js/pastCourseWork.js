  $(document).ready(function(){    
        
       function smoothScroll4() {
       $('html, body').animate({
           scrollTop: $("#projectContent").offset().top-50
        }, 1000);
    }
      
    console.log('coreCourses');
    $("#coreCourses").css("boxShadow", "0px 0px 13px white");
    $("#coreCourses").css("opacity", "0.93");
    $("#operatingSystems").css("boxShadow", "");
    $("#operatingSystems").css("opacity", "0.7");
    $("#computerRepair").css("boxShadow", "");
    $("#computerRepair").css("opacity", "0.7");
    $("#math").css("boxShadow", "");
    $("#math").css("opacity", "0.7");
      
    $(".projectPreview").click(function(){
        smoothScroll4();
        switch(this.id){
            case 'coreCourses': {
                console.log('coreCourses');
                $("#coreCourses").css("boxShadow", "0px 0px 13px white");
                $("#coreCourses").css("opacity", "0.93");
                $("#operatingSystems").css("boxShadow", "");
                $("#operatingSystems").css("opacity", "0.7");
                $("#computerRepair").css("boxShadow", "");
                $("#computerRepair").css("opacity", "0.7");
                $("#math").css("boxShadow", "");
                $("#math").css("opacity", "0.7");
                $("#projectContent").css("opacity", "0.0");
                setTimeout(function(){$("#projectContent").html("<h3>Core Programming Courses</h3> <div class='row'> <div class='col-md-12' id='projectContentAlign'> <div class='course'> <div class='courseName'>Java - Intermediate</div> <div class='courseNumber'>Computer Science CS3330 <span class='courseMetaData'> | Spring 2015 | Dale Mussuer | Mizzou</span></div> <div class='courseDescription'>Java Application Development. Used NetBeans and JavaFX to develop user friendly interface applications.</div> </div> <hr><div class='course'> <div class='courseName'>Database</div> <div class='courseNumber'>Computer Science CS3380 <span class='courseMetaData'> | Spring 2015 | Kleric | Mizzou</span></div> <div class='courseDescription'>Discussed and Developed algorithms for efficient, effective programming.</div> </div> <hr><div class='course'> <div class='courseName'>Software Engineering</div> <div class='courseNumber'>Computer Science CS4320 <span class='courseMetaData'> | Fall 2015 | Grant Scott | Mizzou</span></div> <div class='courseDescription'>Learned the processes that go into Application Development. Gained great experience in Requirements Analysis, Documentation, and team work.</div> </div> <hr><div class='course'> <div class='courseName'>Web Development</div> <div class='courseNumber'>Computer Science CS2830 <span class='courseMetaData'> | Fall 2015 | Justin Schuelar | Mizzou</span></div> <div class='courseDescription'>Created Multiple Web Applications that utilized HTML5, CS3, Javascripting, JQuery, and Ajax. Also worked with Site hosting.</div> </div> <hr><div class='course'> <div class='courseName'>Assembly Language</div> <div class='courseNumber'>Computer Science CS3280 <span class='courseMetaData'> | Fall 2015 | Michael Yursky | Mizzou</span></div> <div class='courseDescription'>Programmed for the Motorola MC68HC11 micro-controller. Learned about processor architecture and byte manipulation.</div> </div><hr> <div class='course'> <div class='courseName'>C Programming</div> <div class='courseNumber'>Computer Science CS2050 <span class='courseMetaData'>| Fall 2014 | Joe Guilliams | Mizzou</span></div> <div class='courseDescription'>Developed Programs in the C Language. Discussed algorithms and pointer math..</div> </div> <hr><div class='course'> <div class='courseName'>C++ - Intermediate</div> <div class='courseNumber'>Computer Science CCSC 24400 <span class='courseMetaData'>| Spring 2014 | Vandyke | Lindenwood</span></div> <div class='courseDescription'>Developed Many applications that would Manipulate data and files. Learned C++ syntax and structures.</div> </div> <hr><div class='course'> <div class='courseName'>Java - Beginner</div> <div class='courseNumber'>Computer Science CCPT 284 <span class='courseMetaData'>| Fall 2013 | Rex | SCC</span></div> <div class='courseDescription'>Learned Basics of Java. Object Creation, Manipulation, Standard Libraries, and more.</div> </div> </div> </div> ");}, 600);
                
                setTimeout(function(){$("#projectContent").css("opacity", "1.0");}, 600);
                break;
            }

            case 'operatingSystems': {
                console.log('operatingSystems');
                
                $("#operatingSystems").css("boxShadow", "0px 0px 13px white");
                $("#operatingSystems").css("opacity", "0.93");
                $("#coreCourses").css("boxShadow", "");
                $("#coreCourses").css("opacity", "0.7");
                $("#computerRepair").css("boxShadow", "");
                $("#computerRepair").css("opacity", "0.7");
                $("#math").css("boxShadow", "");
                $("#math").css("opacity", "0.7");
                $("#projectContent").css("opacity", "0.0");
                setTimeout(function(){$("#projectContent").html("<h3>Operating Systems Courses</h3> <div class='row'> <div class='col-md-12' id='projectContentAlign'><div class='course'> <div class='courseName'>Operating Systems</div> <div class='courseNumber'>Computer Science CS 4520 <span class='courseMetaData'> | Spring 2016 | Grant Scott | Mizzou</span></div> <div class='courseDescription'>Created Virtual Machines to Which we created programs and tracked system calls. We used Linux - Mint, and created virtual cpus to demonstrate threading. Also created a File System.</div> </div> <hr><div class='course'> <div class='courseName'>Windows Desktop Op Sys</div> <div class='courseNumber'>Computer Science CCPC 125 <span class='courseMetaData'> | Fall 2013 | SCC</span></div> <div class='courseDescription'>Created Virtual Machines to Which we went through the ins-and-outs of a variety of Operating Systems. These include Windows Server 2008, Windows XP-8.</div> </div><hr><div class='course'> <div class='courseName'>Intro to Data Processing</div> <div class='courseNumber'>Computer Science CCPT 115 <span class='courseMetaData'> | Spring 2013 | Rex | SCC</span></div> <div class='courseDescription'>Discussed Basics of how an OS processing data.</div> </div> </div> </div>");}, 600);
                setTimeout(function(){$("#projectContent").css("opacity", "1.0");}, 600);
                
                break;
            }
            case 'computerRepair': {
                console.log('computerRepair');
                $("#computerRepair").css("boxShadow", "0px 0px 13px white");
                $("#computerRepair").css("opacity", "0.93");
                $("#operatingSystems").css("boxShadow", "");
                $("#operatingSystems").css("opacity", "0.7");
                $("#coreCourses").css("boxShadow", "");
                $("#coreCourses").css("opacity", "0.7");
                $("#math").css("boxShadow", "");
                $("#math").css("opacity", "0.7");
                $("#projectContent").css("opacity", "0.0");
                setTimeout(function(){$("#projectContent").html(" <h3>Computer Repair Courses</h3> <div class='row'> <div class='col-md-12' id='projectContentAlign'> <div class='course'> <div class='courseName'>Computer Repair and Maintenence</div> <div class='courseNumber'>Computer Science CCPC 205 <span class='courseMetaData'> | Fall 2013 | Wayne Bloss | SCC</span></div> <div class='courseDescription'>Thoroughly dove into each component of a desktop. Every week, we would take out every single component and rebuild a fully functional desktop. We trouble-shooted, both physically and virtually. Discussed beep codes, debugging, and steps to go throguh to correct errors.</div> </div> </div> </div> ");}, 600);
                setTimeout(function(){$("#projectContent").css("opacity", "1.0");}, 600);
                break;
            }
            case 'math': {
                console.log('math');
                $("#math").css("boxShadow", "0px 0px 13px white");
                $("#math").css("opacity", "0.93");
                $("#operatingSystems").css("boxShadow", "");
                $("#operatingSystems").css("opacity", "0.7");
                $("#computerRepair").css("boxShadow", "");
                $("#computerRepair").css("opacity", "0.7");
                $("#coreCourses").css("boxShadow", "");
                $("#coreCourses").css("opacity", "0.7");
                $("#projectContent").css("opacity", "0.0");
                setTimeout(function(){$("#projectContent").html("<h3>Algorithms/Mathmatics</h3> <div class='row'> <div class='col-md-12' id='projectContentAlign'> <div class='course'> <div class='courseName'>Algorithm Design - Intermediate</div> <div class='courseNumber'>Computer Science CS3050 <span class='courseMetaData'> | Spring 2015 | Chadra | Mizzou</span></div> <div class='courseDescription'>Discussed and Developed algorithms for efficient, effective programming.</div> </div> <hr><div class='course'> <div class='courseName'>Algorithm Design - Advanced</div> <div class='courseNumber'>Computer Science CS4050 <span class='courseMetaData'> | Spring 2016 | Saab | Mizzou</span></div> <div class='courseDescription'>Thoroughly dove into different algorithms and best way to improve run times. Compared and Contrasted Algorithm techniques for most effifient use of time.</div> </div> <hr><div class='course'> <div class='courseName'>Differential Equations</div> <div class='courseNumber'>Math 4100 <span class='courseMetaData'> | Fall 2015 | Gonzellas | Mizzou</span></div> <div class='courseDescription'> Traditional introductory course in ordinary differential equations. Includes 1st and 2nd order linear differential equations with numerous applications; Laplace transforms; power series solutions; numerical methods, linear systems. </div> </div><hr> <div class='course'> <div class='courseName'>Statistics</div> <div class='courseNumber'>Math 4710 <span class='courseMetaData'> | Spring 2015 | Mizzou</span></div> <div class='courseDescription'> Introduction to theory of probability and statistics using concepts and methods of calculus.</div> </div> <hr><div class='course'> <div class='courseName'>Discrete Mathematical Structures</div> <div class='courseNumber'>Math 2320 <span class='courseMetaData'> | Fall 2014 | Son | Mizzou</span></div> <div class='courseDescription'> Sets, functions, logic, relations, induction, recursion, counting techniques, graphs, trees, algorithms. Math Reasoning Proficiency course. </div> </div> <hr><div class='course'> <div class='courseName'>Calculus 3</div> <div class='courseNumber'>Math 2300 <span class='courseMetaData'> | Fall 2014 | Mizzou</span></div> <div class='courseDescription'>Vectors, solid analytic geometry, calculus of several variables. Math Reasoning Proficiency course.</div> </div> </div> </div> ");}, 600);
                setTimeout(function(){$("#projectContent").css("opacity", "1.0");}, 600);
                break;
            }
        }
    });  
  });  