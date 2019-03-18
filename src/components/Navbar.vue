<template>
  <nav>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand :to="{ name: 'Home' }">Home</b-navbar-brand>
      <b-navbar-nav>
        <b-navbar-brand :to="{ name: 'Education' }">Education</b-navbar-brand>

        <b-navbar-brand :to="{ name: 'Contact' }">Contact Me</b-navbar-brand>
        <b-navbar-brand :to="{ name: 'Skills' }">Skills</b-navbar-brand>
      </b-navbar-nav>
    </b-navbar>
  </nav>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style>
nav {
  dislay: block;
}
</style>
