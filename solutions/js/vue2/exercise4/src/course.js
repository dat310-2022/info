let courseC = {
    props: ["course"],
    template: `
    <div>
    <h1>Grades for {{ course.course_id }}: {{ course.course_name }} </h1>
    <my-table
        v-bind:headings="headings"
        v-bind:rows="grades"
    ></my-table>

    <button v-on:click="$emit('back')">To main</button>
    </div>
    `,
    data(){
        return {
            grades: store.courseGrades(this.course.course_id)
        }
    },
    computed: {
        headings: ()=> {
            return [
                { name: "Student number", 
                  key: "student_no" },
                { name: "Grade", 
                  key: "grade" }];
        }
    }
}