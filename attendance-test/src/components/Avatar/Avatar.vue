<script setup lang="ts">
    const props = defineProps({
        photo: {
            type: String,
        }
    });
</script>

<template>
    <img class="avatar" :src="props.photo" alt="profile" />
</template>

<style>
    .avatar{
        width: 65px;
        height: 65px;
        border-radius: 50%;
        object-fit: cover;
    }
</style>