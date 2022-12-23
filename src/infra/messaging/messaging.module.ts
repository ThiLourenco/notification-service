import { Module } from '@nestjs/common';
import { NotificationController } from './kafka/controller/notification.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [],
  providers: [KafkaConsumerService],
  controllers: [NotificationController],
})
export class MessagingModule {}
