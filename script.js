// Vorab-Paket aus URL vorauswählen (z. B. termin.html?paket=vorab-basis)
(function () {
  const params = new URLSearchParams(window.location.search);
  const paket = params.get('paket');
  const mapping = {
    'vorab-basis': 'Vorab-Check Basis (249 €)',
    'vorab-premium': 'Vorab-Check Premium (349 €)',
    'vorab-komplett': 'Vorab-Check Komplett (399 €)',
    'basis': 'Autokaufberatung',
    'premium': 'Autokaufberatung',
    'fahrzeugsuche': 'Komplett-Paket Fahrzeugsuche (449 €)'
  };
  const leistung = document.getElementById('leistung');
  if (leistung && paket && mapping[paket]) {
    leistung.value = mapping[paket];
  }
})();

// Smooth scroll for anchor links (fallback if CSS scroll-behavior not enough)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const id = this.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
