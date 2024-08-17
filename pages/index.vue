<template>
    <Header />
    <div>
        Home page
    </div>
    <section>
        <h2>Posts</h2>
        <div class="post">
            <PostItem />
            <PostButtonShare />
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .post {
        border: 1px solid green;
        border-radius: 15px;
        padding: 10px;
    }
</style>