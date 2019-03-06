import { Component } from '@angular/core';
import { Message, User, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor() { }

  public readonly user: User = {
    id: 1
  };

  public readonly bot: User = {
    id: 0
  };

  public messages: Message[] = [{
    author: this.bot,
    suggestedActions: [{
      type: 'reply',
      value: 'OK. Lets do this!'
    }],
    timestamp: new Date(),
    text: 'Not too intelligent, but I can show you the text you entered'
  }];

  public sendMessage(e: SendMessageEvent): void {
    const echo: Message = {
      author: this.bot,
      text: `You said: ${e.message.text}`,
    };

    setTimeout(
      () => this.messages = [...this.messages, e.message, echo],
      500
    );
  }

}
