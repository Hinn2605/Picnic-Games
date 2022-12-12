const bgload = () =>{
    let header = document.getElementById("header");
    let count1 = document.getElementById("count1");
    let line = document.getElementById("line");

    setTimeout(() => {
        header.style.background = "url('img/img-header/header-1.jpg')no-repeat center center/cover";
        
        line.style.height = "33.3%";
    }, 0000);
    setTimeout(() => {
        header.style.background = "url('img/img-header/header-2.jpg')no-repeat center center/cover";
        
        line.style.height = "66.3%";
    }, 3000);
    setTimeout(() => {
        header.style.background = "url('img/img-header/header-3.jpg')no-repeat center center/cover";
        
        line.style.height = "99.3%";
    }, 6000);

}

setInterval(bgload, 9000);
bgload();