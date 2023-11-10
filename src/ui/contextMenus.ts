import * as browser from '../api/api';
import { ContextMenuId } from '../types';

export function createAll() {
  console.trace('create all context menus');
  browser.contextMenus.removeAll();

  createById('shortcuts', true);
  createById('changelog', true);
}

export function createById(id: ContextMenuId, isUI: boolean = false) {
  console.trace(`Create context menu: ${id}`);
  browser.contextMenus.create({
    id,
    title: browser.i18n.getMessage(`contextMenu_${id}`),
    contexts: isUI ? ['action'] : ['page', 'video', 'audio', 'action'],
  });
}
