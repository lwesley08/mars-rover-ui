export default class RoverLocation {
    public roverId: number | null = null;
    public x: number | null = null;
    public y: number | null = null;

    public constructor(init?: Partial<RoverLocation>) {
        Object.assign(this, init);
    }
}