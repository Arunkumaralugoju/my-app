import { TmplAstBoundAttribute } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public products:any=[
    {name:'pen', price:'10',rating:'3.5',isFreeDelivery:false},
    {name:'phone', price:'88880',rating:'3.1',isFreeDelivery:true},
    {name:'toy', price:'50',rating:'4.5',isFreeDelivery:false},
    {name:'bag', price:'1800',rating:'2.5',isFreeDelivery:true},
    {name:'tv', price:'650000',rating:'2.0',isFreeDelivery:false},
    {name:'ac', price:'148220',rating:'4.2',isFreeDelivery:false},
    {name:'machine', price:'286520',rating:'5.0',isFreeDelivery:true},
    {name:'table', price:'15000',rating:'3.7',isFreeDelivery:true},
    {name:'glass', price:'40',rating:'4.6',isFreeDelivery:true},
    {name:'clock', price:'800',rating:'4.0',isFreeDelivery:false},
    {name:'shirt', price:'8880',rating:'3.5',isFreeDelivery:false},
    {name:'pant', price:'2058',rating:'3.1',isFreeDelivery:true},
    {name:'bike', price:'166660',rating:'4.2',isFreeDelivery:false},
    {name:'car', price:'45222110',rating:'5.0',isFreeDelivery:true},


  ];
  delete(i:number){
    this.products.splice(i,1);
  }
  count(){
    alert("cart count is "+this.products.length);
  }


}
