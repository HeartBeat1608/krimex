import { Subscription } from '../subscription';
import { Storage, StorageConfig } from './base';

export class MemoryStorage<T extends Subscription> extends Storage<T> {
  private subscriptions: Map<string, T> = new Map();

  constructor(config: Partial<StorageConfig> = {}) {
    super(config);
  }

  async addSubscription<K extends T>(subscription: K) {
    this.subscriptions.set(subscription.id, subscription);
    return subscription;
  }

  async createSubscription<T>(): Promise<T> {
    return 0 as any;
  }

  async revokeSubscription<T>(): Promise<T> {
    return 0 as any;
  }

  async getSubscription(subscriptionId: string): Promise<T | undefined> {
    return this.subscriptions.get(subscriptionId) as T;
  }
}
