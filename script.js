// Variables globales
let zoomLevel = 1;
let currentDynasty = 'all';
let currentView = 'timeline';
let currentQuizQuestion = 0;
let quizScore = 0;
let quizQuestions = [];

// Données des rois de France
const roisDeFrance = [
    {
        nom: "Hugues Capet",
        debut: 987,
        fin: 996,
        mort: 996,
        dynastie: "capet",
        epouses: ["Adélaïde d'Aquitaine"],
        naissance: "Reims",
        parents: "Hugues le Grand et Hedwige de Saxe",
        anecdote: "Premier roi de la dynastie capétienne, élu roi des Francs en 987. Sa dynastie capétienne marquera le début d'une nouvelle ère pour la France, remplaçant la dynastie carolingienne."
    },
    {
        nom: "Robert II le Pieux",
        debut: 996,
        fin: 1031,
        mort: 1031,
        dynastie: "capet",
        epouses: ["Suzanne de Bourgogne", "Constance d'Arles"],
        naissance: "Orléans",
        parents: "Hugues Capet et Adélaïde d'Aquitaine",
        anecdote: "Deuxième roi capétien, surnommé 'le Pieux' pour sa dévotion. Il consolida le pouvoir de la jeune dynastie capétienne et renforça l'autorité royale."
    },
    {
        nom: "Philippe Auguste",
        debut: 1180,
        fin: 1223,
        mort: 1223,
        dynastie: "capet",
        epouses: ["Isabelle de Hainaut", "Ingeburge de Danemark"],
        naissance: "Paris",
        parents: "Louis VII et Adèle de Champagne",
        anecdote: "Surnommé 'Auguste' pour ses grandes conquêtes, il a considérablement agrandi le domaine royal, renforçant ainsi la position de la dynastie capétienne."
    },
    {
        nom: "Louis IX (Saint Louis)",
        debut: 1226,
        fin: 1270,
        mort: 1270,
        dynastie: "capet",
        epouses: ["Marguerite de Provence"],
        naissance: "Poissy",
        parents: "Louis VIII et Blanche de Castille",
        anecdote: "Seul roi français canonisé, il est connu pour sa piété, sa justice et ses deux croisades, marquant l'apogée de la dynastie capétienne."
    },
    {
        nom: "Philippe IV le Bel",
        debut: 1285,
        fin: 1314,
        mort: 1314,
        dynastie: "capet",
        epouses: ["Jeanne de Navarre"],
        naissance: "Fontainebleau",
        parents: "Philippe III et Marie de Brabant",
        anecdote: "Roi puissant qui a affronté la papauté, il est responsable de la suppression de l'ordre des Templiers en 1307, marquant un tournant dans la dynastie capétienne."
    },
    {
        nom: "Charles V le Sage",
        debut: 1364,
        fin: 1380,
        mort: 1380,
        dynastie: "valois",
        epouses: ["Jeanne de Bourbon"],
        naissance: "Vincennes",
        parents: "Jean II le Bon et Bonne de Luxembourg",
        anecdote: "Surnommé 'le Sage', il a redressé la situation militaire et politique de la France après les défaites de son père, notamment grâce à son connétable Bertrand du Guesclin, renforçant ainsi la position de la dynastie valois."
    },
    {
        nom: "François Ier",
        debut: 1515,
        fin: 1547,
        mort: 1547,
        dynastie: "valois",
        epouses: ["Claude de France"],
        naissance: "Cognac",
        parents: "Charles d'Angoulême et Louise de Savoie",
        anecdote: "Grand mécène de la Renaissance, il attira de nombreux artistes comme Léonard de Vinci et développa considérablement les arts et la culture française, marquant l'apogée de la dynastie valois."
    },
    {
        nom: "Henri IV",
        debut: 1589,
        fin: 1610,
        mort: 1610,
        dynastie: "bourbon",
        epouses: ["Marguerite de Valois", "Marie de Médicis"],
        naissance: "Pau",
        parents: "Antoine de Bourbon et Jeanne d'Albret",
        anecdote: "Premier roi de la dynastie des Bourbons, il mit fin aux guerres de religion avec l'édit de Nantes et fut assassiné par François Ravaillac, marquant le début d'une nouvelle ère pour la dynastie bourbon."
    },
    {
        nom: "Louis XIV",
        debut: 1643,
        fin: 1715,
        mort: 1715,
        dynastie: "bourbon",
        epouses: ["Marie-Thérèse d'Autriche"],
        naissance: "Saint-Germain-en-Laye",
        parents: "Louis XIII et Anne d'Autriche",
        anecdote: "Le Roi-Soleil de la dynastie des Bourbons, symbole de l'absolutisme royal. Il a construit le château de Versailles et règné pendant 72 ans, le plus long règne de l'histoire de France."
    },
    {
        nom: "Louis XVI",
        debut: 1774,
        fin: 1792,
        mort: 1793,
        dynastie: "bourbon",
        epouses: ["Marie-Antoinette d'Autriche"],
        naissance: "Versailles",
        parents: "Louis, Dauphin de France et Marie-Josèphe de Saxe",
        anecdote: "Dernier roi bourbon de l'Ancien Régime, jugé et exécuté par guillotine pendant la Révolution française, marquant la fin de la monarchie absolue."
    },
    {
        nom: "Napoléon Bonaparte",
        debut: 1804,
        fin: 1814,
        mort: 1821,
        dynastie: "bonaparte",
        epouses: ["Joséphine de Beauharnais", "Marie-Louise d'Autriche"],
        naissance: "Ajaccio",
        parents: "Carlo Maria Bonaparte et Maria Letizia Ramolino",
        anecdote: "Empereur des Français, il a profondément transformé la France et l'Europe par ses conquêtes militaires et ses réformes administratives."
    },
    {
        nom: "Louis-Philippe Ier",
        debut: 1830,
        fin: 1848,
        mort: 1850,
        dynastie: "orleans",
        epouses: ["Marie-Amélie de Bourbon-Siciles"],
        naissance: "Paris",
        parents: "Philippe d'Orléans et Louise-Marie d'Orléans",
        anecdote: "Dernier roi des Français de la dynastie d'Orléans, surnommé 'le Roi-Citoyen', il fut renversé par la Révolution de 1848 et s'exila en Angleterre."
    },
    {
        nom: "Napoléon III",
        debut: 1852,
        fin: 1870,
        mort: 1873,
        dynastie: "bonaparte",
        epouses: ["Eugénie de Montijo"],
        naissance: "Paris",
        parents: "Louis-Napoléon Bonaparte et Hortense de Beauharnais",
        anecdote: "Dernier monarque à régner sur la France, il a modernisé Paris et mené une politique étrangère ambitieuse."
    }
];

