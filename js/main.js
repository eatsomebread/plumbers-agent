// Scroll-fade
const io=new IntersectionObserver((a)=>{a.forEach(b=>{if(b.isIntersecting){b.target.classList.add('show');io.unobserve(b.target);}})},{threshold:.15});
document.querySelectorAll('.fade').forEach(el=>io.observe(el));

// Placeholder for widget
function loadBookingWidget(){
  /* Replace with your live booking widget snippet here */
  console.log("Booking widget placeholder loaded.");
}
if(document.getElementById('bookingWidget')) loadBookingWidget();
