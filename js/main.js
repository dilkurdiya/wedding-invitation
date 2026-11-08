/* Replace bracketed values here when wedding details are confirmed. */
const WEDDING = {
  brideName: 'दिलीप'/*[BRIDE NAME]*/, groomName: 'मोनिका'/*[GROOM NAME]*/,
  introMessage: 'आप सपरिवार पधारकर, नवजीवन की इस मंगल बेला के साक्षी बनें।',
  familyNames: '[FAMILY / HOST NAMES]', familyMessage: 'आपका स्नेह और आशीर्वाद हमारे लिए अनमोल है।',
  venueName: 'बादली'/*उम्मेद भवन पैलेस*/, venueAddress: 'किदवई कॉलोनी, नागौर\nराजस्थान – ३४१००१'/*सर्किट हाउस रोड, जोधपुर\nराजस्थान – 342006'*/, /*venueNote: 'यह स्थान केवल वेबसाइट परीक्षण हेतु जोड़ा गया है।',*/
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=27.2115828%2C73.7449092'/*https://www.google.com/maps/dir/?api=1&destination=Umaid+Bhawan+Palace%2C+Jodhpur*/, rsvpUrl: '', whatsappNumber: '', contact: '[RSVP CONTACT / LINK TO BE ADDED]',
  closingMessage: 'We await your blessings as two hearts, two families, and many memories become one.',
  musicPath: 'assets/audio/background-music.mp3',
  scratchItems: [
    {label:'२९ नवंबर २०२६',value:'हल्दी समारोह',detail:''},
    {label:'२ दिसंबर २०२६',value:'शुभ विवाह',detail:''},
    {label:'३ दिसंबर २०२६',value:'स्वागत समारोह',detail:''}
  ],
  events:[
    {icon:'assets/images/event-haldi.png',name:'हल्दी समारोह',date:'२९ नवंबर २०२६'/*[तारीख तय होनी है]*/,time:'दोपहर २:०० बजे'/*[समय तय होना है]*/,venue:'बादली, नागौर, राजस्थान'/*[स्थान तय होना है]*/},
    {icon:'assets/images/event-mehndi.png',name:'मेहंदी समारोह',date:'३० नवंबर २०२६'/*[तारीख तय होनी है]*/,time:'दोपहर २:०० बजे'/*[समय तय होना है]*/,venue:'बादली, नागौर, राजस्थान'/*[स्थान तय होना है]*/},
    {icon:'assets/images/event-sangeet.png',name:'संगीत संध्या',date:'१ दिसंबर २०२६'/*[तारीख तय होनी है]*/,time:'रात ८:०० बजे'/*[समय तय होना है]*/,venue:'बादली, नागौर, राजस्थान'/*[स्थान तय होना है]*/},
	//{icon:'assets/images/event-sangeet.png',name:'बारात प्रस्थान — नागौर से चण्डावल के लिए',date:'१ दिसंबर २०२६'/*[तारीख तय होनी है]*/,time:'रात ८:०० बजे'/*[समय तय होना है]*/,venue:'बादली, नागौर, राजस्थान'/*[स्थान तय होना है]*/},
    {icon:'assets/images/event-wedding.png',name:'शुभ विवाह',date:'२ दिसंबर २०२६'/*[तारीख तय होनी है]*/,time:'[समय तय होना है]',venue:'चण्डावल, पाली, राजस्थान'/*[स्थान तय होना है]*/},
    {icon:'assets/images/event-reception.png',name:'स्वागत समारोह',date:'३ दिसंबर २०२६'/*[तारीख तय होनी है]*/,time:'रात ८:०० बजे'/*[समय तय होना है]*/,venue:'बादली, नागौर, राजस्थान'/*[स्थान तय होना है]*/}
  ],
  // Replace each empty src with the final photograph path when ready.
  // Keep the category value to retain the themed placeholder until then.
  galleryImages:[
    {src:'assets/images/gallery/Image_01.jpg',category:'palace',alt:'राजस्थानी महल की यादगार झलक',caption:'एक सुंदर शुरुआत'},
    {src:'assets/images/gallery/Image_02.jpg',category:'desert',alt:'थार की रंगीली परंपरा',caption:'परिवार रा संग'},
    {src:'assets/images/gallery/Image_03.jpg',category:'celebration',alt:'राजस्थानी शादी का उत्सव',caption:'खुशियां भरे पल'}
  ]
};
const $=(selector,root=document)=>root.querySelector(selector);
const status=$('#status'); const announce=message=>{status.textContent=message;};
document.title=`${WEDDING.brideName} & ${WEDDING.groomName} | Wedding Invitation`;
document.querySelectorAll('[data-config]').forEach(el=>{const value=WEDDING[el.dataset.config];if(value!==undefined)el.textContent=value;});
function configureLink(link,url,message){if(!link)return;if(url){link.href=url;return;}link.setAttribute('aria-disabled','true');link.addEventListener('click',event=>{event.preventDefault();announce(message);});}
configureLink($('#directionsLink'),WEDDING.mapsUrl,'Directions will be added soon.');

