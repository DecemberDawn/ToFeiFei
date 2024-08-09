/**
 * 打字效果 byaei
 */
 function typewrite()
 {
     let str="<To Fei Fei:哈哈，那天说带你去看星空，这个星空可以吗？这是我的星空。在这片星空下，时间仿佛停止了脚步，你仿佛能触碰到那些遥远的星辰，感受到宇宙的呼吸，仿佛所有的梦想都藏在这无垠的星空中，只等着你去发现，去追寻。小时候总喜欢星空，而现在我只想珍惜我眼前的星空。 -- Da Da Said!<";//利用<作为换行符 -作为空格
     let strp="";
     let i=0;
     function print1()
     {
         if(str[i]=='<')
         {
             document.getElementById("box1").innerHTML=strp+"<br><br>"+'|';
             strp+="<br><br>";
         }
         else
         if(str[i]=='-')
         {
             document.getElementById("box1").innerHTML=strp+'&nbsp&nbsp&nbsp';
             strp+="&nbsp&nbsp&nbsp";
         }
         else
         {
             strp+=str[i];
             document.getElementById("box1").innerHTML=strp+'|';
         }
         i++;
     }
     function print2()
     {
         setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'&nbsp';},100);
         setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'|';},630);
     }
     let printid=setInterval(() => {
         print1();
         if(i==str.length)
         clearInterval(printid);
     },90);  
     setTimeout(() => {
         id=setInterval(print2,1060);//注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
     },(str.length-1)*90);
     //0.53秒闪一次
 }
 



