import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/product/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('producId') productId: string,
  ): string {
    return `${productId} and ${id}`;
  }
}
