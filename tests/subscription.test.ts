import { TestSubscription } from './stubs/subscription';

describe('Subscription', () => {
  it('should generate a random id', () => {
    const subscription = new TestSubscription();
    expect(subscription.id).toBeTruthy();
  });

  it('should set the expiration time', () => {
    const subscription = new TestSubscription();
    subscription.setExpiration(Date.now() + 60000);
    expect(subscription.id).toBeTruthy();
  });

  it('should get the expiration time', () => {
    const subscription = new TestSubscription();
    const expirationTime = Date.now() + 60000;
    subscription.setExpiration(expirationTime);
    expect(subscription.expiresAt).toBe(expirationTime);
  });

  it('should be valid if expiration is in the future', () => {
    const subscription = new TestSubscription();
    subscription.setExpiration(Date.now() + 60000);
    expect(subscription.isValid).toBe(true);
  });

  it('should be valid if expiration is 0', () => {
    const subscription = new TestSubscription();
    subscription.setExpiration(0);
    expect(subscription.isValid).toBe(true);
  });

  it('should be invalid if expiration is in the past', () => {
    const subscription = new TestSubscription();
    subscription.setExpiration(Date.now() - 60000);
    expect(subscription.isValid).toBe(false);
  });
});
