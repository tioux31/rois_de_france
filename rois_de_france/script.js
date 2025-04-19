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
        nom: "Henri Ier",
        debut: 1031,
        fin: 1060,
        mort: 1060,
        dynastie: "capet",
        epouses: ["Mathilde de Frise"],
        naissance: "Reims",
        parents: "Robert II le Pieux et Constance d'Arles",
        anecdote: "Troisième roi capétien, il a consolidé le pouvoir capétien et commencé à étendre progressivement le domaine royal, renforçant ainsi la dynastie capétienne."
    },
    {
        nom: "Philippe Ier",
        debut: 1060,
        fin: 1108,
        mort: 1108,
        dynastie: "capet",
        epouses: ["Berthe de Hollande", "Bertrade de Montfort"],
        naissance: "Paris",
        parents: "Henri Ier et Mathilde de Frise",
        anecdote: "Roi capétien qui a régné pendant 48 ans, il a commencé à développer une administration royale plus structurée et a participé à la Première Croisade, renforçant la position de la dynastie capétienne."
    },
    {
        nom: "Louis VI le Gros",
        debut: 1108,
        fin: 1137,
        mort: 1137,
        dynastie: "capet",
        epouses: ["Lucienne de Rochefort", "Adélaïde de Savoie"],
        naissance: "Paris",
        parents: "Philippe Ier et Berthe de Hollande",
        anecdote: "Surnommé 'le Gros', il a renforcé le pouvoir royal contre les nobles et a commencé à centraliser l'administration du royaume, consolidant ainsi le pouvoir de la dynastie capétienne."
    },
    {
        nom: "Louis VII le Jeune",
        debut: 1137,
        fin: 1180,
        mort: 1180,
        dynastie: "capet",
        epouses: ["Aliénor d'Aquitaine", "Constance de Castille", "Adèle de Champagne"],
        naissance: "Paris",
        parents: "Louis VI le Gros et Adélaïde de Savoie",
        anecdote: "Participant à la Deuxième Croisade, il était connu pour sa piété et son caractère chevaleresque, mais aussi pour sa difficile relation avec sa première épouse Aliénor d'Aquitaine, marquant un tournant dans la dynastie capétienne."
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
        nom: "Louis VIII",
        debut: 1223,
        fin: 1226,
        mort: 1226,
        dynastie: "capet",
        epouses: ["Blanche de Castille"],
        naissance: "Paris",
        parents: "Philippe Auguste et Ingeburge de Danemark",
        anecdote: "Règne court mais important, il a continué l'œuvre de son père Philippe Auguste et a lancé la croisade contre les Albigeois, consolidant le pouvoir de la dynastie capétienne."
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
        nom: "Philippe III le Hardi",
        debut: 1270,
        fin: 1285,
        mort: 1285,
        dynastie: "capet",
        epouses: ["Isabelle d'Aragon"],
        naissance: "Poissy",
        parents: "Louis IX et Marguerite de Provence",
        anecdote: "Surnommé 'le Hardi' pour son courage, il a continué l'expansion du domaine royal et a participé à la huitième croisade, renforçant la position de la dynastie capétienne."
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
        nom: "Louis X le Hutin",
        debut: 1314,
        fin: 1316,
        mort: 1316,
        dynastie: "capet",
        epouses: ["Marguerite de Bourgogne", "Clémence de Hongrie"],
        naissance: "Paris",
        parents: "Philippe IV le Bel et Jeanne de Navarre",
        anecdote: "Règne très court marqué par des conflits avec la noblesse et l'Église, il est le premier roi à abolir partiellement l'esclavage en France, marquant une évolution dans la dynastie capétienne."
    },
    {
        nom: "Philippe V le Long",
        debut: 1316,
        fin: 1322,
        mort: 1322,
        dynastie: "capet",
        epouses: ["Jeanne de Bourgogne"],
        naissance: "Lyon",
        parents: "Philippe IV le Bel et Jeanne de Navarre",
        anecdote: "Frère de Louis X, il a continué l'œuvre de centralisation et de modernisation administrative commencée par son père, renforçant ainsi la position de la dynastie capétienne."
    },
    {
        nom: "Charles IV le Bel",
        debut: 1322,
        fin: 1328,
        mort: 1328,
        dynastie: "capet",
        epouses: ["Marie de Luxembourg"],
        naissance: "Pontoise",
        parents: "Philippe IV le Bel et Jeanne de Navarre",
        anecdote: "Dernier roi capétien direct, son règne sans héritier masculin a conduit à la crise de succession qui déclencha la Guerre de Cent Ans, marquant la fin de la dynastie capétienne."
    },
    {
        nom: "Philippe VI de Valois",
        debut: 1328,
        fin: 1350,
        mort: 1350,
        dynastie: "valois",
        epouses: ["Jeanne de Bourgogne", "Blanche de Navarre"],
        naissance: "Vincennes",
        parents: "Charles de Valois et Marguerite d'Anjou",
        anecdote: "Premier roi de la dynastie des Valois, il a été le principal protagoniste du début de la Guerre de Cent Ans contre l'Angleterre, marquant le début d'une nouvelle ère pour la dynastie valois."
    },
    {
        nom: "Jean II le Bon",
        debut: 1350,
        fin: 1364,
        mort: 1364,
        dynastie: "valois",
        epouses: ["Bonne de Luxembourg", "Jeanne d'Auvergne"],
        naissance: "Paris",
        parents: "Philippe VI de Valois et Jeanne de Bourgogne",
        anecdote: "Capturé à la bataille de Poitiers en 1356 par les Anglais, il fut un roi chevaleresque mais militairement malheureux, marquant un tournant dans la dynastie valois."
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
        nom: "Charles VI le Fou",
        debut: 1380,
        fin: 1422,
        mort: 1422,
        dynastie: "valois",
        epouses: ["Isabeau de Bavière"],
        naissance: "Paris",
        parents: "Charles V le Sage et Jeanne de Bourbon",
        anecdote: "Atteint de troubles mentaux, son règne fut marqué par la folie royale, les luttes de pouvoir entre Armagnacs et Bourguignons, et la poursuite de la Guerre de Cent Ans, marquant une période de crise pour la dynastie valois."
    },
    {
        nom: "Charles VII le Bien Servi",
        debut: 1422,
        fin: 1461,
        mort: 1461,
        dynastie: "valois",
        epouses: ["Marie d'Anjou"],
        naissance: "Paris",
        parents: "Charles VI le Fou et Isabeau de Bavière",
        anecdote: "Grâce à Jeanne d'Arc, il fut sacré à Reims et reconquit progressivement son royaume sur les Anglais, mettant fin à la Guerre de Cent Ans et marquant un tournant pour la dynastie valois."
    },
    {
        nom: "Louis XI",
        debut: 1461,
        fin: 1483,
        mort: 1483,
        dynastie: "valois",
        epouses: ["Charlotte de Savoie"],
        naissance: "Bourges",
        parents: "Charles VII et Marie d'Anjou",
        anecdote: "Surnommé 'l'Araignée', il fut un roi rusé qui centralisa le pouvoir royal et réduisit considérablement le pouvoir des nobles, renforçant ainsi la position de la dynastie valois."
    },
    {
        nom: "Charles VIII",
        debut: 1483,
        fin: 1498,
        mort: 1498,
        dynastie: "valois",
        epouses: ["Anne de Bretagne"],
        naissance: "Amboise",
        parents: "Louis XI et Charlotte de Savoie",
        anecdote: "Il lança les premières campagnes d'Italie qui marquèrent le début des guerres d'Italie et l'émergence de la Renaissance en France, marquant un tournant culturel pour la dynastie valois."
    },
    {
        nom: "Louis XII",
        debut: 1498,
        fin: 1515,
        mort: 1515,
        dynastie: "valois",
        epouses: ["Jeanne de France", "Anne de Bretagne", "Marie d'Angleterre"],
        naissance: "Blois",
        parents: "Charles d'Orléans et Marie de Clèves",
        anecdote: "Surnommé 'le Père du Peuple', il fut un roi populaire qui réduisit les impôts et mena des campagnes militaires en Italie, renforçant ainsi la position de la dynastie valois."
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
        nom: "Henri II",
        debut: 1547,
        fin: 1559,
        mort: 1559,
        dynastie: "valois",
        epouses: ["Catherine de Médicis"],
        naissance: "Saint-Germain-en-Laye",
        parents: "François Ier et Claude de France",
        anecdote: "Son règne fut marqué par les guerres de religion et sa mort tragique lors d'un tournoi, où il fut mortellement blessé par un coup de lance, marquant un tournant pour la dynastie valois."
    },
    {
        nom: "François II",
        debut: 1559,
        fin: 1560,
        mort: 1560,
        dynastie: "valois",
        epouses: ["Marie Stuart"],
        naissance: "Fontainebleau",
        parents: "Henri II et Catherine de Médicis",
        anecdote: "Roi très jeune et malade, il régna moins d'un an et mourut à 16 ans, laissant le trône à son frère Charles IX, marquant une période de crise pour la dynastie valois."
    },
    {
        nom: "Charles IX",
        debut: 1560,
        fin: 1574,
        mort: 1574,
        dynastie: "valois",
        epouses: ["Élisabeth d'Autriche"],
        naissance: "Saint-Germain-en-Laye",
        parents: "Henri II et Catherine de Médicis",
        anecdote: "Connu pour le massacre de la Saint-Barthélemy en 1572, un épisode sanglant des guerres de religion, marquant un tournant pour la dynastie valois."
    },
    {
        nom: "Henri III",
        debut: 1574,
        fin: 1589,
        mort: 1589,
        dynastie: "valois",
        epouses: ["Louise de Lorraine-Vaudémont"],
        naissance: "Fontainebleau",
        parents: "Henri II et Catherine de Médicis",
        anecdote: "Dernier roi de la dynastie des Valois, assassiné par Jacques Clément, un moine fanatique, marquant la fin de cette dynastie."
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
        nom: "Louis XIII",
        debut: 1610,
        fin: 1643,
        mort: 1643,
        dynastie: "bourbon",
        epouses: ["Anne d'Autriche"],
        naissance: "Fontainebleau",
        parents: "Henri IV et Marie de Médicis",
        anecdote: "Roi marqué par le pouvoir de son ministre Cardinal de Richelieu qui centralisa le pouvoir royal et affaiblit la noblesse, renforçant ainsi la position de la dynastie bourbon."
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
        nom: "Louis XV",
        debut: 1715,
        fin: 1774,
        mort: 1774,
        dynastie: "bourbon",
        epouses: ["Marie Leszczyńska"],
        naissance: "Versailles",
        parents: "Louis, Grand Dauphin et Marie-Adélaïde de Savoie",
        anecdote: "Roi bourbon surnommé 'le Bien-Aimé', puis 'le Mal-Aimé', son règne fut marqué par des défaites militaires et des scandales de cour."
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
        nom: "Louis XVIII",
        debut: 1814,
        fin: 1824,
        mort: 1824,
        dynastie: "bourbon",
        epouses: ["Marie-Joséphine de Savoie"],
        naissance: "Versailles",
        parents: "Louis, Dauphin de France et Marie-Josèphe de Saxe",
        anecdote: "Restauré sur le trône après la chute de Napoléon, ce roi bourbon tenta de restaurer la monarchie traditionnelle."
    },
    {
        nom: "Charles X",
        debut: 1824,
        fin: 1830,
        mort: 1836,
        dynastie: "bourbon",
        epouses: ["Marie-Thérèse de France"],
        naissance: "Versailles",
        parents: "Charles, comte d'Artois et Marie-Thérèse d'Espagne",
        anecdote: "Dernier roi bourbon à régner de manière absolutiste, il fut renversé par la Révolution de Juillet en 1830."
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

function createTimelineMarkers() {
    const timelineMarkersContainer = document.getElementById('timeline-markers');
    timelineMarkersContainer.innerHTML = ''; // Effacer les marqueurs existants

    // Années de début et de fin pour la chronologie
    const startYear = 987;
    const endYear = 1900;
    const timelineWidth = timelineMarkersContainer.offsetWidth;

    // Créer des marqueurs pour chaque siècle
    for (let year = 1000; year <= endYear; year += 100) {
        const position = ((year - startYear) / (endYear - startYear)) * 100;
        const marker = document.createElement('div');
        marker.classList.add('timeline-marker');
        marker.style.left = `${position}%`;
        marker.textContent = year;
        
        // Ajouter une ligne verticale pour chaque changement de siècle
        const verticalLine = document.createElement('div');
        verticalLine.classList.add('century-line');
        verticalLine.style.left = `${position}%`;
        
        timelineMarkersContainer.appendChild(marker);
        timelineMarkersContainer.appendChild(verticalLine);
    }
}

function createDynastyBlocks() {
    const dynastyBlocksContainer = document.getElementById('dynasty-blocks');
    dynastyBlocksContainer.innerHTML = ''; // Effacer les blocs existants

    const startYear = 987;
    const endYear = 1900;
    const timelineWidth = dynastyBlocksContainer.offsetWidth;

    const dynasties = [
        { name: 'capet', start: 987, end: 1328 },
        { name: 'valois', start: 1328, end: 1589 },
        { name: 'bourbon', start: 1589, end: 1792 },
        { name: 'bonaparte', start: 1804, end: 1870 },
        { name: 'orleans', start: 1830, end: 1848 }
    ];

    dynasties.forEach(dynasty => {
        const left = ((dynasty.start - startYear) / (endYear - startYear)) * 100;
        const width = ((dynasty.end - dynasty.start) / (endYear - startYear)) * 100;

        const block = document.createElement('div');
        block.classList.add('dynasty-block');
        block.setAttribute('data-dynastie', dynasty.name);
        block.style.left = `${left}%`;
        block.style.width = `${width}%`;

        dynastyBlocksContainer.appendChild(block);
    });
}

function createTimeline() {
    const timeline = document.getElementById('timeline');
    const timelineMarkers = document.getElementById('timeline-markers');
    
    createTimelineMarkers();
    createDynastyBlocks();

    // Création des cartes de rois
    roisDeFrance.forEach(roi => {
        const card = document.createElement('div');
        card.classList.add('king-card');
        card.setAttribute('data-dynastie', roi.dynastie);
        
        // Nom et années de règne
        const nomEtRegne = document.createElement('h3');
        nomEtRegne.textContent = `${roi.nom} (${roi.debut}-${roi.fin})`;
        card.appendChild(nomEtRegne);
        
        // Dates de naissance et de mort
        const dateVie = document.createElement('p');
        dateVie.textContent = `${roi.naissance}-${roi.mort}`;
        dateVie.classList.add('king-life-dates');
        card.appendChild(dateVie);

        card.addEventListener('click', () => {
            // Affichage des détails du roi
            const detailsContainer = document.getElementById('king-details');
            detailsContainer.innerHTML = `
                <h2>${roi.nom}</h2>
                <div class="king-info">
                    <p><strong>Règne :</strong> ${roi.debut}-${roi.fin}</p>
                    <p><strong>Naissance :</strong> ${roi.naissance}</p>
                    <p><strong>Décès :</strong> ${roi.mort}</p>
                    <p><strong>Dynastie :</strong> ${roi.dynastie.charAt(0).toUpperCase() + roi.dynastie.slice(1)}</p>
                    <p><strong>Parents :</strong> ${roi.parents}</p>
                    <p><strong>Épouse(s) :</strong> ${roi.epouses.join(', ')}</p>
                    <div class="anecdote-box">
                        <h3>Anecdote</h3>
                        <p>${roi.anecdote}</p>
                    </div>
                </div>
            `;
            
            // Mise en surbrillance du règne
            const existingHighlight = timelineMarkers.querySelector('.reign-highlight');
            if (existingHighlight) existingHighlight.remove();
            
            const highlight = document.createElement('div');
            highlight.classList.add('reign-highlight');
            highlight.style.left = `${(roi.debut - 987) / 10}%`;
            highlight.style.width = `${(roi.fin - roi.debut) / 10}%`;
            timelineMarkers.appendChild(highlight);
        });
        
        timeline.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', createTimeline);
