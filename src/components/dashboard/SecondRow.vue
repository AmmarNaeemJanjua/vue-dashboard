<template>
    <v-row>
        <v-col>
            <v-card>
                <div class="ma-4 d-flex justify-space-around flex-wrap">
                    <div>
                        <div class="d-flex justify-space-between mb-10">
                            <div>
                                <h5>ANALYSIS</h5>
                            </div>
                            <div>
                                <v-btn density="compact" icon="mdi-dots-vertical"></v-btn>
                            </div>
                        </div>
                        <div>
                            <div>
                                <v-img src="src\assets\dashboard\row2\img5.png" width="300px"></v-img>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="d-flex justify-space-between  mb-4">
                            <div>
                                <h5>STATISTICS</h5>
                            </div>
                            <div>
                                <v-btn density="compact" icon="mdi-dots-vertical"></v-btn>
                            </div>
                        </div>
                        <div class="d-flex justify-space-around">
                            <div>
                                <v-img src="src\assets\dashboard\row2\img6.png" width="500px"></v-img>
                            </div>
                            <div class="d-flex flex-column">
                                <v-btn size="small" variant="outlined" rounded class="mb-2">amount of visitors</v-btn>
                                <v-btn size="small" variant="outlined" rounded class="mb-2">male vs. female</v-btn>
                                <v-btn size="small" variant="elevated" color="#4989BC" rounded class="mb-2">avg.
                                    age</v-btn>
                                <v-btn size="small" variant="outlined" rounded class="mb-2">avg.time</v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style scoped></style>