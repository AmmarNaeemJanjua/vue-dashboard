<template>
    <v-table :density="density">
        <thead>
            <tr>
                <th class="text-left" v-for="column in columns" :key="column.field">
                    {{ column.label }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td v-for="column in columns" :key="column.field">
                    {{ item[column.field] }}
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
  
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
        columns: {
            type: Array,
            required: true,
        },
        density: {
            type: String,
            default: "compact",
        },
    },
};
</script>