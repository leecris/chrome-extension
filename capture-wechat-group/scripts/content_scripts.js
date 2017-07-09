/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}
 */
function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
    console.log('onMessage', msg);
    switch (msg.type) {
        case 'inject-script':
            injectScript(chrome.extension.getURL('scripts/web_accessible_resources.js'),'body');
            sendResponse({status: 'success'});
            break;
        case 'get-wechat-group':
            var body = document.getElementsByTagName('body')[0];
            var list = body.dataset;
            console.log(list.wechatgrouplist);
            console.log(list);
            sendResponse({list: list.wechatgrouplist});
            break;
        default:
            sendResponse({});
    }
});
