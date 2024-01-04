/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable jsdoc/require-jsdoc */

type Listener = () => void;

export class Subscribable<TListener extends Function = Listener> {
    protected listeners: Set<TListener>;

    constructor() {
        this.listeners = new Set();
        this.subscribe = this.subscribe.bind(this);
    }

    subscribe(listener: TListener): () => void {
        this.listeners.add(listener);

        this.onSubscribe();

        return () => {
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }

    protected onSubscribe(): void {
        // Do nothing
    }

    protected onUnsubscribe(): void {
        // Do nothing
    }
}
