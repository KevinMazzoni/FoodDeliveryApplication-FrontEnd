import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  title="card"
  @Input() name = ''
  @Input() cardChanged: EventEmitter<any> = new EventEmitter()
  toDisplay = 'none'


  ngOnInit(){
    this.cardChanged.subscribe(response => {
      console.log("Component ", this.name, " re-initialized with value detected: ", response)
      this.toDisplay = response
    });

  }

}
