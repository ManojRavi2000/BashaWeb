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

  currentPage: number = 1;
  itemsPerPage: number = 16;
  totalPages: number = 0;

  name2 = new Item();

  catagory?: Catagery[];

  allFoods: Item[] = [];   // 🔥 full list
  foods: Item[] = [];      // 🔥 paginated list

  constructor(
    private service: ItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getcatagory();
    this.getAllItem();
  }

  getcatagory() {
    this.service.viewcatagory().subscribe({
      next: (data) => {
        this.catagory = data;
      },
      error: (err) => console.error(err)
    });
  }

  getAllItem() {
    this.service.viewAllItem().subscribe({
      next: (data) => {
        this.allFoods = data;

        // ✅ calculate total pages
        this.totalPages = Math.ceil(
          this.allFoods.length / this.itemsPerPage
        );

        // ✅ load first page
        this.applyPagination();
      },
      error: (err) => console.error(err)
    });
  }

  getItemById(id: number) {
    this.service.getItemById(id).subscribe({
      next: (data) => {
        this.name2 = data;
      },
      error: (err) => console.error(err)
    });
  }

  applyPagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.foods = this.allFoods.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.applyPagination();

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

}
