chrome.runtime.onInstalled.addListener(() => {
  console.log('Ravex background service worker installed');
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type === 'PING') {
    sendResponse({ type: 'PONG', source: 'background' });
  }
  return false;
});
