// Tableau contenant les projets avec leurs titres, descriptions et images associées
const projects = [
  {
    title: "Projet 1: Créer un post Instagram pour une marque de voiture",
    description: "Dans ce projet, il fallait créer un poste de voiture autour de la marque Aixam. Pour commencer, il fallait créer un fichier sur Photoshop avec les dimensions suivantes : 1080 pixels par 1350 pixels.Ensuite, il fallait changer la couleur de la voiture qui était rouge pour qu'elle devienne bleu en utilisant un masque de saturation . Après on devait créer un arrière plan afin de rajouter les infos suivantes :le modèle de la voiture, le slogan, le prix du véhicule et enfin le logo de la marque. Sachant qu'il fallait varier les typographies et bien respecter les espaces entre chaque élément pour créer un post agréable visuellement.",
    image: "images/post-voiture-1080x1350-cp.jpg",
    category: "Exprimer"
  },
  {
    title: "Projet 2: Visuel de promotion pour un espace thermoludique ",
    description: "Dans ce projet, il faillait créer un visuel de promotion pour un espace thermoludique qui se nommme Vitalys. Il fallait donc créer l'identité visuelle en commençant par la crétion du logo.Ensuite, mon camarade a créé le flyer sur Canva en inscrutant des images dans des cadres circulaires. Pour les images ainsi que le background, il s'est inspiré de l'ancien espace thermoludique de Ravine Chaude qui se situait au Lamentin.Enfin, il a rajouté les informations suivantes : le nom de l'enseigne, le slogan et la date de réouverture. ",
    image: "images/Affiche-Vitalys-cp.jpg",
    category: "Exprimer"
  },
  {
    title: "Projet 3: Création d'un logo unique, Dragonix le studio de jeu de combat Next Gen",
    description: "Dans ce projet, il fallait créer un logo . Donc pour se faire il fallait déjà donner les valeurs de la marque ensuite choisir une typographie pour donner une identité visuelle. Après, il fallait se l'approprier c'est-à-dire la déformer, rajouter des effets comme de la saturation, du dégradé, un contour ou autre pour la rendre unique. Enfin, on devait intégrer le logo sur divers mockups par exemples des produits dérivés et faire en sorte que le logo soit responsive donc qu'il soit adaptable à différents supports (site,papeterie,réseaux sociaux, télévision, documents officiels etc.). Bien sûr, Le logo doit être uniforme et équilibré pour garantir une identité visuelle cohérente, facilement reconnaissable et professionnelle. Un design équilibré assure une bonne lisibilité et une harmonie visuelle, quelle que soit sa taille ou son support, tout en offrant une polyvalence technique pour s’adapter à différents contextes (fonds clairs, sombres, monochromes). Cette uniformité préserve l’impact visuel et l’intégrité de la marque, renforçant sa fiabilité et sa capacité à marquer durablement l’esprit du public. ",
    image: "images/Plan-de-travail-9_3-cp.jpg",
    category: "Concevoir"
  },
  {
    title: "Projet 4: Réaliser un visionboard",
    description: "Pour ce travail , il fallait réaliser un collage ou une affiche représentant votre image de soi idéale via un vision board branding (soit par canva ou tout autre outil dédié ) en utilisant des mots , des affirmations , des lieux , des personnes qui vous inspirent par exemple.",
    image: "images/My-Vision-Board-cp 3.jpg",
    category: "Entreprendre"
  },
  {
    title: "Projet 5: SAE 1.05 : Produire un site web",
    description: "Dans ce troisième projet , l’objectif était de développer pour le web et les médias numériques . Pour commencer , il fallait constituer un groupe de 3 , trouver le nom d’une agence et choisir un sujet pour la création du site . Par exemple avec mon groupe , notre agence s’appelait  » Watermelon Agency » et le thème était sur la culture guadeloupéenne. Ensuite , il fallait faire une brève présentation de notre thématique . Puis constituer une « première maquette » ( une ébauche) et plus tard , une maquette animée qui a été réalisée par mes camarades à l’aide du logiciel « Figma » . On a également fais une répartition des tâches : une personne pour le design des pages , un autre pour la programmation en HTML et CSS et moi qui faisait la recherches des informations. Notre page web est constitué de 4 pages : une page d’accueil et les trois autres traitent sur un sujet de la culture guadeloupéenne ( Cuisine , Danses , Arts). De mon côté , je me suis renseigné sur chaque sujet en faisant des recherches sur internet et j’ai aussi cherché des images pour illustrer les pages de notre site mais j’ai aussi aidé ma camarade pour le code en réalisant 2 pages du site et après , elle a amélioré la mise en page afin que les pages soient plus agréables visuellement . Enfin , je suis particulièrement satisfait de ce projet car il est celui que je trouve le mieux réalisé pour le moment",
    image: "images/Culture-Gwada-1-cp.jpg",
    link: "https://culture-guadeloupeenne.onrender.com/",
    category: "Développer"
  },
  {
    title: "Projet 6: Projet tournois de jeux vidéos",
    description: "Pour ce travail en groupe , il fallait effectuer un projet quelconque en faisant un planning ,un SMART ainsi qu’une affiche . Pour ce faire , nous avons décidé de créer un tournois de jeux vidéos où la participation était gratuite . Avant tout ça , nous avons répartis les tâches :  la partie communication , design , budgétaire et matérielle avec des deadlines pour chaque tâche. Ensuite , on a pensé aux lots pour les gagnants qui sont au nombre de 3 ( figurine , casque et manette PS5) . On a vérifié qu’on avait tous le matériel qu’on avait à disposition ( manettes , ordinateurs et câbles). On a établi un budget de 200€ pour financer tous notre projet ainsi qu’une tombola pour ceux qui voulaient gagner un lot. Enfin , nous avons réservé une salle à l’université , communiquer notre tournoi via WhatsApp vu qu’il était uniquement pour la classe. ",
    image: "images/Affiche-Gaming-Tournament-cp.jpg",
    category: "Entreprendre"
  },
  {
    title: "Projet 7 : Affiche gardien de la galaxie",
    description: "Pour ce devoir , il fallait créer une affiche pour un autre film en reprenant la technique utilisée pour le tutoriel AFFICHE X-MEN. En l’occurrence , j’ai pris comme personnage Star Lord du film « Les Gardiens de la Galaxie » en incrustant à un fond de type paysage extraterrestre et pour rajouter du réalisme j’ai repris la police d’écriture exacte ( Guardian) . Tout cela en m’inspirant du tutoriel évoqué précédemment.",
    image: "images/Affiche gardien de la galaxie 2.png", // mets le vrai nom de ton image ici
    category: "Exprimer"
  },
  {
  title: "Projet 8 : SAE 1.04 : Produire un contenu audio et visuel :",
  description: "Dans ce projet , en groupe , il fallait trouver une idée , créer un scénario , faire le découpage technique , tourner le film et enfin , faire un montage de ce dernier . L’ objectif était de concevoir un court-métrage d’une fiction de 3 minutes maximum . Voici notre synopsis : Nous suivons la vie d’un homme passionné par le mime, mais malheureusement, son talent est incompris et se retrouve souvent moqué et insulté par les autres. Il se sent seul et rejeté à cause de sa passion. On a également fais la répartition des rôles : un caméraman , trois personnages principaux et 2 figurants . Dans mon cas , j’étais caméraman et donc je me suis occupé du tournage de chaque séquence . Chaque membre du groupe a apporté son point de vue pour chaque prise afin d’améliorer ou non la qualité du film .",
  image: "images/miniature silent resilience.jpg", // miniature de ta vidéo
  videoLink: "https://youtu.be/VSV6v8G04TM", // remplace avec ton lien
  category: "Exprimer"
  },
// Projet 9 : Présentation Canva
  {
  title: "Projet 9 : Stratégie de communication pour l’agence Penchard Voyages",
  description: "Pour ce travail, il fallait présenter une agence de voyage en analysant sa strategie de communication. Pour ce faire, il fallait choisir une agence, s’informer sur eux. Ensuite, on devait repérer les axes de communication, les cibles (touristes, homme d’affaire), les moyens / canaux de communications (réseaux sociaux, campagnes…). Pour terminer, quels seraient les points à ameliorer sur leurs communications par rapport à la veille concurrentielle.",
  image: "images/miniaPenchardVoyages.png", // miniature de présentation Canva
  link: "https://www.canva.com/design/DAF9hgMg5fk/tj5q3TEPBid1fU-6yhUauA/view?utm_content=DAF9hgMg5fk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8031a5b60c", // lien Canva
  category: "Comprendre"
  },

// Projet 10 : Vidéo Audit – Partie 1
  {
  title: "Projet 10 : SAE 1.01 : Auditer une communication numérique",
  description: "Dans ce premier projet , le but était de comprendre les écosystèmes, les besoins des utilisateurs et les dispositifs de communication numérique. Pour ce faire , nous devons former un groupe de 4 personnes , choisir 2 vidéos qui proviennent d’ une chaîne YouTube qui se nomme « Cellule Enov » . Ensuite , nous devons analyser chacune des vidéos en donnant les points positifs et négatifs afin de savoir ce qu’il fallait améliorer . Par exemple , il fallait vérifier si la vidéo était de bonne qualité au niveau visuel et sonore , si les explications étaient claires et précises, si la vidéo était référencée ou pas , si la vidéo était structurée ( avec une introduction , un développement , une conclusion) ou encore si le langage et le format était adapté au public visé . Tous ces critères permettaient d’apporter des améliorations à ces dernières.",
  image: "images/miniaVidéoCelluleEnov.png",
  videoLink: "https://youtu.be/i03nImANt1k?si=dkYsDkVAuSJQ318M",
  category: "Comprendre"
  },
  {
    title: "Projet 11 : Concevoir une affiche pour présenter les différentes filières de L'IUT ",
    description: "Dans ce projet, il fallait créer un visuel pour promouvoir les filières de l’IUT de la Guadeloupe. Pour ce faire, j’ai conçu un flyers en intégrant chaque filière sous forme de carte avec pour chacun un code couleurs (par exemple le violet pour le BUT MMI), une icône qui représente la promo en question, un QR Code qui renvoi à chaque formation avec une couleur dédiée ainsi qu’une description rapide en ce qui concerne les parcours. Pour finir, j’ai rajouté les coordonnées de L’IUT avec l’adresse, le mail ainsi que le numéro de téléphone et bien sûr le logo officiel de ce dernier dans un coin de l’affiche. J’ai utilisé un fond dégradé simple mélangeant du gris et du blanc ainsi qu’une police moderne afin que le visuel reste sobre, lisible et moderne, tout en le rendant attrayant.",
    image: "images/Affiche-formations-IUT-de-la-Guadeloupe-V2.jpg",
    category: "Concevoir"
  },
  {
    title: "Projet 12 : SAE 1.02 : Concevoir une recommandation de communication numérique ",
    description: "Dans ce second projet , le but était de concevoir ou coconcevoir une réponse stratégique pertinente à une problématique complexe. Tout d'abord , on devait choisir une ou plusieurs notions ( grammaire , conjugaison …) pour promouvoir les cours en anglais. Ensuite , en tant que chargés de communication juniors, nous devons concevoir une recommandation de communication pour la sortie ou le repositionnement d’un produit ou d’un service dans un contexte international. En l'occurrence ici , c'était le repositionnement d'un service car il fallait créer une affiche ludique et attractive en anglais qui présentait une notion d'un cours afin de permettre aux élèves/étudiants de continuer l'apprentissage de cette langue vivante.",
    image: "images/English.png",
    category: "Concevoir"
  },
  {
    title: "Projet 13 : Design émotionnel pour une campagne de sensibilisation (chlordécone)",
    description: "Dans ce devoir , il fallait créer un design émotionnel pour une campagne de sensibilisation à la pollution au chlordécone en Guadeloupe . L’objectif était de permettre aux étudiants d’appréhender, les principes du design émotionnel en les invitant à créer une affiche, un produit ou une page d’accueil d’un site internet pour une campagne de sensibilisation à la pollution au chlordécone en Guadeloupe. Tout d’abord , il fallait identifier le problème en analysant les effets néfastes de la pollution au chlordécone sur l’environnement (sol, mer rivière…), les habitants, les plantations et les émotions ressenties face à ce problème (colère,tristesse, impuissance, etc.). Ensuite , il fallait définir les objectifs émotionnels . Puis , j’ai du appliquer les techniques de design émotionnel en faisant du storytelling  , un design sensoriel et d’interaction . Enfin , j’ai créer une affiche qui permet de diffuser le message de manière concise et percutante dans des espaces publics.",
    image: "images/Affiche-de- campagne-de sensibilisation-sur le-chlordécone.jpg",
    category: "Concevoir"
  },
  {
    title: "Projet 14: SAE 2.02 : Concevoir un produit ou un service et sa communication",
    description: "Dans ce projet, les objectifs étaient :  de concevoir ou co-concevoir une réponse stratégique pertinente à une problématique complexe d’exprimer un message avec les médias numériques pour informer et communiquer , de développer pour le web et les médias numériques et d’entreprendre dans le secteur du numérique . Pour commencer , il fallait constituer un groupe de 3 et après il fallait se répartir les rôles et les tâches , c’est-à-dire une personne faisait la partie design , une autre la communication/marketing et la dernière la création du site web. Pour ma part , je me suis occupé de la création d’un site de type vitrine pour une marque de thé glacé en Guadeloupe (Thé Pays) en intégrant 4 pages principales : Accueil , Nos boissons ( shop) , A propos de nous et Contact en reprenant les codes et valeurs de l’entreprise.  J’ai également assurer la gestion et la suivi du projet en faisant des comptes rendus et un diagramme de Gantt .", 
    image: "images/minia site thé pays.png",
    link: "https://xn--thpays-cva.com/",
    category: "Développer"
  },
];
let currentFilteredProjects = []; // <-- Tableau des projets affichés

