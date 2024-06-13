const init = () => {
    const goToBackDCHSLinks = document.getElementById("go-to-back-dchs-menu-links");
    const dchsActiveBtnContentLeft = document.getElementById("dchs-active-btn-content-left");
    const dchsActiveBtnContentRight = document.getElementById("dchs-active-btn-content-right");
    const dchsMenuLinks = document.getElementById("dchs-menu-links");
    const dchsmlBtns = document.querySelectorAll(".dchsml-btn");
    const dchsActiveContentLeft = document.querySelectorAll(".dchs-active-content-left");
    const dchsActiveContentHeading = document.querySelector(".dchs-active-content-heading");

    goToBackDCHSLinks.addEventListener("click", () => {
        dchsActiveBtnContentLeft.style.left = "-100%";
        console.log('he')
    })

    const chngVisLeftWhenClicked = (_dataId, _title) => {
        dchsActiveContentLeft.forEach(_singleOne => {
            if(_singleOne.getAttribute("data-id") === _dataId){
                _singleOne.classList.add("dcsh-show-flex");
                _singleOne.classList.remove("dcsh-hidden");
            } else{
                _singleOne.classList.remove("dcsh-show-flex");
                _singleOne.classList.add("dcsh-hidden");
            }
        })
        dchsActiveContentHeading.innerText = _title;
        dchsActiveBtnContentLeft.style.left = "0px";
    }
    dchsmlBtns.forEach(btn => {
        btn.addEventListener("click", ()=>{
            chngVisLeftWhenClicked(btn.getAttribute("data-id"), btn.getAttribute("data-heading"));
        })
    })

    // hamburger button
    const hamburgerBtn = document.getElementById("hamburger-menu");
    const headerWrapper = document.querySelector(".dc-header-wrapper");
    const headerSidebar = document.getElementById("header-sidebar");
    hamburgerBtn.addEventListener("click", () => {
        headerSidebar.style.left = "0px";
        dchsMenuLinks.style.left = "0px";
        headerWrapper.style.background = "rgba(255, 255, 255, 0.1)";
    })

    // Sidebar close btn
    const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
    sidebarCloseBtn.addEventListener("click", () => {
        dchsMenuLinks.style.left = "-100%";
        headerSidebar.style.left = "-100%";
        headerWrapper.style.background = "white";
    })

    // Menu Links
    const dchsmlBtnMenu = document.querySelectorAll(".dchsml-btn-menu");
    dchsmlBtnMenu.forEach(btn => {
        btn.addEventListener("click", () => {
            headerSidebar.style.left = "0px";
            dchsMenuLinks.style.left = "0px";
            headerWrapper.style.background = "rgba(255, 255, 255, 0.1)";
            chngVisLeftWhenClicked(btn.getAttribute("data-id"), btn.getAttribute("data-heading"));
        })
    })
}

document.readyState === "interactive" ? init() : document.addEventListener("DOMContentLoaded", init());