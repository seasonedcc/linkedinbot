const re = /(\d+) months ago/

const oldEnough = (el) => {
    const monthsAgoMatch = el.innerHTML.match(re)
    if(monthsAgoMatch && monthsAgoMatch.length && monthsAgoMatch.length > 1) {
        const monthsAgo = parseInt(monthsAgoMatch[1])
        return monthsAgo >= 3
    }
    return false
}

const hasWithdrawButton = (el) => {
    const invitationCard = el.closest('li.invitation-card')
    if(invitationCard) {
        const withdrawButton = invitationCard.querySelector('button[data-control-name=withdraw_single]')
        return !R.isNil(withdrawButton )
    }
    return false
}

const filterCondition = R.allPass([oldEnough, hasWithdrawButton])

const withdrawButtons = R.filter(filterCondition)

const timeBadges = document.querySelectorAll(`[class*="time-badge time-ago"]`)

const withdraw = (withdrawButton) => {
    withdrawButton.click()
    const confirm = document.querySelector('button[data-test-dialog-primary-btn]')
    if(confirm) confirm.click()
}

withdrawButtons(timeBadges).forEach(withdraw)
