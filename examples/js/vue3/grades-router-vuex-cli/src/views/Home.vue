<template>
  <div>
    <h1>Students</h1>
    <table>
        <thead>
            <tr>
                <th>Student number</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in students" v-bind:key="row.student_no">
                <td>
                  <router-link v-bind:to="'/student/' + row.student_no">
                    {{ row.student_no }}
                  </router-link>
                </td>
                <td>
                    {{ row.student_name }}
                </td>
            </tr>
        </tbody>
    </table>
    <h1>Courses</h1>
    <table>
        <thead>
            <tr>
                <th>Course code</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in courses" v-bind:key="row.course_id">
                <td>
                  <router-link v-bind:to="'/course/' + row.course_id">
                    {{ row.course_id }}
                  </router-link>
                </td>
                <td>
                    {{ row.course_name }}
                </td>
            </tr>
        </tbody>
    </table>
    <h1>Add grades</h1>
    <grade-form></grade-form>
    </div>
</template>

<script>
import GradeForm from '@/components/GradeForm.vue'

export default {
  name: 'Home',
  components: {
    GradeForm
  },
  computed: {
    students(){
      return this.$store.state.students;
    },
    courses(){
      return this.$store.state.courses;
    }
  },
}
</script>
