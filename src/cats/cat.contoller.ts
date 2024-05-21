import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './interfaces/cat.interface'; // Import the Cat interface

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() cat: Cat): void {
    // Use the CatService to create a new cat
    this.catService.create(cat);
  }

  @Get()
  findAll(): Cat[] {
    // Use the CatService to get all cats
    return this.catService.findAll();
  }
}