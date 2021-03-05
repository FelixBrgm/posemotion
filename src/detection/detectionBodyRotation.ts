import { PosenetParts } from '..';
import { convertToHarmonizedKeypoints } from './convertToHarmonizedKeypoints';
import { HarmonizedKeypoints, IDetection } from './detection';

/**
 * @param BodyRotationMetaData which includes the sectors with their corespoinding names
 * @returns array of all detected sectors
 */
export class DetectionBodyRotation implements IDetection {
    private _metaData: BodyRotationMetaData;
    constructor(metaData: BodyRotationMetaData) {
        this._metaData = metaData;
    }
    /**
     * Function to calculate the detection form a pose-estimation-ai-output
     * @param output - result/output of the pose-estimation-ai
     * @returns array of all detected sectors 
     */
    next(output: any): string[] {
        if (output.length === 0)
            throw new Error("Output is empty");

        const harmonizedKeypoints: HarmonizedKeypoints = convertToHarmonizedKeypoints(output);
        const angle: number = calculateBodyRotation(harmonizedKeypoints);

        const detectedHooks: Hooks = {}; // should be let
        Object.keys(this._metaData.hooks).map(_currentHook => {
            const _hookSector: HookSector = this._metaData.hooks[_currentHook];
            if (angle >= _hookSector.min && angle <= _hookSector.max) {
                detectedHooks[_currentHook] = _hookSector;
            }
        });

        const res: string[] = [];
        Object.keys(detectedHooks).map(_hook => {
            res.push(_hook);
        });
        return res!;
    }
}


// Helper functions
function calculateBodyRotation(keypoints: HarmonizedKeypoints): number {
    const leftShoulder: string = "leftShoulder";
    const leftHip: string = "leftHip";
    const rightShoulder: string = "rightShoulder";
    const distanceHipShoulder: number = calculateDistanceBetween2Points(keypoints[leftShoulder], keypoints[leftHip]);
    const distanceShoulderShoulder: number = calculateDistanceBetween2Points(keypoints[leftShoulder], keypoints[rightShoulder]);
    let relation: number = (distanceShoulderShoulder / distanceHipShoulder) * 1.3;
    if (relation > 1) {
        relation = 1;
    }
    const angle: number = Math.asin(relation) * (180 / Math.PI);
    // result 0 when frontfacing - 90 when side facing
    return 90 - angle;
}
function calculateDistanceBetween2Points(p1: Point, p2: Point): number {
    const xDistance = p1.x - p2.x;
    const yDistance = p1.y - p2.y;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
interface BodyRotationMetaData {
    hooks: Hooks
}

export interface Hooks {
    [status: string]: HookSector
}
export interface HookSector {
    min: number;
    max: number;
}
export interface Point {
    x: number;
    y: number;
}