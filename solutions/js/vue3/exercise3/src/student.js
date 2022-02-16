let studentC = {
    props: ["student_no"],
    template: /*html*/`
    <div v-if="student">
    <h1>Grades for {{ student.student_name }} ({{ student.student_no }})</h1>
    <my-table
        v-bind:headings="headings"
        v-bind:rows="grades"
    ></my-table>

    <button v-on:click="toMain">To main</button>

    <h1>Add grade</h1>
    <grade-form v-bind:student_no="student.student_no"></grade-form>
    </div>
    <div v-else>
        No student with number {{this.student_no}} was found.
    </div>
    `,
    methods: {
        toMain: function(){
            this.$router.push('/');
        }
    },
    computed: {
        student: function(){ return store.student(this.student_no); },
        grades: function(){ return store.studentGrades(this.student.student_no); },
        headings: ()=> {
            return [
                { name: "Course", 
                  key: "course_id" },
                { name: "Grade", 
                  key: "grade" }];
        }
    }
}