import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
  ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { CreateProductDTO } from 'src/dto/products.dto';
import { Product } from 'src/entities/product.entity';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('filter') //los filtros estaticos deben ir primero
  getProductFilter(): string {
    return 'Yo soy un filtro'; //pasar return json
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(
    //tipo express
    @Res() response: Response,
    @Param('producId', ParseIntPipe) productId: number,
  ): Product {
    response.status(200).send();
    //return `${productId}`;
    return this.productService.findOne(productId);
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

  @Post()
  createProduct(@Body() payload: CreateProductDTO) {
    //return {
    //  message: 'Producto Creado',
    //  payload,
    //};
    return this.productService.create(payload);
  } // crear delete y put
}
