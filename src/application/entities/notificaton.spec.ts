import { Content } from './content';
import { Notification } from './notitication';

describe('Notification content', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizada'),
      category: 'social',
      recipientId: 'example-recipientId',
    });
    expect(notification).toBeTruthy();
  });
});
