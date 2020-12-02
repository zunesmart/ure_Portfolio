<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-primary vh-nav position-fixed" style="opacity:.80; width: 42%">
      
  <div class="navbar-collapse col-3 col-lg-2 text-center" id="navbarNavAltMarkup" >
    
    <div class="navbar-nav row bg-primary text-left pl-5 pl-lg-4">
      <ul class="col-6  px-0 align-self-end pl-lg-5 ml-lg-4" style="margin-bottom:20vh;">
      <router-link to="/" tag="li" class="text-white pointer-link hov">Home</router-link>
      <router-link to="/about" tag="li" class="text-white pointer-link hov" active-class="active">About</router-link>
      <router-link to="/projects" tag="li" class="text-white pointer-link hov" active-class="active">Projects</router-link>
      <router-link to="/contact" tag="li" class="text-white pointer-link hov" active-class="active">Contact</router-link>
      </ul> 
    </div>
    
  </div>
    <div class="card-img-overlay row align-items-end m-0 p-0" style="z-index: -1;">
      <div class="footer-bg m-0 w-100 p-0" style="height:22.5vh; padding-bottom:300px">
      </div>
  </div>
</nav>
</template>


