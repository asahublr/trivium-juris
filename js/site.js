(function(){
  var mb=document.getElementById('mb'),ln=document.getElementById('links');
  if(mb&&ln){
    mb.onclick=function(){var o=ln.classList.toggle('open');mb.setAttribute('aria-expanded',o);};
    ln.onclick=function(){ln.classList.remove('open');mb.setAttribute('aria-expanded',false);};
  }
  var d=document.getElementById('disc'),k='tj_disc';
  if(d){
    try{ if(!localStorage.getItem(k)) d.classList.add('show'); }catch(e){ d.classList.add('show'); }
    document.getElementById('ok').onclick=function(){
      d.classList.remove('show');
      try{localStorage.setItem(k,'1')}catch(e){}
    };
  }
  // Draft: the enquiry form is not connected to a service yet.
  var cf=document.getElementById('cf'),st=document.getElementById('st');
  if(cf){cf.addEventListener('submit',function(e){e.preventDefault();if(st)st.hidden=false;});}
})();
