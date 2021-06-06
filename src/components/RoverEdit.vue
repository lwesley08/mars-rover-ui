<template>
    <div>
        <h1><u>Rover One</u></h1>
        <h3 class="text-left mb-3">Rover Starting Point</h3>
        <b-row class="mb-5">
            <b-col md="2">
                <label for="x-coordinate">X Coordinate:</label>
            </b-col>
            <b-col md="2">
                <b-form-input v-model="roverStartingLocation.x" id="x-coordinate"></b-form-input>
            </b-col>
            <b-col md="2">
                <label for="y-coordinate">Y Coordinate:</label>
            </b-col>
            <b-col md="2">
                <b-form-input v-model="roverStartingLocation.y" id="y-coordinate"></b-form-input>
            </b-col>
            <b-col md="2">
                <label for="z-coordinate">Z Coordinate:</label>
            </b-col>
            <b-col md="2">
                <b-form-input v-model="roverStartingLocation.z" id="z-coordinate"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="justify-content-md-center mt-3">
            <b-col cols="auto">
                <b-button variant="success">Set Rover Location</b-button>
            </b-col>
        </b-row>
        <h3 class="text-left mb-3">Move Rover</h3>
        <b-row>
            <b-col md="2">
                <label for="x-coordinate">Rover Instructions</label>
            </b-col>
            <b-col md="2">
                <b-form-input v-model="roverInstructions" id="roverInstructions"></b-form-input>
            </b-col>
            <b-col cols="auto">
                <b-button variant="success">Move Location</b-button>
            </b-col>
        </b-row>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import RoverLocation from '@/models/RoverLocation'; 

@Component
export default class RoverEdit extends Vue {
    public roverStartingLocation: RoverLocation | null = new RoverLocation();
    public roverInstructions: string | null = null;
}
</script>
