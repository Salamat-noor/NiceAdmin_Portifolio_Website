function ProfileUpdate() {
    const ProfPICSet = document.getElementById("ProfPICSet");
    const userIMAGEUP = document.getElementsByClassName("userIMAGEUP")[0];

    userIMAGEUP.addEventListener("click", function () {
        setTimeout(() => {
            var a = ProfPICSet.setAttribute("src", userIMAGEUP.value);
            console.log(a);
        }, 10000);
        
    });

};
ProfileUpdate();
function asideAnimation() {
    const aside = document.getElementsByTagName("aside")[0];
    const main = document.getElementsByTagName("main")[0];


    if (aside.style.left == "-300px") {
        aside.style.left = "0px";
    } else {
        aside.style.left = "-300px";
    }
    main.addEventListener("click", () => {
        aside.style.left = "-300px";
    });
};
// =============================
function searchIconAnimation() {
    const srch_box_nav = document.querySelector(".srch_box_nav2");
    const srchIcon_2 = document.getElementById("srchIcon-2");

    srchIcon_2.addEventListener("click", () => {
        if (srch_box_nav.style.display == "block") {
            srch_box_nav.style.display = "none";
        } else {
            srch_box_nav.style.display = "block";
        };
    });
};
searchIconAnimation();
// ============================
function pagesAnimation() {
    // links to PAGES
    const li1 = document.getElementById("li1");
    const li2 = document.getElementById("li2");
    const li3 = document.getElementById("li3");
    // Pages
    const page1 = document.getElementById("dashboard");
    const page2 = document.getElementById("ComponentsAlert");
    const page3 = document.getElementById("ComponentsAccordions");

    function DefaultPagesStyles() {
        page2.style.display = "none";
        page3.style.display = "none";
    };
    DefaultPagesStyles();

    li1.addEventListener('click', function () {
        page1.style.display = "block";
        page2.style.display = "none";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
        page8.style.display = "none";
        page9.style.display = "none";
        page10.style.display = "none";
        page11.style.display = "none";
        page12.style.display = "none";
        page13.style.display = "none";
        page14.style.display = "none";
        page15.style.display = "none";
        page16.style.display = "none";
        page17.style.display = "none";
        page18.style.display = "none";
        page19.style.display = "none";
        page20.style.display = "none";
        page21.style.display = "none";
        page22.style.display = "none";
        page23.style.display = "none";
        page24.style.display = "none";
        page25.style.display = "none";
        page26.style.display = "none";
        page27.style.display = "none";
        page28.style.display = "none";
        page29.style.display = "none";
        page30.style.display = "none";
        page31.style.display = "none";
        page32.style.display = "none";
        page33.style.display = "none";
        page34.style.display = "none";
    });
    li2.addEventListener('click', function () {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
        page8.style.display = "none";
        page9.style.display = "none";
        page10.style.display = "none";
        page11.style.display = "none";
        page12.style.display = "none";
        page13.style.display = "none";
        page14.style.display = "none";
        page15.style.display = "none";
        page16.style.display = "none";
        page17.style.display = "none";
        page18.style.display = "none";
        page19.style.display = "none";
        page20.style.display = "none";
        page21.style.display = "none";
        page22.style.display = "none";
        page23.style.display = "none";
        page24.style.display = "none";
        page25.style.display = "none";
        page26.style.display = "none";
        page27.style.display = "none";
        page28.style.display = "none";
        page29.style.display = "none";
        page30.style.display = "none";
        page31.style.display = "none";
        page32.style.display = "none";
        page33.style.display = "none";
        page34.style.display = "none";
    });
    li3.addEventListener('click', function () {
        page1.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "block";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
        page8.style.display = "none";
        page9.style.display = "none";
        page10.style.display = "none";
        page11.style.display = "none";
        page12.style.display = "none";
        page13.style.display = "none";
        page14.style.display = "none";
        page15.style.display = "none";
        page16.style.display = "none";
        page17.style.display = "none";
        page18.style.display = "none";
        page19.style.display = "none";
        page20.style.display = "none";
        page21.style.display = "none";
        page22.style.display = "none";
        page23.style.display = "none";
        page24.style.display = "none";
        page25.style.display = "none";
        page26.style.display = "none";
        page27.style.display = "none";
        page28.style.display = "none";
        page29.style.display = "none";
        page30.style.display = "none";
        page31.style.display = "none";
        page32.style.display = "none";
        page33.style.display = "none";
        page34.style.display = "none";
    });
};
pagesAnimation();