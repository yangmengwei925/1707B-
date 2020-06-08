// 防抖
export function debounce(func, delay=150){
    let timer = 0;
    
    return function(){
        window.clearTimeout(timer);

        timer = setTimeout(()=>{
            func();
        }, delay);
    }
}

// 节流
export function throttle(func, delay=150){
    let start = +new Date();

    return function(){
        let cur = +new Date();
        if (cur - start > delay){
            func();
            start = cur;
        }
    }
}