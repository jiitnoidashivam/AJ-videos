const samples=['Amber orbit','Blue horizon','Distant worlds'].map((name,i)=>({id:'shot'+i,name,type:'image',url:'art/shot'+i+'.jpg',duration:5}));
const trackNames=['T1 · Titles','V2 · Video','V1 · Video','A1 · Voice','A2 · Music'];
const layouts={'16:9':[16,9],'9:16':[9,16],'1:1':[1,1],'4:5':[4,5]};
const fps=30, snap=v=>Math.round(v*fps)/fps, uid=()=>crypto.randomUUID();
const tc=s=>{let f=Math.max(0,Math.round(s*fps));return [Math.floor(f/108000),Math.floor(f/1800)%60,Math.floor(f/30)%60,f%30].map(n=>String(n).padStart(2,'0')).join(':')};
function clip(asset,start,track,dur){return {id:uid(),asset,start,track,dur,offset:0,speed:1,scale:100,endScale:100,x:50,y:50,opacity:100,volume:100,brightness:100,contrast:100,saturation:100,hue:0,blur:0,fade:0,transition:'Fade',blend:'source-over',voice:false,duck:false,animation:'Static',size:10,color:'#ffffff',text:'',key:false,flip:false};}
function demo(){let title=clip('',0,0,5);Object.assign(title,{text:'Orbital Studies',size:9,x:34,y:68,animation:'Cinematic'});return {version:1,name:'Orbital Studies',ratio:'16:9',assets:samples.map(a=>({...a})),clips:[...samples.map((a,i)=>({...clip(a.id,i*5,2,5),endScale:109})),title]};}
