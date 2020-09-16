document.addEventListener('DOMContentLoaded', function () {
  const bg = chrome.extension.getBackgroundPage()
  Object.keys(bg.bears).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${url}: ${bg.bears[url]}`
    document.body.appendChild(div)
  });

  function handle_files(){
    //NOt working due to security
    let hi="hi";
    const div = document.createElement('div')
    div.textContent = hi
    document.body.appendChild(div)
  }

}, false)
