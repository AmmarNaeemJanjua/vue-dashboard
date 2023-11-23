<template>
    <v-row>
        <v-col>
            <v-card>
                <div class="ma-4 d-flex justify-space-around flex-wrap">
                    <div>
                        <div class="d-flex justify-space-between mb-4">
                            <div>
                                <h5>NATIONALITY</h5>
                            </div>
                            <div>
                                <v-btn density="compact" icon="mdi-dots-vertical"></v-btn>
                            </div>
                        </div>
                        <div>
                            <Table :items="nationality" :columns="tableColumns" density="compact" />
                        </div>
                    </div>
                    <div>
                        <div class="d-flex justify-space-between mb-2">
                            <div>
                                <h5>REPEATED VISITORS</h5>
                            </div>
                            <div>
                                <v-btn density="compact" icon="mdi-dots-vertical"></v-btn>
                            </div>
                        </div>
                        <div>
                            <div>
                                <v-img src="src\assets\dashboard\row4\img9.png" width="350px"></v-img>
                            </div>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import Table from "@/components/Table.vue"
export default {
    components: {
        Table,
    },
    data() {
        return {
            nationality: [
                {
                    col1: 'Caucasian %',
                    col2: 48.38,
                    col3: 0,
                    col4: 0,
                    col5: 48.38,
                },
                {
                    col1: 'Black %',
                    col2: 0.00,
                    col3: 2824,
                    col4: 2824,
                    col5: 0.00,
                },
                {
                    col1: 'Hispanic %',
                    col2: 28.29,
                    col3: 1371,
                    col4: 1371,
                    col5: 28.29,
                },
                {
                    col1: 'Asian %',
                    col2: 23.33,
                    col3: 1055,
                    col4: 1055,
                    col5: 23.33,
                },
            ],
            tableColumns: [
                { label: "Video 1", field: "col1" },
                { label: "0:00-14:59", field: "col2" },
                { label: "15:00-29:59", field: "col3" },
                { label: "30:00-44:59", field: "col4" },
                { label: "45:00-59:59", field: "col5" },

            ],
        };
    },
}
</script>

<style scoped></style>
