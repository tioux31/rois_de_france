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
        // Questions sur les Capétiens
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
        },
        {
            question: "Quelle dynastie a succédé aux Capétiens directs?",
            options: ["Les Bourbons", "Les Valois", "Les Bonaparte", "Les Orléans"],
            correct: 1
        },
        {
            question: "Quel roi est connu sous le nom de 'Saint Louis'?",
            options: ["Louis VIII", "Louis IX", "Louis X", "Louis XIII"],
            correct: 1
        },
        {
            question: "Qui a construit le château de Versailles?",
            options: ["François Ier", "Henri IV", "Louis XIII", "Louis XIV"],
            correct: 3
        },
        {
            question: "Quel roi est surnommé 'le Roi-Soleil'?",
            options: ["Louis XIII", "Louis XIV", "Louis XV", "Louis XVI"],
            correct: 1
        },
        {
            question: "Quelle dynastie a régné le plus longtemps en France?",
            options: ["Les Capétiens", "Les Valois", "Les Bourbons", "Les Bonaparte"],
            correct: 0
        },
        {
            question: "Quel roi a signé l'édit de Nantes?",
            options: ["Louis XIII", "François Ier", "Henri IV", "Louis XIV"],
            correct: 2
        },
        {
            question: "Quel roi a révoqué l'édit de Nantes?",
            options: ["Louis XIII", "Louis XIV", "Louis XV", "Henri IV"],
            correct: 1
        },
        {
            question: "Qui était le dernier roi des Valois?",
            options: ["Henri II", "Charles IX", "Henri III", "François II"],
            correct: 2
        },
        {
            question: "Quel surnom portait Philippe IV?",
            options: ["Le Hardi", "Le Bel", "Le Pieux", "Le Sage"],
            correct: 1
        },
        {
            question: "Quel roi a déplacé la résidence royale de Paris à Versailles?",
            options: ["Louis XIII", "Louis XIV", "Louis XV", "Henri IV"],
            correct: 1
        },
        {
            question: "Qui était le principal ministre de Louis XIII?",
            options: ["Mazarin", "Richelieu", "Colbert", "Sully"],
            correct: 1
        },
        {
            question: "Sous quel roi la Guerre de Cent Ans a-t-elle commencé?",
            options: ["Philippe IV le Bel", "Charles IV le Bel", "Philippe VI de Valois", "Jean II le Bon"],
            correct: 2
        },
        {
            question: "Quel roi a fait construire la Sainte-Chapelle à Paris?",
            options: ["Philippe Auguste", "Louis IX (Saint Louis)", "Philippe le Bel", "Louis VIII"],
            correct: 1
        },
        {
            question: "Sous quel règne Jeanne d'Arc a-t-elle aidé à faire sacrer le roi à Reims?",
            options: ["Charles VI", "Charles VII", "Louis XI", "Philippe VI"],
            correct: 1
        },
        {
            question: "Quel roi a modernisé Paris sous le Second Empire?",
            options: ["Louis-Philippe", "Charles X", "Louis XVIII", "Napoléon III"],
            correct: 3
        },
        {
            question: "Quel était le surnom de Louis XI?",
            options: ["Le Prudent", "L'Universelle Araigne", "Le Sage", "Le Pieux"],
            correct: 1
        },
        {
            question: "Quel roi a fondé l'Académie française?",
            options: ["Henri IV", "Louis XIII", "Louis XIV", "François Ier"],
            correct: 1
        },
        {
            question: "Qui était surnommé 'le Roi-Citoyen'?",
            options: ["Louis XVI", "Louis XVIII", "Charles X", "Louis-Philippe"],
            correct: 3
        },
        {
            question: "Quel roi a épousé Marie-Antoinette?",
            options: ["Louis XIV", "Louis XV", "Louis XVI", "Louis XVII"],
            correct: 2
        },
        {
            question: "Sous quel roi la France a-t-elle perdu la Guerre de Sept Ans?",
            options: ["Louis XIV", "Louis XV", "Louis XVI", "Louis XIII"],
            correct: 1
        },
        {
            question: "Quel roi était surnommé 'le Bien-Aimé' avant de devenir 'le Mal-Aimé'?",
            options: ["Louis XIV", "Louis XV", "Louis XVI", "Henri IV"],
            correct: 1
        },
        {
            question: "Quel roi a été assassiné par François Ravaillac?",
            options: ["Henri III", "Henri IV", "Louis XIII", "Louis XIV"],
            correct: 1
        },
        {
            question: "Sous quel roi la France a-t-elle acquis l'Alsace?",
            options: ["Henri IV", "Louis XIII", "Louis XIV", "Louis XV"],
            correct: 2
        },
        {
            question: "Quelle était la profession originelle d'Hugues Capet avant de devenir roi?",
            options: ["Comte de Paris", "Duc de France", "Abbé laïc", "Comte de Vermandois"],
            correct: 1
        },
        {
            question: "Quel roi français a aussi été roi de Pologne?",
            options: ["Louis XIV", "Henri III", "François Ier", "Charles X"],
            correct: 1
        },
        {
            question: "Qui était le père de Louis XIV?",
            options: ["Henri IV", "Louis XII", "Louis XIII", "Louis XV"],
            correct: 2
        },
        {
            question: "Quel roi a été surnommé 'le Père du Peuple'?",
            options: ["Henri IV", "Louis XII", "Saint Louis", "Philippe Auguste"],
            correct: 1
        },
        {
            question: "Combien d'années a duré le règne de Louis XIV?",
            options: ["50 ans", "72 ans", "63 ans", "81 ans"],
            correct: 1
        },
        {
            question: "Quel roi a dit 'Paris vaut bien une messe'?",
            options: ["François Ier", "Louis XIV", "Henri IV", "Louis XVI"],
            correct: 2
        },
        {
            question: "Sous quel roi la France a-t-elle perdu le Canada?",
            options: ["Louis XIV", "Louis XV", "Louis XVI", "Charles X"],
            correct: 1
        },
        {
            question: "Quel roi français a épousé Anne de Bretagne?",
            options: ["Charles VIII", "Louis XII", "François Ier", "Henri II"],
            correct: 0
        },
        {
            question: "Quel roi a fondé la Bibliothèque nationale de France?",
            options: ["Louis XIV", "François Ier", "Charles V", "Louis XIII"],
            correct: 1
        },
        {
            question: "Quel roi a invité Léonard de Vinci en France?",
            options: ["Louis XII", "François Ier", "Charles VIII", "Henri II"],
            correct: 1
        },
        {
            question: "Qui était le roi lors de la Saint-Barthélemy en 1572?",
            options: ["Charles IX", "Henri III", "Charles VIII", "Henri II"],
            correct: 0
        },
        {
            question: "Quel roi a créé la Banque de France?",
            options: ["Louis XVI", "Louis XVIII", "Napoléon Bonaparte", "Louis-Philippe"],
            correct: 2
        },
        {
            question: "Qui est le seul roi français à être devenu empereur?",
            options: ["Louis-Philippe", "Charles X", "Napoléon Bonaparte", "Louis XVIII"],
            correct: 2
        },
        {
            question: "Quel roi a été surnommé 'le Sage'?",
            options: ["Charles V", "Louis XI", "Louis IX", "Philippe IV"],
            correct: 0
        },
        {
            question: "Quel roi a introduit la gabelle (impôt sur le sel)?",
            options: ["Philippe VI", "Philippe le Bel", "Louis XIV", "Charles VII"],
            correct: 1
        },
        {
            question: "Sous quel roi la guerre de Cent Ans s'est-elle terminée?",
            options: ["Charles V", "Charles VI", "Charles VII", "Louis XI"],
            correct: 2
        },
        {
            question: "Quel roi a été surnommé 'le Fou'?",
            options: ["Charles V", "Charles VI", "Charles VII", "Charles VIII"],
            correct: 1
        },
        {
            question: "Qui était le dernier roi de la Restauration?",
            options: ["Louis XVIII", "Charles X", "Louis-Philippe", "Napoléon III"],
            correct: 1
        },
        {
            question: "Quel roi a été renversé par la Révolution de 1830?",
            options: ["Louis XVIII", "Charles X", "Louis-Philippe", "Louis XVI"],
            correct: 1
        },
        {
            question: "Quel roi a été renversé par la Révolution de 1848?",
            options: ["Charles X", "Louis-Philippe", "Napoléon III", "Louis XVIII"],
            correct: 1
        },
        {
            question: "Qui a succédé directement à Louis XIV?",
            options: ["Louis XV", "Louis XVI", "Le Régent Philippe d'Orléans", "Louis XIII"],
            correct: 0
        },
        {
            question: "Quel roi a été prisonnier des Anglais après la bataille de Poitiers?",
            options: ["Philippe VI", "Jean II le Bon", "Charles V", "Charles VII"],
            correct: 1
        },
        {
            question: "Qui était le ministre principal de Louis XV?",
            options: ["Richelieu", "Mazarin", "Choiseul", "Colbert"],
            correct: 2
        },
        {
            question: "Quel est le dernier monarque à avoir régné sur la France?",
            options: ["Louis-Philippe", "Charles X", "Napoléon III", "Henri V (prétendant)"],
            correct: 2
        }
    ];
    
    // Mélanger les questions
    quizQuestions = shuffleArray(quizQuestions);
}

function showNextQuizQuestion() {
    // Fonction simplifiée pour éviter des erreurs
    console.log("Question suivante demandée");
}

// Initialiser l'application au chargement
document.addEventListener('DOMContentLoaded', initApp);