let clickb=false;//判断播放按钮是否已经按过了，如果已经按过了才可以执行键盘事件
 
 function funclick()
 {
     let x = document.createElement("audio");
     x.setAttribute("src", "./video/55.mp3");
     x.setAttribute("autoplay","autoplay");
     let yinyan=document.getElementById("yinyan");
     yinyan.setAttribute("style","opacity:0");
     setTimeout(function(){
         document.getElementById("fronclick").style.zIndex=-300;
         document.getElementById("box").style.opacity=1;
     },1500);//让播放按钮消失了
     //yinyan.style.opacity=0;
     clickb=true;
 }


 
 
 let k={
     a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25,
     A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25
 } 
 let a=[
     {name:"A",yin:'FH1', str:"<br><br><br>小时候，我总喜欢趴到屋顶上，独自一人，听着那来自星空的旋律。现在，正在等待这来自星空的旋律。<br><br>还有....,其他的键<br><br>那些都是关于你的声音。以及，找一下声音里关于你的线索。"},
     {name:"B" ,yin:'FH2', str:"<br><br>星空如一片深邃的蓝色海洋，<br><br>闪烁的星辰宛如无数漂浮的珍珠，<br><br>静静地讲述着宇宙间的古老故事。"},
     {name:"C" ,yin:'FH3', str:"<br><br><br><br>我总是喜欢思考一些无关紧要的事<br>好比宇宙，太空和歌者<br>想着如何<br><br>FLY ME TO THE MOON"},
     {name:"D" ,yin:'FH4', str:"<br><br><br><br>去月球，<br><br>既是遥不可及<br><br>但是又唾手可得。"},
     {name:"E" ,yin:'FH5', str:"<br><br><br><br>但是吧，<br><br>月球只能看到星星，<br><br>最美丽的夜空还得是在这里。"},
     {name:"F" ,yin:'FH6', str:"<br><br><br><br>因为我们都是星星啊<br><br>然而<br><br>还需要月光才行！"},
     {name:"G" ,yin:'FHH2', str:"<br><br>我想试试在夜空里找找月亮吧<br><br>星星点点<br><br>还是得跟月亮一起才能叫做最美的夜空。"},
     {name:"H" ,yin:'FHH2', str:"<br><br>没有月亮只有星空<br></br>感觉星辰都是暗淡的。"},
     {name:"I" ,yin:'FHH2', str:"<br><br><br>而它也成为了你的装饰，<br><br>让它成为你的一部分。为那些迷途的人找到归家的路。"},
     {name:"J" ,yin:'FHH1', str:"<br><br><br><br>星尘轻盈地散落在宇宙的每一个角落，<br><br>如同爱意在无形中弥漫，给人一种温暖的慰藉。<br><br>让人不由自主地陷入对无限可能的美好幻想。"},
     {name:"K" ,yin:'FH6', str:"<br><br>想让你体会这繁华的夜空中，<br><br>感受宇宙的美妙。<br><br>那种梦幻，不真切，却令人迷醉的心动。"},
     {name:"L" ,yin:'FH5', str:"<br><br><br><br>直到傍晚时分<br><br>星星点点。"},
     {name:"M" ,yin:'FHH4', str:"<br><br><br><br>当你仰望星空，<br></br>仿佛能感受到无尽的时光流转，<br><br>那些远古的星光在宇宙的深处缓缓游移，映照出人们的梦境与希望。"},
     {name:"N" ,yin:'FH5', str:"<br><br><br><br>粉色的天空中<br><br>找见了那颗最亮的北极星<br><br>它能指引我们回家的路。"},
     {name:"O" ,yin:'FH6', str:"<br><br><br><br>我们或者在月光下闲游，<br><br>或者在湖边下谈心，<br><br>感觉时间匆匆。"},
     {name:"P" ,yin:'FH5', str:"<br><br><br><br>青空下，棕榈树在摇曳<br><br>鸭妈妈第一次教小鸭鸭下水，<br><br>我们站着不说话，就可感受温暖。"},
     {name:"Q" ,yin:'FHH3', str:"<br><br><br><br>星尘在空中舞动，<br><br>如同一场轻盈的梦幻舞会，<br><br>闪烁着温柔的光芒，轻轻抚慰着夜晚的宁静。"},
     {name:"R" ,yin:'FH7', str:"<br><br><br><br>星空如梦，星尘如诗，<br><br>漫天闪烁，轻舞在无尽的夜色中，<br><br>勾勒出最美的你。"},
     {name:"S" ,yin:'FH7', str:"<br><br>想带你去看银河，<br><br>把猎户座清晰地指出来！<br></>"},
     {name:"T" ,yin:'FH7',str:"<br><br>只有月亮的话<br><br>那天空是多么地孤寂。<br><br>最美的夜空应该月满繁星。"},
     {name:"U" ,yin:'FH1', str:"<br><br><br>若逢冬月初霁，微雨后满月当空<br>下面平铺着皓影，上面流转着亮银，<br><br>而身穿蓝色连衣裙，<br><br>月色和雨夜之间 ，是第三种绝色 ，<br><br>与我而言， 日月星辉之中，你是第四种难得"},
     {name:"V" ,yin:'FHH4', str:"<br><br><br><br>每一颗星星都像是一个未曾讲述的故事，<br><br>编织在宇宙的广袤画布上。"},
     {name:"W" ,yin:'FHH5', str:"<br><br><br><br>星尘轻盈地漂浮在宇宙的深处，<br><br>如同精灵的舞步，时而柔和，时而璀璨。<br><br>它们是星星破碎的梦，带着古老的光芒，在夜空中悠然飘荡。"},
     {name:"X" ,yin:'FHH6', str:"<br><br><br><br>每一颗星星都仿佛在低语，诉说着遥远的故事与未解的秘密<br><br>那些星辰像是夜空中的眼睛，默默注视着尘世间的每一个瞬间。<br><br>岁月如故。"},
     {name:"Y" ,yin:'FH7', str:"<br><br><br><br>月遇星辰，花遇和风，<br><br>你正是这星辰。"},
     {name:"Z" ,yin:'FL7', str:"<br><br><br><br>在这片星空下，时间仿佛停止了脚步，你仿佛能触碰到那些遥远的星辰，感受到宇宙的呼吸<br><br>仿佛所有的梦想都藏在这无垠的星空中，只等着你去发现，去追寻。"}
 ];
 let b=["linear-gradient(25deg, #c3786f, #a99188, #84a7a1, #3bbcbb)",
 "linear-gradient(25deg, #cb5860, #b3876f, #90ad7f, #4acf8f)",
 "linear-gradient(25deg, #e473a3, #d294aa, #bbb0b1, #9ccab8)",
 "linear-gradient(25deg, #452089, #505ca1, #4b94b8, #24cdcf)",
 "linear-gradient(25deg, #04245a, #652959, #a62557, #e60b55)",
 "linear-gradient(25deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)",
 "linear-gradient(25deg, #3e1c59, #53646f, #53ad83, #27fb95)",
 "linear-gradient(25deg, #590146, #634264, #647184, #56a1a5)",
 "linear-gradient(25deg, #694afc, #a26dfd, #d091fe, #f9b7fe)",
 "linear-gradient(25deg, #412285, #4c599c, #488eb3, #29c4c9)",
 "linear-gradient(25deg, #003876, #1f6889, #239b9a, #00d1ab)",
 "linear-gradient(25deg, #db6679, #b9907b, #8bb17e, #29ce80)",
 "linear-gradient(25deg, #060d37, #174161, #1d7a8d, #12b8bc)",
 "linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)",
 "linear-gradient(25deg, #0f4660, #6b486c, #ac3f78, #ec1384)",
 "linear-gradient(25deg, #094189, #7f566b, #bd6d49, #f78707)",
 "linear-gradient(43deg, #00a08c, #7db19d, #c1c0af, #ffcec1)",
 "linear-gradient(35deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)",
 "linear-gradient(25deg, #d03e9b, #d2788a, #cfa676, #c6d05c)",
 "linear-gradient(25deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)",
 "linear-gradient(25deg, #e45579, #c59280, #96bf87, #19e88e)",
 "linear-gradient(25deg, #d575db, #b29db2, #83bb87, #00d456)",
 "linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)",
 "linear-gradient(25deg, #fd390b, #e1765b, #b19fa1, #1ec1e9)",
 "linear-gradient(25deg, #7b7bd4, #759cbc, #62bca2, #30db85)",
 "linear-gradient(25deg, #d6007b, #b8509e, #8a71c2, #0b8be8)"];
 let s='a';
 let records=0;//记录我已经输入过了，防止出现多个打字function byaei
 

 /*键盘事件*/
 function fl(e)
 {
     if(clickb==true)
     {
        let key =e.key;
     if((key<='z'&&key>='a')||(key<='Z'&&key>='A'))//避免大小写的错误
     {
         let p=a[k[key]];
         s=s+p.name;
         let x = document.createElement("audio");
         x.setAttribute("src", `./video/${p.yin}.mp3`);
         x.setAttribute("autoplay","autoplay");
         let box=document.getElementById("box");
         let boxl=document.getElementById("boxl");
         let boxr=document.getElementById("boxr");
         let boxup=document.getElementById("boxup");
         let bac=document.getElementById("bac");
         bac.style.opacity=0;
         box.style.transition="0.5s";
         box.style.opacity=0;
         boxup.style.opacity=0;
         setTimeout(function()
         {
         boxl.innerHTML=`${p.name}`;
         boxr.innerHTML=`${p.str}`;
         console.log(b[k[key]]);
         bac.style.background=`${b[k[key]]}`;
         box.style.opacity=1;
         boxup.style.opacity=1;  
         bac.style.opacity=1;
         },500);
         if(s.indexOf("UROPLNIGHTSKY")!=-1&&records==0)
         {
             setTimeout(function()
             {
                 records=1;
                 flag = 1;
                 bac.style.opacity=0;
                 box.style.opacity=0;
                 boxup.style.opacity=0;  
                 bac.style.opacity=0;

                 var videoSource = './video/a01.mp4';
                 var videoElement = document.getElementById('myVideo');
                 videoElement.src = videoSource;
                 videoElement.load();
                 videoElement.play();

                 let box1=document.getElementById("box1");
                 videoElement.onended = function() {
                    box1.style.zIndex = 7;
                    box1.style.opacity = 1;
                    let music=document.createElement("audio");
                 
                    music.setAttribute("src", `./video/a01.mp4`);
                    music.setAttribute("autoplay","autoplay");
                    music.setAttribute("loop","loop");
                    setTimeout(typewrite,3000);//进行打字

                };

             },750);
             
         }
     }
     }  
 }
 
 
 window.onkeyup=fl;