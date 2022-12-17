import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'A notification',
      category: 'social',
      recipientId: '123',
    });

    expect(notification).toBeTruthy();
  });
});
