<template>
    <v-app id="inspire">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center" flat>
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar align="center" light flat>
                                <v-card-text id="appMenu">FlipidyFlop</v-card-text>
                            </v-toolbar>
                            <v-row no-gutters>
                                <v-col>

                                    <v-card flat>
                                        <v-container fluid>
                                            <v-row>
                                                <v-col v-for="(card,n) in cards" :key="n" cols="3">
                                                    <vue-flip :active-click="true" width="90px" height="80px"
                                                        :bindWithMe="card.flipped">
                                                        <div slot="front" :id="'parent-'+n">
                                                            <v-hover v-slot:default="{ hover }">
                                                                <v-card flat tile class="d-flex"
                                                                    :ripple="{ center: true }"
                                                                    :elevation="hover ? 50 : 0" :id="n"
                                                                    @click="flip(card,n)">
                                                                    <v-card-text>
                                                                        <v-icon>fas fa-question</v-icon>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-hover>
                                                        </div>

                                                        <div slot="back">
                                                            <v-hover v-slot:default="{ hover }">
                                                                <v-card flat tile class="d-flex"
                                                                    :ripple="{ center: true }"
                                                                    :elevation="hover ? 50 : 0" :id="n*100"
                                                                    @click="deflipClicked(card,n*100)">
                                                                    <v-img
                                                                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                                                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                                                        aspect-ratio="1" class="grey lighten-2">
                                                                    </v-img>
                                                                </v-card>
                                                            </v-hover>
                                                        </div>
                                                    </vue-flip>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Particles from '../scripts/particles'
    import VueFlip from 'vue-flip';
    import {
        async
    } from 'q';

    export default {
        components: {
            'vue-flip': VueFlip
        },
        data() {
            return {
                flippedCards: [],
                flipped: false,
                cards: [{
                        flipped: false,
                        content: '2'
                    },
                    {
                        flipped: false,
                        content: '1'
                    },
                    {
                        flipped: false,
                        content: '3'
                    },
                    {
                        flipped: false,
                        content: '1'
                    },
                    {
                        flipped: false,
                        content: '2'
                    },
                    {
                        flipped: false,
                        content: '4'
                    },
                    {
                        flipped: false,
                        content: '5'
                    }, {
                        flipped: false,
                        content: '4'
                    },
                    {
                        flipped: false,
                        content: '5'
                    },
                ]
            }
        },
        watch: {
            flippedCards: async function () {
                if (this.flippedCards.length == 2) {
                    this.flippedMatching()
                }
            }
        },
        methods: {
            flip(card, id) {
                if (!this.flippedCards.some((tcard) => tcard.id === card.id)) {
                    console.log(card, id)
                    //this.cards[id].flipped = !card.flipped
                    $(`#${id}`).toggle("explode", {
                        pieces: 32
                    }, 500)
                    card.id = id;
                    this.flippedCards.push(card)
                    console.log("adding new card")
                }
            },
            deflip(card1, card2) {

                this.cards[card1.id].flipped = !card1.flipped
                this.cards[card2.id].flipped = !card1.flipped
                $(`#${card1.id}`).toggle("explode", {
                    pieces: 64
                })
                $(`#${card2.id}`).toggle("explode", {
                    pieces: 64
                })
            },
            deflipClicked(card, id) {
                $(`#${id}`).toggle("explode", {
                    pieces: 64
                })
                this.cards[card.id].flipped = !card.flipped

            },
            flippedMatching() {
                if (this.flippedCards[0].content === this.flippedCards[1].content) {
                    console.log("match")
                } else {
                    console.log("no match")
                }
                this.deflip(this.flippedCards[0], this.flippedCards[1])
                this.flippedCards = []
            }
        }
    }
</script>

<style>
    #inspire {
        width: 100%;
    }


    .front {

        justify-content: center;
        color: white;
    }

    .back {

        justify-content: center;
        color: white
    }

    #toggle {
        width: 200px;
        height: 200px;
        background: purple;
    }
</style>