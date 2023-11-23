<template>
    <v-row>
        <v-col>
            <v-card>
                <div class="ma-4 d-flex justify-space-around flex-wrap">
                    <div>
                        <div class="d-flex justify-space-between mb-10">
                            <div>
                                <h5>MALE VS FEMALE</h5>
                            </div>
                            <div>
                                <v-btn density="compact" icon="mdi-dots-vertical"></v-btn>
                            </div>
                        </div>
                        <div>
                            <v-img src="src\assets\dashboard\row3\img7.png" width="200px"></v-img>
                        </div>
                    </div>

                    <div class="avg-dwell-time">
                        <div class="d-flex justify-space-between mb-12">
                            <div>
                                <h5>AVG. DWELL TIME</h5>
                            </div>
                            <div>
                                <v-btn density="compact" icon="mdi-dots-vertical"></v-btn>
                            </div>
                        </div>
                        <div class="d-flex justify-center">
                            <v-img src="src\assets\dashboard\row3\img8.png" max-width="100px"></v-img>
                        </div>
                    </div>

                    <div>
                        <div class="d-flex justify-space-between mb-4">
                            <div>
                                <h5>AGE GROUPS</h5>
                            </div>
                            <div>
                                <v-btn density="compact" icon="mdi-dots-vertical"></v-btn>
                            </div>
                        </div>
                        <div>
                            <Table :items="ageGroups" :columns="tableColumns" density="standard" />
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
            ageGroups: [
                {
                    crowdSize: '0:00-14:59',
                    video1: 21,
                    video2: 2,
                    total: 23
                },
                {
                    crowdSize: '15:00-29:59',
                    video1: 0,
                    video2: 0,
                    total: 0
                },
                {
                    crowdSize: '30:00-14:59',
                    video1: 2,
                    video2: 12,
                    total: 14
                },
                {
                    crowdSize: '45:00-14:59',
                    video1: 5,
                    video2: 6,
                    total: 11
                },
            ],
            tableColumns: [
                { label: "Crowd Size", field: "crowdSize" },
                { label: "Video 1", field: "video1" },
                { label: "Video 2", field: "video2" },
                { label: "Total", field: "total" },
            ],
        };
    },
}
</script>

<style scoped>
.avg-dwell-time {
    width: 240px;
}
</style>