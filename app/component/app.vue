<template>
    <nav-bar></nav-bar>
    <h1 v-animation animate="bounce" loop>Bounce!</h1>
</template>

<script>
import NavBar from './nav.vue'

export default {
    components: {NavBar}
}
</script>