// WhatsApp RSVP: add the family contact number (country code, digits only) in WEDDING.whatsappNumber.
document.querySelectorAll('[data-rsvp-response]').forEach(button=>button.addEventListener('click',()=>{
  if(!WEDDING.whatsappNumber){announce('WhatsApp RSVP number will be added soon.');return;}
  const accepted=button.dataset.rsvpResponse==='yes';
  const response=accepted?'हाँ सा, जरूर पधारांगा।':'क्षमा करजो, आ पावांगा नहीं।';
  const message=`राम राम सा! ${response}\n\n${WEDDING.brideName} एवं ${WEDDING.groomName} री शादी में म्हारी तरफ सूं जवाब।`;
  window.open(`https://wa.me/${WEDDING.whatsappNumber}?text=${encodeURIComponent(message)}`,'_blank','noopener');
}));
$('#eventList').innerHTML=WEDDING.events.map(event=>`<article class="event-card"><div class="event-symbol" aria-hidden="true"><img src="${event.icon}" alt="" loading="lazy"></div><div class="event-details"><h3>${event.name}</h3><p><span class="event-meta-icon" aria-hidden="true">▦</span>${event.date}</p><p><span class="event-meta-icon" aria-hidden="true">◷</span>${event.time}</p><p><span class="event-meta-icon" aria-hidden="true">⌖</span>${event.venue}</p></div></article>`).join('');
$('#galleryGrid').innerHTML=WEDDING.galleryImages.map((photo,index)=>{
  const image=photo.src
    ? `<img class="gallery-photo" src="${photo.src}" alt="${photo.alt||`शादी की तस्वीर ${index+1}`}" loading="lazy">`
    : `<div class="gallery-placeholder scene-${photo.category||'palace'}" role="img" aria-label="${photo.alt||'तस्वीर जल्द जोड़ें'}"><span class="placeholder-scene-symbol" aria-hidden="true">${photo.category==='desert'?'❧':photo.category==='celebration'?'✺':'♜'}</span><span class="gallery-placeholder-label">फोटो यहाँ जोड़ें</span></div>`;
  return `<figure class="gallery-card"><div class="gallery-arch"><div class="gallery-arch-photo">${image}</div><img class="gallery-frame-overlay" src="assets/images/gallery/gallery-arch-frame.png" alt="" aria-hidden="true" loading="lazy"><figcaption><span aria-hidden="true">✿</span>${photo.caption||''}<span aria-hidden="true">✿</span></figcaption></div></figure>`;
}).join('');

