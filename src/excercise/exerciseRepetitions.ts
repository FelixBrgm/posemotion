import { IDetection } from '../detection/detection';
import { IExercise } from './exercise';

export class Exercise implements IExercise {
    _detections: IDetection[];
    _sequence: string[]; // The sequence in which the detections have to occur to be able to detect motion between poses
    _neededStatusIndex: number = 0;
    constructor(detections: IDetection[], sequence: string[]) {
        this._detections = detections;
        this._sequence = sequence;
    }

    next(output: any): boolean {
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

        return this.checkIfNeededStatus(res);
    }

    // Checks if the status needed in the sequence is the detected one
    checkIfNeededStatus(currentStatus: string[]): boolean {
        if (currentStatus.find(x => x == this._sequence[this._neededStatusIndex])) {
            this._neededStatusIndex++;
            if (this._neededStatusIndex >= this._sequence.length) {
                this._neededStatusIndex = 0;
                return true;
            }
        }
        return false
    }
}