import { Injectable } from '@angular/core';
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from  'ng2-image-compress';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//options for setting the compression rate
 export const RESIZE_OPTIONS:ResizeOptions={
  Resize_Max_Height: 500,
  Resize_Max_Width: 350,
  Resize_Quality: 60,
  Resize_Type: "image/jpeg"
}
