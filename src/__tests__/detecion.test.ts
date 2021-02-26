import { PosenetParts } from '../detection/detection'
import { DetectionAngle } from '../detection/detectionAngle';
import { DetectionBodyRotation } from '../detection/detectionBodyRotation';



let detectionAngle = new DetectionAngle({
  point1: PosenetParts.leftWrist,
  point2: PosenetParts.leftShoulder,
  pointMiddle: PosenetParts.leftElbow,
  hooks: {
    close: {
      min: 0,
      max: 45
    },
    mid: {
      min: 50,
      max: 145
    },
    open: {
      min: 0,
      max: 180
    }
  }
});

let posenetOutputClose = {
  "pose": {
    "score": 0.32371445304906,
    "keypoints": [
      {
        "position": {
          "y": 76.291801452637,
          "x": 253.36747741699
        },
        "part": "nose",
        "score": 0.99539834260941
      },
      {
        "position": {
          "y": 71.10383605957,
          "x": 253.54365539551
        },
        "part": "leftEye",
        "score": 0.98781454563141
      },
      {
        "position": {
          "y": 71.839515686035,
          "x": 246.00454711914
        },
        "part": "rightEye",
        "score": 0.99528175592422
      },
      {
        "position": {
          "y": 72.848854064941,
          "x": 263.08151245117
        },
        "part": "leftEar",
        "score": 0.84029853343964
      },
      {
        "position": {
          "y": 79.956565856934,
          "x": 234.26812744141
        },
        "part": "rightEar",
        "score": 0.92544466257095
      },
      {
        "position": {
          "y": 399.64068603516,
          "x": 100
        },
        "part": "leftShoulder",
        "score": 0.99559044837952
      },
      {
        "position": {
          "y": 95.082359313965,
          "x": 458.21868896484
        },
        "part": "rightShoulder",
        "score": 0.99583911895752
      },
      {
        "position": {
          "y": 94.626205444336,
          "x": 163.94561767578
        },
        "part": "leftElbow",
        "score": 0.9518963098526
      },
      {
        "position": {
          "y": 150.2349395752,
          "x": 245.06030273438
        },
        "part": "rightElbow",
        "score": 0.98052614927292
      },
      {
        "position": {
          "y": 113.9603729248,
          "x": 393.19735717773
        },
        "part": "leftWrist",
        "score": 0.94009721279144
      },
      {
        "position": {
          "y": 186.47859191895,
          "x": 257.98034667969
        },
        "part": "rightWrist",
        "score": 0.98029226064682
      },
      {
        "position": {
          "y": 208.5266418457,
          "x": 284.46710205078
        },
        "part": "leftHip",
        "score": 0.97870296239853
      },
      {
        "position": {
          "y": 209.9910736084,
          "x": 243.31219482422
        },
        "part": "rightHip",
        "score": 0.97424703836441
      },
      {
        "position": {
          "y": 281.61965942383,
          "x": 310.93188476562
        },
        "part": "leftKnee",
        "score": 0.98368924856186
      },
      {
        "position": {
          "y": 282.80120849609,
          "x": 203.81164550781
        },
        "part": "rightKnee",
        "score": 0.96947449445724
      },
      {
        "position": {
          "y": 360.62716674805,
          "x": 292.21047973633
        },
        "part": "leftAnkle",
        "score": 0.8883239030838
      },
      {
        "position": {
          "y": 347.41177368164,
          "x": 203.88229370117
        },
        "part": "rightAnkle",
        "score": 0.8255187869072
      }
    ]
  }

}
let posenetOutputOpen = {
  "pose": {
    "score": 0.32371445304906,
    "keypoints": [
      {
        "position": {
          "y": 76.291801452637,
          "x": 253.36747741699
        },
        "part": "nose",
        "score": 0.99539834260941
      },
      {
        "position": {
          "y": 71.10383605957,
          "x": 253.54365539551
        },
        "part": "leftEye",
        "score": 0.98781454563141
      },
      {
        "position": {
          "y": 71.839515686035,
          "x": 246.00454711914
        },
        "part": "rightEye",
        "score": 0.99528175592422
      },
      {
        "position": {
          "y": 72.848854064941,
          "x": 263.08151245117
        },
        "part": "leftEar",
        "score": 0.84029853343964
      },
      {
        "position": {
          "y": 79.956565856934,
          "x": 234.26812744141
        },
        "part": "rightEar",
        "score": 0.92544466257095
      },
      {
        "position": {
          "y": 100,
          "x": 400
        },
        "part": "leftShoulder",
        "score": 0.99559044837952
      },
      {
        "position": {
          "y": 95.082359313965,
          "x": 458.21868896484
        },
        "part": "rightShoulder",
        "score": 0.99583911895752
      },
      {
        "position": {
          "y": 94.626205444336,
          "x": 163.94561767578
        },
        "part": "leftElbow",
        "score": 0.9518963098526
      },
      {
        "position": {
          "y": 150.2349395752,
          "x": 245.06030273438
        },
        "part": "rightElbow",
        "score": 0.98052614927292
      },
      {
        "position": {
          "y": 113.9603729248,
          "x": 393.19735717773
        },
        "part": "leftWrist",
        "score": 0.94009721279144
      },
      {
        "position": {
          "y": 186.47859191895,
          "x": 257.98034667969
        },
        "part": "rightWrist",
        "score": 0.98029226064682
      },
      {
        "position": {
          "y": 208.5266418457,
          "x": 284.46710205078
        },
        "part": "leftHip",
        "score": 0.97870296239853
      },
      {
        "position": {
          "y": 209.9910736084,
          "x": 243.31219482422
        },
        "part": "rightHip",
        "score": 0.97424703836441
      },
      {
        "position": {
          "y": 281.61965942383,
          "x": 310.93188476562
        },
        "part": "leftKnee",
        "score": 0.98368924856186
      },
      {
        "position": {
          "y": 282.80120849609,
          "x": 203.81164550781
        },
        "part": "rightKnee",
        "score": 0.96947449445724
      },
      {
        "position": {
          "y": 360.62716674805,
          "x": 292.21047973633
        },
        "part": "leftAnkle",
        "score": 0.8883239030838
      },
      {
        "position": {
          "y": 347.41177368164,
          "x": 203.88229370117
        },
        "part": "rightAnkle",
        "score": 0.8255187869072
      }
    ]
  }

}
test('DetectionAngle', () => {
  expect(detectionAngle.next(posenetOutputClose)).toStrictEqual(['mid', 'open']);
  expect(detectionAngle.next(posenetOutputOpen)).toStrictEqual(['close', 'open']);
  expect(detectionAngle.next(posenetOutputOpen)).toStrictEqual(['close', 'open']);
});

