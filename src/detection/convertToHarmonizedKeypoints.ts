

export function convertToHarmonizedKeypoints(keypoints: any): HarmonizedKeypoints {

    if (isPosenetOutput(keypoints)) {
        return convertPosenetToHamonizedKeypoints(keypoints);
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
function isPosenetOutput(keypoints: any): boolean {
    return true; // TODO: Make this realy detect something
}
function convertPosenetToHamonizedKeypoints(output: PosenetOutput): HarmonizedKeypoints {
    const res: HarmonizedKeypoints = {};
    output.keypoints.forEach(p => {
        res[p.part] = p.position;
    });
    return res;
}
export interface PosenetOutput {
    score: number;
    keypoints: PosenetKeypoint[];
}
export interface PosenetKeypoint {
    position: Position;
    part: string;
    score: number;
}




