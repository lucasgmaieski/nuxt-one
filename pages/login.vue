<template>
    <div>
        <h1>Login form</h1>
        <div>
            <input type="text" placeholder="Name">
            <input type="password" placeholder="Password">
            <button>Enter</button>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "login",
})
</script>

<style scoped>

</style>