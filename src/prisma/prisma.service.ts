import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(private config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_URL'),
                }
            }
        });
    }
    /*cleanDb() {
        return this.$transaction([
            this.answer.deleteMany(),
            this.question.deleteMany(),
            this.category.deleteMany(),
            this.user.deleteMany()
          ]);
    }*/
}
