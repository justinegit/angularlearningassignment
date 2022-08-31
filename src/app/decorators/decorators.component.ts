import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss']
})
export class DecoratorsComponent implements OnInit {

  @Input() service= "Front-end";
  @Output() newServiceEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewService(value:string){
    this.newServiceEvent.emit(value);
  }
}
