import { IDetection } from '../detection/detection';

export interface IExercise {
    _detections: IDetection[];
    _sequence: string[];
    next(output: any): string[]
}

export class Exercise implements IExercise {
    _detections: IDetection[];
    _sequence: string[];
    constructor(detections: IDetection[], sequence: string[]) {
        this._detections = detections;
        this._sequence = sequence;
    }

    next(output: any): string[] {
        let res: string[] = [];
        this._detections.forEach(detection => {

            let states: string[] = detection.next(output);
            if (states == []) {
                return [];
            }
            if (res.length == 0) {
                res = states;
            }
            else {
                let sameStates: string[] = [];
                states.forEach(state => {
                    if (res.find(e => e == state)) {
                        sameStates.push(state);
                    }
                });
                res = sameStates;
            }

        });
        return res!;
    }
}