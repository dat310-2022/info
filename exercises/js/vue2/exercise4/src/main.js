let mainC = {
    props: ["students","courses"],
    template: `
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
            <tr v-for="row in students">
                <td class="click"
                    v-on:click="$emit('show-student', row)">
                    {{ row.student_no }}
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
            <tr v-for="row in courses">
                <td class="click"
                    v-on:click="$emit('show-course',row)">
                    {{ row.course_id }}
                </td>
                <td>
                    {{ row.course_name }}
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    `
};



let tableC = {
    props: {
        headings: {
            type:Array,
            // each element must have name and key
            validate: function(value){
                value.forEach(element => {
                    if (!element.name || !element.key )
                        return false;
                });
                return true;
            }
        },
        rows: Array,
    },
    template: `
    <table>
        <thead>
            <tr>
                <th v-for="head in headings">
                    {{ head.name }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows">
                <td v-for="head in headings">
                    {{ row[head.key] }}
                </td>
            </tr>
        </tbody>
    </table>
    `
}