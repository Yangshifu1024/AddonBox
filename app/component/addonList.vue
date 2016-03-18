<template>
    <div class="plugins-container">
        <v-client-table :data.sync="data" :options.sync="options"></v-client-table>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: Array,
                twoWay: true
            },
            query: {
                twoWay: true
            }
        },
        data () {
            return {
                options: {
                    tableName: 'Plugins',
                    perPage: 8,
                    skin: 'table-striped table-bordered table-hover',
                    filterByColumn: false,
                    columns: ['name', 'title', 'version'],
                    editableColumns: [],
                    checkboxes: true,
                    checkboxesName: 'Plugin',
                    components: {
                        limit: false,
                        count: false,
                    },
                    texts: {
                        count: '{count} Plugins',
                        filter: 'Search plugin:',
                        filterPlaceholder: 'Key',
                        limit: 'Per-Page:',
                        noResults: 'No results',
                        page: 'Page:',
                        filterBy: 'Filter by {column}'
                    },
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
