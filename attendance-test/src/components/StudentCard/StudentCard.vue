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
                <span>Nome: {{ props.student.name }}</span>
                <span>RA: {{ props.student.ra }}</span>
            </div>
            <span class="students-info__course">{{ props.student.course }}</span>
        </div>
        <AttendanceCard v-if="isDetailsVisible" :student_ra="props.student.ra"/>
    </div>
</template>

<style scoped>
    .student-card__container {
        width: 400px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border-radius: 16px;
        border: 1px solid #363636;
        padding: 8px;
    }

    .student-card__container:hover {
        background-color: #363636; 
    }

    .students-info {
        display: flex;
        flex-direction: row;
        column-gap: 8px;
        align-items: center;
    }
    .students-info__course {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        padding: 4px;
        background-color: #836FFF;
        color: #F2F2F2;
    }
</style>