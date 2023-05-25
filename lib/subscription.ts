import { randomBytes } from 'crypto';

export abstract class Subscription {
  protected _id: string;
  protected expiration = 0;

  get id(): string {
    return this._id;
  }

  get isValid(): boolean {
    // If expiration is 0, then it never expires
    return this.expiration > Date.now() || this.expiration === 0;
  }

  get expiresAt(): number {
    return this.expiration;
  }

  generateId(): string {
    const bytes = randomBytes(24);
    return [
      bytes.slice(0, 6).toString('hex'),
      bytes.slice(6, 18).toString('hex'),
      bytes.slice(18, 24).toString('hex'),
    ].join('-');
  }

  constructor() {
    this._id = this.generateId();
  }

  setExpiration(expiration: number) {
    this.expiration = expiration;
  }
}
