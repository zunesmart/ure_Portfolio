<template>
<main>
    <!-- intro -->
        <section class="footer-bg pb-2 pb-lg-5">
                <div class="text-right p-5 footer-bg shadow-sm"><button class="btn btn-primary btn-sm px-2 py-1 m-0 dis" id="#"><bold>Contact Page</bold></button></div>
          <div class="col-12">
          <div class="row">
            <div class="col-md-6 footer-bg pt-5">
              <div class="p-0 mt-4 m-0 bg-white"><img src="./imgs/selfContact.jpg" class="card-img  p-0 m-0 " alt="My Picutre (Self-Credit:Jason Ure)"></div>
            </div>
            <div class="jumbotron footer-bg rounded-0 bg-white col-md-6">
            <h3 class="text-dark pb-2 text-center pt-5">Jason Ure<br>Web/UX<br>Contact</h3>
            <p class="lead text-dark mb-1 text-center" ><a href="https://www.facebook.com/JasonUreWeb" class="dddd switch1"><img src="./imgs/icon/f.svg" width="25px" height="25px"> Facebook</a></p>
            <p class="lead text-dark mb-1 text-center" ><a href="https://www.linkedin.com/in/jason-ure-a04309101 switch2" class="dddd switch2"><img src="./imgs/icon/l.svg" width="25px" height="25px"> Linkedin</a></p>
            <p class="lead text-dark mb-1 text-center" ><a href="https://www.instagram.com/mista.mtndew/" class="dddd switch3"><img src="./imgs/icon/i.svg" width="25px" height="25px"> Instagram</a></p>
            <p class="lead text-dark mb-1 text-center" ><a v-bind:href="'mailto:jason.ure@gmail.com?subject=Request'" class="dddd switch4"><img src="./imgs/icon/gm.svg" width="25px" height="25px"> Email</a></p>

        </div>
          </div>
          </div>
    </section>
    <!-- form -->
    <section pb-2 pb-lg-5>
        <h3 class="text-center">Request Form</h3>
        <form class="m-4">
            <div class="row">
                <div class="col-sm">
                    <label class="col-form-label text-white">First</label>
                    <input type="text" class="form-control" v-bind="first" placeholder="First name" maxlength="15">
                </div>
                <div class="col-sm">
                    <label class="col-form-label text-white">Last</label>
                    <input type="text" class="form-control" v-model="last" placeholder="Last name" maxlength="20"> 
                </div>
            </div>
            <div class="row">
            <div class="col-sm">
                <label for="email" class="col-form-label text-white">Email</label>
                <input type="email" class="form-control" v-model="email" id="email" placeholder="Email">
            </div>
            <div class="col-sm">
                <label class="col-form-label text-white">Reason</label>
                <select v-model="selected" class="w-100 rounded form-control">
                <option disabled value="">Select</option>
                <option>More Information</option>
                <option>Hire</option>
                <option>Rates</option>
                <option>Other</option>
                </select>
            </div>
            </div>
            <div class="form-group">
                <label for="body">Message</label>
            <textarea class="form-control" id="body" rows="8" maxlength="350" placeholder="Request Details..."></textarea>
        </div>
        <div class="text-center pt-3"><a v-bind:href="'mailto:jason.ure@gmail.com?subject=Request'" class="btn btn-primary">Send</a></div>
        </form>    
    </section> 
    <section class="footer-bg">
                <div class="text-right p-5 footer-bg shadow-sm"><button class="btn btn-primary btn-sm px-2 py-1 m-0 dis" id="#"><bold>: )</bold></button></div>
    </section>
    <footer class="bg-black">
      <div class="col-12">
      <div class="row justify-content-around">
        <div class="col-md-6 text-center">
          <h5 class="text-white">Quick Links</h5>
          <a type="button" class="btn btn-primary btn-sm my-2 py-1" href="http://itsure.io/archive/ure_Jason-web-ux-resume-20.pdf" download="ure_Jason-web/ux-resume.pdf">View Resume</a>
          <router-link to="/rhp-review" tag="p" class="text-white hov pointer-link">Project Review</router-link>
          <router-link to="/rhp-review" tag="p" class="text-white hov pointer-link">Project Page</router-link>
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
export default {
}
</script>