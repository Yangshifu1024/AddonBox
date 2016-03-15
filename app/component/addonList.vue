<template>
    <table class="table table-hover">
        <thead><th v-for="column in columns">{{ column }}</th></thead>
        <tbody>
            <tr v-for="addon in addons">
                <td>{{ addon.name }}</td>
                <td>{{ addon.title }}</td>
                <td>{{ addon.desc }}</td>
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
        addons: () => {
           return this.data;
        }
    }
</script>
