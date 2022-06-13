import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerDto } from './dto';

@Injectable()
export class AnswerService {
    constructor(private prisma: PrismaService) {}

  getAnswers(authorId: number) {
    return this.prisma.answer.findMany({
      where: {
        authorId,
      },
    });
  }

  getAnswerById(
    authorId: number,
    answerId: number,
  ) {
    return this.prisma.answer.findFirst({
      where: {
        id: answerId,
        authorId,
      },
    });
  }

  async createAnswer(
    authorId: number,
    dto: CreateAnswerDto,
  ) {
    const answer =
      await this.prisma.answer.create({
        data: {
          authorId,
          answerBody:dto.answerBody,
          questionId: dto.questionId,


        },
      });

    return answer;
  }


  async deleteAnswerById(
    userId: number,
    answerId: number,
  ) {
    const answer =
      await this.prisma.answer.findUnique({
        where: {
          id: answerId,
        },
      });

    // check if user owns the question
    if (!answer || answer.authorId !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    await this.prisma.answer.delete({
      where: {
        id: answerId,
      },
    });
  }
}


