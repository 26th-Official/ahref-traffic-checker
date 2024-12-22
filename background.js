browser.browserAction.onClicked.addListener(async () => {
  // Get the active tab
  const tabs = await browser.tabs.query({active: true, currentWindow: true});
  const currentTab = tabs[0];
  
  // Extract the domain from current URL
  const url = new URL(currentTab.url);
  const domain = url.hostname;
  
  // Create Ahrefs traffic checker URL
  const ahrefsUrl = `https://ahrefs.com/traffic-checker/?input=${encodeURIComponent(domain)}&mode=subdomains`;
  
  // Open in new tab
  browser.tabs.create({
    url: ahrefsUrl
  });
}); 