function clickElementByXPath(xpath) {
  var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (element) {
    element.click();
    return true;
  } else {
    return false;
  }
}
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyA') {
    clickElementByXPath('//*[@id="search-clear-button"]/ytd-button-renderer/yt-button-shape/button');
    var inputElement = document.evaluate('/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[2]/ytd-searchbox/form/div[1]/div[1]/input', document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (inputElement) {
      inputElement.focus();
    }
  }
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyS') {
    clickElementByXPath('//*[@id="search-icon-legacy"]');
  }
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyD') {
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[1]/div[1]/div/div[1]/div/h3/a/yt-formatted-string');
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-browse/ytd-two-column-browse-results-renderer/div[1]/ytd-rich-grid-renderer/div[6]/ytd-rich-grid-row[1]/div/ytd-rich-item-renderer[1]/div/ytd-rich-grid-media/div[1]/div[2]/div[1]/h3/a');
  }
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyF') {
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[2]/div[1]/div/div[1]/div/h3/a/yt-formatted-string');
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-browse/ytd-two-column-browse-results-renderer/div[1]/ytd-rich-grid-renderer/div[6]/ytd-rich-grid-row[1]/div/ytd-rich-item-renderer[2]/div/ytd-rich-grid-media/div[1]/div[2]/div[1]/h3/a');
  }
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyG') {
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[3]/div[1]/div/div[1]/div/h3/a/yt-formatted-string');
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-browse/ytd-two-column-browse-results-renderer/div[1]/ytd-rich-grid-renderer/div[6]/ytd-rich-grid-row[1]/div/ytd-rich-item-renderer[3]/div/ytd-rich-grid-media/div[1]/div[2]/div[1]/h3/a');
  }
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyH') {
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[4]/div[1]/div/div[1]/div/h3/a/yt-formatted-string');
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-browse/ytd-two-column-browse-results-renderer/div[1]/ytd-rich-grid-renderer/div[6]/ytd-rich-grid-row[1]/div/ytd-rich-item-renderer[4]/div/ytd-rich-grid-media/div[1]/div[2]/div[1]/h3/a');
  }
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyJ') {
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[5]/div[1]/div/div[1]/div/h3/a/yt-formatted-string');
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-browse/ytd-two-column-browse-results-renderer/div[1]/ytd-rich-grid-renderer/div[6]/ytd-rich-grid-row[2]/div/ytd-rich-item-renderer[1]/div/ytd-rich-grid-media/div[1]/div[2]/div[1]/h3/a');
  }
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyK') {
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[6]/div[1]/div/div[1]/div/h3/a/yt-formatted-string');
    clickElementByXPath('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-browse/ytd-two-column-browse-results-renderer/div[1]/ytd-rich-grid-renderer/div[6]/ytd-rich-grid-row[2]/div/ytd-rich-item-renderer[2]/div/ytd-rich-grid-media/div[1]/div[2]/div[1]/h3/a');
  }
});