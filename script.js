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

// Fonction d'initialisation
function initApp() {
    createTimeline();
    setupEventListeners();
    generateQuizQuestions();
}

// Initialiser l'application au chargement du document
document.addEventListener('DOMContentLoaded', initApp);
