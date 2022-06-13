import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

  getCategories() {
    return this.prisma.category.findMany();
  }

  getCategoriesWithQuestions() {
    return this.prisma.category.findMany({
      include: {
        questions: true,
      },
    });
  }

  getCategoryById(
    categoryId: number,
  ) {
    return this.prisma.category.findFirst({
      where: {
        id: categoryId,

      },
    });
  }

  async createCategory(
    dto: CreateCategoryDto,
  ) {
    const question =
      await this.prisma.category.create({
        data: {
            name: dto.name
        },
      });

    return question;
  }


  async deleteCategoryById(

    categoryId: number,
  ) {



    await this.prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
  }
}
