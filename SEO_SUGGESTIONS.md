# Suggestions SEO – Eden 3D Québec

Ce document résume les améliorations SEO déjà appliquées et des recommandations supplémentaires pour le référencement local au Québec.

---

## 1. Déjà mis en place

### HTML et structure
- **Langue** : `lang="fr"` sur toutes les pages.
- **Titres** : Chaque page a un titre unique avec mot-clé + « Eden 3D Québec » (ex. « Contact – Eden 3D Québec | Soumission aménagement extérieur Brossard, Montréal »).
- **Meta description et keywords** : Remplis sur toutes les pages, en français, avec termes locaux (Québec, Montréal, Rive-Sud, Brossard, etc.).
- **Hiérarchie des titres** : Une seule balise **h1** par page (titre principal), puis **h2** pour les sections, **h3** pour les sous-sections. Les anciens `<h5>` / `<h1>` décoratifs ont été convertis en `<p class="h5">` et `<h2 class="h1">` pour garder le style sans casser la hiérarchie.

### Sémantique et accessibilité
- **header** : Bandeau avec logo et navigation.
- **nav** : avec `aria-label="Navigation principale"`.
- **main** : contenu principal.
- **section** : blocs de contenu avec `aria-labelledby` relié au titre de section.
- **footer** : pied de page.
- **article** : déjà utilisé sur les cartes du blog.

### Images
- **Alt en français** : Toutes les images ont un `alt` descriptif en français (ex. « Pavillon de jardin (pool house) – aménagement extérieur Eden 3D Québec »).
- **Lazy loading** : `loading="lazy"` sur les images hors hero / carousel pour améliorer le temps de chargement.
- **Dimensions** : `width` et `height` ajoutés où pertinent pour limiter les décalages de mise en page (CLS).

### SEO local Québec
- **Schema.org LocalBusiness** (JSON-LD) sur **index.html** et **contact.html** : nom, téléphone, courriel, adresse (8405 Place St Charles, Brossard), heures d’ouverture, zone desservie (Montréal, Rive-Sud, Laval, etc.).

### Liens internes
- Liens « En savoir plus » du processus vers les articles du blog (blog5 à blog8).
- Liens des cartes « Nos Services » (index) vers **team.html** avec ancres (`#plan-amenagement`, `#stationnement-pave`, etc.).
- Breadcrumbs et liens du footer pointent vers **index.html** (plus `#`).

---

## 2. Recommandations supplémentaires

### Liens internes *(appliqué)*
- **contact.html** : paragraphe avec liens vers Nos services (team.html), Notre processus (processus.html) et Réalisations (realisation.html).
- **Blog** (blog1–blog8) : en fin d’article, proposer 2–3 liens vers d’autres articles ou vers **contact.html** (« Demander une soumission »).
- **réalisation.html** : liens vers processus (« Comment nous travaillons ») et contact (« Demander une soumission gratuite »).

### Structure des titres (à garder en tête)
- **Une seule h1** par page (ex. « Contact », « Nos Réalisations », « Blog et actualités »).
- **h2** pour les grands blocs (À propos de nous, Nos Services, Notre processus, etc.).
- **h3** pour les sous-titres (étapes du processus, noms des services, titres d’articles).

### Mots-clés à utiliser (contenu et maillage)
- **Géographiques** : Québec, Montréal, Rive-Sud, Brossard, Longueuil, Laval, Grand Montréal, Montérégie.
- **Services** : aménagement extérieur, pavé uni, terrasse, patio composite, pool house, pavillon jardin, clôture, cuisine extérieure, conception 3D, visualisation 3D, paysagiste.
- **Intentions** : soumission gratuite, devis aménagement, projet clé en main, certification Techo-Pro, normes BNQ.

### Performance (chargement)
- **Déjà en place** : `loading="lazy"` sur les images, `preconnect` pour Google Fonts.
- **À envisager** :
  - Minifier **css/style.css** et **js/main.js** en production.
  - Servir les images en **WebP** (déjà le cas) et définir des **srcset** pour le responsive si besoin.
  - Si le site est hébergé avec HTTPS, activer la **compression GZIP/Brotli** côté serveur.

### Fichiers d’images – noms *(appliqué)*
- Les noms actuels (**img1.webp**, **1.webp**, **2.webp**, etc.) sont peu parlants pour le SEO. À long terme, renommer par thème (ex. **realisation-pave-uni-1.webp**, **processus-consultation-terrain.webp**) en mettant à jour les références dans le HTML.

---

## 3. Vérifications rapides

- [ ] **Google Search Console** : ajouter la propriété et soumettre le sitemap.
- [ ] **Google Business Profile** : vérifier que l’adresse, le téléphone et les horaires correspondent au schema et au site.
- [ ] **URL du site** : dans le JSON-LD, remplacer `https://www.eden3dquebec.com` par l’URL réelle du site si différente.

---

*Document généré dans le cadre des améliorations SEO du site Eden 3D Québec.*
