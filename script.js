// Au tout début de votre fichier script.js
console.log("Script.js chargé avec succès!");

// Variables globales
let zoomLevel = 1;
let currentDynasty = 'all';
let currentView = 'timeline';
let currentQuizQuestion = 0;
let quizScore = 0;
let quizQuestions = [];

// Données des rois de France
const roisDeFrance = [
    // Capétiens directs
    { nom: "Hugues Capet", debut: 987, fin: 996, dynastie: "capet", 
      description: "Premier roi de la dynastie capétienne, élu roi des Francs après la mort de Louis V." },
    { nom: "Robert II le Pieux", debut: 996, fin: 1031, dynastie: "capet", 
      description: "Fils d'Hugues Capet, il fut couronné du vivant de son père pour assurer la succession." },
    { nom: "Henri Ier", debut: 1031, fin: 1060, dynastie: "capet", 
      description: "Troisième roi capétien, il dut faire face à de nombreuses révoltes des grands seigneurs." },
    { nom: "Philippe Ier", debut: 1060, fin: 1108, dynastie: "capet", 
      description: "Son long règne est marqué par la première croisade et le début de la querelle des Investitures." },
    { nom: "Louis VI le Gros", debut: 1108, fin: 1137, dynastie: "capet", 
      description: "Il renforça l'autorité royale face aux grands seigneurs féodaux." },
    { nom: "Louis VII le Jeune", debut: 1137, fin: 1180, dynastie: "capet", 
      description: "Participa à la deuxième croisade. Son divorce d'avec Aliénor d'Aquitaine affaiblit considérablement le royaume." },
    { nom: "Philippe II Auguste", debut: 1180, fin: 1223, dynastie: "capet", 
      description: "Considéré comme l'un des rois les plus importants de l'histoire de France, il triompha du roi d'Angleterre à Bouvines." },
    { nom: "Louis VIII le Lion", debut: 1223, fin: 1226, dynastie: "capet", 
      description: "Fils de Philippe Auguste, son règne fut bref mais il poursuivit l'œuvre de son père." },
    { nom: "Louis IX (Saint Louis)", debut: 1226, fin: 1270, dynastie: "capet", 
      description: "Seul roi de France canonisé, il incarna le roi justicier et participa à deux croisades." },
    { nom: "Philippe III le Hardi", debut: 1270, fin: 1285, dynastie: "capet", 
      description: "Fils de Saint Louis, il poursuivit l'œuvre de centralisation monarchique." },
    { nom: "Philippe IV le Bel", debut: 1285, fin: 1314, dynastie: "capet", 
      description: "Souverain puissant et autoritaire, il est connu pour avoir fait détruire l'ordre des Templiers." },
    { nom: "Louis X le Hutin", debut: 1314, fin: 1316, dynastie: "capet", 
      description: "Fils aîné de Philippe le Bel, son règne fut très bref." },
    { nom: "Jean Ier le Posthume", debut: 1316, fin: 1316, dynastie: "capet", 
      description: "Fils posthume de Louis X, il ne vécut que cinq jours." },
    { nom: "Philippe V le Long", debut: 1316, fin: 1322, dynastie: "capet", 
      description: "Second fils de Philippe le Bel, il succéda à son neveu Jean Ier." },
    { nom: "Charles IV le Bel", debut: 1322, fin: 1328, dynastie: "capet", 
      description: "Dernier roi capétien direct, sa mort sans héritier mâle provoqua une crise de succession." },
    
    // Valois
    { nom: "Philippe VI de Valois", debut: 1328, fin: 1350, dynastie: "valois", 
      description: "Premier roi de la branche des Valois, son règne marque le début de la guerre de Cent Ans." },
    { nom: "Jean II le Bon", debut: 1350, fin: 1364, dynastie: "valois", 
      description: "Fait prisonnier à la bataille de Poitiers, il mourut en captivité à Londres." },
    { nom: "Charles V le Sage", debut: 1364, fin: 1380, dynastie: "valois", 
      description: "Connu pour sa sagesse et sa prudence, il réorganisa l'armée et redonna à la France sa puissance." },
    { nom: "Charles VI le Fol", debut: 1380, fin: 1422, dynastie: "valois", 
      description: "Sujet à des crises de folie, son règne fut marqué par la défaite d'Azincourt et le traité de Troyes." },
    { nom: "Charles VII le Victorieux", debut: 1422, fin: 1461, dynastie: "valois", 
      description: "Avec l'aide de Jeanne d'Arc, il reprit son royaume aux Anglais et mit fin à la guerre de Cent Ans." },
    { nom: "Louis XI l'Universelle Araigne", debut: 1461, fin: 1483, dynastie: "valois", 
      description: "Roi rusé et diplomate, il unifia le royaume et affirma l'autorité royale face aux grands féodaux." },
    { nom: "Charles VIII l'Affable", debut: 1483, fin: 1498, dynastie: "valois", 
      description: "Fils de Louis XI, il lance les guerres d'Italie avec la conquête du royaume de Naples." },
    { nom: "Louis XII le Père du Peuple", debut: 1498, fin: 1515, dynastie: "valois", 
      description: "Réputé pour sa bonté et sa justice, il poursuivit les guerres d'Italie." },
    { nom: "François Ier", debut: 1515, fin: 1547, dynastie: "valois", 
      description: "Grand mécène, il favorisa la Renaissance française et signa le Concordat de Bologne." },
    { nom: "Henri II", debut: 1547, fin: 1559, dynastie: "valois", 
      description: "Poursuivit la politique de son père. Il mourut accidentellement lors d'un tournoi." },
    { nom: "François II", debut: 1559, fin: 1560, dynastie: "valois", 
      description: "Roi à 15 ans, époux de Marie Stuart, son règne ne dura qu'un an." },
    { nom: "Charles IX", debut: 1560, fin: 1574, dynastie: "valois", 
      description: "Son règne fut marqué par les guerres de religion et le massacre de la Saint-Barthélemy." },
    { nom: "Henri III", debut: 1574, fin: 1589, dynastie: "valois", 
      description: "Dernier roi de la dynastie des Valois, il fut assassiné pendant les guerres de religion." },
    
    // Bourbons
    { nom: "Henri IV", debut: 1589, fin: 1610, dynastie: "bourbon", 
      description: "Premier roi Bourbon, il mit fin aux guerres de religion avec l'édit de Nantes." },
    { nom: "Louis XIII le Juste", debut: 1610, fin: 1643, dynastie: "bourbon", 
      description: "Avec l'aide de Richelieu, il renforça l'autorité royale et lutta contre les protestants." },
    { nom: "Louis XIV le Roi-Soleil", debut: 1643, fin: 1715, dynastie: "bourbon", 
      description: "Symbole de la monarchie absolue, son règne fut le plus long de l'histoire de France." },
    { nom: "Louis XV le Bien-Aimé", debut: 1715, fin: 1774, dynastie: "bourbon", 
      description: "D'abord populaire, il devint impopulaire à la fin de son règne, notamment à cause de la guerre de Sept Ans." },
    { nom: "Louis XVI", debut: 1774, fin: 1792, dynastie: "bourbon", 
      description: "Son règne fut marqué par la Révolution française. Il fut guillotiné en 1793." },
    { nom: "Louis XVIII", debut: 1814, fin: 1824, dynastie: "bourbon", 
      description: "Restauré après la chute de Napoléon, il instaura une monarchie constitutionnelle." },
    { nom: "Charles X", debut: 1824, fin: 1830, dynastie: "bourbon", 
      description: "Dernier roi de la branche aînée des Bourbons, renversé par la Révolution de 1830." },
    
    // Orléans
    { nom: "Louis-Philippe Ier", debut: 1830, fin: 1848, dynastie: "orleans", 
      description: "Roi des Français de la branche cadette d'Orléans, renversé par la Révolution de 1848." },
    
    // Bonaparte
    { nom: "Napoléon Ier", debut: 1804, fin: 1814, dynastie: "bonaparte", 
      description: "Général victorieux devenu empereur, il domina l'Europe avant d'être défait et exilé." },
    { nom: "Napoléon Ier (Cent-Jours)", debut: 1815, fin: 1815, dynastie: "bonaparte", 
      description: "Revenu d'exil pour une brève période, définitivement vaincu à Waterloo." },
    { nom: "Napoléon III", debut: 1852, fin: 1870, dynastie: "bonaparte", 
      description: "Neveu de Napoléon Ier, il fut le dernier monarque à régner sur la France." }
];

