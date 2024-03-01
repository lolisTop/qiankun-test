<template>
  <div>
    <div>sub-vue-cli-vue2</div>
    <!-- <a @click="$router.push('/sub-vue-cli-vue3/about')">project3/Home</a> -->
    <router-link to="/home">
      Home
    </router-link>
    <router-link to="/about">
      About
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
	name: 'App',
	components: {}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
