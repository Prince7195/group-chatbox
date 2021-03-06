import { Component, OnInit, ViewEncapsulation, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatRoomComponent implements OnInit, AfterViewChecked {

  @ViewChild('scroller') private feedContainer: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop = 
    this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

}
