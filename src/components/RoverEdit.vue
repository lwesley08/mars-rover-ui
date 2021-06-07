<template>
    <b-card>
        <h1><u>Rover {{ roverId }}</u></h1>
        <h3 class="text-left mb-3">Rover Starting Point</h3>
        <b-row>
            <b-col sm="1">
                <label class="mb-0" for="x-coordinate">X:</label>
            </b-col>
            <b-col sm="3">
                <b-form-input v-model="roverStartingLocation.x" id="x-coordinate" number></b-form-input>
            </b-col>
            <b-col sm="1">
                <label for="y-coordinate">Y:</label>
            </b-col>
            <b-col sm="3">
                <b-form-input v-model="roverStartingLocation.y" id="y-coordinate" number></b-form-input>
            </b-col>
            <b-col sm="1">
                <label for="z-coordinate">Z:</label>
            </b-col>
            <b-col sm="3">
                <b-form-input v-model="roverStartingLocation.z" id="z-coordinate"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="justify-content-sm-center mt-3">
            <b-col cols="auto">
                <b-button variant="success" @click="onSetRoverLocationClick">Set Rover Location</b-button>
            </b-col>
        </b-row>
        <h3 class="text-left mb-3">Move Rover</h3>
        <b-row>
            <b-col sm="6">
                <label for="instructions">Rover Instructions:</label>
            </b-col>
            <b-col sm="6">
                <b-form-input v-model="instructions" id="instructions"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="justify-content-sm-center mt-3">
            <b-col cols="auto">
                <b-button variant="success" @click="onInstructRoverClick">Instruct Rover</b-button>
            </b-col>
        </b-row>
        <h3 class="text-left mb-3">Result:</h3>
        <b-row v-if="currentLocation">
            <b-col sm="6">
                Current Rover Location:
            </b-col>
            <b-col sm="6">
                X: {{ currentLocation.x }} &nbsp;
                Y: {{ currentLocation.y }} &nbsp;
                Z: {{ currentLocation.z }} &nbsp;
            </b-col>
        </b-row>
    </b-card>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import RoverLocation from '@/models/RoverLocation'; 
import { RoverLocationStore } from '@/stores/RoverLocationStore';
import RoverInstructions from '@/models/RoverInstructions';

@Component
export default class RoverEdit extends Vue {
    @Prop()
    public roverId: number | null | undefined;

    private roverStartingLocation: RoverLocation | null = new RoverLocation();
    private instructions: string | null = null;
    private currentLocation: RoverLocation | null | undefined = null;

    private async onSetRoverLocationClick(): Promise<void> {
        if(this.roverStartingLocation && this.roverId) {
            this.currentLocation = await RoverLocationStore.setStartingLocation({...this.roverStartingLocation, roverId: this.roverId});
        }
    }
    
    private async onInstructRoverClick(): Promise<void> {
        if(this.roverStartingLocation && this.roverId) {
            const roverInstructions = new RoverInstructions({ roverId: this.roverId, instructions: this.instructions });
            this.currentLocation = await RoverLocationStore.instructRover(roverInstructions);
        }
    }
}
</script>
