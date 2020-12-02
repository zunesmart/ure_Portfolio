<template>
<main>
    <!-- intro -->
        <section class="footer-bg pb-2 pb-lg-5">
                <div class="text-right p-5 footer-bg shadow-sm"><button class="btn btn-primary btn-sm px-2 py-1 m-0 dis" id="#"><bold>Home Page</bold></button></div>
          <div class="col-12">
          <div class="row">
            <div class="col-sm-3 footer-bg pt-5">
              <div class="p-0 pt-4 m-0"><img src="./imgs/self_homehero.png" class="card-img  p-0 m-0 " alt="My Picutre (Self-Credit:Jason Ure)"></div>
            </div>
            <div class="jumbotron footer-bg rounded-0 bg-white col-sm-9">
            <h3 class="text-dark pb-2">Jason Ure Web/UX Designer and Educator</h3>
            <p class="lead text-dark" >I started designing at a young and have been intergrating my designs into websites since 2017.</p>
            <h4 class="pt-5 ">
            <router-link to="/projects" class=" m-0" active-class="active"><a class="btn btn-primary btn-lg" href="#" role="button">Projects</a></router-link>
            </h4>
        </div>
          </div>
          </div>
    </section>
    <!-- Recent Projects -->
    <section class="p-5 mt-2">
      <h3 class="text-center">Developer Focus</h3>
        <div class="row justify-content-center pt-5 mb-5 pb-5">
          <div type="button" data-toggle="modal" data-target="#leading" class="card p-0 m-2 text-white col-md-3 up">
            <img class="card-img rounded-0" src="./imgs/leading-1.jpg" alt="leading picture">
            <div class="card-img-overlay">
              <h5 class="card-title">Leading</h5>
              <p class="card-text">Learn More</p>
            </div>
          </div>
          <div type="button" data-toggle="modal" data-target="#learning" class="card p-0 m-2 text-white col-md-3 up">
            <img class="card-img rounded-0" src="./imgs/learning-2.jpg" alt="learning picture">
            <div class="card-img-overlay">
              <h5 class="card-title">Learning</h5>
              <p class="card-text">Learn More</p>
            </div>
          </div>
          <div type="button" data-toggle="modal" data-target="#teaching" class="card p-0 m-2 text-white col-md-3 up">
              <img class="card-img rounded-0" src="./imgs/teaching-3.jpg" alt="teaching picture">
              <div class="card-img-overlay">
                <h5 class="card-title">Teaching</h5>
                <p class="card-text">Learn More</p>
              </div>
            </div>
        </div>
<!-- modals -->
        <div class="modal fade" id="leading" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Leading</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                During my academic years so far, I have focused my development in leadership and project management. I also plan on finishing my NSLS (For the National Society of Leadership and Success) induction by the time I graduate.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <a class="btn btn-primary" href="https://www.nsls.org/"> Visit NSLS Website </a>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="learning" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Learning</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                I have always pushed to learn new things in life and in the past I have learned many additional skills that have helped me along the way. This includes customer service, sales, marketing, and 
                alot of other useful skills. View Linkedin to see the full list. 
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <a type="button" href="https://www.linkedin.com/in/jason-ure-a04309101" class="btn btn-primary">Linkedin</a>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="teaching" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Teaching</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                It has been a goal to be able to teach/train in the Web and Digital Media World. Check out some of my videos Facebook!
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <a href="https://www.facebook.com/JasonUreWeb" class="btn btn-primary">Videos</a>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section>
        <div class="jumbotron footer-bg rounded-0 text-center">
        <h3 class="text-dark pb-2">Want to see a in depth review of one of my projects?</h3>
        <p class="lead text-dark" >This is the Rent Own Pro Website that I did as one of my many school projects.</p>
        <hr class="my-0 text dark">
        <p class="text-dark">The Rent Home Pro features a modern web design with the latest technology to build it.</p>
        <h4 class="pt-5">
        <router-link to="/rhp-review" class="pl-4 m-0 text-center" active-class="active"><a class="btn btn-primary btn-lg" href="#" role="button">See Details</a></router-link>
        </h4>
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
<script>

