import { defaultStorageConfig } from '../lib/storage/base';
import { MemoryStorage } from '../lib/storage/memory';
import { TestSubscription } from './stubs/subscription';

describe('Memory Storage', () => {
  it('should instantiate', () => {
    const storage = new MemoryStorage();
    expect(storage).toBeTruthy();
  });

  it('should be able to get default storage config', () => {
    const storage = new MemoryStorage();
    const config = storage.getConfig();
    expect(config).toEqual(defaultStorageConfig);
  });

  it('should be able to get storage config with meta', () => {
    const storage = new MemoryStorage({ meta: { foo: 'bar' } });
    const config = storage.getConfig();
    expect(config).toEqual({ meta: { foo: 'bar' } });
  });

  it('should be able to add new subscription', async () => {
    const subscription = new TestSubscription();
    const storage = new MemoryStorage();
    await storage.addSubscription(subscription);
    const result = await storage.getSubscription(subscription.id);
    expect(result).toEqual(subscription);
  });
});
