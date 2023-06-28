import { Injectable, NotFoundException} from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { v4 as uuid} from 'uuid'
import { CreateTaskDto } from './dto/cretae-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) {}
    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[]{
    //     const {status, search } = filterDto;

    //     //define a temporary array to hold the result
    //     let tasks = this.getAllTasks();

    //     //do something with the status
    //     if (status) {
    //         tasks = tasks.filter((task) => task.status === status);
    //     }
        
    //     //do something with the search
    //     if (search) {
    //         tasks = tasks.filter((task) => {
    //             if (task.title.includes(search) || task.description.includes(search)) {
    //                 return true;
    //             }
    //             return false
    //         });

    //     }

    //     return tasks;
    // }

    async getTaskById(id: string): Promise<Task> {
        const found = await this.tasksRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    // getTaskById(id: string): Task {

    //     const found  = this.tasks.find((task) => task.id === id );

    //     if(!found) {
    //         throw new NotFoundException(`Task with ID "${id}" not found`);
    //     }

    //     return found;
    // }

    // createTask(createTaskDto: CreateTaskDto): Task{
    //     const {title, description} = createTaskDto;
    //     const task: Task ={
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN
    //     };

    //     this.tasks.push(task);
    //     return task;
    // }

    // deleteTask(id: string): void {
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter((task) => task.id !== found.id);
    // }

    // updateTaskStatus(id:string, status:TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}
