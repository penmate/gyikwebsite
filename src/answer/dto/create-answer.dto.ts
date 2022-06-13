import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class CreateAnswerDto {

    @IsString()
    @IsNotEmpty()
    answerBody: string;

    @IsString()
    @IsNotEmpty()
    questionId: number;
  }