import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  @EventPattern('notification.send-notification')
  async handleSendNotification() {
    console.log('message test');
  }
}
