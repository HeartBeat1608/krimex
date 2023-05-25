import { Subscription } from '../subscription';

export type StorageConfig = {
  meta?: Record<string, any>;
};

export abstract class Storage<T extends Subscription> {
  protected config: StorageConfig;

  constructor(config: Partial<StorageConfig> = {}) {
    this.config = { ...defaultStorageConfig, ...config };
  }

  getConfig() {
    return this.config;
  }

  abstract addSubscription(subscription: T): Promise<T>;
  abstract createSubscription<K>(body: K): Promise<T>;
  abstract revokeSubscription(subscriptionId: string): Promise<boolean>;
  abstract getSubscription(subscriptionId: string): Promise<T | undefined>;
}

export const defaultStorageConfig: StorageConfig = {
  meta: {},
};
