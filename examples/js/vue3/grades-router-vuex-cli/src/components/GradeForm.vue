<template>
    <form action="">
        <label for="course"  v-if="!course_id">Course</label>
        <select name="course" id="course" v-model="course" v-if="!course_id">
            <option 
                v-for="course in courses" 
                v-bind:value="course.course_id"
                v-bind:key="course.course_id + 'op'"
            >
                {{ course.course_id }}: {{ course.course_name }}
            </option>
        </select><br>
        <label for="student" v-if="!student_no">Student</label>
        <select name="student" id="student" v-model="student"  v-if="!student_no">
            <option 
                v-for="student in students" 
                v-bind:value="student.student_no"
                v-bind:key="student.student_no + 'op'"
            >
                {{ student.student_no }}: {{ student.student_name }}
            </option>
        </select><br>
        <label for="grade">Grade</label>
        <select name="grade" id="grade" v-model="grade">
            <option 
                v-for="grade in ['A','B', 'C', 'D', 'E']" 
                v-bind:value="grade"
                v-bind:key="'grade' + grade+ 'op'"
            >{{ grade }}</option>
        </select><br>
        <button v-on:click="addGrade">Add grade</button>
    </form>
</template>

<script>
export default {
    name: 'GradeForm',
    props: ["student_no", "course_id"],
    data: function(){
        return {
            student: this.student_no,
            course: this.course_id,
            grade: ''
        }
    },
    computed: {
        courses: function(){
            return this.$store.state.courses;
        }, 
        students: function(){
            return this.$store.state.students;
        }
    },
    methods: {
        addGrade: function(event){
            event.preventDefault();
            let grade = {
                student_no: this.student,
                course_id: this.course,
                grade: this.grade,
            };
            console.log('adding grade', grade);
            // need to commit mutation. Cannot call directly.
            this.$store.commit('addGrade', grade);
        }
    }
}
</script>

