import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
showLabel(label:HTMLLabelElement,inputUser:HTMLInputElement)
{
  if(inputUser.value.length > 0)
  {
    label.style.top = "0%"
    return
  }
  label.style.top = "40%"
}

}

