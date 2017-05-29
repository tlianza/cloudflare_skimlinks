(function () {
  'use strict'

  if (!window.addEventListener) return // Check for IE9+

  var options = INSTALL_OPTIONS
  var element

  // updateElement runs every time the options are updated.
  // Most of your code will end up inside this function.
  function updateElement () {
    element = INSTALL.createElement(options.location, element)


    // Set the app attribute to your app's dash-delimited alias.
    element.setAttribute('app', 'skimlinks')

    if (!options.sitecode) {
      element.innerHTML = "Skimlinks site code is required";
      return;
    }

    var skimScript = document.createElement('script');
    skimScript.setAttribute('type', 'text/javascript');
    skimScript.setAttribute('src', '//s.skimresources.com/js/'+options.sitecode+'.skimlinks.js');
    element.appendChild(skimScript);
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions (nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
