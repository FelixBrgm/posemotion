import { HarmonizedKeypoints, convertToHarmonizedKeypoints, Position } from './convertToHarmonizedKeypoints';
import { IDetection } from './detection';

/**
 * Class for detecting in which given sector the angle between 3 points is in.
 */
export class DetectionAngle implements IDetection {
    private _metaData: AngleMetaData;
    constructor(metaData: AngleMetaData) {
        this._metaData = metaData;
    }
    /**
     * @param output - result/output of the poseestimation-ai
     * @returns array of all sectors that have the given angle in between there threshholds 
     */
    next(output: any): string[] {
        if (output.length === 0)
            throw new Error("Output is empty");

        const harmonizedKeypoints: HarmonizedKeypoints = convertToHarmonizedKeypoints(output);
        const angle = getAngleByPoints(
            harmonizedKeypoints[this._metaData.pointMiddle],
            harmonizedKeypoints[this._metaData.point1],
            harmonizedKeypoints[this._metaData.point2]
        );

        const detectedHooks: Hooks = {}; // should be let
        Object.keys(this._metaData.hooks).map(_currentHook => {
            const _hookSector: HookSector = this._metaData.hooks[_currentHook];
            if (angle >= _hookSector.min && angle <= _hookSector.max) {
                detectedHooks[_currentHook] = _hookSector;
            }
        });

        // Only pass the string value of the hooks
        const res: string[] = [];
        Object.keys(detectedHooks).map(_hook => {
            res.push(_hook);
        });
        return res!;
    }
}

function getAngleByPoints(pt: Position, p1: Position, p2: Position) {
    const vector1X = p1.x - pt.x;
    const vector1Y = p1.y - pt.y;
    const vector2X = p2.x - pt.x;
    const vector2Y = p2.y - pt.y;
    // Ref. https://stackoverflow.com/questions/21483999/using-atan2-to-find-angle-between-two-vectors/21486462
    let angle = Math.atan2(vector2Y, vector2X) - Math.atan2(vector1Y, vector1X);

    // Ref end
    angle = (360 * angle) / (Math.PI * 2);

    // Corrects the output to a range between 0°-180°
    if (angle < 0) {
        angle *= -1;
    }
    if (angle > 180) {
        angle = 360 - angle;
    }
    return angle;
}

// Interfaces
export interface AngleMetaData {
    point1: string;
    point2: string;
    pointMiddle: string;
    hooks: Hooks;
}
export interface Hooks {
    [status: string]: HookSector
}
export interface HookSector {
    min: number;
    max: number;
}