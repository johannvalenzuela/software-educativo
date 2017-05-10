import { Answer } from './answer';

export interface Question {
    title: string,
    answers: Array<Answer>,
    correct: number

}
