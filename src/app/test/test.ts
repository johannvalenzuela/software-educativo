import { Question } from './question';

export interface Test {
    title: string,
    teacher_key: string,
    create_date: any,
    modified_date: any,
    description: string,
    questions : Array<Question>
}
