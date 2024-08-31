<template>
    <Header />
    <div>
        Home page
    </div>
    <section>
        <h2>Posts</h2>
        <div class="post">
            <PostItem v-for="post in posts" :post="post" :key="post.id"/>
            <PostButtonShare />
        </div>
    </section>
</template>

<script setup lang="ts">
import { posts } from '~/data/PostData';
</script>

<style scoped>
    .post {
        border: 1px solid green;
        border-radius: 15px;
        padding: 10px;
    }
</style>