import rgyReplace from '../../src/strategies/rgyReplace';

const testString = `
  There are several people who wish to indicate things about other things.
  There are dates like 01/01/2001 where things happened. Also there are other dates.
  Like 02/24/2041. But I'll tell you what's not a date. A date that isn't a date is 01/33/2011.
`;

const testValidationString = `
  There car several people who wish to indicate things about other things.
  There car dates like 01/01/2001 where things happened. Also there car other dates.
  Like 02/24/2041. But I'll tell you what's not a date. A date that isn't a date is 01/33/2011.
`;

describe('rgyReplace', () => {
  it('Replaces values in a string', () => {
    const tester = rgyReplace(/are/gm);
    const replaced = tester(testString, 'car');

    expect(replaced).toMatch(testValidationString);
  });
});
