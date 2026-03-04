export abstract class Entity<T> {
    protected readonly _id: number;
    public readonly props: T;

    constructor(props: T, id?: number) {
        this._id = id || 0;
        this.props = props;
    }

    get id(): number {
        return this._id;
    }
}

export abstract class AggregateRoot<T> extends Entity<T> { }

export abstract class ValueObject<T> {
    public readonly props: T;

    constructor(props: T) {
        this.props = Object.freeze(props);
    }

    public equals(vo?: ValueObject<T>): boolean {
        if (vo === null || vo === undefined) return false;
        if (vo.props === undefined) return false;
        return JSON.stringify(this.props) === JSON.stringify(vo.props);
    }
}
