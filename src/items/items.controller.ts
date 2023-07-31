import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDot } from './dot/CreateItem.dot';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemService.findOne(id);
  }

  @Post()
  creatItem(@Body() createItemDot: CreateItemDot): Item {
    return this.itemService.createItem(createItemDot);
  }

  @Put(':id')
  updateItem(@Param('id') id, @Body() updateItemDot: CreateItemDot) {
    return this.itemService.updateItem(updateItemDot);
  }

  @Delete(':id')
  deleteItem(@Param('id') id): Item {
    return this.itemService.deleteItem(id);
  }
}
