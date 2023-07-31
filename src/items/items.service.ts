import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      itemId: '1',
      itemName: 'Item One',
      itemDescription: 'This is Item One',
      itemQty: 100,
    },
    {
      itemId: '2',
      itemName: 'Item Two',
      itemDescription: 'This is Item Two',
      itemQty: 50,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(itemId: string): Item {
    return this.items.find((item) => item.itemId === itemId);
  }

  createItem(item: Item): Item {
    this.items.push(item);
    return item;
  }

  updateItem(item: Item): Item {
    const itemToReplace = this.items.find(
      (itemObj) => itemObj.itemId === item.itemId,
    );
    this.items.splice(this.items.indexOf(itemToReplace), 1, item);
    return item;
  }

  deleteItem(itemId: string): Item {
    const itemToBeDeleted = this.items.find((item) => item.itemId === itemId);
    this.items.splice(this.items.indexOf(itemToBeDeleted), 1);
    return itemToBeDeleted;
  }
}
