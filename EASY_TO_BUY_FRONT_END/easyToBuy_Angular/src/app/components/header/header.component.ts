import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/entity/category';
import { Product } from 'src/app/entity/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: Category[];
  product: Product;
  categories2: Category[]=[
    {
      "categoryId": 1,
      "categoryName": "Men",
      "CategoryResourceId":1
      
      
    },
    {
      "categoryId": 2,
      "categoryName": "Women",
      "CategoryResourceId":1
      
      
      
    },
    {
      "categoryId": 3,
      "categoryName": "Kids",
      "CategoryResourceId":1,
      
      
      
      
    },
    {
      "categoryId": 4,
      "categoryName": "NewArrival",
      "CategoryResourceId":1
      
      
      
    }
  ];
  productsByCategory: Product[];
  productsByCategory1: Product[];
  constructor(private activatedRoutes: ActivatedRoute, private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoutes.paramMap.subscribe(() => {
      this.getCategoryList();
    });

  }
  getCategoryList() {
    const hasCategoryId: boolean = this.activatedRoutes.snapshot.paramMap.has('categoryId');
    // this.categoryResourceId  =+this.activatedRoutes.snapshot.paramMap.get();
    this.categoryService.getCategoryList().subscribe(
      data => {
        this.categories = data;
      })
  }
  productsByCategoryId(category: any) {
    const categoryId = +this.activatedRoutes.snapshot.paramMap.get(category.categoryId);
    this.productService.getProductsByCategoryId(category.categoryId).subscribe(data => {
      this.productsByCategory = data;

    })
  }
  productsByCategoryId1(category: any) {
    const categoryId = +this.activatedRoutes.snapshot.paramMap.get(category.categoryId);
    this.productService.getProductsByCategoryId1(category.categoryId).subscribe(data => {
      this.productsByCategory = data;

    })
    //this.productService.getProductsByCategoryId1(category.categoryId);
   }
  searchProductByName(searchKey: string){
    console.log(searchKey);
  }
}
