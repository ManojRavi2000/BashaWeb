import { Component } from '@angular/core';
import { Item } from '../../Models/item';
import { Catagery } from '../../Models/catagery';
import { Router } from '@angular/router';
import { ItemService } from '../../Service/item.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  foods: Item[] = [];
  catagory: Catagery[] = [];

  name2: Item = new Item();

  currentPage = 0;
  pageSize = 12;

  constructor(
    private service: ItemService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.getcatagory();
    this.loadFoods();

  }

  getcatagory(): void {

    this.service.viewcatagory().subscribe({
      next: (data) => {
        this.catagory = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  loadFoods(): void {

    this.service
      .viewAllItem(this.currentPage, this.pageSize)
      .subscribe({

        next: (response: Item[]) => {

          console.log(response);

          this.foods = response;

          console.log(this.foods);

        },

        error: (err) => {
          console.log(err);
        }

      });

  }

  nextPage(): void {

    this.currentPage++;

    this.loadFoods();
      window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  }

  previousPage(): void {

    if (this.currentPage > 0) {

      this.currentPage--;

      this.loadFoods();

        window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

    }

  }

  getItemById(id: number): void {

    this.service
      .getItemById(id)
      .subscribe({

        next: (data) => {

          this.name2 = data;

        },

        error: (err) => {

          console.log(err);

        }

      });

  }
}
