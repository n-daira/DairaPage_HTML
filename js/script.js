const targeElement = document.querySelectorAll(".block");

document.addEventListener("scroll", function () {
    targeElement.forEach(x => {
        // targeElementの60%が見えた段階で表示する
        const getElementDistance = x.getBoundingClientRect().top + x.clientHeight * .6;
        if (window.innerHeight > getElementDistance) {    
            x.classList.add("show");
         }
    })
})