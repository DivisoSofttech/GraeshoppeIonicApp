import { Injectable } from '@angular/core';
/* import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer/ngx';*/
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from  'ng2-image-compress';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


/*let options = {
  uri: null,
  folderName: 'Protonet',
  quality: 90,
  width: 1280,
  height: 1280
 } as ImageResizerOptions;
 */
 export const RESIZE_OPTIONS:ResizeOptions={
  Resize_Max_Height: 500,
  Resize_Max_Width: 350,
  Resize_Quality: 60,
  Resize_Type: "image/jpeg"
}
@Injectable({
  providedIn: 'root'
})
export class ImageResizeService {

  title = 'app';
  selectedImage: any;
  processedImages: any = [];
  showTitle: boolean = false;
  //constructor(private imageResizer: ImageResizer) { }
  constructor(private http:HttpClient){}

/*   resizeImage(image: string) {
    this.imageResizer.resize(options).then((filePath: string) => console.log('FilePath', filePath))
    .catch(e => console.log(e));
  } */

  getResizedImage(file:File){
    let images: Array<IImage> = [];
     return ImageCompressService.filesArrayToCompressedImageSource([file]).then(observableImages => {
      observableImages.subscribe((image) => {
        images.push(image);
        console.log("IImages",images);
      }, (error) => {
        console.log("Error while converting");
      }, () => {
                this.processedImages = images;      
                this.showTitle = true;
                return this.http.get(this.processedImages.pop().imageObjectUrl,{responseType:"blob"});          
      });
    });
    
  } 

  getResizeOptions():ResizeOptions {
    return resizeOptions;
  }
}
