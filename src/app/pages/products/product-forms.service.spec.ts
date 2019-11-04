import { TestBed } from '@angular/core/testing';

import { ProductFormsService } from './product-forms.service';

describe('ProductFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductFormsService = TestBed.get(ProductFormsService);
    expect(service).toBeTruthy();
  });
});
