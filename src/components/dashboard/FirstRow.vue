<template>
    <v-row>
        <v-col v-for="(card, index) in topcard" :key="index">
            <v-card max-height="48" color="#4989BC">
                <div class="d-flex">
                    <div style="background-color: white;">
                        <v-img :src="card.image" width="29" class="ma-2"></v-img>
                    </div>
                    <div class="d-flex align-center">
                        <div>
                            <v-card-title>{{ card.title }}</v-card-title>
                        </div>
                        <div>
                            <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            topcard: [
                {
                    image: "src/assets/dashboard/row1/img1.png",
                    title: "38",
                    subtitle: "TOTAL VISITORS",
                },
                {
                    image: "src/assets/dashboard/row1/img2.png",
                    title: "59/125",
                    subtitle: "MALE VS. FEMALE",
                },
                {
                    image: "src/assets/dashboard/row1/img3.png",
                    title: "87",
                    subtitle: "AVG. AGE",
                },
                {
                    image: "src/assets/dashboard/row1/img4.png",
                    title: "43",
                    subtitle: "AVG. TIME",
                },
            ],
        };
    },
}
</script>

<style scoped></style>