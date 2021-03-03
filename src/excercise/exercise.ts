import { IDetection } from '../detection/detection';

export interface IExercise {
    _detections: IDetection[];
    _sequence: string[];
    next(output: any): boolean
}
