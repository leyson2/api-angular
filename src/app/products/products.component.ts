import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];

  productSelected: IProduct = {
    id: '',
    title: '',
    price: '',
    description: '',
    category: {
      id: 0,
      name: '',
      typeImg: '',
    },
    images: []
  }
  opened: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data =>{
      this.products = data;
      console.log(this.products);
    });
  }

  toogleProductDetails(){
    this.opened = !this.opened;
  }
  onShowDetails(id: string){
    this.productService.getProduct(id).subscribe(data =>{
      this.productSelected = data;
      this.opened = !this.opened;
    })
  }

}
