var active = () => {
    document.getElementsByClassName("first-screen")[0].style.opacity = "0"
    document.getElementsByClassName("first-screen")[0].style.top = "-100%"
    setTimeout(function(){
        document.getElementsByClassName("second-screen")[0].style.opacity = "1"
   },1250);
}

var disagreeClicked = 0
var transition = 0.35
var myFunction = () => {
    oldDisagreeClicked = disagreeClicked
    disagreeClicked++
    if (disagreeClicked === 1) {
        document.getElementsByClassName("box-disagree")[0].style.right = "22.5%"
        document.getElementsByClassName("box-agree")[0].style.left = "30%"
    } else if (disagreeClicked === 10) {
        alert("Cậu yêu Mình đi mà :3")
    } else if (disagreeClicked === 20) {
        alert("yêu Mình đi Mình dẫn đi uống ts :3")
    } else if (disagreeClicked === 35) {
        alert("Đi ăn nữa nhá :3")
    } else if (disagreeClicked === 50) {
        alert("gòi đi xem phim nữa :3")
    } else if (oldDisagreeClicked != disagreeClicked) {
        if (transition >= 0.1) {
            transition -= 0.01
        }
        document.getElementsByClassName("box-disagree")[0].style.right = Math.floor(Math.random() * (75 - 25 + 1) + 5).toString() + "%"
        document.getElementsByClassName("box-disagree")[0].style.top = Math.floor(Math.random() * (75 - 25 + 1) + 5).toString() + "%"
        document.getElementsByClassName("box-disagree")[0].style.transition = transition.toString() + "s"
    }
}

var accept = () => {
    alert("Mình cũng yêu Cậuuuuuu !!!!!")
}