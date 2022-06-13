import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionDto } from './dto';

@Injectable()
export class QuestionService {


    constructor(private prisma: PrismaService) {}

  getQuestions(authorId: number) {
    return this.prisma.question.findMany({
      where: {
        authorId,
      },
    });
  }

  getQuestionById(
    authorId: number,
    questionId: number,
  ) {
    return this.prisma.question.findFirst({
      where: {
        id: questionId,
        authorId,
      },
    });
  }

  async createQuestion(
    authorId: number,
    dto: CreateQuestionDto,
  ) {
    const question =
      await this.prisma.question.create({
        data: {
          authorId,
          ...dto,
        },
      });

    return question;
  }


  async deleteQuestionById(
    userId: number,
    questionId: number,
  ) {
    const question =
      await this.prisma.question.findUnique({
        where: {
          id: questionId,
        },
      });

    // check if user owns the question
    if (!question || question.authorId !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.question.delete({
      where: {
        id: questionId,
      },
    });
  }
}
