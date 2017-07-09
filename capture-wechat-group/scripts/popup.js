/**
 * Created by Lee Cris on 8/7/2017.
 */
window.onload = function() {
    var getListButton = document.getElementById('show-list');
    var injectButton = document.getElementById('inject-script');
    injectButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var tab = tabs[0];
            console.log(tab.url, tab.title);
            chrome.tabs.getSelected(null, function(tab) {
                chrome.tabs.sendMessage(tab.id, {type: "inject-script"}, function(msg) {
                    msg = msg || {};
                    console.log('onResponse', msg.list);
                    document.getElementById('show-list').style.display = "block";
                    document.getElementById('result').style.display = "block";
                });
            });
        });
    });
    getListButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var tab = tabs[0];
            console.log(tab.url, tab.title);
            chrome.tabs.getSelected(null, function(tab) {
                chrome.tabs.sendMessage(tab.id, {type: "get-wechat-group"}, function(msg) {
                    msg = msg || {};
                    console.log('onResponse', msg.list);
                    document.getElementById('result').innerHTML = msg.list;
                });
            });
        });
    });
};


