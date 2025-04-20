// Variables globales
let zoomLevel = 1;
let currentDynasty = 'all';
let currentView = 'timeline';
let currentQuizQuestion = 0;
let quizScore = 0;
let quizQuestions = [];

// Données des rois de France
const roisDeFrance = [
    // Dynastie des Capétiens directs
    {
        nom: "Hugues Capet",
        debut: 987,
        fin: 996,
        mort: 996,
        dynastie: "capet",
        epouses: ["Adélaïde d'Aquitaine"],
        naissance: "Vers 941",
        parents: "Hugues le Grand et Hedwige de Saxe",
        anecdote: "Premier roi de la dynastie capétienne, élu roi des Francs en 987. Sa devise était 'Le trône sera au plus digne'. Il parvint à transmettre la couronne à son fils, fondant ainsi la dynastie capétienne."
    },
    {
        nom: "Robert II le Pieux",
        debut: 996,
        fin: 1031,
        mort: 1031,
        dynastie: "capet",
        epouses: ["Rozala d'Italie", "Berthe de Bourgogne", "Constance d'Arles"],
        naissance: "Vers 972, Orléans",
        parents: "Hugues Capet et Adélaïde d'Aquitaine",
        anecdote: "Deuxième roi capétien, surnommé 'le Pieux' pour sa grande dévotion. Il fut excommunié pour avoir épousé sa cousine Berthe de Bourgogne, mariage qu'il dut annuler sur ordre du pape."
    },
    {
        nom: "Henri Ier",
        debut: 1031,
        fin: 1060,
        mort: 1060,
        dynastie: "capet",
        epouses: ["Mathilde de Frise", "Anne de Kiev"],
        naissance: "1008, Reims",
        parents: "Robert II le Pieux et Constance d'Arles",
        anecdote: "Son mariage avec Anne de Kiev, princesse de la Rus' de Kiev, marqua l'une des premières alliances matrimoniales entre la France et l'Europe orientale. Il dut lutter contre sa propre mère qui préférait son frère cadet."
    },
    {
        nom: "Philippe Ier",
        debut: 1060,
        fin: 1108,
        mort: 1108,
        dynastie: "capet",
        epouses: ["Berthe de Hollande", "Bertrade de Montfort"],
        naissance: "1052, Reims",
        parents: "Henri Ier et Anne de Kiev",
        anecdote: "Il accéda au trône à seulement 8 ans. Il fut excommunié pour avoir répudié sa femme Berthe et enlevé Bertrade, l'épouse du comte d'Anjou. Témoin de la première croisade, il ne s'y engagea pas."
    },
    {
        nom: "Louis VI le Gros",
        debut: 1108,
        fin: 1137,
        mort: 1137,
        dynastie: "capet",
        epouses: ["Lucienne de Rochefort", "Adélaïde de Maurienne"],
        naissance: "1081, Paris",
        parents: "Philippe Ier et Berthe de Hollande",
        anecdote: "Surnommé 'le Gros' en raison de son embonpoint, il fut le premier à utiliser la fleur de lys comme emblème royal. Il lutta efficacement contre les seigneurs rebelles et consolida le pouvoir royal dans le domaine capétien."
    },
    {
        nom: "Louis VII le Jeune",
        debut: 1137,
        fin: 1180,
        mort: 1180,
        dynastie: "capet",
        epouses: ["Aliénor d'Aquitaine", "Constance de Castille", "Adèle de Champagne"],
        naissance: "1120, Paris",
        parents: "Louis VI le Gros et Adélaïde de Maurienne",
        anecdote: "Son divorce avec Aliénor d'Aquitaine, qui épousa ensuite Henri II d'Angleterre, fut une catastrophe politique pour la France, cédant ainsi d'immenses territoires aux Plantagenêt. Il participa à la deuxième croisade."
    },
    {
        nom: "Philippe II Auguste",
        debut: 1180,
        fin: 1223,
        mort: 1223,
        dynastie: "capet",
        epouses: ["Isabelle de Hainaut", "Ingeborg de Danemark", "Agnès de Méranie"],
        naissance: "1165, Gonesse",
        parents: "Louis VII le Jeune et Adèle de Champagne",
        anecdote: "Grand roi conquérant, il triompha de la coalition anglo-germanique à la bataille de Bouvines (1214). Il agrandit considérablement le domaine royal, fit construire le Louvre et entreprit le pavage de Paris pour lutter contre la boue."
    },
    {
        nom: "Louis VIII le Lion",
        debut: 1223,
        fin: 1226,
        mort: 1226,
        dynastie: "capet",
        epouses: ["Blanche de Castille"],
        naissance: "1187, Paris",
        parents: "Philippe II Auguste et Isabelle de Hainaut",
        anecdote: "Son règne fut très court, il mourut après seulement trois ans de règne durant la croisade contre les Albigeois. Il est le premier roi capétien à ne pas avoir été sacré du vivant de son père, tant la dynastie était désormais solidement établie."
    },
    {
        nom: "Louis IX (Saint Louis)",
        debut: 1226,
        fin: 1270,
        mort: 1270,
        dynastie: "capet",
        epouses: ["Marguerite de Provence"],
        naissance: "1214, Poissy",
        parents: "Louis VIII le Lion et Blanche de Castille",
        anecdote: "Seul roi de France canonisé, il est connu pour sa piété, sa justice (rendait la justice sous un chêne à Vincennes) et ses deux croisades, dont la dernière lui coûta la vie à Tunis. Il fit construire la Sainte-Chapelle pour abriter la Couronne d'Épines."
    },
    {
        nom: "Philippe III le Hardi",
        debut: 1270,
        fin: 1285,
        mort: 1285,
        dynastie: "capet",
        epouses: ["Isabelle d'Aragon", "Marie de Brabant"],
        naissance: "1245, Poissy",
        parents: "Louis IX et Marguerite de Provence",
        anecdote: "Surnommé 'le Hardi' pour avoir combattu courageusement lors de la huitième croisade. Son règne fut marqué par l'influence de son oncle Charles d'Anjou et la croisade d'Aragon où il trouva la mort."
    },
    {
        nom: "Philippe IV le Bel",
        debut: 1285,
        fin: 1314,
        mort: 1314,
        dynastie: "capet",
        epouses: ["Jeanne Ire de Navarre"],
        naissance: "1268, Fontainebleau",
        parents: "Philippe III le Hardi et Isabelle d'Aragon",
        anecdote: "Surnommé 'le Bel' pour sa grande beauté et 'le Roi de fer' pour sa dureté. Son règne fut marqué par le soufflet d'Anagni, l'arrestation des Templiers et le procès de Jacques de Molay qui, sur le bûcher, aurait maudit le roi jusqu'à la treizième génération."
    },
    {
        nom: "Louis X le Hutin",
        debut: 1314,
        fin: 1316,
        mort: 1316,
        dynastie: "capet",
        epouses: ["Marguerite de Bourgogne", "Clémence de Hongrie"],
        naissance: "1289, Paris",
        parents: "Philippe IV le Bel et Jeanne Ire de Navarre",
        anecdote: "Son surnom 'le Hutin' signifie 'le Querelleur'. Sa première épouse, Marguerite de Bourgogne, fut impliquée dans l'affaire de la Tour de Nesle et emprisonnée pour adultère. Il la fit étrangler pour pouvoir se remarier."
    },
    {
        nom: "Jean Ier le Posthume",
        debut: 1316,
        fin: 1316,
        mort: 1316,
        dynastie: "capet",
        epouses: [],
        naissance: "15 novembre 1316, Paris",
        parents: "Louis X le Hutin et Clémence de Hongrie",
        anecdote: "Roi depuis sa naissance jusqu'à sa mort, il ne vécut que cinq jours, ce qui en fait le roi de France au règne le plus court. Des rumeurs persistantes suggèrent qu'il aurait été échangé contre un autre nourrisson à sa naissance."
    },
    {
        nom: "Philippe V le Long",
        debut: 1316,
        fin: 1322,
        mort: 1322,
        dynastie: "capet",
        epouses: ["Jeanne II de Bourgogne"],
        naissance: "1293, Lyon",
        parents: "Philippe IV le Bel et Jeanne Ire de Navarre",
        anecdote: "Devenu roi suite à la mort de son neveu Jean Ier, il est à l'origine de la loi salique qui exclut les femmes de la succession au trône de France. Sa femme fut également impliquée dans l'affaire de la Tour de Nesle mais fut acquittée."
    },
    {
        nom: "Charles IV le Bel",
        debut: 1322,
        fin: 1328,
        mort: 1328,
        dynastie: "capet",
        epouses: ["Blanche de Bourgogne", "Marie de Luxembourg", "Jeanne d'Évreux"],
        naissance: "1294, Clermont",
        parents: "Philippe IV le Bel et Jeanne Ire de Navarre",
        anecdote: "Dernier roi de la dynastie des Capétiens directs. Sa femme Blanche de Bourgogne fut elle aussi impliquée dans l'affaire de la Tour de Nesle et emprisonnée à vie. En mourant sans héritier mâle, il ouvrit la voie à la guerre de Cent Ans."
    },
    
    // Dynastie des Valois
    {
        nom: "Philippe VI de Valois",
        debut: 1328,
        fin: 1350,
        mort: 1350,
        dynastie: "valois",
        epouses: ["Jeanne de Bourgogne", "Blanche de Navarre"],
        naissance: "1293, Fontainebleau",
        parents: "Charles de Valois et Marguerite d'Anjou",
        anecdote: "Premier roi de la dynastie des Valois, cousin des derniers Capétiens directs. Son accession au trône fut contestée par Édouard III d'Angleterre, marquant le début de la guerre de Cent Ans. Il subit une défaite cuisante à la bataille de Crécy (1346)."
    },
    {
        nom: "Jean II le Bon",
        debut: 1350,
        fin: 1364,
        mort: 1364,
        dynastie: "valois",
        epouses: ["Bonne de Luxembourg", "Jeanne Ire d'Auvergne"],
        naissance: "1319, Le Mans",
        parents: "Philippe VI de Valois et Jeanne de Bourgogne",
        anecdote: "Capturé à la bataille de Poitiers (1356), il passa quatre ans en captivité à Londres. Son fils, le futur Charles V, assura la régence. Il mourut à Londres où il était retourné volontairement après que son fils, donné en otage, s'était évadé."
    },
    {
        nom: "Charles V le Sage",
        debut: 1364,
        fin: 1380,
        mort: 1380,
        dynastie: "valois",
        epouses: ["Jeanne de Bourbon"],
        naissance: "1338, Vincennes",
        parents: "Jean II le Bon et Bonne de Luxembourg",
        anecdote: "Surnommé 'le Sage' pour sa prudence politique. Il réforma l'administration du royaume et fonda la Bibliothèque royale (future BnF). Il confia au connétable Du Guesclin la reconquête des territoires perdus face aux Anglais."
    },
    {
        nom: "Charles VI le Fou",
        debut: 1380,
        fin: 1422,
        mort: 1422,
        dynastie: "valois",
        epouses: ["Isabeau de Bavière"],
        naissance: "1368, Paris",
        parents: "Charles V le Sage et Jeanne de Bourbon",
        anecdote: "Surnommé 'le Fou' ou 'le Bien-Aimé', il souffrit de graves troubles mentaux dès 1392 (épisode dit 'de la forêt du Mans'). Son règne vit la reprise de la guerre de Cent Ans, la défaite d'Azincourt (1415) et le traité de Troyes (1420) déshéritant son fils."
    },
    {
        nom: "Charles VII le Victorieux",
        debut: 1422,
        fin: 1461,
        mort: 1461,
        dynastie: "valois",
        epouses: ["Marie d'Anjou"],
        naissance: "1403, Paris",
        parents: "Charles VI le Fou et Isabeau de Bavière",
        anecdote: "Moqué comme 'le roi de Bourges' lorsqu'il n'était reconnu que dans une partie du royaume, il fut conduit au sacre par Jeanne d'Arc. Il réussit à reconquérir son royaume et à mettre fin à la guerre de Cent Ans. Il créa l'armée permanente et modernisa l'artillerie."
    },
    {
        nom: "Louis XI le Prudent",
        debut: 1461,
        fin: 1483,
        mort: 1483,
        dynastie: "valois",
        epouses: ["Marguerite d'Écosse", "Charlotte de Savoie"],
        naissance: "1423, Bourges",
        parents: "Charles VII le Victorieux et Marie d'Anjou",
        anecdote: "Surnommé 'le Prudent' ou 'l'Universelle Araigne' pour sa ruse politique. Il déjoua la Ligue du Bien Public formée par les grands seigneurs et démantela l'État bourguignon à la mort de Charles le Téméraire. Il développa les manufactures et favorisa les foires commerciales."
    },
    {
        nom: "Charles VIII l'Affable",
        debut: 1483,
        fin: 1498,
        mort: 1498,
        dynastie: "valois",
        epouses: ["Anne de Bretagne"],
        naissance: "1470, Amboise",
        parents: "Louis XI le Prudent et Charlotte de Savoie",
        anecdote: "Son mariage avec Anne de Bretagne permit le rattachement de ce duché à la couronne de France. Il lança les guerres d'Italie en revendiquant Naples. Il mourut accidentellement après s'être cogné le front contre un linteau de porte au château d'Amboise."
    },
    {
        nom: "Louis XII le Père du Peuple",
        debut: 1498,
        fin: 1515,
        mort: 1515,
        dynastie: "valois",
        epouses: ["Jeanne de France", "Anne de Bretagne", "Marie d'Angleterre"],
        naissance: "1462, Blois",
        parents: "Charles d'Orléans et Marie de Clèves",
        anecdote: "Surnommé 'le Père du Peuple' pour sa politique fiscale favorable. Il poursuivit les guerres d'Italie mais sans grand succès. Il dut épouser Anne de Bretagne après avoir répudié sa première femme, Jeanne de France, sœur de Charles VIII, pour maintenir la Bretagne dans le giron français."
    },
    {
        nom: "François Ier",
        debut: 1515,
        fin: 1547,
        mort: 1547,
        dynastie: "valois",
        epouses: ["Claude de France", "Éléonore de Habsbourg"],
        naissance: "1494, Cognac",
        parents: "Charles d'Angoulême et Louise de Savoie",
        anecdote: "Grand mécène de la Renaissance, il attira de nombreux artistes comme Léonard de Vinci en France. Vainqueur à Marignan (1515), mais vaincu et fait prisonnier à Pavie (1525). Il signa le concordat de Bologne avec le pape et créa le Collège des lecteurs royaux (futur Collège de France)."
    },
    {
        nom: "Henri II",
        debut: 1547,
        fin: 1559,
        mort: 1559,
        dynastie: "valois",
        epouses: ["Catherine de Médicis"],
        naissance: "1519, Saint-Germain-en-Laye",
        parents: "François Ier et Claude de France",
        anecdote: "Époux de Catherine de Médicis, il entretint une relation passionnée avec sa maîtresse Diane de Poitiers. Il mourut des suites d'une blessure reçue lors d'un tournoi, lorsque la lance de Gabriel de Montgomery transperça son casque et son œil."
    },
    {
        nom: "François II",
        debut: 1559,
        fin: 1560,
        mort: 1560,
        dynastie: "valois",
        epouses: ["Marie Stuart"],
        naissance: "1544, Fontainebleau",
        parents: "Henri II et Catherine de Médicis",
        anecdote: "Roi à 15 ans, il fut sous l'influence des Guise, oncles de son épouse Marie Stuart, future reine d'Écosse. Son règne de 17 mois fut marqué par le début des guerres de religion en France. Il mourut d'une infection de l'oreille qui dégénéra en méningite."
    },
    {
        nom: "Charles IX",
        debut: 1560,
        fin: 1574,
        mort: 1574,
        dynastie: "valois",
        epouses: ["Élisabeth d'Autriche"],
        naissance: "1550, Saint-Germain-en-Laye",
        parents: "Henri II et Catherine de Médicis",
        anecdote: "Son règne fut marqué par les guerres de religion et le massacre de la Saint-Barthélemy (1572), dont il donna l'ordre sous l'influence de sa mère Catherine de Médicis. Passionné de chasse, il écrivit un traité sur ce sujet. Il mourut de la tuberculose."
    },
    {
        nom: "Henri III",
        debut: 1574,
        fin: 1589,
        mort: 1589,
        dynastie: "valois",
        epouses: ["Louise de Lorraine-Vaudémont"],
        naissance: "1551, Fontainebleau",
        parents: "Henri II et Catherine de Médicis",
        anecdote: "Dernier roi de la dynastie des Valois. Élu brièvement roi de Pologne avant de revenir précipitamment à la mort de son frère. Son règne fut marqué par la Ligue catholique et les guerres de religion. Il fit assassiner le duc de Guise, avant d'être lui-même assassiné par le moine Jacques Clément."
    },
    
    // Dynastie des Bourbons
    {
        nom: "Henri IV",
        debut: 1589,
        fin: 1610,
        mort: 1610,
        dynastie: "bourbon",
        epouses: ["Marguerite de Valois", "Marie de Médicis"],
        naissance: "1553, Pau",
        parents: "Antoine de Bourbon et Jeanne d'Albret",
        anecdote: "Premier roi de la dynastie des Bourbons, il se convertit au catholicisme pour accéder au trône ('Paris vaut bien une messe'). Il mit fin aux guerres de religion avec l'édit de Nantes et relança l'économie du royaume avec l'aide de Sully. Il fut assassiné par François Ravaillac."
    },
    {
        nom: "Louis XIII le Juste",
        debut: 1610,
        fin: 1643,
        mort: 1643,
        dynastie: "bourbon",
        epouses: ["Anne d'Autriche"],
        naissance: "1601, Fontainebleau",
        parents: "Henri IV et Marie de Médicis",
        anecdote: "Son règne fut marqué par l'action du cardinal de Richelieu qui centralisa le pouvoir royal et lutta contre les protestants (siège de La Rochelle) et la maison d'Autriche. Passionné de musique et de chasse, il eut deux fils après 23 ans de mariage stérile."
    },
    {
        nom: "Louis XIV",
        debut: 1643,
        fin: 1715,
        mort: 1715,
        dynastie: "bourbon",
        epouses: ["Marie-Thérèse d'Autriche"],
        naissance: "1638, Saint-Germain-en-Laye",
        parents: "Louis XIII le Juste et Anne d'Autriche",
        anecdote: "Le Roi-Soleil, symbole de l'absolutisme royal. Il transféra la cour à Versailles et régna pendant 72 ans, le plus long règne de l'histoire de France. Sous son règne, la France devint la première puissance européenne. Il révoqua l'édit de Nantes, provoquant l'exil de nombreux protestants."
    },
    {
        nom: "Louis XV le Bien-Aimé",
        debut: 1715,
        fin: 1774,
        mort: 1774,
        dynastie: "bourbon",
        epouses: ["Marie Leszczyńska"],
        naissance: "1710, Versailles",
        parents: "Louis, duc de Bourgogne et Marie-Adélaïde de Savoie",
        anecdote: "Arrière-petit-fils de Louis XIV, il accéda au trône à 5 ans sous la régence de Philippe d'Orléans. D'abord surnommé 'le Bien-Aimé' après sa maladie à Metz, il perdit la popularité à cause de ses nombreuses maîtresses (dont Mme de Pompadour) et de la défaite de la guerre de Sept Ans."
    },
    {
        nom: "Louis XVI",
        debut: 1774,
        fin: 1792,
        mort: 1793,
        dynastie: "bourbon",
        epouses: ["Marie-Antoinette d'Autriche"],
        naissance: "1754, Versailles",
        parents: "Louis, Dauphin de France et Marie-Josèphe de Saxe",
        anecdote: "Dernier roi de l'Ancien Régime, passionné de serrurerie et de géographie. Il soutint les insurgés américains contre les Britanniques. Son règne fut marqué par la Révolution française de 1789. Après la chute de la monarchie, il fut jugé et guillotiné en 1793 sous le nom de 'Louis Capet'."
    },
    
    // Première Restauration
    {
        nom: "Louis XVIII",
        debut: 1814,
        fin: 1824,
        mort: 1824,
        dynastie: "bourbon",
        epouses: ["Marie-Joséphine de Savoie"],
        naissance: "1755, Versailles",
        parents: "Louis, Dauphin de France et Marie-Josèphe de Saxe",
        anecdote: "Frère de Louis XVI, il émigra pendant la Révolution et régna après la chute de Napoléon. Son règne fut interrompu par les Cent-Jours. Intelligent et modéré, il établit une monarchie constitutionnelle avec la Charte de 1814. Souffrant de goutte, il était souvent contraint de gouverner depuis son fauteuil."
    },
    {
        nom: "Charles X",
        debut: 1824,
        fin: 1830,
        mort: 1836,
        dynastie: "bourbon",
        epouses: ["Marie-Thérèse de Savoie"],
        naissance: "1757, Versailles",
        parents: "Louis, Dauphin de France et Marie-Josèphe de Saxe",
        anecdote: "Dernier roi bourbon en ligne directe, il tenta de restaurer l'absolutisme royal. Ses ordonnances liberticides déclenchèrent la révolution de Juillet 1830 qui le contraignit à l'abdication. Passionné de chasse comme ses ancêtres, il s'exila en Autriche puis en Italie où il mourut du choléra."
    },
    
    // Monarchie de Juillet
    {
        nom: "Louis-Philippe Ier",
        debut: 1830,
        fin: 1848,
        mort: 1850,
        dynastie: "orleans",
        epouses: ["Marie-Amélie de Bourbon-Siciles"],
        naissance: "1773, Paris",
        parents: "Philippe d'Orléans (Philippe Égalité) et Louise-Marie-Adélaïde de Bourbon",
        anecdote: "Dernier roi des Français, issu de la branche cadette des Bourbons. Surnommé 'le Roi-Citoyen', il dut son trône à la révolution de 1830. Il gouverna pour la bourgeoisie d'affaires et tenta d'apparaître comme un monarque simple et accessible. La révolution de 1848 le contraignit à abdiquer et à fuir en Angleterre."
    },
    
    // Second Empire
    {
        nom: "Napoléon III",
        debut: 1852,
        fin: 1870,
        mort: 1873,
        dynastie: "bonaparte",
        epouses: ["Eugénie de Montijo"],
        naissance: "1808, Paris",
        parents: "Louis Bonaparte et Hortense de Beauharnais",
        anecdote: "Neveu de Napoléon Ier, il fut d'abord président de la République française avant de rétablir l'Empire par un coup d'État. Son règne fut marqué par la modernisation de Paris (travaux du baron Haussmann) et l'industrialisation. Il fut capturé à Sedan en 1870 lors de la guerre franco-prussienne, ce qui précipita la chute du Second Empire."
    },
    
    // Premier Empire (pour compléter)
    {
        nom: "Napoléon Bonaparte",
        debut: 1804,
        fin: 1814,
        mort: 1821,
        dynastie: "bonaparte",
        epouses: ["Joséphine de Beauharnais", "Marie-Louise d'Autriche"],
        naissance: "1769, Ajaccio",
        parents: "Carlo Maria Bonaparte et Maria Letizia Ramolino",
        anecdote: "Général brillant devenu Empereur des Français, il domina l'Europe pendant une décennie. Son règne vit la création du Code civil, des lycées et de nombreuses institutions modernes. Après l'échec de la campagne de Russie, il fut contraint d'abdiquer en 1814, revint pour les Cent-Jours en 1815, puis fut définitivement exilé à Sainte-Hélène où il mourut."
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
        currentView = 'timeline';
        updateView();
    });
    
    document.getElementById('card-view').addEventListener('click', function() {
        document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentView = 'card';
        updateView();
    });
    
    document.getElementById('quiz-view').addEventListener('click', function() {
        document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentView = 'quiz';
        updateView();
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

// Mise à jour de la fonction updateView pour refléter ces changements
function updateView() {
    const timeline = document.getElementById('timeline');
    const timelineContainer = document.querySelector('.timeline-container');
    const kingDetails = document.getElementById('king-details');
    const quizContainer = document.getElementById('quiz-container');
    
    // Réinitialiser tous les conteneurs
    kingDetails.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    timelineContainer.classList.remove('hidden');
    
    if (currentView === 'timeline') {
        // Vue chronologique
        timeline.classList.remove('card-view-mode');
        
        // Repositionner tous les rois sur la frise
        const sortedRois = [...roisDeFrance].sort((a, b) => a.debut - b.debut);
        sortedRois.forEach((roi, index) => {
            const card = timeline.querySelectorAll('.king-card')[index];
            if (card) {
                const startYear = 987;
                const endYear = 1900;
                const left = ((roi.debut - startYear) / (endYear - startYear)) * 100;
                
                card.style.position = 'absolute';
                card.style.left = `${left}%`;
                card.style.transform = 'translateX(-50%)';
            }
        });
        
        timeline.style.height = '650px';
    } else if (currentView === 'card') {
        // Vue par cartes
        timeline.classList.add('card-view-mode');
        
        // Réinitialiser les styles de positionnement
        timeline.querySelectorAll('.king-card').forEach(card => {
            card.style.position = '';
            card.style.left = '';
            card.style.transform = '';
        });
        
        timeline.style.height = 'auto';
    } else if (currentView === 'quiz') {
        // Vue quiz
        kingDetails.classList.add('hidden');
        timelineContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        startQuiz();
    }
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

    // Trier les rois par date de début de règne
    const sortedRois = [...roisDeFrance].sort((a, b) => a.debut - b.debut);

    // Création des cartes de rois
    sortedRois.forEach((roi, index) => {
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

    // Si on est en mode chronologie, positionner correctement les rois sur la frise
    if (currentView === 'timeline') {
        sortedRois.forEach((roi, index) => {
            const card = timeline.querySelectorAll('.king-card')[index];
            
            // Calculer la position sur la frise chronologique
            const startYear = 987;
            const endYear = 1900;
            const left = ((roi.debut - startYear) / (endYear - startYear)) * 100;
            
            card.style.position = 'absolute';
            card.style.left = `${left}%`;
            card.style.transform = 'translateX(-50%)'; // Centrer horizontalement
        });
        
        // S'assurer que la hauteur du timeline est suffisante pour afficher tous les rois
        timeline.style.height = '650px';
    } else {
        // En mode carte, réinitialiser les styles de positionnement
        timeline.querySelectorAll('.king-card').forEach(card => {
            card.style.position = '';
            card.style.left = '';
            card.style.transform = '';
        });
        
        timeline.style.height = 'auto';
    }
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

// Fonctions pour le quiz
function generateQuizQuestions() {
    // Générer des questions de quiz variées
    quizQuestions = [
        {
            question: "Quel roi a régné le plus longtemps en France?",
            options: ["Louis XIV", "Napoléon Bonaparte", "François Ier", "Louis XV"],
            correct: 0,
            explanation: "Louis XIV, le Roi-Soleil, a régné pendant 72 ans, de 1643 à 1715, ce qui constitue le plus long règne de l'histoire de France."
        },
        {
            question: "Qui était le premier roi de la dynastie capétienne?",
            options: ["Clovis", "Hugues Capet", "Robert II le Pieux", "Charlemagne"],
            correct: 1,
            explanation: "Hugues Capet a fondé la dynastie capétienne en 987, après avoir été élu roi des Francs. Sa dynastie a régné pendant plus de 300 ans en ligne directe."
        },
        {
            question: "Quel roi a été guillotiné pendant la Révolution française?",
            options: ["Louis XV", "Louis XVI", "Louis XVIII", "Charles X"],
            correct: 1,
            explanation: "Louis XVI a été guillotiné le 21 janvier 1793 sur la place de la Révolution (actuelle place de la Concorde) à Paris, après avoir été jugé par la Convention nationale."
        },
        {
            question: "Quel roi était surnommé 'le Roi-Citoyen'?",
            options: ["Louis-Philippe Ier", "Napoléon III", "Charles X", "Louis XVIII"],
            correct: 0,
            explanation: "Louis-Philippe Ier, de la dynastie d'Orléans, était surnommé 'le Roi-Citoyen' en raison de son style de gouvernement plus bourgeois et moins aristocratique que ses prédécesseurs."
        },
        {
            question: "Qui a prononcé la célèbre phrase 'Paris vaut bien une messe'?",
            options: ["François Ier", "Henri IV", "Louis XIV", "Napoléon Bonaparte"],
            correct: 1,
            explanation: "Henri IV, protestant, se convertit au catholicisme pour accéder au trône de France. Il aurait alors prononcé cette phrase célèbre, signifiant que devenir roi valait bien une conversion."
        },
        {
            question: "Quel roi a fait construire le château de Versailles?",
            options: ["Henri IV", "Louis XIII", "Louis XIV", "Louis XV"],
            correct: 2,
            explanation: "Louis XIV a transformé le pavillon de chasse de son père en un somptueux palais et y a installé définitivement la cour à partir de 1682."
        },
        {
            question: "Sous quel règne la guerre de Cent Ans a-t-elle débuté?",
            options: ["Philippe VI de Valois", "Jean II le Bon", "Charles V le Sage", "Philippe IV le Bel"],
            correct: 0,
            explanation: "La guerre de Cent Ans a commencé sous le règne de Philippe VI de Valois, en 1337, lorsque le roi d'Angleterre Édouard III a revendiqué le trône de France."
        },
        {
            question: "Quel roi a été surnommé 'le Bien-Aimé' puis est devenu très impopulaire?",
            options: ["Louis XV", "Louis XVI", "Charles X", "Louis XVIII"],
            correct: 0,
            explanation: "Louis XV a d'abord été surnommé 'le Bien-Aimé' après sa maladie à Metz, mais il a perdu sa popularité à cause de ses défaites militaires et de ses maîtresses."
        },
        {
            question: "Quel roi de France était le petit-fils d'Henri IV et de Marie de Médicis?",
            options: ["Louis XIII", "Louis XIV", "François Ier", "Henri III"],
            correct: 1,
            explanation: "Louis XIV était le petit-fils d'Henri IV car il était le fils de Louis XIII, lui-même fils d'Henri IV et de Marie de Médicis."
        },
        {
            question: "Sous quel roi la Sainte-Chapelle a-t-elle été construite?",
            options: ["Philippe II Auguste", "Saint Louis (Louis IX)", "Philippe IV le Bel", "Philippe VI de Valois"],
            correct: 1,
            explanation: "Saint Louis (Louis IX) a fait construire la Sainte-Chapelle entre 1242 et 1248 pour abriter la Couronne d'Épines et d'autres reliques de la Passion du Christ."
        }
    ];
}

function startQuiz() {
    quizScore = 0;
    currentQuizQuestion = 0;
    
    // Mélanger les questions
    quizQuestions = quizQuestions.sort(() => Math.random() - 0.5);
    
    // Afficher la première question
    showQuizQuestion(currentQuizQuestion);
}

function showQuizQuestion(index) {
    if (index >= quizQuestions.length) {
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[index];
    const questionContainer = document.getElementById('quiz-question');
    const optionsContainer = document.getElementById('quiz-options');
    const resultContainer = document.getElementById('quiz-result');
    
    // Effacer les résultats précédents
    resultContainer.innerHTML = '';
    resultContainer.className = '';
    
    // Afficher la question
    questionContainer.innerHTML = `<h3>Question ${index + 1}/${quizQuestions.length}</h3><p>${question.question}</p>`;
    
    // Afficher les options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('quiz-option');
        optionElement.innerHTML = option;
        optionElement.dataset.index = i;
        
        optionElement.addEventListener('click', function() {
            selectQuizOption(this, index);
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Ajuster l'état du bouton "Question suivante"
    const nextButton = document.getElementById('next-question');
    nextButton.style.display = 'none'; // Cacher jusqu'à ce qu'une réponse soit sélectionnée
}

function selectQuizOption(optionElement, questionIndex) {
    const question = quizQuestions[questionIndex];
    const selectedIndex = parseInt(optionElement.dataset.index);
    const resultContainer = document.getElementById('quiz-result');
    const nextButton = document.getElementById('next-question');
    
    // Désactiver les clics supplémentaires
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    // Vérifier si la réponse est correcte
    if (selectedIndex === question.correct) {
        optionElement.classList.add('correct');
        resultContainer.innerHTML = `<p>Correct ! ${question.explanation}</p>`;
        resultContainer.classList.add('correct');
        quizScore++;
    } else {
        optionElement.classList.add('incorrect');
        document.querySelectorAll('.quiz-option')[question.correct].classList.add('correct');
        resultContainer.innerHTML = `<p>Incorrect. ${question.explanation}</p>`;
        resultContainer.classList.add('incorrect');
    }
    
    // Activer le bouton "Question suivante"
    nextButton.style.display = 'block';
    
    // Mettre à jour l'action du bouton
    nextButton.onclick = function() {
        showQuizQuestion(questionIndex + 1);
    };
}

// Fonction pour afficher les résultats du quiz
function showQuizResults() {
    const quizContainer = document.getElementById('quiz-container');
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    
    let message;
    if (percentage >= 90) {
        message = "Excellent ! Vous êtes un véritable expert de l'histoire royale française !";
    } else if (percentage >= 70) {
        message = "Très bien ! Vous avez de solides connaissances sur les rois de France !";
    } else if (percentage >= 50) {
        message = "Pas mal ! Vous connaissez les bases de l'histoire royale française.";
    } else {
        message = "Continuez à explorer notre chronologie pour améliorer vos connaissances !";
    }
    
    quizContainer.innerHTML = `
        <h2>Résultats du Quiz</h2>
        <div class="quiz-results">
            <p>Votre score : ${quizScore}/${quizQuestions.length} (${percentage}%)</p>
            <p>${message}</p>
            <button id="restart-quiz" class="royal-btn">Recommencer le Quiz</button>
        </div>
    `;
    
    // Ajouter l'écouteur d'événement directement après la création du bouton
    document.getElementById('restart-quiz').addEventListener('click', function() {
        startQuiz();
    });
}
function showNextQuizQuestion() {
    currentQuizQuestion++;
    if (currentQuizQuestion < quizQuestions.length) {
        showQuizQuestion(currentQuizQuestion);
    } else {
        showQuizResults();
    }
}

// Initialiser l'application au chargement
document.addEventListener('DOMContentLoaded', initApp);
