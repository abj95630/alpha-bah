(function() {
 const messages = JSON.parse("{\"VEVQ/A\":\"Votre établissement scolaire bénéficie d’un accès gratuit à vie à {0}, pour le personnel enseignant et les élèves jusqu’au baccalauréat. Vous pourrez :\",\"dt9fiA\":\"Nom de l’école ou de l’établissement\",\"JbUYSQ\":\"Saisissez le nom de votre établissement scolaire\",\"iq8uRw\":\"Continuer\",\"g20ONQ\":\"Continuer\",\"Y25XlQ\":\"Nom\",\"035brw\":\"Développement physique\",\"zpzNZw\":\"Format non pris en charge. Veuillez importer un autre fichier.\",\"kO13dQ\":\"Maternelle\",\"ODv74w\":\"Accéder aux paramètres\",\"zV4ZtQ\":\"Vous avez obtenu l’accès gratuit à {0}\",\"JVIbnA\":\"Date de l’année scolaire en cours\",\"ikM4xQ\":\"Veuillez confirmer que vous exercez en tant qu’enseignant.\",\"yEKbNA\":\"Prénom\",\"6kav7Q\":\"Importer un fichier JPG, PNG ou PDF\",\"3KX0zw\":\"Une fois votre candidature validée, l’équipe que vous avez sélectionnée passera à {0}.\",\"AqddWg\":\"Exclusivement réservé aux enseignants de l’école maternelle au secondaire\",\"Jfy3fg\":\"Accédez à notre pack éducatif gratuit pour les enseignants de l’école maternelle au secondaire\",\"Pbzn+Q\":\"Arts\",\"0uOFOw\":\"{0}\",\"hPUDfg\":\"Ceci nous aidera à trouver des modèles et des designs que vous pourriez aimer.\",\"/mefPQ\":\"Site web de l’établissement (facultatif)\",\"TotjfQ\":\"Collège\",\"HltI4w\":\"Importez un document ou la photo d’un document attestant de votre statut d’enseignant. Ce document devra comporter :\",\"xmpzhw\":\"Choisissez l’équipe que vous souhaitez abonner\",\"BjnhvA\":\"Un problème technique a empêché le chargement des informations de votre marque.\",\"AIoEzw\":\"Histoire\",\"nBxGCg\":\"Ceci nous aidera à trouver des modèles et des designs que vous pourriez aimer.\",\"HGTF2A\":\"Informatique\",\"esvPSg\":\"En saisissant vos informations, vous acceptez les <a href=\\\"{0}\\\" data-anchor-id=\\\"teacherVerificationTermsOfUse\\\">Conditions générales d’utilisation</a> de Canva Chine et notre <a href=\\\"{1}\\\" data-anchor-id=\\\"teacherVerificationPrivacy\\\">Politique de protection des informations personnelles</a>, qui explique comment nous traitons vos informations personnelles et comment exercer vos droits en matière de confidentialité.\",\"Qd/TAQ\":\"Supprimer\",\"/PdbMg\":\"Il semble qu’une erreur est survenue de notre côté.\",\"4wrA/A\":\"Vérifiez vos informations\",\"HZ9BlA\":\"Vous consentez à ce que Canva partage ces informations avec SheerID à des fins de vérification, qui les traitera conformément à sa <a href=\\\"{0}\\\" data-anchor-id=\\\"teacherVerificationSheerIdPrivacy\\\">Politique de confidentialité</a>.\",\"x8vpiQ\":\"Voir les documents acceptés\",\"8p+JgA\":\"Vérifiez vos informations\",\"1gkKcg\":\"Nous n’avons pas trouvé {0} dans notre liste d’établissements scolaires. Ce n’est pas un problème, mais nous avons besoin de davantage d’informations afin de vérifier que vous exercez en tant qu’enseignant.\",\"7VNx5A\":\"Réessayer\",\"AvGbPA\":\"Nous avons validé votre demande ! Vous avez désormais accès à {0}.\",\"4sgoMg\":\"Commerce\",\"ny06Ag\":\"Obtenez {0} gratuitement\",\"gS1i0g\":\"Réessayer\",\"+XKQtQ\":\"Adresse e-mail\",\"ftoR3w\":\"Santé\",\"Mex/PQ\":\"Envoyer\",\"yDGadw\":\"Encourage la créativité de vos élèves et <strong>permet de développer leurs compétences en communication visuelle</strong> en toute sérénité\",\"SrT1uQ\":\"Quelles matières enseignez-vous ?\",\"v5mjxg\":\"Remarque : vous pouvez uniquement changer la version d’une équipe dont vous avez la responsabilité.\",\"nEMAqw\":\"Biologie\",\"g+N6sQ\":\"Veuillez réessayer.\",\"KKc/eg\":\"Le site Web que vous avez saisi semble incorrect ou incomplet. Veuillez saisir l’adresse complète du site Web, y compris le http au début.\",\"ck+w/g\":\"Sélectionner une équipe\",\"8Gcrlg\":\"Nous allons étudier votre candidature. Nous vous informerons des prochaines étapes.\",\"WLhjcQ\":\"Veuillez saisir votre nom\",\"rDWDSg\":\"Permet de proposer un enseignement stimulant et <strong>des activités à réaliser en classe ou à la maison</strong>\",\"+/OYiA\":\"Primaire\",\"I1P7Mg\":\"Nous avons rencontré un problème lors de la vérification automatique de votre demande. Cliquez <a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">ici</a> pour effectuer votre demande via notre page d’assistance\",\"sMoZzA\":\"Ajoutez votre adresse e-mail pour passer à {0}.\",\"3T2fyw\":\"Veuillez saisir l’URL du site Web de votre établissement scolaire\",\"zoOQqg\":\"Nom complet\",\"3kFzsw\":\"Sélectionner les classes\",\"LZu/Eg\":\"Me le rappeler plus tard\",\"pFSg4w\":\"Numéro de téléphone mobile\",\"TG+QPw\":\"Chimie\",\"U8eu/A\":\"Sciences\",\"fLd1GQ\":\"Envoyer\",\"r4uF+A\":\"Ignorer\",\"O7nBVQ\":\"Retour\",\"xmxAZA\":\"Ignorer\",\"pKU4KA\":\"Économie\",\"Ur6EJw\":\"Commencer\",\"eJPu/w\":\"Veuillez vous rendre dans les paramètres du compte et ajouter une adresse e-mail dans « Votre compte » Une fois cette opération effectuée, rendez-vous dans « Facturation et Abonnements », puis cliquez sur « S’inscrire gratuitement » pour passer à {0}.\",\"mBBchA\":\"Français\",\"f1FQDw\":\"<strong>Des milliers de modèles de contenus pédagogiques prêts à l’emploi</strong> de tous types, pour toutes les matières et les classes\",\"MlK+Tg\":\"En attendant, vous pouvez continuer à utiliser Canva gratuitement.\",\"hPrOug\":\"Langues\",\"OzT18A\":\"Physique\",\"hJecCA\":\"Nous n’avons pas pu traiter votre demande en raison d’un problème de notre part. Réessayons.\",\"eY5INg\":\"Continuer\",\"i6/G1Q\":\"Votre demande est en cours de vérification !\",\"vHAGgA\":\"Continuer\",\"8eiNvg\":\"Je ne suis pas enseignant\",\"arPoVQ\":\"Nous vous communiquerons notre décision par e-mail dans un délai de 7 jours à l’adresse suivante : {0}\",\"+w6X2Q\":\"Veuillez saisir votre prénom\",\"yqFflg\":\"Nous avons besoin de quelques informations afin de vérifier que vous enseignez.\",\"Cg4Cxg\":\"En saisissant vos informations, vous acceptez les <a href=\\\"{0}\\\" data-anchor-id=\\\"teacherVerificationTermsOfUse\\\">Conditions générales d’utilisation</a> de Canva et reconnaissez avoir pris connaissance de notre <a href=\\\"{1}\\\" data-anchor-id=\\\"teacherVerificationPrivacy\\\">Politique de confidentialité</a>, qui explique comment nous traitons vos informations personnelles et comment exercer vos droits en matière de confidentialité.\",\"NNMCbg\":\"Nom de l’établissement\",\"CTItTg\":\"En quelles classes enseignez-vous ?\",\"iWWnGw\":\"Continuer\",\"OAYNEQ\":\"Réessayons...\",\"pUVppA\":\"Lycée\",\"juJxDw\":\"Je n’enseigne pas dans le primaire ou le secondaire\",\"ka1U+g\":\"Obtenir {0}\",\"+Q3bpQ\":\"{0} inclut l’ensemble des fonctionnalités premium de Canva et est entièrement gratuit pour le personnel enseignant éligible et leurs élèves.\",\"kpZUcw\":\"Mathématiques\",\"RJQWDg\":\"Continuer\",\"xnA0TQ\":\"Continuer\",\"r6QdAQ\":\"Sciences sociales\",\"vVYgrg\":\"Géographie\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["fr-FR"] = strings["fr-FR"] ? Object.assign(strings["fr-FR"], messages) : messages;
})();