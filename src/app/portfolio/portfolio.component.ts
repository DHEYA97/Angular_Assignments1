import { Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent{
  @ViewChild('pup') pup !: ElementRef;
  @ViewChild('showImage') showImage !: ElementRef;
  
  @ViewChildren('showLayer') showLayer !:QueryList<ElementRef>;
  imageList : string [] = [
    "../../assets/port1.png",
    "../../assets/port2.png",
    "../../assets/port3.png",
    "../../assets/port1.png",
    "../../assets/port2.png",
    "../../assets/port3.png",
  ]
  ShowPopUp(i:any)
  {
    this.showLayer.forEach((a,index)=>{
      if(index == i)
      {
        this.showImage.nativeElement.setAttribute("src",this.imageList[i])
        this.pup.nativeElement.classList.remove('d-none');  
      }
    })
    
  }
  ClodePopUp()
  {
    this.pup.nativeElement
    this.pup.nativeElement.classList.add('d-none');  
  }
  ShowLayer(i:any)
  {
    
    this.showLayer.forEach((a,index)=>{
      if(index == i)
      {
        a.nativeElement.style.opacity = "1"
      }
    })
  }
  HideLayer()
  {
    this.showLayer.forEach((a)=>{
        a.nativeElement.style.opacity = "0"
    }) 
    
  }
}