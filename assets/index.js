function Fibonaççi(n) {
    if (n <= 1) {
        result = n
    } else {
        result = Fibonaççi(n - 1) + Fibonaççi(n - 2)
    }
    return result;
}
console.log(Fibonaççi(8));






2
window.onload = function () {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 6 && hour < 16) {
        document.body.style.backgroundColor = "orange"
        alert("Gunortaniz xeyir")

    }
    else if (hour >= 16 && hour < 22) {
        document.body.style.backgroundColor = "lightblue"
        alert("Axsam;n;z xeyir")
    }
    else {
        document.body.style.backgroundColor = "red"
        alert("Her vaxtiniz xeyir")
    }
}






3

let a = 6;
for (let i = 0; i < 1000; i++) {
    if (i % a == 0) {
        console.log(i)
    }

}