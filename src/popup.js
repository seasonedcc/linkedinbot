const checkProfileViews = document.getElementById('check-profile-views');
const withdrawInviations = document.getElementById('withdraw-invitations');

checkProfileViews.onclick = () => {
    chrome.tabs.update({
        url: "https://www.linkedin.com/me/profile-views/urn:li:wvmp:summary/"
    })
}

withdrawInviations.onclick = () => {
    chrome.tabs.update({
        url: "https://www.linkedin.com/mynetwork/invitation-manager/sent/?linkedinbot_withdraw=true"
    }, (tab) => {
        // chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        //     chrome.tabs.sendMessage(tabs[0].id, {action: "withdraw-invitations"}, (response) => {})
        // });
        // chrome.tabs.sendMessage(tab.id, { action: "withdraw-invitations" }, (response) => {});
    })

}