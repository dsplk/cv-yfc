let cv = document.querySelector("#cv");
let style = document.querySelector("#style");

let string = `/*你好，我叫姚富成
* 给大家展示一个八卦图
* 先来个盒子*/
#div{
    border: 1px solid black;
    width:200px;
    height:200px;
}
/*八卦图是圆形的： */
#div{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦图是阴阳两极的： */
#div{
    background: linear-gradient(90deg, rgba(255,255,255,1) 
    0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, 
    rgba(0,0,0,1) 100%);
}
/*八卦图的阴阳是相互融合的，所以需要进行一些处理： */
#div::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 
    0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, 
    rgba(0,0,0,1) 100%);    
}

#div::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%,
     rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, 
     rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%); 
}

/* 好了，太极完成了。*/
`;
let i = 0;

let string2 = "";

let step = () => {
  setTimeout(() => {
    if (string[i] === "\n") {
      string2 += "<br>";
    } else if (string[i] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[i];
    }

    if (i < string.length - 1) {
      i++;
      step();
    }
    window.scrollTo(0, 99999);
    cv.scrollTo(0, 99999);
    cv.innerHTML = string2;
    style.innerHTML = string.substring(0, i);
  }, 30);
};

step();
