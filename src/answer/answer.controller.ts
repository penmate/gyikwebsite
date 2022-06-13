import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { AnswerService } from './answer.service';
import {
    CreateAnswerDto
  } from './dto';

@Controller('answer')
export class AnswerController {
    constructor(
        private answerService: AnswerService,
      ) {}
    
      
      @Get()
      getAnswers(@GetUser('id') authorId: number) {
        return this.answerService.getAnswers(
            authorId,
        );
      }
    

      @Get(':id')
      getAnswerById(
        @GetUser('id') authorId: number,
        @Param('id', ParseIntPipe) questionId: number,
      ) {
        return this.answerService.getAnswerById(
            authorId,
            questionId,
        );
      }
    

      @Post()
      createAnswer(
        @GetUser('id') authorId: number,
        @Body() dto: CreateAnswerDto,
      ) {
        return this.answerService.createAnswer(
            authorId,
            dto,
        );
      }
    

      @HttpCode(HttpStatus.NO_CONTENT)
      @Delete(':id')
      deleteAnswerById(
        @GetUser('id') authorId: number,
        @Param('id', ParseIntPipe) questionId: number,
      ) {
        return this.answerService.deleteAnswerById(
            authorId,
            questionId,
        );
      }
}
