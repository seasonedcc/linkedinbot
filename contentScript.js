const refs = document.querySelectorAll(`[data-control-name*="connect_CTA"]`);

refs.forEach((el) => {
    console.log("Click on el: ", el, el.click)
})
