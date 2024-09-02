
<template>
    <div>
        <h1>Post {{ idParams }}</h1>
        <p>Published {{ difInDays }} days ago</p>
    </div>
</template>

<script setup lang="ts">
import { posts } from '~/data/PostData';
definePageMeta({
    middleware: "post",
})

const route = useRoute();

const idParams = computed(() => route.params.id);

const { daysElapsed, difInDays } = useFormated();

const datePostExample = new Date(2024, 7, 1);

daysElapsed(datePostExample);
const post = posts.find( post => post.id == +idParams.value)
useHead({
  title: post?.title,
  meta: [
    { name: 'description', content: post?.description }
  ],
  bodyAttrs: {
    class: 'single-post'
  },
})
</script>

<style scoped>

</style>