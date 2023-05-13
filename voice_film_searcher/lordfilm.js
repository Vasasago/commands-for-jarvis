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
    var inputElement = document.evaluate('//*[@id="cdn-player"]', document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (inputElement) {
      inputElement.focus();
    }
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyA') {
    var inputElement = document.evaluate('//*[@id="ajax_search"]', document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (inputElement) {
      inputElement.focus();
    }
  }
});


document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyD') {
    clickElementByXPath('//*[@id="dle-content"]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyF') {
    clickElementByXPath('//*[@id="dle-content"]/div[2]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyG') {
    clickElementByXPath('//*[@id="dle-content"]/div[3]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyH') {
    clickElementByXPath('//*[@id="dle-content"]/div[4]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyJ') {
    clickElementByXPath('//*[@id="dle-content"]/div[5]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyK') {
    clickElementByXPath('//*[@id="dle-content"]/div[6]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyZ') {
    clickElementByXPath('//*[@id="dle-content"]/div[7]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyX') {
    clickElementByXPath('//*[@id="dle-content"]/div[8]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyC') {
    clickElementByXPath('//*[@id="dle-content"]/div[9]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyV') {
    clickElementByXPath('//*[@id="dle-content"]/div[10]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyB') {
    clickElementByXPath('//*[@id="dle-content"]/div[11]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyN') {
    clickElementByXPath('//*[@id="dle-content"]/div[12]/a');
  }
});

