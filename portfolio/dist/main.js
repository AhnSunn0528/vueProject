window.onload = () => {
    let scrollpos = window.scrollY;
    const about = document.querySelector("#about > div")
    const tech = document.querySelector("#Tech > div")
    const award = document.querySelector("#awards > div")
    window.addEventListener('scroll', function() {
        scrollpos = window.scrollY
        if (scrollpos >= about.offsetHeight - 200) add_class_on_scroll(about)
        if (scrollpos >= tech.offsetHeight + 300) add_class_on_scroll(tech)
        if (scrollpos >= tech.offsetHeight + 700) add_class_on_scroll(award)
    })
}