// ========================================
// Script complet pour le formulaire de soumission Eden3D
// Gestion des fichiers, validation et soumission
// ========================================

(function() {
console.log('Script Eden3D démarré - Version 2.1');

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', init);
} else {
init();
}

function init() {
console.log('Page chargée, initialisation du formulaire...');

const fileInput = document.getElementById('projectFiles');
const dropZone = document.getElementById('fileDropZone');
const fileList = document.getElementById('fileList');
const form = document.getElementById('projectSubmissionForm');
const successMessage = document.getElementById('successMessage');

if (!fileInput) {
    console.error('ERREUR: #projectFiles non trouvé dans la page');
    return;
}

console.log('✓ fileInput trouvé');
console.log('✓ dropZone trouvé:', dropZone ? 'OUI' : 'NON');
console.log('✓ fileList trouvé:', fileList ? 'OUI' : 'NON');
console.log('✓ formulaire trouvé:', form ? 'OUI' : 'NON');

// ========================================
// VARIABLES GLOBALES
// ========================================
let selectedFiles = [];
const MAX_FILES = 5;
const MAX_SIZE = 10 * 1024 * 1024; // 10 Mo
const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'pdf', 'dwg', 'zip'];

// ========================================
// FIX 1 : S'assurer que le fileInput est visible pour .click()
// Certains navigateurs bloquent .click() sur un input hidden
// ========================================
fileInput.style.position = 'fixed';
fileInput.style.top = '-9999px';
fileInput.style.left = '-9999px';
fileInput.style.opacity = '0';
fileInput.style.width = '1px';
fileInput.style.height = '1px';
// NE PAS utiliser display:none ni visibility:hidden

// ========================================
// FONCTIONS UTILITAIRES
// ========================================

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getFileIcon(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    const icons = {
        'jpg': 'fa-file-image',
        'jpeg': 'fa-file-image',
        'png': 'fa-file-image',
        'pdf': 'fa-file-pdf',
        'dwg': 'fa-file-alt',
        'zip': 'fa-file-archive'
    };
    return icons[ext] || 'fa-file';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showError(message) {
    let errorDiv = document.querySelector('.file-error-message');
    if (!errorDiv && dropZone) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger mt-2 file-error-message';
        errorDiv.style.cssText = 'background: #f8d7da; color: #721c24; padding: 10px; border-radius: 5px; margin-top: 10px;';
        dropZone.parentNode.appendChild(errorDiv);
    }
    if (errorDiv) {
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        errorDiv.style.display = 'block';
        setTimeout(() => { errorDiv.style.display = 'none'; }, 5000);
    } else {
        alert(message);
    }
}

function showSuccess(message) {
    let successDiv = document.querySelector('.file-success-message');
    if (!successDiv && dropZone) {
        successDiv = document.createElement('div');
        successDiv.className = 'file-success-message';
        successDiv.style.cssText = 'background: #d4edda; color: #155724; padding: 10px; border-radius: 5px; margin-top: 10px;';
        dropZone.parentNode.appendChild(successDiv);
    }
    if (successDiv) {
        successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
        successDiv.style.display = 'block';
        setTimeout(() => { successDiv.style.display = 'none'; }, 3000);
    }
}

// ========================================
// AFFICHAGE DES FICHIERS
// ========================================
function displayFiles() {
    if (!fileList) return;
    
    fileList.innerHTML = '';
    
    if (selectedFiles.length === 0) {
        fileList.innerHTML = '<p style="color: #7f8c8d; font-style: italic;">Aucun fichier sélectionné</p>';
        return;
    }
    
    selectedFiles.forEach((file, index) => {
        const fileDiv = document.createElement('div');
        fileDiv.className = 'file-item';
        fileDiv.style.cssText = 'background: #f8f9fa; padding: 12px; margin: 8px 0; border-radius: 8px; border-left: 4px solid #e67e22; display: flex; justify-content: space-between; align-items: center;';
        
        // FIX 2 : Le bouton Supprimer a son propre listener, sans propagation vers dropZone
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.innerHTML = '<i class="fas fa-trash"></i> Supprimer';
        removeBtn.style.cssText = 'background: #e74c3c; color: white; border: none; padding: 6px 14px; border-radius: 5px; cursor: pointer; font-size: 13px; flex-shrink: 0;';
        removeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Empêche la propagation vers dropZone → évite l'ouverture du dialogue
            selectedFiles.splice(index, 1);
            updateFileInput();
            displayFiles();
            console.log('Fichier supprimé, reste:', selectedFiles.length);
        });
        
        const infoDiv = document.createElement('div');
        infoDiv.style.cssText = 'display: flex; align-items: center; gap: 12px; flex: 1;';
        infoDiv.innerHTML = `
            <i class="fas ${getFileIcon(file.name)}" style="color: #e67e22; font-size: 24px;"></i>
            <div>
                <strong style="color: #2c3e50; display: block;">${escapeHtml(file.name)}</strong>
                <small style="color: #7f8c8d;">${formatFileSize(file.size)}</small>
            </div>
        `;
        
        fileDiv.appendChild(infoDiv);
        fileDiv.appendChild(removeBtn);
        fileList.appendChild(fileDiv);
    });
}

