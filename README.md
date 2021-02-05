# System for Workoutgenerator-Data Input

# System for User-Data Input

# System for Excercise-Data Input

## Name

`"name": [NAME]` <br>
Represents the name of the excercise

## Difficulty

`"difficulty": [VALUE]` <br>
Describes the difficulty (needet physical to be able to performe the excercise well) which is ranging from `1-10`. This Difficult has the same scale then the one stored in the user data.

## Intensities

`"intensities": [{"name": [NAME], "intensity": [VALUE]}]` <br>
Describes the intensities for each body part.<br>
The values have to add up to **100 total points**

| id  |   name    | value |
| --- | :-------: | ----- |
| 0   |   Chest   | 0-100 |
| 1   | Shoulders | 0-100 |
| 2   |  Bizeps   | 0-100 |
| 3   | Underarms | 0-100 |
| 4   |   Butt    | 0-100 |
| 5   |   Legs    | 0-100 |
| 6   |  Stomach  | 0-100 |
| 7   |   Back    | 0-100 |

## Repetition-indicator

`"repetitionIndicator": [VALUE]`
<br>
Is used to estimate if a excercise should be done faster or slower
<br>
| id | value |
| --- | --------- |
| 1 | 1-2/min |
| 2 | 2-5/min |
| 3 | 5-10/min |
| 4 | 10-15/min |
| 5 | 15-20/min |
| 6 | 25-30/min |
| 7 | 30-40/min |
| 8 | 40-50/min |
| 9 | 50-60/min |

## Detections

`"detections": []`
Describe what kind of detection and what detections are used. Different types of detections in an array are the input needed. **Every** object in this array is considered in every step <br>

### Statusorder

The detections functions in steps (waiting till sertain conditions are reached and then jumps to next step) <br>
`"statusorder": [STATUS_1, STATUS_2]`<br>
After every step is done the programm counts one repetition up and start over again till times up or the needed repetitions are reached.

### Types

#### Angle-Detection

```
{
  "point1": 6,
  "point2": 10,
  "pointMiddle": 8,
  "status": [0, 1, 2],
  "statusValue": [
    { "min": 0, "max": 45 },
    { "min": 145, "max": 180 }
  ]
}
```

**Points** <br>

- **Point Middle:** the point where the angle is
- **Point 1/2:** Points to wich the vectors for the angle from the middle point are drawn
  The ID´s refer to the ID´s used by posenet

| Id  | Part          |
| --- | ------------- |
| 0   | nose          |
| 1   | leftEye       |
| 2   | rightEye      |
| 3   | leftEar       |
| 4   | rightEar      |
| 5   | leftShoulder  |
| 6   | rightShoulder |
| 7   | leftElbow     |
| 8   | rightElbow    |
| 9   | leftWrist     |
| 10  | rightWrist    |
| 11  | leftHip       |
| 12  | rightHip      |
| 13  | leftKnee      |
| 14  | rightKnee     |
| 15  | leftAnkle     |
| 16  | rightAnkle    |

**Status** <br>
The **arrays first number is 0 for fallback**
The other correspond to the statusValue-array. Note: treat the status as if fallback does not exist when corresponding to statusValue-array. <br>
`"statusValue": [{min: [VALUE_1], max: [VALUE_2]}]` <br>

- **value_1/2**: describe the lower and upper limit in which a certain status is returned. <br>**The values reach from 0° - 180°**
