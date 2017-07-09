/**
 * Created by Lee Cris on 8/7/2017.
 */
var selectors = window._chatContent;
var listGroup = [];

for (var i in selectors) {
    if (selectors.hasOwnProperty(i)) {
        if (i != '') {
            listGroup.push(i);
        }
    }
}
var wechatGroup = listGroup.join();
console.log(wechatGroup);
document.getElementsByTagName('body')[0].setAttribute('data-wechatgrouplist',wechatGroup);