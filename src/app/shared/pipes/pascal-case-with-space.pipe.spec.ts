import { PascalCaseWithSpacePipe } from './pascal-case-with-space.pipe';

describe('PascalCaseWithSpacePipe', () => {
  it('create an instance', () => {
    const pipe = new PascalCaseWithSpacePipe();
    expect(pipe).toBeTruthy();
  });
});
