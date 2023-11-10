import { isChromium } from './platform';

export const onClicked = isChromium
  ? chrome.action.onClicked
  : browser.action.onClicked;
