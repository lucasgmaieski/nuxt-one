
<template>
    <div>
        <h1>Post {{ idParams }}</h1>
        <p>Published {{ difInDays }} days ago</p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: "post",
})

const route = useRoute();

const idParams = computed(() => route.params.id);

const { daysElapsed, difInDays } = useFormated();

const datePostExample = new Date(2024, 7, 1);

daysElapsed(datePostExample)
</script>

<style scoped>

</style>