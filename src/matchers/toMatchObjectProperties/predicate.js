function hasProperties(object) {
  const props = Object.getOwnPropertyNames(object);
  return props && props.length > 0;
}

function compareArrays(a, b) {
  const aSorted = a.sort();
  const bSorted = b.sort();

  return aSorted.every((itemOfA, index) => {
    return itemOfA == bSorted[index];
  });
}

function nestedKeys(object) {
  return Object.getOwnPropertyNames(object).reduce((previous, current) => {
    console.log('previous: ' + previous);
    return typeof current === 'object'
      ? [...previous, ...nestedKeys(current)]
      : [...previous, current];
  });
}

/**
 *
 * @param actual
 * @returns {boolean}
 */
function toMatchObjectProperties(actual, received) {
  return compareArrays(nestedKeys(actual), nestedKeys(received));
}

export default (actual, received) => toMatchObjectProperties(actual, received);
