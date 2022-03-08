"use strict"

function sleepF(ms){
    let promise = new Promise(
        function(resolve){
            setTimeout(
                function(){
                    resolve()
                },
                ms
            );
        }
    );
    return promise;
}

function sleep(ms){
    return new Promise(
        (resolve)=> setTimeout(resolve, ms)
    );
}

function sleepReturn(ms){
    return new Promise(
        (resolve)=> setTimeout(()=>{resolve("green")}, ms)
    )
}

