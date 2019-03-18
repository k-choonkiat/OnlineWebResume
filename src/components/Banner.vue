<template>
  <div class="header">
    <img
      class="bkgrd"
      src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/gsyymnixefp01jb00bge/CebuKawasanWaterfallsOsmenaPeakDayTour.webp"
      alt="background photo"
      height="200px"
      style="width:100%;"
      float="left"
    />
    <h1>Kang Choon Kiat</h1>
  </div>
</template>

<script>
export default {
  name: "Banner" //this is the name of the component
};
</script>
<style scoped>
.header h1 {
  text-align: center;
  display: block;
}
.bkgrd {
  margin: 0px;
}

.header {
  height: 200px;
}

img {
  padding: 0px;
  display: block;
  vertical-align: middle;
}
</style>
