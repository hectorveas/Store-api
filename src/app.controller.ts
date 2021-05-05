import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products/filter') //los filtros estaticos deben ir primero
  getProductFilter(): string {
    return 'Yo soy un filtro';
  }

  @Get('products/:productId')
  getProduct(@Param('producId') productId: string): string {
    return `${productId}`;
  }

  @Get('categories/:id/product/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('producId') productId: string,
  ): string {
    return `${productId} and ${id}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset ${offset} brand ${brand}`;
  }
}
