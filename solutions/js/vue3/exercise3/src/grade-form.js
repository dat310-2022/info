let gradeFormC = {
    props: ["student_no", "course_id"],
    template: `
    <form action="">
        <label for="course"  v-if="!course_id">Course</label>
        <select name="course" id="course" v-model="course" v-if="!course_id">
            <option v-for="course in courses" v-bind:value="course.course_id">{{ course.course_id }}: {{ course.course_name }}</option>
        </select><br>
        <label for="student" v-if="!student_no">Student</label>
        <select name="student" id="student" v-model="student"  v-if="!student_no">
            <option v-for="student in students" v-bind:value="student.student_no">{{ student.student_no }}: {{ student.student_name }}</option>
        </select><br>
        <label for="grade">Grade</label>
        <select name="grade" id="grade" v-model="grade">
            <option v-for="grade in ['A','B', 'C', 'D', 'E']" v-bind:value="grade">{{ grade }}</option>
        </select><br>
        <button v-on:click="addGrade">Add grade</button>
    </form>
    `,
    data: function(){
        return {
            student: this.student_no,
            course: this.course_id,
            grade: ''
        }
    },
    computed: {
        courses: function(){
            return store.state.courses;
        }, 
        students: function(){
            return store.state.students;
        }
    },
    methods: {
        addGrade: function(event){
            event.preventDefault();
            store.addGrade(this.student, this.course, this.grade);
        }
    }
}