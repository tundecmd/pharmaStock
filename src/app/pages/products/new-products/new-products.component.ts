import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsCrudService } from '../products-crud.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  public productCategoryForm: FormGroup;
  public successToast: string = 'success';
  public errorToast: string = 'danger';

  @HostBinding('class')
  classes = 'item-rows';

  constructor(
    public crudApi: ProductsCrudService,
    public formBuilder: FormBuilder,
    private toastrService: NbToastrService
  ) { }

  ngOnInit() {
    // this.resetForm();
    this.categoryForm();
  }

  categoryForm() {
    this.productCategoryForm = this.formBuilder.group({
      categoryName: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  // access form controls using getters
  get categoryName(){
    return this.productCategoryForm.get('categoryName');
  }

  // reset form
  resetForm(){
    this.productCategoryForm.reset();
  }

  // show toastr
  successToastr(status){
    this.toastrService.show(status, `${this.productCategoryForm.controls['categoryName'].value} has been successfully added`, { status })
  }

  // submit category form data
  submitCategoryData(){
    this.crudApi.addProductCategory(this.productCategoryForm.value);
    this.successToastr(this.successToast);
    this.resetForm();
  }

}
