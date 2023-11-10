import { isChromium } from './platform';

export type Window = chrome.windows.Window;
export type CreateData = chrome.windows.CreateData;

export function create(createData: CreateData): Promise<Window> {
  return isChromium
    ? chrome.windows.create(createData)
    : (browser.windows.create(
        createData as browser.windows._CreateCreateData
      ) as Promise<Window>);
}
