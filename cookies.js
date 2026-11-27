/* Informare cookie-uri: site-ul nu folosește cookie-uri de analiză sau marketing.
   Singura informație salvată este faptul că ai închis acest mesaj (localStorage "ck-ok"). */
(function(){
  try{ if(localStorage.getItem('ck-ok')) return; }catch(e){}
  var css='.ck{position:fixed;left:16px;right:16px;bottom:16px;z-index:90;max-width:560px;background:#131313;color:#f2f2f2;border:1px solid #2a2a2a;border-left:4px solid #FFD60A;padding:18px 20px;display:flex;gap:16px;align-items:center;box-shadow:0 12px 40px rgba(0,0,0,.5);font:400 15px/1.5 Barlow,system-ui,sans-serif}'+
    '.ck p{margin:0;color:#cfcfcf}.ck a{color:#FFD60A}'+
    '.ck button{flex:none;font:700 15px "Barlow Condensed",sans-serif;text-transform:uppercase;letter-spacing:.08em;background:#FFD60A;color:#0a0a0a;border:0;padding:12px 20px;cursor:pointer;clip-path:polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)}'+
    '.ck button:hover{background:#fff}'+
    '@media (max-width:860px){.ck.up{bottom:calc(84px + env(safe-area-inset-bottom))}}'+
    '@media (max-width:480px){.ck{flex-direction:column;align-items:stretch;left:10px;right:10px}}';
  var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
  var d=document.createElement('div');
  d.className='ck'+(document.querySelector('.mbar')?' up':'');
  d.setAttribute('role','region');d.setAttribute('aria-label','Informare cookie-uri');
  d.innerHTML='<p>Acest site nu folosește cookie-uri de analiză sau de publicitate. Salvăm doar faptul că ai închis acest mesaj. <a href="politica-cookies.html">Află mai multe</a></p><button type="button">Am înțeles</button>';
  document.body.appendChild(d);
  d.querySelector('button').onclick=function(){
    try{ localStorage.setItem('ck-ok','1'); }catch(e){}
    d.parentNode.removeChild(d);
  };
})();
