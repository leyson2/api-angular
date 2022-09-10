import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct = {
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
  };


  showProductDetails: boolean = false;
  opened = false;

  @Output() showDetails = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  onShowDetails(){
    this.showDetails.emit(this.product.id);
  }
}
