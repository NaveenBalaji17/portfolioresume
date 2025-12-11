document.addEventListener('DOMContentLoaded', ()=>{
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const shown = nav.style.display === 'flex' || nav.style.display === 'block';
      nav.style.display = shown ? 'none' : 'flex';
    });
  }

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name');
      const email = data.get('email');
      const message = data.get('message');
      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent(message + '\n\n' + email);
      window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
    });
  }
});
