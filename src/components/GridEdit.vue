<template>
    <div>
        <h3 class="text-left mb-3">Grid Boundaries</h3>
        <b-row>
            <b-col sm="2">
                <label for="grid-bounds-x">X Coordinate:</label>
            </b-col>
            <b-col sm="2">
                <b-form-input v-model="xInput" id="grid-bounds-x" number></b-form-input>
            </b-col>
            <b-col sm="2">
                <label for="grid-bounds-y">Y Coordinate:</label>
            </b-col>
            <b-col sm="2">
                <b-form-input v-model="yInput" id="grid-bounds-y" number></b-form-input>
            </b-col>
            <b-col cols="auto">
                <b-button variant="success" @click="onSetBoundariesClick">Set Boundaries</b-button>
            </b-col>
        </b-row>
         <h3 class="text-left mb-3">Result:</h3>
        <b-row>
            <b-col sm="3" class="text-left">
                Current Grid Boundaries:
            </b-col>
            <b-col sm="6" class="text-left" v-if="gridBoundaries">
                X: {{ gridBoundaries.x }} &nbsp;
                Y: {{ gridBoundaries.y }} &nbsp;
            </b-col>
        </b-row>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import GridBoundaries from '@/models/GridBoundaries'; 
import { GridBoundariesStore } from '@/stores/GridBoundariesStore';

@Component
export default class GridEdit extends Vue {
    private xInput: number | null = null;
    private yInput: number | null = null;
    private gridBoundaries: GridBoundaries | null | undefined = null;

    private async onSetBoundariesClick(): Promise<void> {
        if(this.xInput && this.yInput) {
            this.gridBoundaries = await GridBoundariesStore.setGridBoundaries({ x: this.xInput, y: this.yInput});
        }
    }
}
</script>
