let heartCount= parseInt(document.getElementById('heart-count').innerText);
let coinCount= parseInt(document.getElementById('coin-count').innerText);
let copyCount= parseInt(document.getElementById('copy-count').innerText);

// document.getElementById('heart-count').addEventListener('click', function(event){
//     console.log(heartCount);
// })
// console.log(heartCount);
// document.getElementsByClassName('tap-copy').addEventListener('click', function(event){
//     // console.log(copyCount);
// });


// const hearts= document.getElementsByClassName('tap-heart');
// const copys= document.getElementsByClassName('tap-copy');
// const calls= document.getElementsByClassName('tap-call');
// for (let heart of hearts){
//     heart.addEventListener('click', function(event){
//         heartCount++;
//         // console.log(heartCount);
//         document.getElementById('heart-count').innerText= heartCount;
//     });
// }
// for (let copy of copys){
//     copy.addEventListener('click', function(event){
//         copyCount++;
//         console.log(copyCount);
//         document.getElementById('copy-count').innerText= copyCount;
//     });
// }
// for (let call of calls){
//     call.addEventListener('click', function(event){
//         if(coinCount<20){
//             alert("You don't have enough coins to make call");
//         }
//         else{
//             coinCount-=20;
//             // console.log(coinCount);
//             document.getElementById('coin-count').innerText= coinCount;
//         }
//     });
// }

document.getElementById('tap-heart-1').addEventListener('click', function(event){
    heartCount++;
    document.getElementById('heart-count').innerText= heartCount;
});
document.getElementById('tap-heart-2').addEventListener('click', function(event){
    heartCount++;
    document.getElementById('heart-count').innerText= heartCount;
});
document.getElementById('tap-heart-3').addEventListener('click', function(event){
    heartCount++;
    document.getElementById('heart-count').innerText= heartCount;
});
document.getElementById('tap-heart-4').addEventListener('click', function(event){
    heartCount++;
    document.getElementById('heart-count').innerText= heartCount;
});
document.getElementById('tap-heart-5').addEventListener('click', function(event){
    heartCount++;
    document.getElementById('heart-count').innerText= heartCount;
});
document.getElementById('tap-heart-6').addEventListener('click', function(event){
    heartCount++;
    document.getElementById('heart-count').innerText= heartCount;
});
document.getElementById('tap-heart-7').addEventListener('click', function(event){
    heartCount++;
    document.getElementById('heart-count').innerText= heartCount;
});
document.getElementById('tap-heart-8').addEventListener('click', function(event){
    heartCount++;
    document.getElementById('heart-count').innerText= heartCount;
});
document.getElementById('tap-heart-9').addEventListener('click', function(event){
    heartCount++;
    document.getElementById('heart-count').innerText= heartCount;
});

document.getElementById('tap-copy-1').addEventListener('click', function(event){
    copyCount++;
    document.getElementById('copy-count').innerText= copyCount;
});
document.getElementById('tap-copy-2').addEventListener('click', function(event){
    copyCount++;
    document.getElementById('copy-count').innerText= copyCount;
});
document.getElementById('tap-copy-3').addEventListener('click', function(event){
    copyCount++;
    document.getElementById('copy-count').innerText= copyCount;
});
document.getElementById('tap-copy-4').addEventListener('click', function(event){
    copyCount++;
    document.getElementById('copy-count').innerText= copyCount;
});
document.getElementById('tap-copy-5').addEventListener('click', function(event){
    copyCount++;
    document.getElementById('copy-count').innerText= copyCount;
});
document.getElementById('tap-copy-6').addEventListener('click', function(event){
    copyCount++;
    document.getElementById('copy-count').innerText= copyCount;
});
document.getElementById('tap-copy-7').addEventListener('click', function(event){
    copyCount++;
    document.getElementById('copy-count').innerText= copyCount;
});
document.getElementById('tap-copy-8').addEventListener('click', function(event){
    copyCount++;
    document.getElementById('copy-count').innerText= copyCount;
});
document.getElementById('tap-copy-9').addEventListener('click', function(event){
    copyCount++;
    document.getElementById('copy-count').innerText= copyCount;
});

document.getElementById('tap-call-1').addEventListener('click', function(event){
    if (coinCount<20){
        alert("You don't have enough coins to make call");
        return;
    } else{
        coinCount-=20;
        document.getElementById('coin-count').innerText= coinCount;
    }
});
document.getElementById('tap-call-2').addEventListener('click', function(event){
    if (coinCount<20){
        alert("You don't have enough coins to make call");
        return;
    } else{
        coinCount-=20;
        document.getElementById('coin-count').innerText= coinCount;
    }
});
document.getElementById('tap-call-3').addEventListener('click', function(event){
    if (coinCount<20){
        alert("You don't have enough coins to make call");
        return;
    } else{
        coinCount-=20;
        document.getElementById('coin-count').innerText= coinCount;
    }
});
document.getElementById('tap-call-4').addEventListener('click', function(event){
    if (coinCount<20){
        alert("You don't have enough coins to make call");
        return;
    } else{
        coinCount-=20;
        document.getElementById('coin-count').innerText= coinCount;
    }
});
document.getElementById('tap-call-5').addEventListener('click', function(event){
    if (coinCount<20){
        alert("You don't have enough coins to make call");
        return;
    } else{
        coinCount-=20;
        document.getElementById('coin-count').innerText= coinCount;
    }
});
document.getElementById('tap-call-6').addEventListener('click', function(event){
    if (coinCount<20){
        alert("You don't have enough coins to make call");
        return;
    } else{
        coinCount-=20;
        document.getElementById('coin-count').innerText= coinCount;
    }
});
document.getElementById('tap-call-7').addEventListener('click', function(event){
    if (coinCount<20){
        alert("You don't have enough coins to make call");
        return;
    } else{
        coinCount-=20;
        document.getElementById('coin-count').innerText= coinCount;
    }
});
document.getElementById('tap-call-8').addEventListener('click', function(event){
    if (coinCount<20){
        alert("You don't have enough coins to make call");
        return;
    } else{
        coinCount-=20;
        document.getElementById('coin-count').innerText= coinCount;
    }
});
document.getElementById('tap-call-9').addEventListener('click', function(event){
    if (coinCount<20){
        alert("You don't have enough coins to make call");
        return;
    } else{
        coinCount-=20;
        document.getElementById('coin-count').innerText= coinCount;
    }
});

let time= new Date().toLocaleDateString('en-us', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: true
});

document.getElementById('tap-heart-1').addEventListener('click', function(event){
    // console.log(new Date().toLocaleDateString('en-US', { 
    //     hour: '2-digit', 
    //     minute: '2-digit', 
    //     second: '2-digit',
    //     hour12: true
    // }));
    console.log(time);
    document.getElementById('test').innerText= time;
    // document.getElementById('test').innerText.style.whiteSpace='nowarap';
});