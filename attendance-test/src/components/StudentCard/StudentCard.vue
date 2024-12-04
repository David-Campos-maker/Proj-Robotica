<script setup lang="ts">
    import { onMounted, PropType } from "vue";
    import Students from "../../interfaces/Students";
    import Avatar from "../Avatar/Avatar.vue";
    import { getAttendanceByStudent } from "../../engine/appEngine";

    const props = defineProps({
        student: {
            type: Object as PropType<Students>,
            required: true
        }
    });

    console.log(props.student);

    onMounted(async() => {
        const res = await getAttendanceByStudent(props.student.ra);
        console.log(res.result);
    })
</script>

<template>
    <div class="student-card__container">
        <Avatar :photo="props.student.photo_url" />
        <div class="students-info">
            <span>{{ props.student.name }}</span>
            <span>{{ props.student.ra }}</span>
            <span>{{ props.student.course }}</span>
        </div>
    </div>
</template>

<style scoped>
    .student-card__container {
        display: flex;
        flex-direction: row;
        column-gap: 16px;
        align-items: center;
    }

    .students-info {
        display: flex;
        flex-direction: row;
        column-gap: 8px;
        align-items: center;
    }
</style>