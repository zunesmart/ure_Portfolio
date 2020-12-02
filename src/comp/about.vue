<template>
    <main>
    <!-- intro  fix with bootstrap card class-->
      <section class="pb-2 pb-lg-5">
          <div class="text-right p-5 footer-bg"><button class="btn btn-primary btn-sm px-2 py-1 m-0 dis" id="#" ><bold>About Page</bold></button></div>
          <div class="col-12 bg-white pb-3">
          <div class="row">
            <div class="col-lg-4">        
              <video autoplay muted loop width="100%" height="101.5%">
                <source src="./imgs/soc-1.mp4" type="video/mp4">
                video is not showing
              </video></div>
          <div class="col-lg-8 shadow-lg">
          <div class="bg-white p-4 mt-4">
          <h3 class="text-dark textframe1">Run Down - About Skills</h3>
          <ul class="text-white sss">
              <li class="text-dark"><h4 class="text-dark textframe2">Web Design / UX - 4 years. </h4>
              <ul class="text-dark sss">
                  <li class="text-dark">Web Languages: HTML / CSS3 / SASS / JS / VUEJS / PHP / Word Press / Relational Databases / Firebase / and a few other langues.</li>
                  <li class="text-dark">Work Applications: Visual Studio Code / Atoms / Brackets / Notepad(Yes notepad:)) / and Dreamweaver.</li>
                  <li class="text-dark">Group Applications: Git Hub / Netlify / Adobe XD / Command Line / and Code Pen.</li>
              </ul>
              <li class="text-dark"><h4 class="text-dark">Digital Media / Graphic Design - 9 years.</h4></li>
              <ul class="sss">
                  <li class="text-dark">Programs Include: Adobe Photoshop / Adobe Illustrator / and Adobe Premier Pro</li>
                  <li class="text-dark">Other Programs: / All Microsoft Office Suites. /</li>
              </ul>
          </ul>
          
        </div>
        </div>
      </div>
          
          </div>
          
    </section>

    <!-- Call to Action -->
    <section class="pb-4"><h4 class="text-center">Would you like to learn more about my projects?<br><hr><router-link to="/projects" class=" m-0" active-class="active"><a class="btn btn-primary btn-lg" href="#" role="button">Projects</a></router-link></h4>

    </section>
    <!--  -->
    <section class="p-3">
      <h3>Take Away...</h3>
      <p>My main focus and goal is to become an Program Manager and/or Educator</p>
    
    <!-- key points about me -->
  
      <div class="card-deck row">
      <div class="card col-lg-4 h-100">
        <div class="card-body ">
          <h5 class="card-title pb-0 mb-0">Digital Media Experiance</h5>
        </div>
        <img class="card-img-top" src="./imgs/aboutNum-svg/svg/001-nine.svg" width="100%" height="100%" alt="Digital Media">

        <p class="card-text text-dark lead text-center p-2">Years of Experience</p>
      </div>
      <div class="card col-lg-4 h-100">
        <div class="card-body">
          <h5 class="card-title pb-0 mb-0">Web and User Experience</h5>
        </div>
          <img class="card-img-top" src="./imgs/aboutNum-svg/svg/002-four.svg" width="100%" height="100%" alt="Web UX">
        <p class="card-text text-dark lead text-center p-2">Years of Experience</p>

      </div>
      <div class="card col-lg-4 h-100">
        <div class="card-body">
          <h5 class="card-title pb-0 mb-0">Leadership and Training</h5>
        </div>
          <img class="card-img-top" src="./imgs/aboutNum-svg/svg/001-nine.svg" width="100%" height="100%" alt="Leader">

        <p class="card-text text-dark lead text-center p-2">Years of Experience</p>

      </div>
      </div>
    </section>
<section class="footer-bg">
  <div class="jumbotron footer-bg">
  <h3 class="text-primary">Ready to take a peak at my resume?</h3>
  <hr class="my-4">
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Download</a>
  </p>
</div>
</section>
    <footer class="bg-black">
      <div class="col-12">
      <div class="row justify-content-around">
        <div class="col-md-6 text-center">
          <h5 class="text-white">Quick Links</h5>
          <router-link to="/rhp-review" tag="p" class="text-white hov pointer-link">Project Review</router-link>
          <router-link to="/rhp-review" tag="p" class="text-white hov pointer-link">Project Page</router-link>
          <router-link to="/rhp-review" tag="p" class="text-white hov pointer-link">Home Page</router-link>

          <p class="text-primary p-0 m-0">Response Time: ~ 2hrs</p>
          <p class="text-primary p-0 m-0 ml-2 mb-4">&copy; 2020 Jason Ure</p>
        </div>
        <div class="col-md-6 text-center mb-4">
          <h5 class="text-white">Contact Info</h5>
          <p>Address: Utah / Remote</p>
          <p>Get in touch!<br> Wide Rage of meeting<br> options.</p>
          <div class="row justify-content-center">
          <p class="lead text-dark p-1 mb-0 pb-0" ><a href="https://www.instagram.com/mista.mtndew/" class="dddd"><img class="up" src="./imgs/icon/i.svg" width="35px" height="30px"></a></p>
            <p class="lead text-dark p-1 mb-0 pb-0" ><a v-bind:href="'mailto:jason.ure@gmail.com?subject=Request'" class="dddd"><img class="up" src="./imgs/icon/gm.svg" width="35px" height="35px"></a></p>
            <p class="lead text-dark p-1 mb-0 pb-0" ><a href="https://www.facebook.com/JasonUreWeb" class="dddd"><img class="up" src="./imgs/icon/f.svg" width="35px" height="30px"></a></p>
            <p class="lead text-dark p-1 mb-0 pb-0" ><a href="https://www.linkedin.com/in/jason-ure-a04309101" class="dddd"><img class="up" src="./imgs/icon/l.svg" width="35px" height="35px"></a></p>
          </div>
        </div>
      </div>
      </div>
    </footer>
</main>
</template>