import { RESIZE_OPTIONS } from './../../image-resize-options';
import { ImageCompressService, IImage } from 'ng2-image-compress';
import { CategoryDTO } from './../../api/models/category-dto';
import { ModalController } from '@ionic/angular';
import {
  CommandResourceService,
  QueryResourceService
} from 'src/app/api/services';
import { Component, OnInit, Input } from '@angular/core';
import { ProductDTO } from 'src/app/api/models/product-dto';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent implements OnInit {
  @Input()
  id;
  productDTO: ProductDTO;
  categories: CategoryDTO[];
  fileToUpload: File;
  fileUrl = null;
  constructor(
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    console.log(' finding product  with id ' + this.id);
    this.queryResourceService
      .findAllCategoriesWithOutImageUsingGET({})
      .subscribe(result => {
        this.categories = result;
      });
    this.queryResourceService.findProductUsingGET(this.id).subscribe(
      result => {
        console.log('sucess finding product ' + result);
        this.productDTO = result;
      },
      err => {
        console.log('error in finding product ' + err);
      }
    );
  }

  isCurrentCategory(id): boolean {
    if (id === this.productDTO.categories[0].id) {
      return true;
    } else {
      return false;
    }
  }

  setCategory(event) {
    console.log(event.detail.value);
    this.productDTO.categories[0].id = event.detail.value;
   }

  save() {
    this.commandResourceService
      .updateProductUsingPUT(this.productDTO)
      .subscribe(
        sucess => {
          console.log('updating product sucess ',sucess);
          this.dismiss();
        },
        err => {
          console.log('error updating product ',err);
        }
      );
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onSelectFile(event) {
    this.fileToUpload = event.target.files.item(0);

    const freader = new FileReader();

    freader.onload = (ev: any) => {
      this.fileUrl = ev.target.result;
      this.productDTO.image = this.fileUrl.substring(
        this.fileUrl.indexOf(',') + 1
      );
      this.productDTO.imageContentType = this.fileToUpload.type;
    };

    // Array to store the converted source images
    const images: Array<IImage> = [];

    // Method which compresses the image and read by the filereader as blob
    ImageCompressService.filesArrayToCompressedImageSourceEx(
      [this.fileToUpload],
      RESIZE_OPTIONS
    ).then(observableImages => {
      observableImages.subscribe(
        image => {
          images.push(image);
        },
        error => {
          console.log('Error while converting');
        },
        () => {
          // converts the encoded compressed file to blob for file reader to read
          fetch(images.pop().compressedImage.imageDataUrl).then(data => {
            data.blob().then(blob => {
              console.log('blob', blob);
              freader.readAsDataURL(blob);
            });
          });
        }
      );
    });
  }

  triggerUpload(ev: Event) {
    document.getElementById('image').click();
  }
}
