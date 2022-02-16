let courseC = {
    props: ["course_id"],
    template: /*html*/`
    <div>
    <h1>Grades for {{ course.course_id }}: {{ course.course_name }} </h1>
    <my-table
        v-bind:headings="headings"
        v-bind:rows="grades"
    ></my-table>

    <button v-on:click="toMain">To main</button>

    <h1>Add grade</h1>
    <grade-form v-bind:course_id="course.course_id"></grade-form>
    </div>
    `,
    methods: {
        toMain: function(){
            this.$router.push('/');
        }
    },
    computed: {
        course: function(){
            return store.course(this.course_id);
        },
        grades: function(){
            return store.courseGrades(this.course.course_id);
        },
        headings: ()=> {
            return [
                { name: "Student number", 
                  key: "student_no" },
                { name: "Grade", 
                  key: "grade" }];
        }
    }
}