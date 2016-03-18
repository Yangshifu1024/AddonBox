<template>
    <div class="addons-container">
        <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th v-for="column in columns">{{ column }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="addon in addons | filterBy query">
                    <td>{{ addon.name }}</td>
                    <td>{{ addon.title }}</td>
                    <td>{{ addon.version }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            addons: {
                type: Array,
            },
            query: {
                type: String
            },
            columns: {
                type: Array
            }
        },
    }
</script>
