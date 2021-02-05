
export interface IDetection {
    /**
    * Gives the states according to the input
    * @param keypoints
    * @returns all states that are satisfied with the input
    * @beta
    */
    next(output: any): void;
    _next(keypoints: any): number[];
};

export class DetectionAnglePosenet implements IDetection {

    private _hooks: DetectionAngleData;
    constructor(detectionHooks: DetectionAngleData) {
        this._hooks = detectionHooks;
    }
    next = ConvertPosenet;
    //TODO: HarmoniyedOutput nor working
    _next(keypoints: { [part: string]: Position }): number[] {
        return [];
    }
}

function ConvertPosenet(this: IDetection, output: PosenetOutput): void {
    let res: HarmonizedOutput = {};
    output.keypoints.forEach(p => {
        res[p.part] = p.position;
    });
    this._next(res);
}


//OutputHandling

export interface Position {
    y: number;
    x: number;
}
export interface PosenetKeypoint {
    position: Position;
    part: string;
    score: number;
}
export interface PosenetOutput {
    score: number;
    keypoints: PosenetKeypoint[];
}
export interface HarmonizedOutput {
    [part: string]: Position;
}

// construcotr Data
export interface DetectionAngleData {
    point1: number;
    point2: number;
    pointMiddle: number;
    hooks: { [status: string]: hookSector };
}
export interface hookSector {
    min: number;
    max: number;
}