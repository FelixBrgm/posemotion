import { DetectionAnglePosenet } from '../detection'

let detection = new DetectionAnglePosenet();
test('DetectionAngle', () => {
  expect(detection._next({}: Harmonized)).toBe([]);
});
