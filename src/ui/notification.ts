import * as browser from '../api/api';

export async function create() {
  browser.notifications.create('updated', {
    type: 'basic',
    iconUrl: './icons/icon128.png',
    title: browser.i18n.getMessage('notificationTitle'),
    message: `${browser.i18n.getMessage('changelog_1_0_0')}`,
    // requireInteraction: true,
  });
}
