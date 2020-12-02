<template>
    <html class="pre-pointer-link justify-content-center mx-auto container-lg">
      <span class="tog-tog">
      <div v-on:click="navToggle = !navToggle" class="menu-toggles img-home" style="z-index:20;">
        <img v-if="navToggle" src="./comp/imgs/menu-svg/svg/002-hamburger.svg" class="rounded-circle border border-1 border-white  p-2" alt="tog" width="45px" height="45px">
         <img v-else src="./comp/imgs/menu-svg/svg/003-up-chevron.svg" class="rounded-circle border border-1 border-primary bg-white text-primary p-2" alt="" width="45px" height="45px">
      </div>
      </span>
      <span class="tog-tog2"><p class="p-0 m-0">Need to view on a tv or xl screen? <button v-on:click="container = !container" class="ben btn-primary btn-sm menu-size" style="z-index:21;">Toggle Layout</button></p></span>
      <body class="row">
      <aside v-bind:class="[navToggle ? query1 : '']"  class="col-md-3 col-3  p-0 m-0">
        <video playsinline autoplay muted loop class="videos" id="bgvid">
          <source src="./comp/imgs/jason-menu.mp4" type="video/mp4">
          video is not showing
        </video>

      <nav-app></nav-app>
      </aside>
     <article v-bind:class="[navToggle ? query2 : '']" class="col-md-9 bg-secondary p-0 m-0">
      <router-view></router-view>
     </article>
      </body>
    </html>
</template>

<script>
import nav from './comp/nav-nav-nav.vue'

export default {
  data() {
    return {
      navToggle: false,
      query1: 'col-5',
      query2: 'col-7'
    }
  },
  components: {
    navApp: nav
  }
}
</script>
