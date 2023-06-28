import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/cretae-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/udate-task-status.dto';

@Controller('tasks')
export class TasksController {
    constructor (private tasksService: TasksService) {}

    // @Get()
    // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {

    //     if (Object.keys(filterDto).length){
    //         return this.tasksService.getTasksWithFilters(filterDto);

    //     } else {
    //         return this.tasksService.getAllTasks();
    //     }
    // }

    // @Get('/:id')
    //  gettaskById(@Param('id') id: string): Task {
    //     return this.tasksService.getTaskById(id);
    // }


    // @Post()
    // createTask(@Body() createTaskDto: CreateTaskDto): Task {
    //         return this.tasksService.createTask(createTaskDto)
      

    // }

    // @Delete('/:id')
    // deleteTask(@Param('id') id:string):void {
    //     return this.tasksService.deleteTask(id);
    // }

    // @Patch('/:id/status')
    // updateTaskStatus(
    //     @Param('id') id: string,
    //     @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    // ): Task {
    //     const { status } = updateTaskStatusDto;
    //     return this.tasksService.updateTaskStatus(id, status);
    // }

}