// Test de base
document.addEventListener('DOMContentLoaded', function() {
    console.log("Document chargé");
    
    // Vérification des éléments clés
    console.log("Élément timeline existe:", !!document.getElementById('timeline'));
    console.log("Élément quiz-container existe:", !!document.getElementById('quiz-container'));
    
    // Lancement de l'application
    initApp();
});

// Fonction pour configurer les écouteurs d'événements
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
        switchView('timeline');
    });
    
    document.getElementById('card-view').addEventListener('click', function() {
        switchView('card');
    });
    
    document.getElementById('quiz-view').addEventListener('click', function() {
        switchView('quiz');
    });

    // Gérer le bouton 'Question suivante' du quiz
    const nextQuestionBtn = document.getElementById('next-question');
    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener('click', showNextQuizQuestion);
    }
}

function switchView(view) {
    console.log(`Changement de vue vers: ${view}`);
    
    const timelineContainer = document.querySelector('.timeline-container');
    const kingDetails = document.getElementById('king-details');
    const quizContainer = document.getElementById('quiz-container');
    
    if (!timelineContainer) console.error("L'élément .timeline-container n'existe pas!");
    if (!kingDetails) console.error("L'élément #king-details n'existe pas!");
    if (!quizContainer) console.error("L'élément #quiz-container n'existe pas!");
    
    currentView = view;
    
    // Mettre à jour les boutons de vue
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`${view}-view`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Masquer tous les contenus
    if (timelineContainer) timelineContainer.classList.add('hidden');
    if (kingDetails) kingDetails.classList.add('hidden');
    if (quizContainer) quizContainer.classList.add('hidden');
    
    // Afficher le contenu correspondant à la vue
    console.log(`Activation de la vue: ${view}`);
    
    switch(view) {
        case 'timeline':
            if (timelineContainer) {
                timelineContainer.classList.remove('hidden');
                console.log("Timeline container visible");
            }
            if (kingDetails) {
                kingDetails.classList.remove('hidden');
                console.log("King details visible");
            }
            break;
        case 'card':
            if (timelineContainer) {
                timelineContainer.classList.remove('hidden');
                console.log("Timeline container visible (mode carte)");
            }
            if (kingDetails) {
                kingDetails.classList.remove('hidden');
                console.log("King details visible (mode carte)");
            }
            const timelineEl = document.getElementById('timeline');
            if (timelineEl) timelineEl.classList.add('card-view-mode');
            break;
        case 'quiz':
            if (quizContainer) {
                quizContainer.classList.remove('hidden');
                console.log("Quiz container visible");
                startQuiz();
            }
            break;
    }
}

