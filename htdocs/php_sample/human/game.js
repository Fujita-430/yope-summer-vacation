function init(){
    var randoms=[];
    var checker;
    var randomforever;
    randomforever = randoms;
    var res=[];
    var now = new Date();
    let secbefore = now.getTime(); 
    console.log(secbefore);
    var collectresult=[];
    var exception=[];
    var exception2=[];
    var collectdist=[];

function initcolorbutton(){
    let st = document.getElementById('randombutton').style;
    st.color="black";
    console.log("blacked");
}


function buttonclick(){
    function sleep(waitMsec) {
        var startMsec = new Date();
       
        // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
        while (new Date() - startMsec < waitMsec);
      }
    function GetNow(){
        var now2=new Date();
        let secafter = now2.getTime();
        console.log(secafter);
        let ans = secafter - secbefore;
        console.log("answertime=",ans);
        return ans;
    }
    function ShowTime(timed){
        var res=[];
        var str = `結果は、,${timed}`;
        document.getElementById('query').innerHTML = str;
        res.push(ans);
        return res;
    } 
    function colorbutton(){
        let st = document.getElementById('randombutton').style;
        st.color="blue";
        console.log("colored");
    }

    function calcdis(){
        let element = document.getElementById('randombutton');
        let style = window.getComputedStyle(element);
        let ma = style.getPropertyValue('margin');
        let matop = style.getPropertyValue('margin');
        newmargin = splitmoji(ma);
        var newnewma =[];
        newnewma = tigiri(newmargin);
        // console.log(newnewma);
        // var collectdist=[];
        ans = DifAndDist(newnewma);
        // console.log("ans=",ans);
        // console.log(collectdist);
        return ans;

    } 
    function splitmoji(moji){
        let splitmoji = moji.split(' ');
        return splitmoji;
    }
    function tigiri(moji){
        let tigitta =[];
        for(i=0;i<=3;i++){
        tigitta.push(Number(moji[i].substring(0,moji[i].length-2)));
        }
        return tigitta;
    }
    function DifAndDist(moji){
        var offset=[200,0,0,600];
        var dif =[];
        for(i=0;i<=3;i++){
            dif.push(moji[i]-offset[i]);                
            }
        console.log("dif=",dif);
        dist = Math.sqrt(dif[0]**2+dif[3]**2);
        return dist;
    }


    function checkandmove(rand,type){
        let st = document.getElementById('randombutton').style;
        if(type==0){
        let b=rand*120;
        let c=b/5;
        str2=`${b}`+'px';
        str3=`${c}`+'px';
        // console.log(str2);
        st.marginLeft = `${str2}`;
        st.marginTop = `${str3}`;
      }
      else if(type==1){
          let b=rand*100;
          let c=300-b/6;
          str2=`${b}`+'px';
          str3=`${c}`+'px';
          // console.log(str2);
          st.marginLeft = `${str2}`;
          st.marginTop = `${str3}`;
      }
      else{
        console.log("error");
      }

      }
    function makerandom(min,max){
        return Math.floor( Math.random() * (max - min + 1)) + min;
    }

console.log('wait...');
var waittime=1500;
sleep(waittime);
collectdist.push(calcdis());
console.log("cole=",collectdist);
ans= GetNow();//get time buttonclicked
if(exception&&exception2){
if(exception[exception.length-1]==exception[exception.length-2]&&exception2[exception2.length-1]==exception2[exception2.length-2]){
    console.log("exception detected");
}
else{
    // console.log("anspushed");
    collectresult.push(ans);//collect time
}
}
console.log(collectresult);
// ShowTime(ans);//show it

randoms=makerandom(1,10);//random 0~10
exception.push(randoms);
console.log(exception);
checker=makerandom(0,1);//random 0 or 1
exception2.push(checker);
console.log('randoms=',randoms,'checker=',checker);
console.log('excep1,2: ',exception,exception2)
checkandmove(randoms, checker); //
// console.log('moved');
return collectresult,collectdist;
}
function CollectScore(collectresult, collectdist){
    function ShowScore(score){
            var str = `結果は、${score}でした！`;
            document.getElementById('query').innerHTML = str;
    } 
    console.log("hi");
    console.log(collectresult);
    var score=[];
    for(i=0;i<collectresult.length-1;i++){
        var dif=collectresult[i+1]-collectresult[i]-1500;
        console.log("dif=",dif);
        score.push(dif);
        }
    ShowScore(score);
    console.log(score);
    collectdist.shift();
    collectdist.pop();
    collectdist.shift();
    collectdist.shift();
    console.log(collectdist);

}
initcolorbutton();
const el =document.getElementById('randombutton');
const el2=document.getElementById('fin');
el.addEventListener('click', buttonclick );
el2.addEventListener('click',function(){CollectScore(collectresult,collectdist);}, false);
}



window.addEventListener("load",init)
// window.addEventListener("load",init)