class ScratchHeart{
  constructor(item,index){
    this.item=item;this.revealed=false;this.drawing=false;this.coverReady=false;this.opaquePixels=0;
    this.card=document.createElement('article');this.card.className='scratch-card';
    this.card.innerHTML=`<div class="heart-wrap">
      <img class="heart-base" src="assets/images/Rajasthani Heart Information Frame.png" alt="" aria-hidden="true">
      <div class="heart-content"><span>${item.label}</span><strong>${item.value}</strong><small>${item.detail}</small></div>
      <canvas class="scratch-canvas" aria-label="खोलने के लिए ${item.value} पर खुरचें" role="img"></canvas>
    </div><button class="reveal-button gold-button venue-directions" type="button"><span aria-hidden="true">✦</span> खोलें <span aria-hidden="true">↗</span></button>`;
    $('#scratchGrid').append(this.card);
    this.canvas=$('.scratch-canvas',this.card);
    this.ctx=this.canvas.getContext('2d',{willReadFrequently:true});
    this.coverImage=new Image();
    this.coverImage.onload=()=>{this.coverReady=true;this.drawCover();};
    this.coverImage.src='assets/images/Rajasthani Heart Scratch Cover Inner.png';
    this.card.querySelector('.reveal-button').addEventListener('click',()=>this.reveal());
    this.canvas.addEventListener('pointerdown',event=>{
      if(this.revealed||!this.coverReady)return;
      this.drawing=true;this.canvas.setPointerCapture(event.pointerId);this.erase(event);
    });
    this.canvas.addEventListener('pointermove',event=>{if(this.drawing)this.erase(event);});
    ['pointerup','pointercancel','lostpointercapture'].forEach(type=>
      this.canvas.addEventListener(type,()=>this.drawing=false)
    );
    new ResizeObserver(()=>this.drawCover()).observe(this.canvas);
  }
  drawCover(){
    if(this.revealed||!this.coverReady)return;
    const bounds=this.canvas.getBoundingClientRect();if(!bounds.width||!bounds.height)return;
    const ratio=Math.min(window.devicePixelRatio||1,2);
    this.canvas.width=Math.round(bounds.width*ratio);
    this.canvas.height=Math.round(bounds.height*ratio);
    this.ctx.setTransform(ratio,0,0,ratio,0,0);
    this.ctx.globalCompositeOperation='source-over';
    this.ctx.clearRect(0,0,bounds.width,bounds.height);
    // Both PNGs share the same 1312 × 1199 canvas; draw without cropping.
    this.ctx.drawImage(this.coverImage,0,0,bounds.width,bounds.height);
    const pixels=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height).data;
    this.opaquePixels=0;
    for(let i=3;i<pixels.length;i+=4)if(pixels[i]>30)this.opaquePixels++;
  }
  erase(event){
    const bounds=this.canvas.getBoundingClientRect();
    const x=event.clientX-bounds.left,y=event.clientY-bounds.top;
    const size=Math.max(12,bounds.width*.045);
    const brush=this.ctx.createRadialGradient(x,y,size*.12,x,y,size);
    brush.addColorStop(0,'rgba(0,0,0,1)');
    brush.addColorStop(.72,'rgba(0,0,0,.98)');
    brush.addColorStop(1,'rgba(0,0,0,0)');
    this.ctx.globalCompositeOperation='destination-out';
    this.ctx.fillStyle=brush;this.ctx.beginPath();this.ctx.arc(x,y,size,0,Math.PI*2);this.ctx.fill();
    if(this.clearedPercentage()>65)this.reveal();
  }
  clearedPercentage(){
    if(!this.opaquePixels)return 0;
    const data=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height).data;
    let remaining=0;
    for(let i=3;i<data.length;i+=4)if(data[i]>30)remaining++;
    return (this.opaquePixels-remaining)/this.opaquePixels*100;
  }
  reveal(){
    if(this.revealed)return;
    this.revealed=true;
    this.canvas.style.transition='opacity .25s ease';
    this.canvas.style.opacity='0';
    window.setTimeout(()=>this.canvas.remove(),270);
    announce(`${this.item.label} revealed.`);
  }
}
WEDDING.scratchItems.forEach((item,index)=>new ScratchHeart(item,index));

const intro=$('#intro'),enter=$('#enterButton'),skip=$('#skipButton'),replay=$('#replayButton');let introTimers=[];

