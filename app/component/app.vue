<template>
    <nav-bar></nav-bar>
    <modal-about></modal-about>
</template>

<script>
import NavBar from './nav.vue'
import ModalAbout from './about.vue'

export default {
    components: {
        NavBar,
        ModalAbout
    }
}
</script>
