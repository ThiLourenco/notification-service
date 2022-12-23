import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class kafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({});
  }
}
