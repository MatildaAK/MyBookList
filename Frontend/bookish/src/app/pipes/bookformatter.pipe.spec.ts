import { bookformatterPipe } from './bookformatter.pipe';

describe('RecipeidformatterPipe', () => {
  it('create an instance', () => {
    const pipe = new bookformatterPipe();
    expect(pipe).toBeTruthy();
  });
});
