import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { QuestionService } from './question.service';
import {
    CreateQuestionDto
  } from './dto';

@UseGuards(JwtGuard)
@Controller('question')
export class QuestionController {
    constructor(
        private questionService: QuestionService,
      ) {}
    
      
      @Get()
      getQuestions(@GetUser('id') authorId: number) {
        return this.questionService.getQuestions(
            authorId,
        );
      }
    

      @Get(':id')
      getQuestionById(
        @GetUser('id') authorId: number,
        @Param('id', ParseIntPipe) questionId: number,
      ) {
        return this.questionService.getQuestionById(
            authorId,
            questionId,
        );
      }
    

      @Post()
      createQuestion(
        @GetUser('id') authorId: number,
        @Body() dto: CreateQuestionDto,
      ) {
        return this.questionService.createQuestion(
            authorId,
            dto,
        );
      }
    

      @HttpCode(HttpStatus.NO_CONTENT)
      @Delete(':id')
      deleteQuestionById(
        @GetUser('id') authorId: number,
        @Param('id', ParseIntPipe) questionId: number,
      ) {
        return this.questionService.deleteQuestionById(
            authorId,
            questionId,
        );
      }
}
