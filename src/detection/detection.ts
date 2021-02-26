export interface IDetection {
    next(output: any): string[]
}


// Ouput interfaces
export interface HarmonizedKeypoints {
    [part: string]: Position;
}
export interface Position {
    y: number;
    x: number;
}

// Types
export enum PosenetParts {
    nose = "nose",
    leftEye = "leftEye",
    rightEye = "rightEye",
    leftEar = "leftEar",
    rightEar = "rightEar",
    leftShoulder = "leftShoulder",
    rightShoulder = "rightShoulder",
    leftElbow = "leftElbow",
    rightElbow = "rightElbow",
    leftWrist = "leftWrist",
    rightWrist = "rightWrist",
    leftHip = "leftHip",
    rightHip = "rightHip",
    leftKnee = "leftKnee",
    rightKnee = "rightKnee",
    leftAnkle = "leftAnkle",
    rightAnkle = "rightAnkle"
}

