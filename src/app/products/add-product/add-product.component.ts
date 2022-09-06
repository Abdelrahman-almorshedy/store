import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IImage } from 'src/app/shared/models/i-image';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  basePath = '/images';
  downloadableURL = '';
  task: AngularFireUploadTask = {} as AngularFireUploadTask;
  progressValue: Observable<number> | undefined;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private fireStorage: AngularFireStorage
  ) {}
  productForm = this.fb.group({
    id: [''],
    title: [''],
    price: [''],
    description: [''],
    image: [''],
    category: [''],
  });

  ngOnInit(): void {}

  async onFileChanged(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${file.name}`; // path at which image will be stored in the firebase storage
      this.task = this.fireStorage.upload(filePath, file); // upload task
      this.progressValue = this.task.percentageChanges() as Observable<number>;

      // this.progress = this.snapTask.percentageChanges();

      (await this.task).ref.getDownloadURL().then((url) => {
        this.downloadableURL = url;
        this.productForm.get('image')?.setValue(this.downloadableURL);
      }); // <<< url is found here
    } else {
      alert('No images selected');
      this.downloadableURL = '';
    }
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    this.productService.addProduct(this.productForm.value).subscribe({
      next: (val) => {},
      error: (err) => {},
    });
  }
}
