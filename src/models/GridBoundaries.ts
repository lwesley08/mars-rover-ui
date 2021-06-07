export default class GridBoundaries {
    public x: number | null = null;
    public y: number | null = null;

    public constructor(init?: Partial<GridBoundaries>) {
        Object.assign(this, init);
    }
}