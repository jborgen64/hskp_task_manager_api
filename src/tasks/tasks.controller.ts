import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    findAll(): string {
        return 'Get all them tasks';
    }
}
