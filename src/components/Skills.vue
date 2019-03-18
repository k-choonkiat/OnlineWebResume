<template>
  <div>
    <nav class="programming">
      <h2>Programming Languages</h2>
      <ul>
        <li>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg"
            style="width:50%"
            alt="src/assets/logo.png"
          />
        </li>
        <li>
          <img
            src="http://www.demonixis.net/wp-content/uploads/2014/03/javascript_logo.png"
            style="width:50%"
            alt="here should be a JS photo"
          />
        </li>
        <li>
          <img
            src="https://image.flaticon.com/icons/svg/226/226777.svg "
            style="width:50%"
            alt="here should be a JS photo"
          />
        </li>
        <li>
          <img
            src="https://csml.princeton.edu/sites/csml/files/resize/styles/pwds_media_large_no_crop/public/media/rlogo-382x226.jpg?itok=iK-DWf0w"
            style="width:40%"
            alt="here should be a JS photo"
          />
        </li>
        <li>
          <img
            src="https://www.ajboggs.com/wp-content/uploads/2012/05/mysql-icon.png"
            style="width:40%"
            alt="here should be a JS photo"
          />
        </li>
      </ul>
    </nav>
    <div class="programming2">
      <h2>Web Scripting Tools</h2>
      <ul>
        <li>
          <img
            src="https://firebase.google.com/images/brand-guidelines/logo-standard.png"
            style="width:30%"
            alt="here should be a Google Firebase photo"
          />
        </li>
        <li>
          <img
            src="https://image.flaticon.com/icons/svg/919/919825.svg"
            style="width:60%"
            alt="here should be a Node.js photo"
          />
        </li>
        <li>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            style="width:60%"
            alt="here should be a Node.js photo"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills" //this is the name of the component
};
</script>
<style scoped>
li {
  display: inline-block;
}

programming2 ul li {
  display: inline-block;
  float: left;
}
</style>
