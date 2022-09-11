import { Component, Input, OnInit } from '@angular/core';
import { ICreateProduct, IProduct, IUpdateProduct } from '../iproduct';
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

  createProduct(){
    const product: ICreateProduct = {
      title: 'Nuest',
      description: 'Producto nuevo',
      images: ['https://placeimg.com/640/480/any?r=0.822932205483726'],
      price: '3000',
      categoryId: 2
    };

    this.productService.create(product).subscribe(data=>{
      this.products.unshift(data);
    });
  }

  updateProduct(){
    const product: IUpdateProduct = {
      title:'Update Name'
    }
    const productId = this.productSelected.id;
    this.productService.update(productId, product).subscribe(data=>{
      const productIndex = this.products.findIndex(item => item.id === productId);
      this.products[productIndex] = data;
      // Actualiza el detalle
      this.productSelected = data;
    })
  }

  deleteProduct(){
    const productId = this.productSelected.id;
    this.productService.delete(productId).subscribe(()=>{
      const productIndex = this.products.findIndex(item => item.id === productId);
      this.products.splice(productIndex, 1);
      this.opened = false;
    })
  }

}
