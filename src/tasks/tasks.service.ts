import { Injectable } from '@nestjs/common';
import { Task } from './tasks.interface'

@Injectable()
export class TasksService {
    private readonly tasks: Task[] = [
        {
            id: '1',
            title: 'task uno',
            description: 'this is your first task'
        },

        {
            id: '2',
            title: 'task dos',
            description: 'this is your second task'
        },

        {
            id: '3',
            title: 'task tres',
            description: 'this is your third task'
        }
    ]
}
