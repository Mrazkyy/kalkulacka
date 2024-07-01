const calculate = () => {
    let screen = document.querySelector(".screen")
    let buttons = document.querySelectorAll(".btn")
    let clear = document.querySelector(".clear")
    let equal = document.querySelector(".btn-equal")

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener("click", () => {
        let result = eval(screen.value)
        screen.value = result;
    })

    clear.addEventListener("click", () => {
        screen.value = ""
    })
}

calculate()