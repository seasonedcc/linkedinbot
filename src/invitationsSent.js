const refs = document.querySelectorAll(`[class*="time-badge time-ago"]`);

refs.forEach((el) => {
    const re = /(\d+) months ago/
    const monthsAgoMatch = el.innerHTML.match(re)
    if(monthsAgoMatch && monthsAgoMatch.length && monthsAgoMatch.length > 1) {
        const monthsAgo = parseInt(monthsAgoMatch[1])
        const invitationCard = el.closest('li.invitation-card')
        if(monthsAgo >= 3 && invitationCard) {
            const withdrawButton = invitationCard.querySelector('button[data-control-name=withdraw_single]')
            if(withdrawButton) {
                withdrawButton.click()
                const confirm = document.querySelector('button[data-test-dialog-primary-btn]')
                if(confirm) confirm.click()
            }
        }
    }
})
