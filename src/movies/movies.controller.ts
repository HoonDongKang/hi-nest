import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('movies') //entry point
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Put('/:id')
  put(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
