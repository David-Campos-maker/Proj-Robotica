<script setup lang="ts">
    import { ref , onMounted } from "vue";
    import { getAttendanceByStudent } from "../../engine/appEngine";
    import Attendance from "./model/Attendance";

    const props = defineProps({
        student_ra: {
            type: String,
            required: true
        }
    });

    const attendance = ref<Array<Attendance>>();

    onMounted(async () => {
        const res = await getAttendanceByStudent(props.student_ra);
        const attendances: Attendance[] = res.result.map(element => ({
            attendance: element.attendance,
            date: element.date
        }));

        attendance.value = attendances;
    });
</script>

<template>
    <div class="attendance-card__container">
        <div class="attendance-card__info" v-for="(item , index) in attendance" :key="index">
            <span>{{ item.date }}:</span>
            <div class="present" v-if="item.attendance">
                <span>Presente</span>
            </div>
            <div class="absent" v-else>
                <span>Ausente</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .attendance-card__container {
        padding: 10px;
        background-color: #363636;
        border-radius: 16px;
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 8px;
    }
    .attendance-card__info {
        align-items: center;
        display: flex;
        flex-direction: row;
        column-gap: 16px;
    }
    .absent {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        padding: 4px;
        background-color: #FF0000;
        color: #F2F2F2F2;
    }
    .present {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        padding: 4px;
        background-color: #32CD32;
        color: #F2F2F2F2;
    }
</style>