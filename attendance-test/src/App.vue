<script setup lang="ts">
  import { ref , onMounted } from "vue";
  import { getStudents } from "../src/engine/appEngine";
  import Students from "../src/interfaces/Students"; 
  import StudentsCard from "../src/components/StudentCard/StudentCard.vue";

  const studentsRef = ref<Array<Students>>();

  onMounted(async () => {
    const res = await getStudents();

    const students: Students[] = res.result.map(element => ({
      ra: element.ra,
      course: element.course,
      name: element.name,
      photo_url: element.photo_url
    }));

    studentsRef.value = students;
  });
</script>

<template>
  <div class="list__container">
    <div v-for="student in studentsRef" :key="student.ra">
      <StudentsCard :student="student" />
    </div>  
  </div>
</template>

<style scoped>
  .list__container {
    display: flex;
    flex-direction: column;
    row-gap: 14px;
  }
</style>
