<script setup lang="ts">
    import { ref , PropType } from "vue";
    import Students from "../../interfaces/Students";
    import Avatar from "../Avatar/Avatar.vue";
    import AttendanceCard from "../AttendanceCard/AttendanceCard.vue";

    const props = defineProps({
        student: {
            type: Object as PropType<Students>,
            required: true
        }
    });

    const isDetailsVisible = ref(false);

    const toggleDetails = () => {
        isDetailsVisible.value = !isDetailsVisible.value;
    };
</script>

<template>
    <div>
        <div class="student-card__container" @click="toggleDetails">
            <Avatar :photo="props.student.photo_url" />
            <div class="students-info">
                <span>{{ props.student.name }}</span>
                <span>{{ props.student.ra }}</span>
                <span>{{ props.student.course }}</span>
            </div>
        </div>
        <AttendanceCard v-if="isDetailsVisible" :student_ra="props.student.ra"/>
    </div>
</template>

<style scoped>
    .student-card__container {
        display: flex;
        flex-direction: row;
        column-gap: 16px;
        align-items: center;
        cursor: pointer;
    }

    .students-info {
        display: flex;
        flex-direction: row;
        column-gap: 8px;
        align-items: center;
    }
</style>