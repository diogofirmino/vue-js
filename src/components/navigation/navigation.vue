<template>
  <div class="navigation">
    <router-link :class="{'navigation--link': true, selected: $route.name === 'home'}"
      to="/">Home</router-link>
    <router-link :class="{'navigation--link': true, selected: $route.name === 'mylist'}"
      to="/mylist">My list</router-link>
    <router-link :class="{'navigation--link': true, selected: $route.name === 'about'}"
      to="/about">About</router-link>

  </div>
</template>

<script type="text/javascript" src="./navigation.js"></script>
<style lang="scss" scoped src="./navigation.scss"></style>
