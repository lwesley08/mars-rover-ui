<template>
    <b-container>
        <h3 class="text-left mb-3">Rover {{ roverId }} Location History</h3>
        <b-list-group>
            <b-list-group-item v-for="(location, index) in roverLocationHistory" :key="index">
                X: {{ location.x }} &nbsp;
                Y: {{ location.y }} &nbsp;
                Z: {{ location.z }} &nbsp;
                Arrival Date: {{ formatDate(location.createDate) }} &nbsp;
            </b-list-group-item>
        </b-list-group>
    </b-container>
</template>
<script lang="ts">
import RoverLocation from '@/models/RoverLocation';
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { RoverLocationStore } from '@/stores/RoverLocationStore';

@Component
export default class RoverLocationHistory extends Vue {
    @Prop()
    public roverId: number | null | undefined;

    private roverLocationHistory: RoverLocation[] | null | undefined = null;

    private async mounted(): Promise<void> {
        if(this.roverId){
            this.roverLocationHistory = await RoverLocationStore.getRoverLocationHistory(this.roverId);
        }
    }

    private formatDate(date: Date): string {
        return new Date(date).toLocaleString('en-US');
    }
}
</script>