// Fonction pour mettre à jour le zoom
function updateZoom() {
    const timeline = document.getElementById('timeline');
    timeline.style.transform = `scale(${zoomLevel})`;
    timeline.style.transformOrigin = 'center top';
}

// Fonctions pour le quiz
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    currentQuizQuestion = 0;
    quizScore = 0;
    showQuizQuestion();
}

function showQuizQuestion() {
    if (currentQuizQuestion >= quizQuestions.length) {
        // Quiz terminé, afficher les résultats
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[currentQuizQuestion];
    const questionElement = document.getElementById('quiz-question');
    const optionsElement = document.getElementById('quiz-options');
    const resultElement = document.getElementById('quiz-result');
    
    // Effacer les résultats précédents
    resultElement.innerHTML = '';
    resultElement.className = '';
    
    // Afficher la question
    questionElement.textContent = `${currentQuizQuestion + 1}. ${question.question}`;
    
    // Afficher les options
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('quiz-option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(optionElement);
    });
    
    // Masquer le bouton "Question suivante"
    document.getElementById('next-question').style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const question = quizQuestions[currentQuizQuestion];
    const optionElements = document.querySelectorAll('.quiz-option');
    const resultElement = document.getElementById('quiz-result');
    
    // Désactiver les clics sur les options
    optionElements.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Marquer la réponse correcte et la réponse de l'utilisateur
    optionElements[question.correct].classList.add('correct');
    if (selectedIndex !== question.correct) {
        optionElements[selectedIndex].classList.add('incorrect');
    }
    
    // Vérifier si la réponse est correcte
    if (selectedIndex === question.correct) {
        resultElement.textContent = "Correct! Bien joué!";
        resultElement.className = 'correct';
        quizScore++;
    } else {
        resultElement.textContent = `Incorrect. La bonne réponse est: ${question.options[question.correct]}`;
        resultElement.className = 'incorrect';
    }
    
    // Afficher le bouton "Question suivante"
    document.getElementById('next-question').style.display = 'block';
}

function showNextQuizQuestion() {
    currentQuizQuestion++;
    showQuizQuestion();
}

function showQuizResults() {
    const quizContainer = document.getElementById('quiz-container');
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    
    let message;
    if (percentage >= 80) {
        message = "Excellent! Vous êtes un véritable historien royal!";
    } else if (percentage >= 60) {
        message = "Bien joué! Vous connaissez bien l'histoire des rois de France.";
    } else if (percentage >= 40) {
        message = "Pas mal! Il vous reste quelques rois à découvrir.";
    } else {
        message = "Vous avez encore beaucoup à apprendre sur les rois de France!";
    }
    
    quizContainer.innerHTML = `
        <h2>Résultats du Quiz Royal</h2>
        <div class="quiz-results">
            <p>Votre score: ${quizScore} / ${quizQuestions.length} (${percentage}%)</p>
            <p>${message}</p>
            <button id="restart-quiz" class="royal-btn">Recommencer le quiz</button>
            <button id="return-timeline" class="royal-btn">Retour à la chronologie</button>
        </div>
    `;
    
    // Ajouter des écouteurs d'événements pour les boutons
    document.getElementById('restart-quiz').addEventListener('click', startQuiz);
    document.getElementById('return-timeline').addEventListener('click', () => switchView('timeline'));
}

function createTimeline() {
    console.log("Création de la timeline");
    const timeline = document.getElementById('timeline');
    
    if (!timeline) {
        console.error("L'élément #timeline n'existe pas!");
        return;
    }
    
    timeline.innerHTML = '';
    
      
    createTimelineMarkers();
    createDynastyBlocks();

    console.log("Création des cartes de rois...");
    console.log(`Nombre de rois: ${roisDeFrance.length}`);
    
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
        
        card.addEventListener('click', function() {
            document.querySelectorAll('.king-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            showKingDetails(roi);
            highlightReign(roi);
        });
        
        timeline.appendChild(card);
    });
    
    console.log("Timeline créée!");
}
// Fonction d'initialisation
function initApp() {
    createTimeline();
    setupEventListeners();
    generateQuizQuestions();
}

// Initialiser l'application au chargement du document
document.addEventListener('DOMContentLoaded', initApp);
