<!DOCTYPE html>
<html lang="en">
<head>

     <title>/usr/piopy</title>
     <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
<?php
// <!-- 
// Thanks to Hydro Template ♥♥
// http://www.templatemo.com/tm-509-hydro
// -->
?>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=Edge">
     <meta name="description" content="">
     <meta name="keywords" content="">
     <meta name="author" content="">
     <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

     <link rel="stylesheet" href="css/bootstrap.min.css">
     <link rel="stylesheet" href="css/magnific-popup.css">
     <link rel="stylesheet" href="css/font-awesome.min.css">

     <!-- MAIN CSS -->
     <link rel="stylesheet" href="css/templatemo-style.css">
</head>
<body>

     <!-- PRE LOADER -->
     <section class="preloader">
          <div class="spinner">
               <span class="spinner-rotate"></span>
          </div>
     </section>
     

     <!-- MENU -->
     <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
          <!-- GO TOP BUTTON  -->
          <a href="#home" class="smoothScroll" id="myBtn"> ^ </a>
          
          
          <div class="container">

               <div class="navbar-header">
                    <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                    </button>

                    <!-- lOGO TEXT HERE -->
                    <a href="#home" class="navbar-brand smoothScroll"> /usr/piopy</a>
               </div>
               
               <!-- MENU LINKS -->
               <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-nav-first">
                         <li><a href="#home" class="smoothScroll">Home</a></li>
                         <li><a href="#bout" class="smoothScroll">About</a></li>
                         <li><a href="#projects" class="smoothScroll">Projects</a></li>
                         <li><a href="#social" class="smoothScroll">Social</a></li>
                         <li><a href="#contact" class="smoothScroll">Contacts</a></li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                         <li><a href="https://www.instagram.com/volga.jpg/" target="_blank" ><i class="fa fa-instagram"></i></a></li>
                         <li><a href="https://github.com/piopy" target="_blank" ><i class="fa fa-github"></i></a></li>
                         <li><a href="https://www.linkedin.com/in/antonio-volgarino-ba797b212/" target="_blank" ><i class="fa fa-linkedin"></i></a></li>
                         <li><a href="https://t.me/volga_txt" target="_blank" ><i class="fa fa-telegram"></i></a></li>
                    </ul>
               </div>

          </div>
     </section>


     <!-- HOME -->
     <section id="home" data-stellar-background-ratio="0.5">
          <div class="overlay"></div>
          <div class="container">
               <div class="row">

                    <div class="col-md-6 col-sm-12">
                         <div class="home-info">
                              <h1>Hi there!</h1>
                              <i style="color: white; opacity:85%;">I'm a student, an engineer and a developer based in Bologna, IT!</i><br><br>
                              <div class="col-md-12">
                                   <div class="col-md-4 col-sm-12" style="padding-bottom: 16px;">
                                   <a href="#contact" class="btn section-btn smoothScroll">Contact me!</a>
                                   </div> 
                                   <!-- <div class="col-md-4 col-sm-12" style="text-align: center;padding: 16px;">
                                   <i style="color: white; opacity:85%; ">    or    </i>
                                   </div> -->
                                   <div class="col-md-6 col-sm-12">
                                   <a href="docs/CV.pdf" class="btn section-btn smoothScroll" target="_blank">Download my resume</a>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <?php
                    // <div class="col-md-6 col-sm-12">
                    //      <div class="home-video">
                    //           <div class="embed-responsive embed-responsive-16by9">
                    //                <!-- <iframe src="https://www.youtube.com/embed/UiHicKF18bs" frameborder="0" allowfullscreen></iframe> -->
                    //           </div>
                    //      </div>
                    // </div>
                    ?>
               </div>
          </div>
     </section>


     <!-- ABOUT -->
     <section id="bout" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">

                    <div class="col-md-12 col-sm-12">
                              <div class="section-title">
                                   <h2>About me</h2>
                                   <span class="line-bar">...</span>
                              
                              </div>
                    </div>

                    <div class="col-md-6 col-sm-12" style="padding-bottom: 20px;">
                              <?php
                                   foreach(file('boutme.txt') as $line) {
                                        echo '<p>'.$line. "</p>";
                                     }
                              ?>
                    </div>
                    
                    <!-- <div class="col-md-12 col-sm-12">
                              <br>
                    </div> -->
                    <div class="col-md-6 col-sm-12">
                         <div class="col-lg">
                              <div class="github stats">
                                   <div class="gh stats">
                                        <img align="center"  src="https://github-readme-stats.vercel.app/api?username=piopy&show_icons=true&include_all_commits=true&count_private=true&hide_rank=true" width="100%-20px" height="200px" style="border: none;"></iframe>
                                   </div>
                              </div>
                         </div>
                         <br>
                         <div class="col-lg">
                              <div class="github stats 2">
                                   <div class="gh languages">
                                        <img align="center"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=piopy&layout=compact" width="100%" height="200px" style="border: none;"></iframe>
                                   </div>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </div>
     </section>


     <!-- projects -->
     <section id="projects" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row" style="float:right;">

                    <div class="col-md-12 col-sm-12">
                         <div class="section-title">
                              <h2>Projects</h2>
                              <span class="line-bar">...</span>
                         </div>
                    </div>
                    <?php
                         include "projects.php";
                    ?>

                    
               </div>
          </div>
     </section>


     <!-- social -->
     <section id="social" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">
                    <center>
                    <div class="col-md-12 col-sm-12">
                         <div class="section-title">
                              <h2>Social Profiles</h2>
                              <span class="line-bar">...</span>
                         </div>
                    </div>

                    <div class="col-sm-3 col-md-3 col-6">
                         <!-- WORK THUMB -->
                         <div class="work-thumb">
                              <a href="https://www.instagram.com/volga.jpg/"  target="_blank">
                                   <img src="images/instagram.png" class="img-responsive" alt="instagram" style="height: 155px;">
                                   
                                   <div class="work-info">
                                        <h3>Instagram</h3>
                                        <small>Private page</small>
                                   </div>
                              </a>
                         </div>
                    </div>

                    <div class="col-sm-3 col-md-3 col-6">
                         <!-- WORK THUMB -->
                         <div class="work-thumb">
                              <a href="https://github.com/piopy"  target="_blank">
                                   <img src="images/github-sign.png" class="img-responsive" alt="github" style="height: 155px;">

                                   <div class="work-info">
                                        <h3>GitHub</h3>
                                   </div>
                              </a>
                         </div>
                    </div>

                    <div class="col-sm-3 col-md-3 col-6">
                         <!-- WORK THUMB -->
                         <div class="work-thumb" style="width:155px!important; height: 155px!important;">
                              <a href="https://www.linkedin.com/in/antonio-volgarino-ba797b212/"  target="_blank">
                                   <img src="images/linkedin.png" class="img-responsive" alt="linkedin" style="height: 155px;">

                                   <div class="work-info" >
                                        <h3>LinkedIn</h3>
                                   </div>
                              </a>
                         </div>
                    </div>

                    <div class="col-sm-3 col-md-3 col-6">
                         <!-- WORK THUMB -->
                         <div class="work-thumb" style="width:155px; height: 155px;">
                              <a href="https://t.me/volga_txt"  target="_blank" >
                                   <img src="images/telegram.png" class="img-responsive" alt="telegram" style="height: 155px;">

                                   <div class="work-info" >
                                        <h3>Telegram</h3>
                                   </div>
                              </a>
                         </div>
                    </div>
                    </center>
               </div>
          </div>
     </section>

     <!-- CONTACT -->
     <section id="contact" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">

                    <div class="col-md-12 col-sm-12">
                         <div class="section-title">
                              <h2>Contact me</h2>
                              <span class="line-bar">...</span>
                         </div>
                    </div>

                    <div class="col-md-8 col-sm-8">
                         <!-- CONTACT FORM HERE -->
                         <form id="contact-form" role="form" action="https://formspree.io/f/mnqwgylr" method="post">
                              <!-- <div class="col-md-6 col-sm-6">
                                   <input type="text" class="form-control" placeholder="Full Name" id="cf-name" name="name" required="">
                              </div> -->

                              <div class="col-md-12 col-sm-12">
                                   <input type="email" class="form-control" placeholder="Your Email" id="cf-email" name="email" required="">
                              </div>

                              <div class="col-md-12 col-sm-12">
                                   <textarea class="form-control" rows="6" placeholder="Message here" id="cf-message" name="message" required=""></textarea>
                              </div>

                              <div class="col-md-4 col-sm-12">
                                   <input type="submit" class="form-control" name="submit" value="Send Message">
                              </div>
                         </form>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="google-map">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d182105.2771513688!2d11.34468!3d44.507063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd498e951c40b%3A0xa2e17c015ba49441!2sBologna%20BO!5e0!3m2!1sit!2sit!4v1650405242360!5m2!1sit!2sit" allowfullscreen></iframe>
                         </div>
                    </div>

               </div>
          </div>
     </section>


     <!-- FOOTER -->
     <footer data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">
                    <div class="col-md-12 col-sm-12">
                         
                         <div class="copyright-text"> 
                              <center>
                              <p style="text-align: center;">Copyright &copy; 2022 piopy</p>
                         </center>
                         </div>
                              
                    </div>
                    
               </div>
          </div>
     </footer>


     

     <!-- SCRIPTS -->
     <script src="js/jquery.js"></script>
     <script src="js/bootstrap.min.js"></script>
     <script src="js/jquery.stellar.min.js"></script>
     <script src="js/jquery.magnific-popup.min.js"></script>
     <script src="js/smoothscroll.js"></script>
     <script src="js/custom.js"></script>
     <script>
          //Get the button
          var mybutton = document.getElementById("myBtn");

          // When the user scrolls down 20px from the top of the document, show the button
          window.onscroll = function() {scrollFunction()};

          function scrollFunction() {
               if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    mybutton.style.display = "block";
               } else {
                    mybutton.style.display = "none";
               }
          }

     </script>
</body>

</html>