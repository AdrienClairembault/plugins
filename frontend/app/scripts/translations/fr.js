'use strict';

angular
   .module('frontendApp')
   .config(function($translateProvider) {
      $translateProvider
         .translations('fr', {
            ON: "sur",
            SLOGAN: "Etendez GLPI avec les plugins",
            TRENDING: "Tendances",
            TRENDING_SUB: "Plugins populaires le mois dernier",
            NEW: "Nouveaux",
            NEW_SUB: "Les plus récents",
            POPULAR: "Populaires",
            POPULAR_SUB: "Les mieux notés",
            UPDATED: "Mis à jour",
            UPDATED_SUB: "Derniers plugins mis à jours",
            TAGS: "Tags",
            TAGS_SUB: "Avec le plus de plugins",
            AUTHORS: "Auteurs",
            AUTHORS_SUB: "Avec le plus grand nombre de contributions",
            NAV_FEATURED: "À la une",
            NAV_ALLPLUGINS: "Tous les plugins",
            NAV_SEARCH: "Rechercher",
            NAV_SUBMIT_A_PLUGIN: "Ajouter votre plugin",
            NAV_CONTACT: "Contactez-nous",
            SEARCHBAR_PLACEHOLDER: "Recherche",
            VERSION: "Version",
            COMPATIBLE_WITH: "Compatible avec",
            HOMEPAGE: "Site internet",
            ADDED: "Ajouté",
            BY: "Par",
            CONTRIBUTED_TO: "à contribué à",
            PLUGIN_CONTRIBUTED_TO: "à contribué/travaillé sur ces plugins",
            TAGGED_WITH: "taggé sur",
            PLUGIN_TAGGED_WITH: "Plugins taggés avec",
            QUESTION_SUGGESTION_PROBLEM: "Une question, suggestion, ou un problème ?",
            PLEASE_SEND_US_A_MESSAGE: "N'hésitez pas à nous laisser un message",
            PLEASE_USE_SUGGESTION_TRACKER: "Si votre message concerne une demande de nouvelle fonctionalité pour GLPI, vous êtes fortement incité à utiliser notre feature request tracker à cette addresse",
            FIRSTNAME: "Prénom",
            LASTNAME: "Nom",
            EMAIL: "Email",
            SUBJECT: "Sujet",
            YOUR_MESSAGE: "Votre message",
            SUBMIT: "Envoyer",
            SUBMIT_YOUR_PLUGIN: "Ajouter votre plugin!",
            SUB_SUBMIT_YOUR_PLUGIN: "Veuillez fournir une URL vers le fichier xml décrivant votre plugin",
            GLPI_PLUGIN_CREATORS: "Créateurs de plugins GLPI",
            PAGINATION_RESULTS: "Résultats",
            PAGINATION_TO: "à",
            PAGINATION_ON: "sur un total de",
            PAGINATION_ELEMENTS: "elements",
            NO_RESULTS: "Aucun résultat",
            NEVER_UPDATED: "jamais mis à jour depuis la première publication",
            LOADING: "Chargement",
            NEVER_UPDATED: "jamais mis à jour depuis la première publication",
            LOGIN: "Connexion",
            USER_PANEL: "Réglages Profil",
            DISCONNECT: "Déconnexion",
            SIGNIN: "Connexion",
            SIGNUP: "S'enregistrer",
            INVALID_CREDENTIALS: "Mauvais nom d'utilisateur/mot de passe. Si vous n'êtes plus sur cliquez sur 'J'ai oublié mon mot de passe'",
            FIELD_REQUIRED: "* Required",
            EXTERNAL_ACCOUNT_ALREADY_PAIRED: "This external account has been already linked to another GLPI Plugins account.",
            PLUGIN_ALREADY_WATCHED: "You already watch that plugin",
            YOURE_NOW_WATCHING: "You are now watching",
            PLUGIN_UNWATCHED: "You unwatched",
            TAGGED: "Tagged",
            DOWNLOADED: "Downloaded",
            THIS_MONTH: "This month",
            THIS_WEEK: "This week"
         });
   });
