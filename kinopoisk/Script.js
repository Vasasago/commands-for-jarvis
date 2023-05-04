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
    clickElementByXPath('//*[@id="__next"]/div[2]/div[2]/div/div/div/div[1]/div/div/section/div/div[2]/div/div/section/div[2]/div/div/div/div[1]/div/button');
    clickElementByXPath('//*[@id="__next"]/div[2]/div[2]/div/div/div/div[1]/div/div/section/div/div[2]/div/div/section/div[3]/div/div/div/div[1]/div/button');
    clickElementByXPath('//*[@id="__next"]/div[2]/div[2]/div/div/div/div[2]/div/div/section[1]/div/div/div[2]/div/div/div/div/div[1]/div/div/section/div/div[2]/div/div/section/div[2]/div/div/div/div[1]/div/button');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyA') {
    clickElementByXPath('//*[@id="__next"]/div[2]/div[1]/header/div[2]/div[2]/div/div[1]/div/button');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyD') {
    clickElementByXPath('//*[@id="__next"]/div[2]/div[1]/header/div[2]/div[2]/div/div[2]/div/div[2]/div[2]/div/div/div/div[2]/div[1]/a');
  }
});
