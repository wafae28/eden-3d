# Renommage des images (SEO – noms descriptifs en français) ✓ Appliqué

Voici le mapping **ancien nom → nouveau nom** qui a été appliqué. Les fichiers dans `img/` ont été renommés et toutes les références (HTML, JS) ont été mises à jour.  
Les noms génériques (chiffres, img1, blog1, etc.) sont remplacés par des noms descriptifs basés sur le contenu et le contexte des pages.

---

## Fichiers à renommer

| Ancien nom      | Nouveau nom (français, SEO)              | Contexte / contenu |
|-----------------|------------------------------------------|---------------------|
| **1.webp**      | processus-consultation-terrain.webp      | Article blog processus étape 1 – consultation et analyse du terrain |
| **2.webp**      | processus-conception-3d.webp             | Article blog processus étape 2 – conception 3D réaliste |
| **3.webp**      | processus-planification-budget.webp      | Article blog processus étape 3 – planification et budget |
| **4.webp**      | processus-realisation-cle-en-main.webp   | Article blog processus étape 4 – réalisation clé en main |
| **img1.webp**   | realisation-amenagement-exterieur-1.webp | Galerie réalisations – projet 1 |
| **img3.webp**   | realisation-amenagement-exterieur-2.webp | Galerie réalisations – projet 2 |
| **img4.webp**   | realisation-amenagement-exterieur-3.webp | Galerie réalisations – projet 3 |
| **img5.webp**   | realisation-amenagement-exterieur-4.webp | Galerie réalisations – projet 4 |
| **img6.webp**   | realisation-amenagement-exterieur-5.webp | Galerie réalisations – projet 5 |
| **img7.webp**   | realisation-amenagement-exterieur-6.webp | Galerie réalisations – projet 6 |
| **img8.webp**   | realisation-amenagement-exterieur-7.webp | Galerie réalisations – projet 7 |
| **blog1.webp**  | blog-piscine-terrasse-amenagement.webp   | Article « Piscine et terrasse » – aménagement extérieur |
| **blog2.webp**  | blog-plan-amenagement-2d.webp            | Article « Plan d’aménagement 2D » – maison et cour |
| **blog3.webp**  | blog-rendu-3d-cour.webp                  | Article « Rendu 3D cour » – design et aménagement |
| **blog4.webp**  | blog-pavillon-cabanon-moderne.webp        | Article « Pavillon et cabanon » – structure jardin |
| **main2.webp**  | hero-amenagement-piscine-terrasse.webp   | Bannière hero accueil – aménagement piscine et terrasse |
| **about.webp**  | about-pavillon-jardin.webp               | Section À propos – pavillon de jardin (pool house) |
| **certif.webp** | certification-techo-bloc.webp            | Badge certification Techo-Bloc |
| **processus1.webp** | processus-icone-consultation-terrain.webp | Icône étape 1 – consultation terrain |
| **processus2.webp** | processus-icone-conception-3d.webp        | Icône étape 2 – conception 3D |
| **processus3.webp** | processus-icone-planification-budget.webp | Icône étape 3 – planification budget |
| **processus4.webp** | processus-icone-realisation-cle-en-main.webp | Icône étape 4 – réalisation clé en main |
| **part1.webp**  | partenaire-icpi.webp                    | Logo partenaire ICPI |
| **part2.webp**  | partenaire-rinox.webp                    | Logo partenaire Rinox |
| **part3.webp**  | partenaire-techo-bloc.webp               | Logo partenaire Techo-Bloc |
| **part4.webp**  | partenaire-financeit.webp                | Logo partenaire FinanceIt |
| **part5.webp**  | partenaire-fiberwood.webp                | Logo partenaire FiberWood |
| **team-1.webp** | service-plan-amenagement-3d.webp        | Service – plan d’aménagement en animation 3D |
| **team-2.webp** | service-stationnement-pave-uni.webp      | Service – stationnement en pavé uni |
| **team-3.webp** | service-patio-composite.webp            | Service – patio en composite |
| **team-4.webp** | service-terrasse-pave-uni.webp           | Service – terrasse en pavé uni |
| **team-5.webp** | service-pavillon-jardin.webp             | Service – pavillon de jardin (pool house) |
| **team-6.webp** | service-clotures-exterieures.webp        | Service – clôtures extérieures |
| **team-7.webp** | service-cuisine-exterieure-lounge.webp   | Service – cuisine extérieure et espace lounge |
| **team-8.webp** | service-experience-immersive-3d.webp     | Service – expérience immersive en 3D |

---

## Fichiers non renommés (déjà explicites ou identité)

- **logo2.webp** – logo Eden 3D Québec (identité de marque)
- **eden.webp** – favicon (identité)
- **carousel-1.jpg** – référencé dans le CSS (page-header) ; nom déjà descriptif
- **footer-bg5.webp**, **vert.webp** – référencés dans le CSS ; conserver pour éviter erreurs de chemin

---

## Fichiers / références à mettre à jour après renommage

- **HTML** : tous les `src="img/..."` et `src="../img/..."` concernés
- **CSS** : aucun (les noms modifiés ne sont pas utilisés dans le CSS actuel)
- **JavaScript** : tableau `images` dans **realisation.html** (galerie)
- **JSON-LD** : **index.html** (`"image": "img/logo2.webp"` – inchangé)
- **Blogues** : styles inline `url("img/blog1.webp")` → `url("../img/blog-piscine-terrasse-amenagement.webp")`

Si ce mapping vous convient, les étapes suivantes seront : renommer les fichiers dans `img/`, puis mettre à jour toutes les références dans le projet.
