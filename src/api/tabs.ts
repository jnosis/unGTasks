import { isChromium } from './platform';

export type Tab = chrome.tabs.Tab;
export type CreateProperties = chrome.tabs.CreateProperties;

export function create(createProperties: CreateProperties): Promise<Tab> {
  return isChromium
    ? chrome.tabs.create(createProperties)
    : (browser.tabs.create(createProperties) as Promise<Tab>);
}
