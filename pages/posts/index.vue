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
import type { Post } from '~/types/post';

const posts: Post[] = [
  {
    id: 1,
    title: "Asynchronous JavaScript",
    description: "Understanding Asynchronous JavaScript: Promises, Async/Await",
    url: "https://placehold.co/600x400?text=Asynchronous+JavaScript",
    date: "2024-08-01"
  },
  {
    id: 2,
    title: "Functional Programming",
    description: "Introduction to Functional Programming in JavaScript",
    url: "https://placehold.co/600x400?text=Functional+Programming",
    date: "2024-08-03"
  },
  {
    id: 3,
    title: "ES6 Features",
    description: "How to Use ES6 Features in Your JavaScript Projects",
    url: "https://placehold.co/600x400?text=ES6+Features",
    date: "2024-08-05"
  },
  {
    id: 4,
    title: "Node.js and Express",
    description: "Building a REST API with Node.js and Express",
    url: "https://placehold.co/600x400?text=Node.js+and+Express",
    date: "2024-08-07"
  },
  {
    id: 5,
    title: "React Hooks",
    description: "Getting Started with React Hooks",
    url: "https://placehold.co/600x400?text=React+Hooks",
    date: "2024-08-09"
  }
];

</script>

<style scoped>
    .grid-col-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>