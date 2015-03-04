angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    poste: "Prez d'honneur",
    name: 'Mathilde Muraz',
    surname:'Mathou',
    face: '/img/liste/prezh.png',
    detail: 'ce que tu veux',
    sport1:'Basket',
    sport2:'Rugby',
    sport3:'Pompom',
    ion1:'ion-ios7-basketball',
    ion2:'ion-ios-americanfootball',
    ion3:'ion-ios-flower'
  },{
    id: 1,
    poste: 'Président',
    name: 'Thomas Boit',
    surname:'Boit',
    face: '/img/liste/prez.png',
    detail: 'ce que tu veux',
    sport1:'Basket',
    sport2:'',
    ion1:'ion-ios7-basketball',
    ion2:''
  },{
    id: 2,
    poste: 'Vice Président',
    name: 'Tom Saurin',
    surname:'Tom',
    face: '/img/liste/vprez.png',
    detail: 'ce que tu veux',
    sport1:'Rugby',
    sport2:'Tennis',
    ion1:'ion-ios-americanfootball',
    ion2:'ion-ios-tennisball'
  },{
    id: 3,
    poste: 'Secrétaire',
    name: 'Chloé Bégon',
    surname:'Clo',
    face: '/img/liste/sec1.png',
    detail: 'ce que tu veux',
    sport1:'Rugby',
    sport2:'Hand',
    sport3:'Pompom',
    ion1:'ion-ios-americanfootball',
    ion2:'ion-ios-football-outline',
    ion3:'ion-ios-flower'
  },{
    id: 4,
    poste: 'Secrétaire',
    name: 'Pauline Lamoureux',
    surname:'Popole',
    face: '/img/liste/sec2.png',
    detail: 'ce que tu veux',
    sport1:'Foot',
    sport2:'Pompom',
    ion1:'ion-ios7-football',
    ion2:'ion-ios-flower'
  },{
    id: 5,
    poste: 'Trésorier',
    name: 'Maud Cohen',
    surname:'Maud',
    face: '/img/liste/trez.png',
    detail: 'ce que tu veux',
    sport1:'Rugby',
    sport2:'Volley',
    ion1:'ion-ios-americanfootball',
    ion2:'ion-social-chrome'
  },{
    id: 6,
    poste: 'Vice Trésorier',
    name: 'Martin Jacob',
    surname:'Jacob',
    face: '/img/liste/vtrez.png',
    detail: 'ce que tu veux',
    sport1:'Rugby',
    sport2:'Tennis',
    ion1:'ion-ios-americanfootball',
    ion2:'ion-ios-tennisball'
  },{
    id: 7,
    poste: 'Respo Capitanat',
    posteaf:'Capitanat',
    name: 'Maxime Rouiller',
    surname:'Xou',
    face: '',
    detail: 'ce que tu veux',
    sport1:'Foot',
    sport2:'Rugby',
    ion1:'ion-ios7-football',
    ion2:'ion-ios-americanfootball'
  },{
    id: 8,
    poste: 'Respo CMC/INFRES',
    posteaf:'CMC - INFRES',
    name: 'Lucas Ansanay',
    surname:'Luka',
    face: '',
    detail: 'ce que tu veux',
    sport1:'Basket',
    sport2:'VTT',
    ion1:'ion-ios7-basketball',
    ion2:'ion-android-bicycle'
  },{
    id: 9,
    poste: 'Respo Communication',
    posteaf:'Respo Com',
    name: 'Bastien Boyer',
    surname:'Moran',
    face: '',
    detail: 'ce que tu veux',
    sport1:'Natation',
    sport2:'Cyclisme',
    sport3:'Musculation',
    ion1:'ion-help-buoy',
    ion2:'ion-android-bicycle',
    ion3:'ion-ios-body'
  },{
    id: 10,
    poste: 'Respo Soirée Évenement',
    posteaf:'Soirée - Éven.',
    name: 'Florian Pegourié',
    surname:'Pegou',
    face: '',
    detail: 'ce que tu veux',
    sport1:'Rugby',
    sport2:'',
    ion1:'ion-ios-americanfootball',
    ion2:''
  },{
    id: 11,
    poste: 'Respo Soirée Évenement',
    posteaf:'Soirée - Éven.',
    name: 'Nikola Bonhomme',
    surname:'Bonhomme',
    face: '',
    detail: 'ce que tu veux',
    sport1:'Rugby',
    sport2:'Aviron',
    ion1:'ion-ios-americanfootball',
    ion2:'ion-android-boat'
  },{
    id: 12,
    poste: 'Respo Soirée Évenement',
    posteaf:'Soirée - Éven.',
    name: 'Maxence Champy',
    surname:'Champy',
    face: '',
    detail: 'ce que tu veux',
    sport1:'Gymnastique',
    sport2:'',
    ion1:'ion-ios-body',
    ion2:''
  },{
    id: 13,
    poste: 'Respo Sponsors',
    posteaf:'Sponsors',
    name: 'Thibaut Danho',
    surname:'Pepito',
    face: '',
    detail: 'ce que tu veux',
    sport1:'Natation',
    sport2:'Musculation',
    ion1:'ion-help-buoy',
    ion2:'ion-ios-body'
  },{
    id: 14,
    poste: 'Respo Sponsors',
    posteaf:'Sponsors',
    name: 'Romain Bouyer',
    surname:'La boule',
    face: '',
    detail: 'ce que tu veux',
    sport1:'Natation',
    sport2:'Volley',
    ion1:'ion-help-buoy',
    ion2:'ion-social-chrome'
  },{
    id: 15,
    poste: 'Respo Sports Extérieurs',
    posteaf:'Sports Exté',
    name: 'Alexandre Hamon',
    surname:'Fumesec',
    face: '',
    detail: 'ce que tu veux',
    sport1:'VTT',
    sport2:'Rugby',
    sport3 :'Trail',
    ion1:'ion-android-bicycle',
    ion2:'ion-ios-americanfootball',
    ion3:'ion-android-walk'
  },{
    id: 16,
    poste: 'Respo Supporter',
    posteaf:'Supporter',
    name: 'Julia Nicol',
    surname:'Julia',
    face: '',
    detail: 'ce que tu veux',
    sport1:'Danse',
    sport2:'Ultimate',
    sport3 : 'Pompom',
    ion1:'ion-ios-body',
    ion2:'ion-ios-circle-filled',
    ion3:'ion-ios-flower'
  },{
    id: 17,
    poste: 'Mascotte',
    name: 'Sharky',
    surname:'Sharky',
    face: '',
    detail: 'ce que tu veux',
    sport1:'Fun',
    sport2:'Humour',
    ion1:'ion-heart',
    ion2:'ion-happy'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Events', function() {

var events = [{
    id: 0,
    name: 'Soirée Mousse',
    date: 'mardi 24 à 17 h',
    detail: 'Rejoins nous, au prgoramme : deliljk denlkned delkned',
    img: 'img/equipe.png'
  },{
    id: 1,
    name: 'Soirée Mousse',
    date: 'mardi 24 à 17 h',
    detail: 'Rejoins nous, au prgoramme : deliljk denlkned delkned',
    img: 'img/equipe.png'
  },{
    id: 2,
    name: 'Soirée Mousse',
    date: 'mardi 24 à 17 h',
    detail: 'Rejoins nous, au prgoramme : deliljk denlkned delkned',
    img: 'img/equipe.png'
  },{
    id: 3,
    name: 'Soirée rer',
    date: 'mardi 24 à 17 h',
    detail: 'Rejoins nous, au prgoramme : deliljk denlkned delkned',
    img: 'img/image.png'
  }];


  return {
    all: function() {
      return events;
    },
    get: function(eventId) {
      // Simple index lookup
      return events[eventId];
    }
  }
})

