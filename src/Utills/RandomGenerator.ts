export class RandomGenerator {
    public static getRandomString(length: number = 10): string {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
      }
      return result;
    }
  
    public static getRandomEmail(): string {
      const domains = ['yahoo.com', 'yopmail.com', 'mailinator.com'];
      const username = this.getRandomString(8).toLowerCase();
      const domain = domains[Math.floor(Math.random() * domains.length)];
      return `${username}@${domain}`;
    }
  }
  