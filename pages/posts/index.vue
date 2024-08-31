<template>
    <div>
        <h1>Posts</h1>
        <NuxtLink to="/posts/favorites">Favorites</NuxtLink>
        <div class="grid-col-3">

            <PostItem v-for="post in posts" :post="post" :key="post.id"/>

        </div>
    </div>
</template>

<script setup lang="ts">
import { posts } from '~/data/PostData';
</script>

<style scoped>
    .grid-col-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>