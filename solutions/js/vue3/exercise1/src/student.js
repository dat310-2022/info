let studentC = {
    props: ["student"],
    template: /*html*/`
    <div>
    <h1>Grades for {{ student.student_name }} ({{ student.student_no }})</h1>
    <my-table
        v-bind:headings="headings"
        v-bind:rows="grades"
    ></my-table>

    <button v-on:click="$emit('back')">To main</button>

    <h1>Add grade</h1>
    <grade-form v-bind:student_no="student.student_no"></grade-form>
    </div>
    `,
    computed: {
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