.factory('Allos', function($firebase) {

    


var allos = [{
    id: 0,
    name: 'Allô Vaisselle',
    date: 'mardi 24 à 17 h',
    detail: 'Marre de faire la vaisselle, appelle nous : on va frotter, laver sécher et même ranger',
    phone: '0788234904',
    img: 'img/equipe.png'
  },{
    id: 1,
    name: 'Allô Vaisselle',
    date: 'mardi 24 à 17 h',
    detail: 'Marre de faire la vaisselle, appelle nous : on va frotter, laver sécher et même ranger',
    phone: '0788234904',
    img: 'img/equipe.png'
  },{
    id: 2,
    name: 'Allô Vaisselle',
    date: 'mardi 24 à 17 h',
    detail: 'Marre de faire la vaisselle, appelle nous : on va frotter, laver sécher et même ranger',
    phone: '0788234904',
    img: 'img/equipe.png'
  },{
    id: 3,
    name: 'Allô Vaisselle',
    date: 'mardi 24 à 17 h',
    detail: 'Marre de faire la vaisselle, appelle nous : on va frotter, laver sécher et même ranger',
    phone: '0788234904',
    img: 'img/equipe.png'
  }];


  return {
    all: function() {
      return allos;
    },
    get: function(alloId) {
      // Simple index lookup
      return allos[alloId];
    }
  }
});