function renderProjects(category = "all") {
  const container = document.getElementById("projectList");
  container.innerHTML = "";

  // Filtrage
  const filtered = category === "all"
    ? projects
    : projects.filter(p => p.category === category);

  // 🔁 On stocke les projets affichés
  currentFilteredProjects = filtered;

  // Création des cartes
  filtered.forEach((p, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="project-card">
        <img src="${p.image}" alt="${p.title}" class="project-image" data-index="${index}">
        <div class="project-title">${p.title}</div>
      </div>
    `;
    container.appendChild(col);
  });

  // 🔁 Clic sur les images
  document.querySelectorAll(".project-image").forEach((img) => {
    img.addEventListener("click", () => {
      currentProjectIndex = parseInt(img.getAttribute("data-index")); // ← index dans currentFilteredProjects
      openModal(currentProjectIndex); // On affiche le bon projet
    });
  });
}


// Ajoute le clic sur les boutons de filtre
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    // Gestion de l'état "actif" sur le bouton
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    renderProjects(category);
  });
});


// Variable pour suivre l'index du projet actuellement affiché dans le modal
let currentProjectIndex = 0;

// Récupération du modal Bootstrap et des éléments HTML associés
const modal = new bootstrap.Modal(document.getElementById("projectModal"));
const modalTitle = document.getElementById("modalProjectTitle");
const modalImage = document.getElementById("modalProjectImage");
const modalDescription = document.getElementById("modalProjectDescription");
const prevButton = document.getElementById("prevProject");
const nextButton = document.getElementById("nextProject");

// Ajout d'un gestionnaire d'événement sur chaque image de projet
document.querySelectorAll(".project-image").forEach((img, index) => {
  img.addEventListener("click", () => {
    currentProjectIndex = index; // Met à jour l'index du projet sélectionné
    openModal(currentProjectIndex); // Ouvre le modal avec les infos du projet
  });
});

// Gestion du bouton "précédent" dans le modal
prevButton.addEventListener("click", () => {
  // Décrémente l'index du projet, et revient au dernier projet si l'index est négatif
  currentProjectIndex = currentProjectIndex = (currentProjectIndex - 1 + currentFilteredProjects.length) % currentFilteredProjects.length;
  openModal(currentProjectIndex);
});

// Gestion du bouton "suivant" dans le modal
nextButton.addEventListener("click", () => {
  // Incrémente l'index du projet, et revient au premier projet si on dépasse le dernier
  currentProjectIndex = (currentProjectIndex + 1) % currentFilteredProjects.length;
  openModal(currentProjectIndex);
});

// Fonction pour ouvrir le modal et afficher les informations du projet sélectionné
function openModal(index) {
  const project = currentFilteredProjects[index];

  modalTitle.textContent = project.title;
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = "";

  let content;

  if (project.videoLink) {
    content = document.createElement("div");
    content.innerHTML = `
      <img src="${project.image}" alt="Miniature de la vidéo" class="img-fluid mb-3">
      <div class="text-center">
        <a href="${project.videoLink}" target="_blank" class="btn btn-danger" rel="noopener noreferrer">
          <i class="bi bi-youtube"></i> Voir sur YouTube
        </a>
      </div>
    `;
  }
  
  else if (project.link) {
    // Lien externe (Canva)
    content = document.createElement("div");
    content.innerHTML = `
      <img src="${project.image}" alt="Miniature présentation" class="img-fluid mb-3">
      <div class="text-center">
        <a href="${project.link}" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Voir la présentation</a>
      </div>
    `;
  } else {
    // Image classique
    content = document.createElement("img");
    content.src = project.image;
    content.alt = "Image du projet";
    content.className = "img-fluid mb-3";
  }

  const description = document.createElement("p");
  description.textContent = project.description;
  description.className = "mt-3";

  modalBody.appendChild(content);
  modalBody.appendChild(description);

  modal.show();
}



// Ajout d'un écouteur d'événements au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(); // Affiche tous les projets au début
});


  // Ajoute un gestionnaire d'événements pour un défilement fluide au clic
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Empêche le comportement par défaut du lien
      const targetId = link.getAttribute("href").substring(1); // Récupère l'ID de la section ciblée
      const targetSection = document.getElementById(targetId);

      // Effectue un défilement fluide vers la section
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Ajuste la position en fonction de la barre de navigation
        behavior: "smooth", // Animation fluide
      });

      // Met à jour l'état actif des liens
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Sélectionne toutes les sections de la page
  const sections = document.querySelectorAll("section");

  //Ajoute un écouteur d'événements pour détecter la section active lors du défilement
  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60; // Ajuste la position en fonction de la barre de navigation
      const sectionHeight = section.offsetHeight;
      if (
        pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id"); // Récupère l'ID de la section visible
      }
    });

    // Met à jour la classe active des liens de navigation
    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });


// Gestion du menu hamburger sur mobile
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");

  // Ajoute un gestionnaire d'événements pour afficher/masquer le menu mobile
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
  });
});

// Attend que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne toutes les barres de progression sur la page
  const progressBars = document.querySelectorAll(".progress-bar");

  // Crée un observateur pour détecter quand les barres de progression entrent dans le champ de vision
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Vérifie si l'élément est visible à l'écran
          let progressBar = entry.target;
          let maxWidth = progressBar.getAttribute("aria-valuenow"); // Récupère la valeur cible de la barre (pourcentage)

          // Applique la largeur correspondant à la valeur cible pour animer la barre
          progressBar.style.width = maxWidth + "%";
        }
      });
    },
    { threshold: 1.0 }
  ); // L'animation ne démarre que lorsque 100% de l'élément est visible

  // Initialise les barres à 0% au chargement de la page pour éviter qu'elles soient déjà remplies
  progressBars.forEach((bar) => {
    bar.style.width = "0%";
    observer.observe(bar); // Observe chaque barre de progression
  });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi classique

  let form = this;
  let formData = new FormData(form);
  let formMessage = document.getElementById("formMessage");

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
  .then((response) => {
    if (response.ok) {
      formMessage.className = "alert alert-success";
      formMessage.textContent = "Votre message a bien été envoyé !";
      formMessage.classList.remove("d-none");
      form.reset();
    } else {
      return response.json().then(data => {
        throw new Error(data.error || "Erreur lors de l'envoi.");
      });
    }
  })
  .catch((error) => {
    formMessage.className = "alert alert-danger";
    formMessage.textContent = "Une erreur est survenue. Veuillez réessayer plus tard.";
    formMessage.classList.remove("d-none");
  });
});

      .finally(() => {
        formMessage.classList.remove("d-none");
      });
  });
// Vérification de l'adresse mail
document.getElementById("email").addEventListener("input", function () {
  let emailHelp = document.getElementById("emailHelp");
  if (this.value.includes("@")) {
    emailHelp.classList.add("d-none");
  } else {
    emailHelp.classList.remove("d-none");
  }
});
