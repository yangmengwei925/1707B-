// 实现一个promise.all

function PromiseAll(promises){
    let result = [];
    return new Promise((resolve, reject)=>{
        promises.forEach((item, index)=>{
            item.then(res=>{
                result[index] = res;
                if (result.length === promises.length){
                    resolve(result);
                }
            }, err=>{
                reject(err);
            })
        })
    })

}