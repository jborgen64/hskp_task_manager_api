import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    findAll(): string {
        return 'Get all them tasks';
    }

    @Post()
    create(): string {
        return 'Post all them tasks';
    }
}
