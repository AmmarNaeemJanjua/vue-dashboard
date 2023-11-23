<template>
    <v-container>
        <FirstRow />
        <SecondRow />
        <ThirdRow />
        <FourthRow />
        <v-row>
            <v-col>
                <div class="d-flex justify-center">
                    <v-img src="src\assets\dashboard\logo.png" max-width="80px"></v-img>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import FirstRow from '@/components/dashboard/FirstRow.vue'
import SecondRow from '@/components/dashboard/SecondRow.vue'
import ThirdRow from '@/components/dashboard/ThirdRow.vue'
import FourthRow from '@/components/dashboard/FourthRow.vue'

export default {
    components: {
        FirstRow,
        SecondRow,
        ThirdRow,
        FourthRow,
    }
};
</script>
  
<style scoped></style>
  