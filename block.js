chrome.webRequest.onBeforeRequest.addListener(function(request){
    
  return {
            redirectUrl: redirect_url /*Redirection URL*/
        };
},
{urls: block_urls },['blocking']);