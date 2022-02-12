import matcher from './';

expect.extend(matcher);

test('passes when top level properties match', () => {
  expect({x: 1, y: 1}).toMatchObjectProperties({y: 2, x: 2});
});

test('fails when top level propeties are different', () => {
  expect({x: 1, y: 1}).not.toMatchObjectProperties({x: 2, z: 2});
});

test.skip('passes when nested properties match', () => {
  expect({x: {y: {z: 1}}}).toMatchObjectProperties({x: {y: {z: 1}}});
});
