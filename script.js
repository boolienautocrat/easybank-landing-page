const icnHam = $(".icn-ham")
const mobileNav = $(".mobile-nav")
const navItems = [$(".home-li"), $(".about-li"), $(".contact-li"), $(".blog-li"), $(".careers-li")]
const reloadArray = [navItems[0], navItems[2], navItems[4]]

if (window.matchMedia("(max-width: 425px)").matches) {
    $(".bg-intro").prop("src", "./images/bg-intro-mobile.svg")

    function navItemsClose() {
        icnHam.removeClass("icn-close");
        icnHam.addClass("icn-ham")
        icnHam.prop("src", "./images/icon-hamburger.svg")
        mobileNav.removeClass("active")
    }

    function scrollNClose(v) {
        $(window).scrollTop(v)
        navItemsClose();
    }
    icnHam.on("click", () => {
        icnHam.toggleClass("icn-ham")
        icnHam.toggleClass("icn-close")
        if (icnHam.hasClass("icn-close") == true) {
            icnHam.prop("src", "./images/icon-close.svg")
            mobileNav.addClass("active")
        } else if (icnHam.hasClass("icn-ham") == true) {
            mobileNav.removeClass("active")
            icnHam.prop("src", "./images/icon-hamburger.svg")
        }
    })
    reloadArray.forEach((e) => {
        e.on("click", () => {
            location.reload();
        })
    })

    navItems[1].on("click", () => {
        scrollNClose(153)
    })

    navItems[3].on("click", () => {
        scrollNClose(2192)
    })
}