/* Procedural royal fireworks: varied launches and layered champagne-gold bursts. */
const fireworksCanvas=$('#fireworksCanvas');
const fireworksContext=fireworksCanvas?.getContext('2d',{alpha:true,desynchronized:true});
let fireworksFrame=0,fireworksStartedAt=0,fireworksActive=false;
let fireworksRockets=[],fireworksSparks=[],fireworksLastFrame=0,fireworksStartTimer=0,fireworksEnding=false;
const MAX_FIREWORK_PARTICLES=2400;
const FIREWORKS_CURTAIN_CLEARANCE=2550;
function resizeFireworks(){
  if(!fireworksCanvas||!fireworksContext)return;
  const rect=fireworksCanvas.getBoundingClientRect();
  // A capped backing resolution avoids rendering four times the pixels on high-DPI displays.
  const deviceRatio=window.devicePixelRatio||1;
  const pixelBudget=2200000;
  const budgetRatio=Math.sqrt(pixelBudget/Math.max(1,rect.width*rect.height));
  const ratio=Math.max(1,Math.min(deviceRatio,1.5,budgetRatio));
  fireworksCanvas.width=Math.max(1,Math.round(rect.width*ratio));
  fireworksCanvas.height=Math.max(1,Math.round(rect.height*ratio));
  fireworksCanvas.style.width=`${rect.width}px`;fireworksCanvas.style.height=`${rect.height}px`;
  fireworksContext.setTransform(ratio,0,0,ratio,0,0);
}
function stopFireworks(){
  fireworksActive=false;
  fireworksEnding=false;
  if(fireworksStartTimer)window.clearTimeout(fireworksStartTimer);fireworksStartTimer=0;
  if(fireworksFrame)cancelAnimationFrame(fireworksFrame);
  fireworksFrame=0;fireworksRockets=[];fireworksSparks=[];fireworksLastFrame=0;
  if(fireworksContext&&fireworksCanvas)fireworksContext.clearRect(0,0,fireworksCanvas.width,fireworksCanvas.height);
}
function beginFireworksShutdown(){
  if(!fireworksActive||fireworksEnding)return;
  fireworksEnding=true;
  // Let the visible particles complete a short, natural fade during the existing intro dissolve.
  fireworksSparks.forEach(spark=>{spark.life=Math.min(spark.life,spark.age+800);});
}
function burstFirework(x,y,scale=1,kind='round',grand=false){
  // Fewer, longer-lived spokes read as distinct radial shells instead of glitter clouds.
  const intensity=grand?1.72:1;
  const baseCount=kind==='willow'?96:kind==='peony'?108:kind==='chrysanthemum'?116:kind==='crackle'?28:54;
  const count=Math.round(baseCount*scale*intensity);
  const rotation=Math.random()*Math.PI*2;
  for(let i=0;i<count;i++){
    const angle=rotation+(Math.PI*2*i/count)+(Math.random()-.5)*(grand?.075:.13);
    let speed;
    if(kind==='willow') speed=(1.65+Math.random()*2.55)*scale*(grand?1.58:1);
    else if(kind==='chrysanthemum') speed=(2.9+Math.random()*4.0)*scale*(grand?1.72:1);
    else if(kind==='crackle') speed=(1.7+Math.random()*3.0)*scale;
    else speed=(2.45+Math.random()*4.0)*scale*(grand?1.68:1);
    // Banded radial speeds produce visible petals and rings rather than a uniform particle cloud.
    if(kind==='chrysanthemum') speed*=i%4===0?1.22:i%4===1?.96:.78;
    if(kind==='peony') speed*=i%5===0?1.18:i%5===1?.92:i%5===2?.82:1;
    const life=(kind==='willow'?2550:kind==='crackle'?520:kind==='chrysanthemum'?1180:980)+Math.random()*(kind==='willow'?1550:kind==='crackle'?420:1050);
    const tone=Math.random();
    const color=grand?(tone<.48?'255,211,145':tone<.68?'232,151,75':tone<.94?'255,247,226':'220,145,128'):(tone<.60?'255,211,145':tone<.80?'232,151,75':tone<.92?'255,241,211':'220,145,128');
    fireworksSparks.push({x,y,px:x,py:y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,
      life,age:0,size:kind==='willow'?1.25+Math.random()*(grand?2.35:1.5):1.05+Math.random()*(grand?3.05:1.8),color,
      gravity:kind==='willow'?.078:kind==='crackle'?.04:kind==='chrysanthemum'?.024:.029,
      drag:kind==='willow'?.996:kind==='crackle'?.987:kind==='chrysanthemum'?.994:.992,
      drift:(Math.random()-.5)*.016,twinkle:Math.random()>.68,trail:grand||kind==='willow'||kind==='chrysanthemum',
      explosionTrail:kind!=='crackle',trailLength:kind==='willow'?4+Math.random()*5:grand?4.5+Math.random()*6:3+Math.random()*4});
  }
  // A visible ivory-gold ignition flash gives hero shells a decisive peak.
  if(grand){
    for(let i=0;i<42;i++){
      const a=Math.random()*Math.PI*2,r=2+Math.random()*17;
      fireworksSparks.push({x:x+Math.cos(a)*r,y:y+Math.sin(a)*r,px:x,py:y,
        vx:Math.cos(a)*(.65+Math.random()*.95),vy:Math.sin(a)*(.65+Math.random()*.95),
        life:300+Math.random()*260,age:0,size:1.35+Math.random()*1.55,color:'255,250,232',gravity:.012,drag:.975,twinkle:true,trail:true});
    }
  }
  for(let i=0;i<Math.round(16*scale*(grand?1.5:1));i++){
    const a=Math.random()*Math.PI*2,r=8+Math.random()*36*scale;
    fireworksSparks.push({x:x+Math.cos(a)*r,y:y+Math.sin(a)*r,px:x,py:y,
      vx:(Math.random()-.5)*.55,vy:(Math.random()-.5)*.55,life:500+Math.random()*560,age:0,
      size:.5+Math.random()*.75,color:Math.random()<.72?'255,232,177':Math.random()<.65?'232,151,75':'220,145,128',gravity:.01,drag:.98,twinkle:true,trail:false});
  }
  // Bound the live particle count so overlapping hero shells cannot overwhelm the renderer.
  if(fireworksSparks.length>MAX_FIREWORK_PARTICLES){
    fireworksSparks.splice(0,fireworksSparks.length-MAX_FIREWORK_PARTICLES);
  }
}
function createRoyalShow(width,height){
  // Three genuinely large, deliberately asymmetric hero shells; the central invitation corridor stays open.
  const targets=[
    {x:.16,y:.19,scale:2.48,kind:'chrysanthemum',grand:true},
    {x:.84,y:.155,scale:2.38,kind:'peony',grand:true},
    {x:.69,y:.075,scale:2.02,kind:'willow',grand:true},
    {x:.31,y:.13,scale:1.20,kind:'willow'},
    {x:.73,y:.265,scale:1.08,kind:'willow'},
    {x:.065,y:.34,scale:1.02,kind:'round'},
    {x:.94,y:.32,scale:1.00,kind:'peony'},
    {x:.245,y:.29,scale:.92,kind:'round'},
    {x:.79,y:.36,scale:.94,kind:'peony'},
    {x:.39,y:.20,scale:.72,kind:'crackle'},
    {x:.61,y:.25,scale:.74,kind:'crackle'},
    {x:.105,y:.09,scale:.68,kind:'round'},
    {x:.91,y:.105,scale:.66,kind:'round'},
    {x:.28,y:.39,scale:.74,kind:'willow'},
    {x:.76,y:.405,scale:.78,kind:'willow'},
    {x:.035,y:.235,scale:.60,kind:'crackle'},
    {x:.965,y:.225,scale:.62,kind:'crackle'},
    {x:.43,y:.355,scale:.56,kind:'round'},
    {x:.57,y:.315,scale:.58,kind:'round'}
  ];
  // The show begins only after the curtains finish moving; stagger launches across the remaining intro.
  const times=[0,140,280,420,560,700,840,980,1120,1260,1400,1540,1680,1820,1960,2100,2240,2380,2520];
  return targets.map((target,index)=>{
    const targetX=width*(target.x+(Math.random()-.5)*.035);
    const targetY=height*(target.y+(Math.random()-.5)*.025);
    const launchX=targetX+(targetX<width*.5?width*.035:-width*.035)+(Math.random()-.5)*width*.04;
    return {...target,at:times[index]+(Math.random()-.5)*150,x:targetX,y:targetY,
      startX:launchX,startY:height*(.82+Math.random()*.10),flight:850+Math.random()*360,
      burst:false,launched:false};
  }).sort((a,b)=>a.at-b.at);
}
function startFireworks(){
  stopFireworks();
  if(reducedMotion||!fireworksCanvas||!fireworksContext)return;
  resizeFireworks();
  fireworksStartedAt=performance.now();fireworksLastFrame=fireworksStartedAt;fireworksActive=true;
  fireworksRockets=createRoyalShow(fireworksCanvas.clientWidth,fireworksCanvas.clientHeight);
  const frame=now=>{
    if(!fireworksActive)return;
    const elapsed=now-fireworksStartedAt,dt=Math.min(34,now-fireworksLastFrame||16)/16;
    fireworksLastFrame=now;
    const w=fireworksCanvas.clientWidth,h=fireworksCanvas.clientHeight;
    fireworksContext.clearRect(0,0,w,h);
    fireworksRockets.forEach(rocket=>{
      if(elapsed<rocket.at||fireworksEnding&&!rocket.launched)return;
      rocket.launched=true;
      const flight=Math.min(1,(elapsed-rocket.at)/rocket.flight);
      const eased=1-Math.pow(1-flight,1.28);
      const x=rocket.startX+(rocket.x-rocket.startX)*eased;
      const y=rocket.startY+(rocket.y-rocket.startY)*eased;
      if(flight<1){
        // A compact comet trail follows the rocket's actual path instead of drawing a fixed vertical streak.
        const dx=rocket.x-rocket.startX,dy=rocket.y-rocket.startY;
        const distance=Math.hypot(dx,dy)||1,unitX=dx/distance,unitY=dy/distance;
        const trailLength=16+flight*18,tailX=x-unitX*trailLength,tailY=y-unitY*trailLength;
        const trail=fireworksContext.createLinearGradient(tailX,tailY,x,y);
        trail.addColorStop(0,'rgba(255,229,183,0)');
        trail.addColorStop(.58,'rgba(255,211,145,.38)');
        trail.addColorStop(1,'rgba(255,240,197,.96)');
        fireworksContext.beginPath();fireworksContext.moveTo(tailX,tailY);fireworksContext.lineTo(x,y);
        fireworksContext.strokeStyle=trail;fireworksContext.lineWidth=1.4+flight*.9;
        fireworksContext.stroke();
        const head=fireworksContext.createRadialGradient(x,y,0,x,y,6);
        head.addColorStop(0,'rgba(255,255,238,1)');
        head.addColorStop(.28,'rgba(255,240,197,.98)');
        head.addColorStop(1,'rgba(255,211,145,0)');
        fireworksContext.beginPath();fireworksContext.arc(x,y,6,0,Math.PI*2);
        fireworksContext.fillStyle=head;fireworksContext.fill();
        for(let sparkIndex=1;sparkIndex<3;sparkIndex++){
          const sparkDistance=trailLength*(.22+sparkIndex*.25);
          const sparkleX=x-unitX*sparkDistance,sparkleY=y-unitY*sparkDistance;
          fireworksContext.beginPath();fireworksContext.arc(sparkleX,sparkleY,.7,0,Math.PI*2);
          fireworksContext.fillStyle='rgba(255,232,177,.62)';fireworksContext.fill();
        }
        // Emit one restrained, short-lived ember at a time so the trail breaks apart naturally.
        if(fireworksSparks.length<MAX_FIREWORK_PARTICLES&&(!rocket.lastTrailAt||elapsed-rocket.lastTrailAt>70)){
          rocket.lastTrailAt=elapsed;
          const emberTone=Math.random();
          fireworksSparks.push({
            x:tailX+(Math.random()-.5)*3,y:tailY+(Math.random()-.5)*3,px:tailX,py:tailY,
            vx:-unitX*(.18+Math.random()*.38)+(Math.random()-.5)*.36,
            vy:-unitY*(.38+Math.random()*.55),life:190+Math.random()*230,age:0,
            size:.45+Math.random()*.72,color:emberTone<.62?'255,211,145':emberTone<.82?'232,151,75':emberTone<.94?'255,247,226':'220,145,128',
            gravity:.035,drag:.945,drift:(Math.random()-.5)*.02,twinkle:true,trail:false
          });
        }
      }else if(!rocket.burst){
        rocket.burst=true;burstFirework(rocket.x,rocket.y,rocket.scale,rocket.kind,!!rocket.grand);
        // Occasional secondary crackle, slightly offset and delayed.
        if(rocket.grand||[3,4,6,8,13,14].includes(fireworksRockets.indexOf(rocket))){
          const delay=190+Math.random()*190;
          fireworksRockets.push({at:rocket.at+rocket.flight+delay,x:rocket.x+(Math.random()-.5)*w*.045,
            y:rocket.y+(Math.random()-.5)*h*.06,scale:rocket.scale*(rocket.grand?.56:.34),kind:rocket.grand?'crackle':'round',grand:false,startX:rocket.x,startY:rocket.y,
            flight:1,burst:false,secondary:true});
        }
      }
    });
    fireworksSparks=fireworksSparks.filter(spark=>spark.age<spark.life);
    fireworksSparks.forEach(spark=>{
      spark.px=spark.x;spark.py=spark.y;
      spark.age+=16*dt;spark.x+=spark.vx*dt;spark.y+=spark.vy*dt;
      spark.vy+=spark.gravity*dt;spark.vx*=Math.pow(spark.drag,dt);
      spark.vx+=(spark.drift||0)*dt;
      const remaining=Math.max(0,1-spark.age/spark.life);
      const fade=remaining*remaining*(3-2*remaining);
      const shimmer=spark.twinkle?.72+.28*Math.abs(Math.sin(spark.age*.035)):1;
      if(spark.explosionTrail&&fade>.12){
        const tailX=spark.x-spark.vx*spark.trailLength,tailY=spark.y-spark.vy*spark.trailLength;
        fireworksContext.beginPath();fireworksContext.moveTo(tailX,tailY);fireworksContext.lineTo(spark.x,spark.y);
        fireworksContext.strokeStyle=`rgba(${spark.color},${fade*shimmer*.68})`;
        fireworksContext.lineWidth=Math.max(.65,spark.size*.52);fireworksContext.stroke();
      }else if(spark.trail&&fade>.12){
        fireworksContext.beginPath();fireworksContext.moveTo(spark.px,spark.py);fireworksContext.lineTo(spark.x,spark.y);
        fireworksContext.strokeStyle=`rgba(${spark.color},${fade*shimmer*.78})`;
        fireworksContext.lineWidth=Math.max(.55,spark.size*.62);fireworksContext.stroke();
      }
      fireworksContext.beginPath();fireworksContext.arc(spark.x,spark.y,spark.size,0,Math.PI*2);
      fireworksContext.fillStyle=`rgba(${spark.color},${fade*shimmer})`;
      fireworksContext.fill();
    });
    const showFinished=fireworksEnding
      ? !fireworksRockets.some(rocket=>rocket.launched&&!rocket.burst)&&fireworksSparks.length===0
      : fireworksRockets.every(rocket=>rocket.burst)&&fireworksSparks.length===0;
    if(elapsed<7600||!showFinished){fireworksFrame=requestAnimationFrame(frame);}
    else{stopFireworks();}
  };
  fireworksFrame=requestAnimationFrame(frame);
}
function scheduleFireworksAfterCurtains(){
  stopFireworks();
  if(reducedMotion||!fireworksCanvas||!fireworksContext)return;
  // Let the compositor complete the curtain transform before starting the particle workload.
  fireworksStartTimer=window.setTimeout(()=>{fireworksStartTimer=0;startFireworks();},FIREWORKS_CURTAIN_CLEARANCE);
}
document.addEventListener('visibilitychange',()=>{
  // Browsers throttle requestAnimationFrame in hidden tabs; reset the frame clock on return.
  if(!document.hidden&&fireworksActive)fireworksLastFrame=performance.now();
});
window.addEventListener('resize',()=>{if(fireworksActive)resizeFireworks();});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let introScrollLocked=false;
const introScrollKeys=new Set([' ','PageUp','PageDown','Home','End','ArrowUp','ArrowDown']);
function preventIntroScroll(event){
  if(!introScrollLocked)return;
  if(event.type!=='keydown'||introScrollKeys.has(event.key))event.preventDefault();
}
function keepIntroAtTop(){if(introScrollLocked)window.scrollTo(0,0);}
function lockIntroScroll(){
  introScrollLocked=true;
  document.documentElement.style.overflow='hidden';
  document.body.style.overflow='hidden';
  window.scrollTo(0,0);
}
function unlockIntroScroll(){
  window.scrollTo(0,0);
  introScrollLocked=false;
  document.documentElement.style.overflow='';
  document.body.style.overflow='';
}
document.addEventListener('wheel',preventIntroScroll,{passive:false});
document.addEventListener('touchmove',preventIntroScroll,{passive:false});
document.addEventListener('keydown',preventIntroScroll,{passive:false});
window.addEventListener('scroll',keepIntroAtTop,{passive:true});
function clearIntroTimers(){introTimers.forEach(window.clearTimeout);introTimers=[];}
function later(callback,delay){introTimers.push(window.setTimeout(callback,delay));}
function finishIntro(){clearIntroTimers();stopFireworks();intro.classList.add('hidden');unlockIntroScroll();$('#mainInvitation').focus({preventScroll:true});announce('Main invitation revealed.');}
function startIntro(){
  if(intro.classList.contains('playing')||introTimers.length)return;
  clearIntroTimers();intro.className='intro playing';lockIntroScroll();scheduleFireworksAfterCurtains();
  if(reducedMotion){intro.classList.add('playing','open','scroll-ready','unfurl','names','sweep','transitioning');later(finishIntro,100);return;}
  later(()=>intro.classList.add('open'),1450);
  later(()=>intro.classList.add('scroll-ready'),2650);
  later(()=>intro.classList.add('unfurl'),3000);
  later(()=>intro.classList.add('names'),4400);
  later(()=>intro.classList.add('sweep'),5000);
  later(()=>intro.classList.add('scroll-exit'),5750);
  later(()=>{intro.classList.add('scroll-gone','transitioning');beginFireworksShutdown();},6250);
  later(finishIntro,7150);
}
enter.addEventListener('click',startIntro);skip.addEventListener('click',finishIntro);replay.addEventListener('click',()=>{if(introTimers.length)return;intro.className='intro';startIntro();});
const audio=$('#backgroundMusic'),music=$('#musicButton');audio.src=WEDDING.musicPath;
let musicManuallyToggled=false;
const syncMusicButton=()=>{const playing=!audio.paused;music.classList.toggle('is-playing',playing);music.setAttribute('aria-label',playing?'Pause background music':'Play background music');music.setAttribute('aria-pressed',String(playing));};
music.addEventListener('click',async()=>{musicManuallyToggled=true;try{if(audio.paused){await audio.play();}else{audio.pause();}syncMusicButton();}catch{announce('Background music is not available yet.');}});
audio.addEventListener('play',syncMusicButton);audio.addEventListener('pause',syncMusicButton);
audio.addEventListener('error',()=>music.classList.add('unavailable'));
// Try autoplay on initial page load. If the browser blocks it, retry after the visitor enters.
audio.play().then(syncMusicButton).catch(()=>{});
enter.addEventListener('click',()=>{if(!musicManuallyToggled&&audio.paused){audio.play().then(syncMusicButton).catch(()=>{});}});
if(reducedMotion)skip.textContent='Continue to invitation';
lockIntroScroll();
