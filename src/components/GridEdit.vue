<template>
    <div>
        <h3 class="text-left mb-3">Grid Boundaries</h3>
        <b-row>
            <b-col md="2">
                <label for="grid-bounds-x">X Coordinate:</label>
            </b-col>
            <b-col md="2">
                <b-form-input v-model="gridBoundaries.x" id="grid-bounds-x"></b-form-input>
            </b-col>
            <b-col md="2">
                <label for="grid-bounds-y">Y Coordinate:</label>
            </b-col>
            <b-col md="2">
                <b-form-input v-model="gridBoundaries.y" id="grid-bounds-y"></b-form-input>
            </b-col>
            <b-col cols="auto">
                <b-button variant="success">Set Boundaries</b-button>
            </b-col>
        </b-row>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import GridBoundaries from '@/models/GridBoundaries'; 

@Component
export default class GridEdit extends Vue {
    public gridBoundaries: GridBoundaries | null = new GridBoundaries();
}
</script>