// ========================================
// VALIDATION DES FICHIERS
// ========================================
function validateFiles(newFiles) {
    if (selectedFiles.length + newFiles.length > MAX_FILES) {
        showError(`Vous ne pouvez joindre que ${MAX_FILES} fichiers maximum.`);
        return false;
    }
    for (let file of newFiles) {
        if (file.size > MAX_SIZE) {
            showError(`Le fichier "${file.name}" dépasse la limite de 10 Mo.`);
            return false;
        }
        const ext = file.name.split('.').pop().toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(ext)) {
            showError(`Le format "${ext}" n'est pas accepté. Formats acceptés : JPG, PNG, PDF, DWG, ZIP`);
            return false;
        }
    }
    return true;
}

// ========================================
// AJOUTER DES FICHIERS
// ========================================
function addFiles(newFiles) {
    if (!validateFiles(newFiles)) return false;
    selectedFiles = [...selectedFiles, ...newFiles];
    updateFileInput();
    displayFiles();
    showSuccess(`${newFiles.length} fichier(s) ajouté(s). Total: ${selectedFiles.length}/${MAX_FILES}`);
    console.log(`Fichiers ajoutés, total: ${selectedFiles.length}`);
    return true;
}

// ========================================
// METTRE À JOUR L'INPUT FILE
// ========================================
function updateFileInput() {
    const dataTransfer = new DataTransfer();
    selectedFiles.forEach(file => dataTransfer.items.add(file));
    fileInput.files = dataTransfer.files;
}

// ========================================
// BOUTON PARCOURIR + ZONE CLIQUABLE
// ========================================
if (dropZone) {
    dropZone.style.cursor = 'pointer';
    
    // FIX 3 : Le clic sur la dropZone n'ouvre le dialogue QUE si on ne clique pas
    // sur un élément interactif enfant (bouton supprimer, etc.)
    dropZone.addEventListener('click', function(e) {
        const tag = e.target.tagName.toLowerCase();
        if (tag === 'button' || e.target.closest('button')) {
            return; // Ignorer les clics sur les boutons enfants
        }
        console.log('Ouverture du dialogue fichier...');
        fileInput.click();
    });
    
    // Bouton "Parcourir" explicite
    if (!document.getElementById('browseExplicitBtn')) {
        const browseBtn = document.createElement('button');
        browseBtn.id = 'browseExplicitBtn';
        browseBtn.type = 'button';
        browseBtn.innerHTML = '<i class="fas fa-folder-open"></i> Parcourir mes fichiers';
        browseBtn.style.cssText = 'background: linear-gradient(135deg, #e67e22 0%, #d35400 100%); color: white; border: none; padding: 10px 24px; border-radius: 8px; margin-top: 15px; cursor: pointer; font-weight: 600;';
        browseBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Évite la double propagation vers dropZone
            fileInput.click();
        });
        dropZone.appendChild(browseBtn);
    }
}

// ========================================
// DRAG & DROP
// ========================================
if (dropZone) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, e => {
            e.preventDefault();
            e.stopPropagation();
        });
    });
    
    dropZone.addEventListener('dragover', function() {
        this.style.backgroundColor = '#fff3e0';
        this.style.borderColor = '#e67e22';
        this.style.borderStyle = 'solid';
        this.style.transform = 'scale(1.02)';
    });
    
    dropZone.addEventListener('dragleave', function() {
        this.style.backgroundColor = '';
        this.style.borderStyle = 'dashed';
        this.style.transform = 'scale(1)';
    });
    
    dropZone.addEventListener('drop', function(e) {
        this.style.backgroundColor = '';
        this.style.borderStyle = 'dashed';
        this.style.transform = 'scale(1)';
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) addFiles(files);
    });
}

// ========================================
// SÉLECTION VIA LE DIALOGUE (input change)
// ========================================
fileInput.addEventListener('change', function() {
    console.log('Fichiers sélectionnés via dialogue:', this.files.length);
    const files = Array.from(this.files);
    if (files.length > 0) {
        addFiles(files);
    }
    // Reset pour permettre de re-sélectionner les mêmes fichiers
    // On utilise setTimeout pour ne pas interférer avec addFiles
    setTimeout(() => { this.value = ''; }, 100);
});

// ========================================
// SOUMISSION DU FORMULAIRE
// ========================================
if (form) {
    form.addEventListener('submit', function(e) {
        const totalSize = selectedFiles.reduce((sum, file) => sum + file.size, 0);
        if (totalSize > MAX_SIZE) {
            e.preventDefault();
            showError('La taille totale des fichiers ne doit pas dépasser 10 Mo.');
            return false;
        }
        
        const submitBtn = form.querySelector('.btn-soumission, button[type="submit"]');
        if (submitBtn) {
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            setTimeout(() => {
                if (submitBtn.disabled) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }
            }, 30000);
        }
        
        console.log('Soumission avec', selectedFiles.length, 'fichier(s)');
        return true;
    });
}

// ========================================
// MESSAGE DE CONFIRMATION (URL param ?success=true)
// ========================================
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true' && successMessage) {
    successMessage.style.display = 'block';
    const soumissionSection = document.getElementById('soumission');
    if (soumissionSection) {
        setTimeout(() => soumissionSection.scrollIntoView({ behavior: 'smooth' }), 100);
    }
    setTimeout(() => {
        successMessage.style.display = 'none';
        window.history.replaceState({}, document.title, window.location.pathname + '#soumission');
    }, 5000);
}

// Init
displayFiles();
console.log('✓ Script Eden3D initialisé avec succès !');
}
})();