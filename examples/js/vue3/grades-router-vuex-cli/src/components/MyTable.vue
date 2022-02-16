<template>
    <table>
        <thead>
            <tr>
                <th v-for="head in headings" v-bind:key="tableKey + 'th_' + head.name">
                    {{ head.name }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in rows" v-bind:key="tableKey + 'tr' + index">
                <td v-for="head in headings"
                    v-bind:key="tableKey+ index + 'td' + head.key"
                >
                    {{ row[head.key] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'my-table',
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
        tableKey: String
    },
}
</script>