import { isChromium } from './platform';

export type InstalledDetails =
  | chrome.runtime.InstalledDetails
  | browser.runtime._OnInstalledDetails;

export function getManifest() {
  return isChromium
    ? chrome.runtime.getManifest()
    : browser.runtime.getManifest();
}

export function getURL(path: string) {
  return isChromium
    ? chrome.runtime.getURL(path)
    : browser.runtime.getURL(path);
}

export const onStartup = isChromium
  ? chrome.runtime.onStartup
  : browser.runtime.onStartup;
export const onInstalled = isChromium
  ? chrome.runtime.onInstalled
  : browser.runtime.onInstalled;
