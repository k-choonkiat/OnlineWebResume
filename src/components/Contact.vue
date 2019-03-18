<template>
  <div>
    <h2>Contact Me</h2>
  <p>
    <ul>
      <li>Email: {{email}}</li>
      <li>Website: {{web}}</li>
    </ul>
  </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      email: "choonkiat.dynp@gmail.com" ,
      web:  "www.abc.com"
    }
  }
}
</script>