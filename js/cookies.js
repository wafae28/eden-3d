const GTM_ID = "GTM-K8JSNMB5";
const GA_ID = "G-S2HDQ5TJ9K";

function loadGoogleTags() {
  if (window.__googleLoaded) return;
  window.__googleLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };

  // GTM
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  const gtmScript = document.createElement("script");
  gtmScript.async = true;
  gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;
  document.head.appendChild(gtmScript);

  // gtag
  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(gtagScript);

  gtag("js", new Date());
  gtag("config", GA_ID);
}

function acceptCookies() {
  localStorage.setItem("eden3d_cookie_consent", "accepted");
  removeBanner();
  loadGoogleTags();
}

function rejectCookies() {
  localStorage.setItem("eden3d_cookie_consent", "rejected");
  removeBanner();
}

function removeBanner() {
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.remove();
}

function createBanner() {
  const isBlog = window.location.pathname.includes("/blogues/");
  const link = isBlog ? "../privacy.html" : "privacy.html";

  const banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.className = "cookie-banner";

  banner.innerHTML = `
    <div class="cookie-content">
      <p>
        Ce site utilise des cookies analytiques pour améliorer votre expérience.
        <a href="${link}">Politique de confidentialité</a>
      </p>
      <div class="cookie-buttons">
        <button onclick="acceptCookies()">Accepter</button>
        <button onclick="rejectCookies()">Refuser</button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);
}

window.addEventListener("load", function () {
  const consent = localStorage.getItem("eden3d_cookie_consent");

  if (consent === "accepted") {
    loadGoogleTags();
  } else if (!consent) {
    createBanner();
  }
});