// Fonction d'initialisation principale
function initApp() {
    createTimeline();
    setupEventListeners();
    generateQuizQuestions();
}

// Mise en place des écouteurs d'événements
function setupEventListeners() {
    // Boutons de zoom
    document.getElementById('zoom-in').addEventListener('click', function() {
        zoomLevel = Math.min(zoomLevel + 0.2, 2);
        updateZoom();
    });
    
    document.getElementById('zoom-out').addEventListener('click', function() {
        zoomLevel = Math.max(zoomLevel - 0.2, 0.6);
        updateZoom();
    });
    
    document.getElementById('reset-view').addEventListener('click', function() {
        zoomLevel = 1;
        updateZoom();
    });

    // Filtres de dynastie
    const dynastyButtons = document.querySelectorAll('.dynasty-btn');
    dynastyButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentDynasty = this.getAttribute('data-dynasty');
            // Mettre à jour l'état actif des boutons
            dynastyButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterKingsByDynasty();
        });
    });

    // Boutons de vue
    document.getElementById('timeline-view').addEventListener('click', function() {
        document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('timeline').classList.remove('card-view-mode');
    });
    
    document.getElementById('card-view').addEventListener('click', function() {
        document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('timeline').classList.add('card-view-mode');
    });
    
    document.getElementById('quiz-view').addEventListener('click', function() {
        alert("Le mode quiz n'est pas disponible dans cette démo, mais sera fonctionnel dans la version complète.");
    });

    // Gérer le bouton 'Question suivante' du quiz si présent
    const nextQuestionBtn = document.getElementById('next-question');
    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener('click', showNextQuizQuestion);
    }
}

