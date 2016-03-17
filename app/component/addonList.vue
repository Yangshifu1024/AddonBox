<template>
    <v-client-table :data.sync="data" :options.sync="options"></v-client-table>
</template>

<script>
    export default {
        props: {
            data: {
                type: Array,
                twoWay: true
            },
            filterKey: String
        },
        data () {
            return {
                options: {
                    filterByColumn: false,
                    columns:['name', 'title', 'version'],
                    headings: {
                        name: 'Name',
                        title: 'Title',
                        uninstall: '',
                    },
                    filterByColumn: false,
                    pagination: {
                        dropdown: false
                    },
                    templates: {
                        uninstall: "<a class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></a>"
                    }
                },
            }
        }
    }
</script>
