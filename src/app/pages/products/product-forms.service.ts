import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductFormsService {
  public newProductForm: FormGroup;   // define form group for new products
  public newProductCategoryForm: FormGroup;   // define form group for new category

  constructor(public fb: FormBuilder) { }

  productForm(){
    this.newProductForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      modeOfDispensation: ['', [Validators.required]],
      productionDate: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      sku: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      quantity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      manufacturer: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dosage: ['', [Validators.required]]
    })
  }

  
  productCategoryForm () {
    this.newProductCategoryForm = this.fb.group({
      category_name: ['', [Validators.required, Validators.minLength(2)]]
    })   
  }
}
