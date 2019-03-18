<template>
  <div class="homepage">
    <p class="homeText">Kang Choon Kiat</p></br>
    <div class = "body">
      <img src="images" alt = "Here should be my photo"></br>
      <div class = "handlers">
      <a href="https://www.linkedin.com/in/kang-choon-kiat-8a2120142/" > <img src="http://www.linkedin.com/img/webpromo/btn_viewmy_160x33.png" width="160" height="33" border="0" alt="View My profile on LinkedIn"> </a>
      <a href="https://www.instagram.com/k_choonkiat/"><img src="https://image.flaticon.com/icons/svg/174/174855.svg" alt="Instagram" width="160" height="33" border="0"></a>
      <a href="https://github.com/k-choonkiat"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github" width="80" height="50" border="0"></a>
    
    </div>
  </div>
    <div class ="credits">
    <h3>This website is built using:</h3>
    </br>
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg">
    </div>
  </div>
</template>

<script>

import images from "@/App.vue"
export default {
  name: "Home"
};
</script>
<style scoped>
.homepage{
  text-align: center;
}
.homeText {
  font-size: 35px;
  color: black;
  text-align: center;
  position: relative;
  top: 30px;
  //text-shadow: 2px 2px 2px gray;
}

.credits {
  text-align: center;
  font-size: 35px;
  colour:black
}
</style>
