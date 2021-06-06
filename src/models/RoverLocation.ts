export default class RoverLocation {
    public x: number | null = null;
    public y: number | null = null;
    public z: 'N' | 'E' | 'S' | 'W' | null  = null;
    public createDate: Date | null = null;

    public constructor(init?: Partial<RoverLocation>) {
        Object.assign(this, init);
    }
}