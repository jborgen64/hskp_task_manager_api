import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { taskDTO } from './task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.tasksService.showAll();
  }

  @Post()
  createTask(@Body() data: taskDTO) {
    return this.tasksService.create(data)
  } 

  @Get(':id')
  readTask(@Param('id') id: string) {
    return this.tasksService.read(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() data: Partial<taskDTO>) {
    return this.tasksService.update(id, data)
  }

  @Delete(':id')
  destroyTask(@Param('id') id: string) {
    return this.tasksService.destroy(id)
  }

}