// BodyRotation
let detectionBodyRotation = new DetectionBodyRotation({
  hooks: {
    front: {
      min: 0,
      max: 0
    },
    side: {
      min: 90,
      max: 90
    }
  }
});

let posenetFrontFacing = {
  "pose": {
    "score": 0.32371445304906,
    "keypoints": [
      {
        "position": {
          "y": 76.291801452637,
          "x": 253.36747741699
        },
        "part": "nose",
        "score": 0.99539834260941
      },
      {
        "position": {
          "y": 71.10383605957,
          "x": 253.54365539551
        },
        "part": "leftEye",
        "score": 0.98781454563141
      },
      {
        "position": {
          "y": 71.839515686035,
          "x": 246.00454711914
        },
        "part": "rightEye",
        "score": 0.99528175592422
      },
      {
        "position": {
          "y": 72.848854064941,
          "x": 263.08151245117
        },
        "part": "leftEar",
        "score": 0.84029853343964
      },
      {
        "position": {
          "y": 79.956565856934,
          "x": 234.26812744141
        },
        "part": "rightEar",
        "score": 0.92544466257095
      },
      {
        "position": {
          "y": 0,
          "x": 0
        },
        "part": "leftShoulder",
        "score": 0.99559044837952
      },
      {
        "position": {
          "y": 100,
          "x": 0
        },
        "part": "rightShoulder",
        "score": 0.99583911895752
      },
      {
        "position": {
          "y": 94.626205444336,
          "x": 163.94561767578
        },
        "part": "leftElbow",
        "score": 0.9518963098526
      },
      {
        "position": {
          "y": 150.2349395752,
          "x": 245.06030273438
        },
        "part": "rightElbow",
        "score": 0.98052614927292
      },
      {
        "position": {
          "y": 113.9603729248,
          "x": 393.19735717773
        },
        "part": "leftWrist",
        "score": 0.94009721279144
      },
      {
        "position": {
          "y": 186.47859191895,
          "x": 257.98034667969
        },
        "part": "rightWrist",
        "score": 0.98029226064682
      },
      {
        "position": {
          "y": 0,
          "x": 130
        },
        "part": "leftHip",
        "score": 0.97870296239853
      },
      {
        "position": {
          "y": 209.9910736084,
          "x": 243.31219482422
        },
        "part": "rightHip",
        "score": 0.97424703836441
      },
      {
        "position": {
          "y": 281.61965942383,
          "x": 310.93188476562
        },
        "part": "leftKnee",
        "score": 0.98368924856186
      },
      {
        "position": {
          "y": 282.80120849609,
          "x": 203.81164550781
        },
        "part": "rightKnee",
        "score": 0.96947449445724
      },
      {
        "position": {
          "y": 360.62716674805,
          "x": 292.21047973633
        },
        "part": "leftAnkle",
        "score": 0.8883239030838
      },
      {
        "position": {
          "y": 347.41177368164,
          "x": 203.88229370117
        },
        "part": "rightAnkle",
        "score": 0.8255187869072
      }
    ]
  }

}
let posenetSideFacing = {
  "pose": {
    "score": 0.32371445304906,
    "keypoints": [
      {
        "position": {
          "y": 76.291801452637,
          "x": 253.36747741699
        },
        "part": "nose",
        "score": 0.99539834260941
      },
      {
        "position": {
          "y": 71.10383605957,
          "x": 253.54365539551
        },
        "part": "leftEye",
        "score": 0.98781454563141
      },
      {
        "position": {
          "y": 71.839515686035,
          "x": 246.00454711914
        },
        "part": "rightEye",
        "score": 0.99528175592422
      },
      {
        "position": {
          "y": 72.848854064941,
          "x": 263.08151245117
        },
        "part": "leftEar",
        "score": 0.84029853343964
      },
      {
        "position": {
          "y": 79.956565856934,
          "x": 234.26812744141
        },
        "part": "rightEar",
        "score": 0.92544466257095
      },
      {
        "position": {
          "y": 0,
          "x": 0
        },
        "part": "leftShoulder",
        "score": 0.99559044837952
      },
      {
        "position": {
          "y": 0,
          "x": 0
        },
        "part": "rightShoulder",
        "score": 0.99583911895752
      },
      {
        "position": {
          "y": 94.626205444336,
          "x": 163.94561767578
        },
        "part": "leftElbow",
        "score": 0.9518963098526
      },
      {
        "position": {
          "y": 150.2349395752,
          "x": 245.06030273438
        },
        "part": "rightElbow",
        "score": 0.98052614927292
      },
      {
        "position": {
          "y": 113.9603729248,
          "x": 393.19735717773
        },
        "part": "leftWrist",
        "score": 0.94009721279144
      },
      {
        "position": {
          "y": 186.47859191895,
          "x": 257.98034667969
        },
        "part": "rightWrist",
        "score": 0.98029226064682
      },
      {
        "position": {
          "y": 0,
          "x": 130
        },
        "part": "leftHip",
        "score": 0.97870296239853
      },
      {
        "position": {
          "y": 209.9910736084,
          "x": 243.31219482422
        },
        "part": "rightHip",
        "score": 0.97424703836441
      },
      {
        "position": {
          "y": 281.61965942383,
          "x": 310.93188476562
        },
        "part": "leftKnee",
        "score": 0.98368924856186
      },
      {
        "position": {
          "y": 282.80120849609,
          "x": 203.81164550781
        },
        "part": "rightKnee",
        "score": 0.96947449445724
      },
      {
        "position": {
          "y": 360.62716674805,
          "x": 292.21047973633
        },
        "part": "leftAnkle",
        "score": 0.8883239030838
      },
      {
        "position": {
          "y": 347.41177368164,
          "x": 203.88229370117
        },
        "part": "rightAnkle",
        "score": 0.8255187869072
      }
    ]
  }

}
test('DetectionBodyRotation', () => {
  expect(detectionBodyRotation.next(posenetFrontFacing)).toStrictEqual(['front']);
  expect(detectionBodyRotation.next(posenetSideFacing)).toStrictEqual(['side']);

});
