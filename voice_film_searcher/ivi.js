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
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyS') {
    clickElementByXPath('//*[@id="root"]/div/div/div/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyA') {
    clickElementByXPath('//*[@id="headerTop"]/div/div/div/div[1]/div[3]/div/button');
  }
});


document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyQ') {
    clickElementByXPath('//*[@id="search-root"]/div/div[2]/div/div/section[1]/div/div/form/div/div/div[1]/div');
  }
});


document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyD') {
    clickElementByXPath('//*[@id="search-root"]/div/div[2]/div/div/section[2]/div/div/div/div/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyF') {
    clickElementByXPath('//*[@id="search-root"]/div/div[2]/div/div/section[2]/div/div/div/div/div[2]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyG') {
    clickElementByXPath('//*[@id="search-root"]/div/div[2]/div/div/section[2]/div/div/div/div/div[3]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyH') {
    clickElementByXPath('//*[@id="search-root"]/div/div[2]/div/div/section[2]/div/div/div/div/div[4]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyJ') {
    clickElementByXPath('//*[@id="search-root"]/div/div[2]/div/div/section[2]/div/div/div/div/div[5]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyK') {
    clickElementByXPath('//*[@id="search-root"]/div/div[2]/div/div/section[2]/div/div/div/div/div[6]/a');
  }
});