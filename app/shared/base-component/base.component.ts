import { Subscription } from 'rxjs';

export abstract class BaseComponent {
    protected unsubscribe(...subscriptions: Array<Subscription>): void {
        for (const subscription of subscriptions) {
            if (subscription && subscription.closed !== true) {
                subscription.unsubscribe();
            }
        }
    }
}