(() => {
  console.log('Ravex content script injected');

  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message?.type === 'PING_CONTENT') {
      sendResponse({ type: 'CONTENT_ECHO', received: message });
    }
    return false;
  });
})();
