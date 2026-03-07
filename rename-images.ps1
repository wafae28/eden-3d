# Renommage des images pour SEO (noms descriptifs en français)
# À exécuter depuis la racine du projet : .\rename-images.ps1
# Les références dans le HTML/JS ont déjà été mises à jour.

$imgPath = Join-Path $PSScriptRoot "img"
if (-not (Test-Path $imgPath)) {
    Write-Host "Le dossier img/ n'existe pas. Créez-le et placez-y les images avant d'exécuter ce script."
    exit 1
}

$renames = @(
    @("1.webp", "processus-consultation-terrain.webp"),
    @("2.webp", "processus-conception-3d.webp"),
    @("3.webp", "processus-planification-budget.webp"),
    @("4.webp", "processus-realisation-cle-en-main.webp"),
    @("img1.webp", "realisation-amenagement-exterieur-1.webp"),
    @("img3.webp", "realisation-amenagement-exterieur-2.webp"),
    @("img4.webp", "realisation-amenagement-exterieur-3.webp"),
    @("img5.webp", "realisation-amenagement-exterieur-4.webp"),
    @("img6.webp", "realisation-amenagement-exterieur-5.webp"),
    @("img7.webp", "realisation-amenagement-exterieur-6.webp"),
    @("img8.webp", "realisation-amenagement-exterieur-7.webp"),
    @("blog1.webp", "blog-piscine-terrasse-amenagement.webp"),
    @("blog2.webp", "blog-plan-amenagement-2d.webp"),
    @("blog3.webp", "blog-rendu-3d-cour.webp"),
    @("blog4.webp", "blog-pavillon-cabanon-moderne.webp"),
    @("main2.webp", "hero-amenagement-piscine-terrasse.webp"),
    @("about.webp", "about-pavillon-jardin.webp"),
    @("certif.webp", "certification-techo-bloc.webp"),
    @("processus1.webp", "processus-icone-consultation-terrain.webp"),
    @("processus2.webp", "processus-icone-conception-3d.webp"),
    @("processus3.webp", "processus-icone-planification-budget.webp"),
    @("processus4.webp", "processus-icone-realisation-cle-en-main.webp"),
    @("part1.webp", "partenaire-icpi.webp"),
    @("part2.webp", "partenaire-rinox.webp"),
    @("part3.webp", "partenaire-techo-bloc.webp"),
    @("part4.webp", "partenaire-financeit.webp"),
    @("part5.webp", "partenaire-fiberwood.webp"),
    @("team-1.webp", "service-plan-amenagement-3d.webp"),
    @("team-2.webp", "service-stationnement-pave-uni.webp"),
    @("team-3.webp", "service-patio-composite.webp"),
    @("team-4.webp", "service-terrasse-pave-uni.webp"),
    @("team-5.webp", "service-pavillon-jardin.webp"),
    @("team-6.webp", "service-clotures-exterieures.webp"),
    @("team-7.webp", "service-cuisine-exterieure-lounge.webp"),
    @("team-8.webp", "service-experience-immersive-3d.webp")
)

foreach ($pair in $renames) {
    $oldName = $pair[0]
    $newName = $pair[1]
    $oldPath = Join-Path $imgPath $oldName
    $newPath = Join-Path $imgPath $newName
    if (Test-Path $oldPath) {
        Rename-Item -Path $oldPath -NewName $newName -Force
        Write-Host "Renamed: $oldName -> $newName"
    }
    else {
        Write-Host "Skip (not found): $oldName"
    }
}

Write-Host "Done."
