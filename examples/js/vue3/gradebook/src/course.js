let courseC = {
    props: ["course"],
    template: /*html*/`
    <div>
    <h1>Grades for {{ course.course_id }}: {{ course.course_name }} </h1>
    <my-table
        v-bind:headings="headings"
        v-bind:rows="grades"
    ></my-table>

    <button v-on:click="$emit('back')">To main</button>

    <h1>Add grade</h1>
    <grade-form v-bind:course_id="course.course_id"></grade-form>
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