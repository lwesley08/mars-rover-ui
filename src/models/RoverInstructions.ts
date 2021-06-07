export default class RoverInstructions {
    public roverId: number | null = null;
    public instructions: string | null = null;

    public constructor(init?: Partial<RoverInstructions>) {
        Object.assign(this, init);
    }
}