function updateZoom() {
    const timeline = document.getElementById('timeline');
    timeline.style.transform = `scale(${zoomLevel})`;
    timeline.style.transformOrigin = 'center top';
}

function createTimelineMarkers() {
    const timelineMarkersContainer = document.getElementById('timeline-markers');
    timelineMarkersContainer.innerHTML = '';

    // Années de début et de fin pour la chronologie
    const startYear = 987;
    const endYear = 1900;

    // Créer des marqueurs pour chaque siècle
    for (let year = 1000; year <= endYear; year += 100) {
        const position = ((year - startYear) / (endYear - startYear)) * 100;
        
        // Marqueur d'année
        const marker = document.createElement('div');
        marker.classList.add('timeline-marker');
        marker.style.left = `${position}%`;
        marker.textContent = year;
        
        // Ligne verticale pour chaque siècle
        const verticalLine = document.createElement('div');
        verticalLine.classList.add('century-line');
        verticalLine.style.left = `${position}%`;
        
        timelineMarkersContainer.appendChild(marker);
        timelineMarkersContainer.appendChild(verticalLine);
    }
}

function createDynastyBlocks() {
    const dynastyBlocksContainer = document.getElementById('dynasty-blocks');
    dynastyBlocksContainer.innerHTML = '';

    const startYear = 987;
    const endYear = 1900;

    // Définir toutes les dynasties
    const dynasties = [
        { name: 'capet', start: 987, end: 1328, label: 'Capétiens' },
        { name: 'valois', start: 1328, end: 1589, label: 'Valois' },
        { name: 'bourbon', start: 1589, end: 1792, label: 'Bourbons' },
        { name: 'bonaparte', start: 1804, end: 1814, label: 'Bonaparte (1er Empire)' },
        { name: 'bourbon', start: 1814, end: 1830, label: 'Bourbons (Restauration)' },
        { name: 'orleans', start: 1830, end: 1848, label: 'Orléans' },
        { name: 'bonaparte', start: 1852, end: 1870, label: 'Bonaparte (2nd Empire)' }
    ];

    // Créer les blocs pour chaque dynastie
    dynasties.forEach(dynasty => {
        const left = ((dynasty.start - startYear) / (endYear - startYear)) * 100;
        const width = ((dynasty.end - dynasty.start) / (endYear - startYear)) * 100;

        const block = document.createElement('div');
        block.classList.add('dynasty-block');
        block.setAttribute('data-dynastie', dynasty.name);
        block.style.left = `${left}%`;
        block.style.width = `${width}%`;
        block.title = `${dynasty.label} (${dynasty.start}-${dynasty.end})`;

        dynastyBlocksContainer.appendChild(block);
    });
}

function createTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    
    createTimelineMarkers();
    createDynastyBlocks();

    // Création des cartes de rois
    roisDeFrance.forEach((roi, index) => {
        const card = document.createElement('div');
        card.classList.add('king-card');
        card.setAttribute('data-dynastie', roi.dynastie);
        card.setAttribute('data-index', index);
        
        // Structure HTML interne de la carte
        card.innerHTML = `
            <div class="king-portrait"></div>
            <h3>${roi.nom}</h3>
            <p>${roi.debut} - ${roi.fin}</p>
        `;
        
        // Ajouter un événement de clic sur la carte
        card.addEventListener('click', function() {
            // Retirer la classe active de toutes les cartes
            document.querySelectorAll('.king-card').forEach(c => c.classList.remove('active'));
            // Ajouter la classe active à la carte cliquée
            this.classList.add('active');
            // Afficher les détails du roi
            showKingDetails(roi);
            // Mettre en évidence le règne sur la frise
            highlightReign(roi);
        });
        
        timeline.appendChild(card);
    });
}

