<template>
    <div>Please wait... </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AuthHandler',
    methods: {
        ...mapActions(['finaliseLogin']),
    },
    created() {
        this.finaliseLogin(window.location.hash)
    }
}
</script>

