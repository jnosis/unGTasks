import * as browser from '../api/api';
import * as ContextMenu from '../ui/contextMenus';
import * as Notification from '../ui/notification';

export class Load {
  constructor(details?: browser.runtime.InstalledDetails) {
    this.onLoad(details);
  }

  private onLoad(details?: browser.runtime.InstalledDetails) {
    const isUpdated = details?.reason === 'update';
    this.load()
    if (isUpdated) Notification.create();
  }

  private load() {
    console.log('load');
    ContextMenu.createAll()
  }
}
