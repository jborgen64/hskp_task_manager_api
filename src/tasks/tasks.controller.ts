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
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
  @Get()
  findAll(): string {
    return 'Get all them tasks';
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `tasks: ${param.id}`;
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
