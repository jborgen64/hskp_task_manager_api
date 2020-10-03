import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './tasks.entity'
import { Repository } from 'typeorm'
import { taskDTO } from './task.dto'

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
    ) {}

    async showAll() {
      return await this.taskRepository.find();
    }

    async create(data: taskDTO) {
      const task = await this.taskRepository.create(data);
      await this.taskRepository.save(task);
      return task;
    }

    async read(id: string) {
      return await this.taskRepository.findOne({ where: { id } })
    }

    async update(id: string, data: Partial<taskDTO>) {
      await this.taskRepository.update({ id }, data);
      return await this.taskRepository.findOne( { id });
    }

    async destroy(id: string) {
      await this.taskRepository.delete({id});
      return { deleted: true};
    }
}
