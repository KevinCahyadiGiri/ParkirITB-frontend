<template>
  <v-app>
    <div class="cont">
      <router-link class="opt" to="/mobile-app" tag="div">
        <span>Simulasi Mobile App Untuk Mahasiswa</span> 
      </router-link>
      <router-link class="opt" to="/website" tag="div">
        <span>Simulasi Website SARPRAS</span> 
      </router-link>
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style scoped>
.cont {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.opt {
  width: 50%;
  text-align: center;
  height: 100%;
  display: flex;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid black;
}
</style>
