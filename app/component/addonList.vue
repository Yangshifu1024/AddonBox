<template>
    <table class="table table-hover fixed-table header-fixed">
        <thead><th v-for="column in columns">{{ column }}</th></thead>
        <tbody>
            <tr v-for="addon in data">
                <td>{{ addon.name }}</td>
                <td>{{ addon.Title-zhCN }}</td>
                <td>{{ addon.Notes-zhCN }}</td>
                <td>{{ addon.Author }}</td>
                <td>{{ addon.Version }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            data: Array,
            columns: Array,
            filterKey: String
        },
    }
</script>
