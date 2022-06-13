import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AnswerModule } from './answer/answer.module';
import { QuestionModule } from './question/question.module';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    AnswerModule,
    QuestionModule,
    CategoryModule, 
    PrismaModule
  ],
})
export class AppModule {}
