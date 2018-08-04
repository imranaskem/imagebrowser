<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">Image storage</router-link>

        <div v-if="isLoggedIn" class="right menu">
            <router-link to="/" class="item">Gallery</router-link>
            <router-link to="upload" class="item">Upload</router-link>
            <router-link to="/" class="item" @click.native="logout">Logout</router-link>
        </div>

        <div v-else class="right menu">
            <a class="ui item" @click="login">Login</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Header',
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    methods: {
        ...mapActions(['login', 'logout'])
        }
    }
</script>

<style scoped>

</style>


