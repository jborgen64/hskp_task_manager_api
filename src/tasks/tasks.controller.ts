import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDTO } from './dto/create.tasks.dto';
import { TasksService } from './tasks.service';
import { Task } from './tasks.interface';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Task {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() createTaskDTO: CreateTaskDTO): string {
    return `name: ${createTaskDTO.title} Desc: ${createTaskDTO.description}`;
  }

  @Delete(':id')
  destroy(@Param() param): string {
    return `destroy: ${param.id}`;
  }

  @Put(':id')
  update(@Body() createTaskDTO: CreateTaskDTO): string {
    return `update: ${createTaskDTO.title}`;
  }
}
