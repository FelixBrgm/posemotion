export function convertToHarmonizedKeypoints(output: any): HarmonizedKeypoints {
    if (isPosenetOutput(output)) {
        return convertPosenetToHamonizedKeypoints(output);
    }

    throw new TypeError('Input is not any of the supported types');
}


// Interfaces
export interface HarmonizedKeypoints {
    [part: string]: Position;
}
export interface Position {
    y: number;
    x: number;
}

// Posenet
function isPosenetOutput(output: any): boolean {
    if ("pose" in output) {
        let pose = output.pose
        if ("keypoints" in pose && "score" in pose) {
            let keypoint = pose.keypoints[0];
            if ('position' in keypoint && 'part' in keypoint && 'score' in keypoint) {
                let position = keypoint.position;
                if ('x' in position && 'y' in position) {
                    return true
                }
            }
        }
    }
    return false;
}
function convertPosenetToHamonizedKeypoints(output: PosenetOutput): HarmonizedKeypoints {
    const res: HarmonizedKeypoints = {};
    output.pose.keypoints.forEach(p => {
        res[p.part] = p.position;
    });
    return res;
}

export interface PosenetOutput {
    pose: PosenetPose;
}
export interface PosenetPose {
    score: number;
    keypoints: PosenetKeypoint[];
}
export interface PosenetKeypoint {
    position: Position;
    part: string;
    score: number;
}




