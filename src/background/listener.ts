import type { ContextMenuId } from '../types';
import * as browser from '../api/api';

export class Listener {
  constructor() {
    browser.notifications.onClicked.addListener((notificationId) =>
      this.onNotificationClick(notificationId)
    );

    browser.action.onClicked.addListener(
      (tab) => tab.id && this.onActionClick(tab.id)
    );

    browser.contextMenus.onClicked.addListener(
      ({ menuItemId }, tab) =>
        tab?.id && this.onContextMenuClick(menuItemId as ContextMenuId, tab.id)
    );
  }

  private onNotificationClick(notificationId: string) {
    if (notificationId === 'updated') {
      const url = browser.runtime.getURL('changelog.html');
      browser.tabs.create({ url });
    }
    browser.notifications.clear(notificationId);
  }

  private onActionClick(tabId: number) {
    console.log(`Action click: ${tabId}`);
    browser.windows.create({
      type: 'popup',
      url: 'https://tasks.google.com/embed/list/~default?origin=https://mail.google.com',
      width: 400,
    });
  }

  private onContextMenuClick(menuItemId: ContextMenuId, tabId: number) {
    console.log(`Context menu click: (${menuItemId} : ${tabId})`);
    switch (menuItemId) {
      case 'shortcuts':
        browser.tabs.create({ url: 'chrome://extensions/shortcuts' });
        break;
      case 'changelog': {
        const url = browser.runtime.getURL('changelog.html');
        browser.tabs.create({ url });
        break;
      }

      default:
        throw new Error(`Unavailable contextMenu: ${menuItemId}`);
    }
  }
}
