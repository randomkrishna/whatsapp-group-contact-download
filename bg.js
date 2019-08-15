chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "wa.js" });
});

chrome.runtime.onMessage.addListener(function(file) {
  try {
    chrome.downloads.download({
      url: file,
      filename: "wa_group_contacts.csv",
      saveAs: false
    });
  } catch (problem) {}
});
