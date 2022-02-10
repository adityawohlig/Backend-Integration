<template>
<button class="btn btn-outline-danger" @click = "logOut">Logout</button>
<h4>Deep Learning </h4>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/sbvv-uQmwVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>


<script>

export default({
   name: "video",
   methods:{
       logOut(){
           this.$store.dispatch('logout');
           this.$router.push('/');
       }
   }
})
</script>
