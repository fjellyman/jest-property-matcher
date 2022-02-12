import predicate from './predicate';

function hasNestedProperties(object) {
  return Object.getOwnPropertyNames(object).some(prop => {
    return typeof object[prop] === 'object' && Object.keys.length > 0;
  });
}

function getProperties(object) {
  return Object.getOwnPropertyNames(object).map(prop => [prop]);
}

function nestedProperties(object) {
  let properties = Object.getOwnPropertyNames(object).map(prop => [prop]);
  let currentObjects = [object];
  let checkForNestedProperties = hasNestedProperties(object);
  while (checkForNestedProperties) {
    checkForNestedProperties = currentObjects.some(hasNestedProperties);
    currentObjects.forEach(current =>
      console.log(Object.getOwnPropertyNames(current)),
    );
    checkForNestedProperties = false;
  }

  return properties;
}

test('returns false when object does not have nested property', () => {
  expect(hasNestedProperties({x: 1})).toEqual(false);
});

test('returns true when object has nested property', () => {
  expect(hasNestedProperties({x: {x: 1}})).toEqual(true);
});

test('top level properties are returned in array of property arrays', () => {
  expect(nestedProperties({x: 1, y: 1})).toEqual([['x'], ['y']]);
});

test.skip('nested level properties are returned in array of property arrays', () => {
  expect(nestedProperties({x: {x: 1}})).toEqual(['x', ['x']]);
});

test.todo('returns true when top level properties match');
