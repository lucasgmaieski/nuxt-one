<template>
    <div>
        <img :src="post.url" alt="image post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.date }}</p>
        <p>{{ post.description }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>