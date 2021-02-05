import { DetectionAngle } from '../detection'

let detection = new DetectionAngle();
test('DetectionAngle', () => {
  expect(detection._next({})).toBe([]);
});
