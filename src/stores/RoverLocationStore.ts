import Vue from 'vue';
import axios, { AxiosResponse } from 'axios';
import RoverLocation from '@/models/RoverLocation';
import RoverInstructions from '@/models/RoverInstructions';

export class RLStore extends Vue {
    public async setStartingLocation(roverLocation: RoverLocation): Promise<RoverLocation | null | undefined> {
        try {
            const response: AxiosResponse<RoverLocation> = await axios.post<RoverLocation>('https://localhost:44372/roverLocation/setStartingLocation', roverLocation, {
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
    
    public async instructRover(roverInstructions: RoverInstructions): Promise<RoverLocation | null | undefined> {
        try {
            const response: AxiosResponse<RoverLocation> = await axios.post<RoverLocation>('https://localhost:44372/roverLocation/instruct', roverInstructions, {
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

export const RoverLocationStore: RLStore = new RLStore();