function showKingDetails(roi) {
    const detailsContainer = document.getElementById('king-details');
    
    // Déterminer la couleur de la dynastie pour le style
    let dynastyColor;
    switch(roi.dynastie) {
        case 'capet': dynastyColor = 'var(--capet-color)'; break;
        case 'valois': dynastyColor = 'var(--valois-color)'; break;
        case 'bourbon': dynastyColor = 'var(--bourbon-color)'; break;
        case 'orleans': dynastyColor = 'var(--orleans-color)'; break;
        case 'bonaparte': dynastyColor = 'var(--bonaparte-color)'; break;
        default: dynastyColor = '#333';
    }
    
    // Contenu HTML détaillé
    detailsContainer.innerHTML = `
        <h2 style="border-bottom-color: ${dynastyColor};">${roi.nom}</h2>
        <div class="king-info">
            <div class="king-details-text">
                <p><strong>Règne :</strong> ${roi.debut} à ${roi.fin} (${roi.fin - roi.debut} ans)</p>
                <p><strong>Naissance :</strong> ${roi.naissance}</p>
                <p><strong>Décès :</strong> ${roi.mort}</p>
                <p><strong>Dynastie :</strong> ${roi.dynastie.charAt(0).toUpperCase() + roi.dynastie.slice(1)}</p>
                <p><strong>Parents :</strong> ${roi.parents}</p>
                <p><strong>Épouse(s) :</strong> ${roi.epouses.join(', ')}</p>
            </div>
            <div class="anecdote-box">
                <h3>Anecdote historique</h3>
                <p>${roi.anecdote}</p>
            </div>
        </div>
    `;
    
    // Animation de transition
    detailsContainer.style.opacity = '0';
    setTimeout(() => {
        detailsContainer.style.opacity = '1';
    }, 50);
}

function highlightReign(roi) {
    const timelineMarkers = document.getElementById('timeline-markers');
    
    // Supprimer toute mise en évidence existante
    const existingHighlight = timelineMarkers.querySelector('.reign-highlight');
    if (existingHighlight) existingHighlight.remove();
    
    // Calculer la position et la largeur
    const startYear = 987;
    const endYear = 1900;
    const left = ((roi.debut - startYear) / (endYear - startYear)) * 100;
    const width = ((roi.fin - roi.debut) / (endYear - startYear)) * 100;
    
    // Créer l'élément de mise en évidence
    const highlight = document.createElement('div');
    highlight.classList.add('reign-highlight');
    highlight.style.left = `${left}%`;
    highlight.style.width = `${width}%`;
    highlight.title = `${roi.nom}: ${roi.debut}-${roi.fin}`;
    
    timelineMarkers.appendChild(highlight);
}

function filterKingsByDynasty() {
    const kingCards = document.querySelectorAll('.king-card');
    
    kingCards.forEach(card => {
        if (currentDynasty === 'all' || card.getAttribute('data-dynastie') === currentDynasty) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Fonctions pour le quiz (version simplifiée)
function generateQuizQuestions() {
    quizQuestions = [
        {
            question: "Quel roi a régné le plus longtemps en France?",
            options: ["Louis XIV", "Napoléon Bonaparte", "François Ier", "Louis XV"],
            correct: 0
        },
        {
            question: "Qui était le premier roi de la dynastie capétienne?",
            options: ["Clovis", "Hugues Capet", "Robert II le Pieux", "Charlemagne"],
            correct: 1
        },
        {
            question: "Quel roi a été guillotiné pendant la Révolution française?",
            options: ["Louis XV", "Louis XVI", "Louis XVIII", "Charles X"],
            correct: 1
        }
    ];
}

function showNextQuizQuestion() {
    // Fonction simplifiée pour éviter des erreurs
    console.log("Question suivante demandée");
}

// Initialiser l'application au chargement
document.addEventListener('DOMContentLoaded', initApp);
