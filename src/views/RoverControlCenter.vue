<template>
    <b-container>
        <div class="mb-5">
            <grid-edit></grid-edit>
        </div>
        <div>
            <rover-edit></rover-edit>
        </div>
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