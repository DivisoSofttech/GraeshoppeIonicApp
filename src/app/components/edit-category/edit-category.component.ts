import { IImage } from 'ng2-image-compress';
import { RESIZE_OPTIONS } from './../../image-resize-options';
import { ImageCompressService } from 'ng2-image-compress';
import { CommandResourceService } from 'src/app/api/services';
import { CategoryDTO } from 'src/app/api/models';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  @Input()
  category: CategoryDTO;
  fileToUpload: any;
  fileUrl: any;
  constructor(private modalController: ModalController,private commandResource: CommandResourceService) { }
  dismiss() {
    console.log('>>>>>>>>>>>>>dismiss working');
    this.modalController.dismiss({'updatedCategory' : this.category});
  }

  ngOnInit() {

  }
  update()
  {
    this.commandResource.updateCategoryUsingPUT(this.category).subscribe(res=>{console.log('success updating category '+res)},err=>{console.log('error updating category '+err)});
    this.dismiss();
  }
 triggerUpload(ev: Event) {
    document.getElementById('image').click();
  }
  onSelectFile(event) {
    this.fileToUpload = event.target.files.item(0);

    const freader = new FileReader();

    freader.onload = (ev: any) => {
      this.fileUrl = ev.target.result;
      this.category.image = this.fileUrl.substring(
        this.fileUrl.indexOf(',') + 1
      );
      this.category.imageContentType = this.fileToUpload.type;
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

}
