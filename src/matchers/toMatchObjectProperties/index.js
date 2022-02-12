import {matcherHint, printExpected, printReceived} from 'jest-matcher-utils';
import predicate from './predicate';

const passMessage = (actual, received) => () => `
  ${matcherHint('.not.toMatchObjectProperties')}

  Expected object to not match properties:
    ${printExpected(actual)}

  Received:
    ${printReceived(received)}
`;

const failMessage = (actual, received) => () => `
  ${matcherHint('.toMatchObjectProperties')}

  Expected object to match properties:
    ${printExpected(actual)}

  Received:
    ${printReceived(received)}
`;

export default {
  toMatchObjectProperties: (actual, expected) => {
    return predicate(actual, expected)
      ? {pass: true, message: passMessage(actual, expected)}
      : {pass: false, message: failMessage(actual, expected)};
  },
};
