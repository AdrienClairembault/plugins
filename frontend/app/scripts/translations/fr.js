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
            NAV_DEVELOPER_GUIDES: "Guides Développeur (API)",
            SEARCHBAR_PLACEHOLDER: "Recherche",
            VERSION: "Version",
            COMPATIBLE_WITH: "Compatible avec",
            HOMEPAGE: "Site internet",
            ADDED: "Ajouté",
            BY: "Par",
            CONTRIBUTED_TO: "à contribué à {{plugincount}} plugins",
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
            THIS_WEEK: "This week",
            TRANSLATIONS: "Traductions",
            XMLFILE_UNREACHABLE_URL: 'Unreachable URL',
            XMLFILE_PARSE_ERROR: 'XML Parse Error',
            XMLFILE_SPECIFICATION_ERROR: 'Specification Error',
            PANEL_DECLARE_NEW_OAUTH2_APP: 'Declare a new OAuth2 Application',
            PANEL_REGISTER_NEW_APP: 'Register a new Application to gain API access',
            PANEL_APPLICATION_NAME: 'Application Name',
            PANEL_HOMEPAGE_URL: 'Homepage URL (optional)',
            PANEL_APP_DESCRIPTION: 'Application description (optional, example "my simple script" or "OAuth signup with GLPI plugins")',
            PANEL_APP_CREATE: 'Create',
            PANEL_MY_APPLICATIONS: 'My applications',
            PANEL_EDIT_APP_SETTINGS: 'Edit your application settings',
            PANEL_SETTINGS: 'Settings',
            PANEL_CLIENT_ID: 'Client ID',
            PANEL_CLIENT_SECRET: 'Client Secret',
            PANEL_APPLICATION_NAME: 'Application Name',
            PANEL_APPLICATION_NAME_TOO_SHORT: 'Your application name must be at least {{n}} characters',
            PANEL_APPLICATION_NAME_TOO_LONG: 'Your application name musn\'t exceed {{n}} characters',
            PANEL_APP_HOMEPAGE_URL: 'Homepage URL (optional)',
            PANEL_HOMEPAGE_URL_NOT_VALID: 'This is not a valid URL',
            PANEL_APP_DESCRIPTION: 'Application description (optional, example "my simple script" or "OAuth signup with GLPI plugins")',
            PANEL_APP_DESCRIPTION_TOO_LONG: 'Your application description musn\'t exceed {{n}} chars',
            PANEL_APP_SAVE: 'Save',
            PANEL_APP_DELETE: 'Delete this app',
            AUTHOR_NAME: 'Name',
            AUTHOR_GLPI_PLUGINS_USERNAME: 'GLPi Plugins Username',
            AUTHOR_CONTRIBUTED_TO: 'Contributed to',
            AUTHOR_PLUGIN_COUNT: '{{plugincount}} Plugins',
            PANEL_CLAIM_AN_AUTHORSHIP: 'Claim an authorship',
            PANEL_CLAIM_AN_AUTHORSHIP_FEATURE_DESC: 'You can claim that you are a specific author once a plugin has been submitted via XML.',
            PANEL_CLAIM_AN_AUTHORSHIP_FEATURE_DESC2: 'If we accept the request (ie: make sure that you are the correct author), your user will be associated with all your plugins and you will be granted  with specific admin rights',
            PANEL_CLAIM_AN_AUTHORSHIP_AUTHOR_NAME: 'Author Name (as exactly mentionned in the &lt;author&gt; tag of the concerned plugins XML files)',
            PANEL_CLAIM_AN_AUTHORSHIP_CLAIM: 'Claim',
            PANEL_DELETE_ACCOUNT: 'Delete your GLPi Plugins Account',
            PANEL_DELETE_ACCOUNT_CONFIRM: 'We need you to confirm your password in order to delete your GLPi Plugins account.',
            PANEL_DELETE_ACCOUNT_PASSWORD: 'Password',
            PANEL_DELETE_ACCOUNT_DELETE: 'Delete Account',
            DOWNLOADED_N_TIMES: 'Downloaded {{n}} times',
            ADDED_ON_DATE: 'Added on {{date}}',
            UPDATED_MOMENTS_AGO: 'Updated {{momentsago}}',
            ADDED_MOMENTS_AGO: 'Added {{momentsago}}',
            TAGGED_ON_N_PLUGINS: 'Tagged on {{plugincount}} plugins',
            CONTRIBUTED_TO_N_PLUGINS: 'Contributed to {{plugincount}} plugins',
            FINISHACTIVEACCOUNT_CLOSE_TO_THE_GOAL: 'You\re close to the goal',
            FINISHACTIVATEACCOUNT_WE_NEED_YOU_TO_VALIDATE_SOME_DATA: 'We need you to validate some data',
            FINISHACTIVEACCOUNT_CONFIRM_USERNAME: 'Confirm (or change) your username',
            FINISHACTIVATEACCOUNT_SELECT_PRIMARY_EMAIL: 'Select a primary email from one of your external account',
            FINISHACTIVEACCOUNT_CONFIRM: 'Confirm',
            LINKACCOUNT_AN_EXTERNAL_SOCIAL_ACCOUNT: 'Link an external social account',
            LINKACCOUNT_LINK_A_NEW_ACCOUNT: 'Link a new account',
            LINKACCOUNT_EXTERNAL_ACCOUNTS: 'Your external accounts',
            LINKACCOUNT_SERVICE: 'Service',
            LINKACCOUNT_USERID: 'User #ID',
            LINKACCOUNT_UNLINK: 'Unlink',
            NOTIFICATIONS_PLUGINS_WATCHED: 'Plugins watched',
            NOTIFICATIONS_YOURE_NOT_WATCHING_ANY_PLUGINS: 'You\'re currently not watching any plugins',
            NOTIFICATIONS_YOULL_RECEIVE_NOTIFICATIONS_ON_UPDATE: 'You\ll receive notifications on update',
            NOTIFICATIONS_UNWATCH: 'unwatch',
            NOTIFICATIONS_DISCOVER_AND_SUBSCRIBE: 'You can also discover new plugins and subscribe to notifications from the plugin pages',
            NOTIFICATIONS_PLEASE_CHECK_THOSE_TRENDING_PLUGINS: 'Please check those trending plugins',
            PANEL_MY_INFORMATIONS: 'My informations',
            PANEL_USERNAME: 'Username',
            PANEL_USERNAME_TOOSHORT: 'Your username needs to be at least {{n}} characters',
            PANEL_USERNAME_TOOLONG: 'Your username cannot exceed {{n}} characters',
            PANEL_REALNAME: 'Real Name',
            PANEL_REALNAME_TOOSHORT: 'Your realname needs to have at least {{n}} characters',
            PANEL_REALNAME_TOOLONG: 'Your realname cannot exceed {{n}} characters',
            PANEL_EMAIL: 'Email',
            PANEL_FIELD_REQUIRED: 'Field required',
            PANEL_INVALID_EMAIL: 'This is an invalid email address',
            PANEL_WEBSITE: 'Website',
            PANEL_INVALID_WEBSITE: 'This is an invalid URL for a website',
            PANEL_PASSWORD: 'Password',
            PANEL_PASSWORD_CONFIRMATION_DIFFERENT: 'Password and Confirmation aren\'t the same',
            PANEL_PASSWORD_TOOSHORT: 'Password must be at least {{n}} characters',
            PANEL_PASSSWORD_TOOLONG: 'Password must not exceed {{n}} characters',
            PANEL_CONFIRM_PASSWORD: 'Confirm password',
            PANEL_UPDATE: 'Update',
            PANEL_ACTIONS: 'Actions',
            PANEL_MANAGE_EXTERNAL_SOCIAL_ACCOUNTS: 'Manage my external social accounts',
            PANEL_NOTIFICATIONS_SETTINGS: 'Notifications settings',
            PANEL_MANAGE_API_KEYS: 'Manage API Keys (and according Apps)',
            PANEL_PLEASE_DELETE_MY_ACCOUNT: 'Please, delete my account',
            PANEL_MY_PLUGINS: 'My plugins',
            PANEL_AWAITING_CONFIRMATION: 'Awaiting Confirmation',
            PANEL_UNREACHABLE_XML_FILE_URL: 'Unreachable XML File URL',
            PANEL_INVALID_XML: 'Invalid XML',
            PANEL_DELETE_RELATION_TO_PLUGINS: 'Delete your relation to this plugin',
            PANEL_MANAGE_PERMISSIONS: 'Manage permissions',
            PANEL_RELOAD_XML: 'Reload XML',
            PANEL_PLUGIN_PANEL: 'Plugin Panel',
            N_VOTES: '{{n}} votes',
            DOWNLOADS: 'downloads',
            DOWNLOAD: 'Download',
            PLUGIN_UNWATCH: 'Unwatch',
            PLUGIN_WATCH: 'Watch',
            PLUGIN_ISSUES: 'Issues',
            SORT_BY: 'Sort by',
            RELEVANCE: 'Relevance',
            POPULARITY: 'Popularity',
            PLUGIN_PANEL: 'Plugin Panel',
            PLUGIN_PANEL_SUMMARY: 'Summary',
            PLUGIN_PANEL_XML_STATE: 'XML State',
            PLUGIN_PANEL_N_TIMES: '{{n}} times',
            PLUGIN_PANEL_CONTRIBUTORS: 'Contributors (Listed in the XML File)',
            PLUGIN_PANEL_SETTINGS: 'Settings',
            PLUGIN_PANEL_XML_URL: 'Authoritative Plugin Meta-Description File URL (XML File, see specification)',
            PLUGIN_PANEL_ACTIONS: 'Actions',
            PLUGIN_PANEL_REFRESH_XML_FILE: 'Refresh XML File',
            PLUGIN_PANEL_USER_PERMISSIONS: 'Manage User Permissions',
            PLUGIN_PANEL_URLNOTREACHABLE: 'The url {{url}} is not reachable.',
            PLUGIN_PANEL_FIELD_FAILS_TO_RESPECT_SPEC: 'The field {{field}} fails to respect specification',
            PLUGIN_PANEL_ERROR_AT_LINE_N: 'Error at line {{n}}',
            PLUGIN_PANEL_SEE_PUBLIC_PAGE: 'See public page',
            PLUGIN_PANEL_SAVE: 'Save',
            PLUGIN_PERMISSIONS_OF_PLUGIN: 'Manage permissions of GLPi Plugins Users on "{{pluginkey}}" Plugin',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS: 'User permissions',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_1: 'For each permission line, there are boxes for each possible right you can grant to a GLPi Plugins user over the plugin.',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_2: 'Simply check or uncheck the boxes to instantly set/remove the right, for the permission line of an user.',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_3: 'Close the dialog once you finished your permissions management.',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_4: 'Use the red button with a cross to totally remove the permission line for that user, with all her\'s/he\'s rights on the plugin',
            PLUGIN_PERMISSIONS_ADMIN: 'Admin',
            PLUGIN_PERMISSIONS_ALLOWED_EVERYTHING: 'Allowed Everything',
            PLUGIN_PERMISSIONS_REFRESH_XML: 'Allowed to refresh the synchro with the XML file',
            PLUGIN_PERMISSIONS_RECEIVE_NOTIFICATIONS: 'Receive notifications about XML passing status',
            PLUGIN_PERMISSIONS_ALLOWED_CHANGE_XML_URL: 'Allowed to change the XML URL',
            PLUGIN_PERMISSIONS_DELETE_USER_RIGHT: 'Delete this user right',
            PLUGIN_PERMISSIONS_ADD_USER_PERMISSIONS: 'Add user permissions',
            PLUGIN_PERMISSIONS_AUTOCOMPLETE_PLACEHOLDER: 'Please type the username, realname or email of a registered user, then use arrow and enter to select the user',
            PLUGIN_PERMISSIONS_AUTOCOMPLETE_NO_MATCHING_USERS: 'No matching user.',
            SIGNIN_PAGE_TITLE: 'Connecting with GLPI Plugins Account',
            SIGNIN_USERNAME_OR_EMAIL: 'Username or Email',
            SIGNIN_PASSWORD: 'Password',
            SIGNIN_LOGIN: 'Login',
            SIGNIN_OR_CONNECT_WITH_AN_EXTERNAL_ACCOUNT: 'Or connect with an external account',
            SIGNUP_REGISTER_MANUALLY: 'Register Manually',
            SIGNUP_USERNAME: 'User Name',
            SIGNUP_USERNAME_TOOSHORT: 'Your username needs to be at least {{n}} characters',
            SIGNUP_USERNAME_TOOLONG: 'Your username cannot exceed {{n}} characters',
            SIGNUP_USERNAME_BADCHARACTERS: 'Your username should contain only alphanumeric characters',
            SIGNUP_REALNAME: 'Real Name',
            SIGNUP_REALNAME_TOOSHORT: 'Your realname needs to be at least {{n}} characters',
            SIGNUP_REALNAME_TOOLONG: 'Your realname cannote exceed {{n}} characters',
            SIGNUP_EMAIL: 'Email',
            SIGNUP_EMAIL_INVALID: 'This is an invalid email',
            SIGNUP_WEBSITE: 'Website',
            SIGNUP_WEBSITE_INVALID: 'This is an invalid website',
            SIGNUP_PASSWORD: 'Password',
            SIGNUP_PASSWORD_DIFFERENT: 'Password and Confirmation aren\'t the same',
            SIGNUP_PASSWORD_TOOSHORT: 'Password must be at least {{n}} characters',
            SIGNUP_PASSWORD_TOOLONG: 'Password must be at least {{n}} characters',
            SIGNUP_PASSWORD_CONFIRM: 'Confirm password',
            SIGNUP_OR_LINK_YOUR_ACCOUNT: 'Or link your account',
            SUBMIT_PLUGIN_URL: 'URL',
            SUBMIT_YOU_MUST_BE_AUTHED: 'You must be authed',
            SUBMIT_YOU_MUST_BE_AUTHED_2: 'You must be authed in order to submit your plugin',
            SUBMIT_PLEASE: 'Please',
            SUBMIT_SIGNIN: 'Sign-In',
            SUBMIT_IF_YOU_DONT_HAVE_AN_ACCOUNT: 'If you don\'t own a GLPi Plugins Account already, please consider to',
            SUBMIT_REGISTER: 'Register',
            SUBMIT_YOUR_XML_MUST_BE_VALID: 'Your XML must be valid',
            SUBMIT_AND_RESPECT_THIS_FORMAT: 'and respect his format',
            SUBMIT_XML_DISPLAYED_NAME: 'Displayed name',
            SUBMIT_XML_KEY: 'System name',
            SUBMIT_XML_SHORT_DESCRIPTION: 'short description of the plugin, displayed in plugin lists, text only',
            SUBMIT_XML_LONG_DESCRIPTION: 'long description of the plugin, displayed in plugin cards, Markdown accepted',
            SUBMIT_XML_YOUR_NAME: 'Your name',
            TAGS_TAGGED_ON_N_PLUGINS: 'Tagged with {{n}} plugins',
            VIEWAPIKEY_PAGE_TITLE: 'View Client Credentials',
            VIEWAPIKEY_CLIENT_CREDENTIALS: 'Client Credentials',
            VIEWAPIKEY_CLIENT_ID: 'Client ID',
            VIEWAPIKEY_CLIENT_SECRET: 'Client Secret'
         });
   });
