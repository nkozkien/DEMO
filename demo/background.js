chrome.webRequest,onBeforeRequest.addListener(
    function(details){return {cancel:true}},
    {urls:["*://*.benhxoang.vn/*"]},
    ["blocking"]
)