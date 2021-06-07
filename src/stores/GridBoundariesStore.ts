import Vue from 'vue';
import GridBoundarires from '@/models/GridBoundaries';
import axios, { AxiosResponse } from 'axios';

export class GBStore extends Vue {
    public async setGridBoundaries(gridBoundaries: GridBoundarires): Promise<GridBoundarires | null | undefined> {
        try {
            const response: AxiosResponse<GridBoundarires> = await axios.post<GridBoundarires>('https://localhost:44372/gridBoundaries', gridBoundaries, {
                headers: {
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            });
            return response.data;
        } catch(error) {
            console.log(error);
        }
    }
}

export const GridBoundariesStore: GBStore = new GBStore();