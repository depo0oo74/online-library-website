<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view />
</template>

<style>
.router-link-active {
  font-weight: bold;
  color: red;
}
</style>
