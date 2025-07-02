// Fade‑in animation
const io=new IntersectionObserver((e)=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target);}})},{threshold:.2});
document.querySelectorAll('.fade-in').forEach(el=>io.observe(el));

// Placeholder for agent widget
function loadAgentWidget(){
  /* Replace with actual chat/agent snippet */
  console.log("Agent widget placeholder loaded.");
}
if(document.getElementById('widgetHook')) loadAgentWidget();