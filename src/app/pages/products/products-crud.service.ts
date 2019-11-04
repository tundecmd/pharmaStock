import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Products, ProductsCategory } from '../../@core/data/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsCrudService {

  constructor(private firestore: AngularFirestore) { }

  // add a new product to db
  addProduct(product: Products) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('products')
        .add(product)
        .then(res => {}, err => reject(err));
    });
  }

  // add a new product category tp db
  addProductCategory(productCategory: ProductsCategory) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('products_categories')
        .add(productCategory)
        .then(res => {}, err => reject(err));
    });
  }

  // get all products
  getAllProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  // get all product categories
  getAllProductCategories() {
    return this.firestore.collection('products_categories').snapshotChanges();
  }
}
