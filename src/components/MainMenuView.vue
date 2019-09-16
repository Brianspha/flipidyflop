<template>
    <v-app id="inspire">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar align="center" light flat>
                                <v-card-text id="appMenu">FlipidyFlop</v-card-text>
                            </v-toolbar>
                            <v-row>
                                <v-hover v-slot:default="{ hover }">
                                    <v-col justify="center" align="center">
                                        <v-card width="200" class="mx-auto" :ripple="{ center: true }"
                                            :elevation="hover ? 12 : 0" @click="" flat>
                                            <v-card-text id="appMenuButtons">
                                                Play
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-hover>
                            </v-row>

                            <v-row>
                                <v-hover v-slot:default="{ hover }">
                                    <v-col justify="center" align="center">
                                        <v-card width="200" class="mx-auto" :ripple="{ center: true }"
                                            :elevation="hover ? 12 : 0" @click="" flat>
                                            <v-card-text id="appMenuButtons">
                                                Profile
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-hover>
                            </v-row>

                            <v-row>
                                <v-hover v-slot:default="{ hover }">
                                    <v-col justify="center" align="center">
                                        <v-card width="200" class="mx-auto" :ripple="{ center: true }"
                                            :elevation="hover ? 12 : 0" @click="" flat>
                                            <v-card-text id="appMenuButtons">
                                                About
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-hover>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {

    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Courgette&display=swap');

    #appMenu {
        font-family: 'Courgette', cursive;
        font-size: 35px;
        font-weight: bold;
    }

    #appMenuButtons {
        font-family: 'Courgette', cursive;
        font-size: 20px;
        font-weight: bold;
    }
#theme{
    background-color:#ffde03;
}
</style>