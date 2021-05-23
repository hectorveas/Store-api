import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  productService: any;

  @Get(':id/product/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('producId') productId: string,
  ): string {
    return `${productId} and ${id}`;
  }


  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    //return `products limit=> ${limit} offset ${offset} brand ${brand}`;
    return this.productService.findAll();
  }
}
