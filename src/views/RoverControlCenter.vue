<template>
    <b-container>
        <b-row class="mb-5">
            <grid-edit></grid-edit>
        </b-row>
        <hr>
        <b-row>
            <b-col md="6">
                <rover-edit :roverId="1"></rover-edit>
            </b-col>
            <b-col md="6">
                <rover-edit :roverId="2"></rover-edit>
            </b-col>
        </b-row>
    </b-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import RoverEdit from '@/components/RoverEdit.vue';
import GridEdit from '@/components/GridEdit.vue';

@Component({
    components: {
        RoverEdit,
        GridEdit,
    }
})
export default class RoverControlCenter extends Vue {

}
</script>