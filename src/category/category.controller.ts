import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CategoryService } from './category.service';
import {
    CreateCategoryDto
  } from './dto';


@Controller('category')
export class CategoryController {
    constructor(
        private categoryService: CategoryService,
      ) {}
    
      
      @Get()
      getCategories() {
        return this.categoryService.getCategories();
      }

      @Get('withcategory')
      getCategoriesWithQuestions() {
        return this.categoryService.getCategories();
      }
    

      @Get(':id')
      getCategoryById(
        @Param('id', ParseIntPipe) categoryId: number,
      ) {
        return this.categoryService.getCategoryById(
            categoryId,
        );
      }
    

      @Post()
      createCategory(
        @Body() dto: CreateCategoryDto,
      ) {
        return this.categoryService.createCategory(
            dto
        );
      }
    

      @HttpCode(HttpStatus.NO_CONTENT)
      @Delete(':id')
      deleteCategoryById(
        @Param('id', ParseIntPipe) categoryId: number,
      ) {
        return this.categoryService.deleteCategoryById(
            categoryId,
        );
      }
}
