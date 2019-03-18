import Vue from "vue";
import Router from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import HelloWorld from "@/components/HelloWorld";
import Home from "@/components/Home"; // this is the import line to add
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

Vue.use(Router);

export default new Router({
  routes: [
    // below s the component added for the Home path
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/education",
      name: "Education",
      component: Education
    },
    {
      path: "/skills",
      name: "Skills",
      component: Skills
    }
  ]
});
