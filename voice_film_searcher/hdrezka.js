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
    var inputElement = document.evaluate('//*[@id="oframecdnplayer"]/pjsdiv[6]/pjsdiv[1]/pjsdiv', document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (inputElement) {
      inputElement.click();
    }
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyA') {
    clickElementByXPath('//*[@id="search"]/button');
  }
});


document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyD') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[1]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyF') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[2]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyG') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[3]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyH') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[4]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyJ') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[5]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyK') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[6]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyZ') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[7]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyX') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[8]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyC') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[9]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyV') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[10]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyB') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[11]/div[1]/a');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyN') {
    clickElementByXPath('//*[@id="main"]/div[4]/div[2]/div/div[1]/div[12]/div[1]/a');
  }
});

