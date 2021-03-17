const re = /month/

const oldEnough = (el) => {
    const invitationCard = el.closest('li.invitation-card')
    if(invitationCard) {
        const timeBadge = invitationCard.querySelector(`[class*="time-badge time-ago"]`)
        const monthsAgoMatch = timeBadge.innerHTML.match(re)
        return (monthsAgoMatch && monthsAgoMatch.length && monthsAgoMatch.length > 0)
    }
    return false
}

const filterCondition = R.allPass([oldEnough])
const withdrawButtonsToBeClicked = R.filter(filterCondition)

const withdrawOne = (withdrawButton) => {
    withdrawButton.click()
    const confirm = document.querySelector('button[data-test-dialog-primary-btn]')
    if(confirm) confirm.click()
}

const withdrawAll = () => {
    const withdrawButtons = document.querySelectorAll('button[data-control-name=withdraw_single]')

    console.log('TO BE CLICKED', withdrawButtonsToBeClicked(withdrawButtons))
    // withdrawButtonsToBeClicked(withdrawButtons).forEach(withdrawOne)
}

window.setTimeout(() => {
    withdrawAll()
}, 1000)


// const pages = document.querySelectorAll(`li[data-test-pagination-page-btn]`)
// pages.forEach((page) => {
//     const pageButton = page.querySelector('button')
//     if(pageButton) {
//         pageButton.click()
//         withdrawAll()
//     }
// })