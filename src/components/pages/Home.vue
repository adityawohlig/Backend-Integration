<template>
  <img src="../../assets/wohlig_transformations.png" alt="Wohlig" />
  <base-card class="but"
    ><router-link to="/signin" class="text"> Signin </router-link></base-card
  >
  <base-card class="but"
    ><router-link to="/signup" class="text"> Signup </router-link></base-card
  >
</template>


<script>
export default {
  name: "home",
};
</script>

<style scoped>
.but {
  background-color: #20bf55;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
}

.text{
    font-family: Helvetica;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
}
</style>