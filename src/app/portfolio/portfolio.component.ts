import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from './Image.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnChanges { //onchanges- lifecycle hook that is called when sth changes - useful for filtering/updating images 
  @Input() filterBy?: string = 'all'
  Images: any[] = [];
  
  constructor(private imageService: ImageService) {
    this.Images = this.imageService.getImages();
   }

  ngOnChanges() {
    this.Images = this.imageService.getImages();
  }

}
