angular.module('starter.controllers', [])

.controller('AllosCtrl',function($scope, $timeout, $ionicSlideBoxDelegate, $firebase, $rootScope ,Allos) {
  
$scope.$on('$ionicView.beforeEnter', function(){
  $scope.maman=$rootScope.liste;
  $ionicSlideBoxDelegate.$getByHandle('allo-viewer').update();
  $ionicSlideBoxDelegate.$getByHandle('allo-viewer').slide(0);
});



var ref = new Firebase("https://scorching-torch-7804.firebaseio.com/allos");
var sync = $firebase(ref);

var list = sync.$asObject();
    list.$loaded().then(function() {
      console.log("list has " + list.length + " item(s)");
    });

    // we can add it directly to $scope if we want to access this from the DOM
    $scope.list = list;

    $scope.maman=$rootScope.liste;

$scope.data = sync.$asArray();

  $scope.allos = Allos.all();
})

.controller('ChatsCtrl', function($scope, $ionicSlideBoxDelegate, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events.all();
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})

.controller('PhotosCtrl', function($scope, $ionicPopup, $ionicSlideBoxDelegate, $ionicModal,$http, $firebase, PouchDBListener, appSettings) {



$scope.evenements = [{
    name: 'Evenement1',
    affiche:'Evenenement 1',
    src: [{img :'img/image1.png'},
          {img :'img/image1.png'},
          {img :'img/image1.png'},
          {img :'img/image1.png'},
          {img :'img/image1.png'
  }]},{
    name: 'Evenement2',
    affiche:'Evenenement 2',
    src: [{img :'img/equipe1.png'},
          {img :'img/equipe2.png'},
          {img :'img/equipe1.png'},
          {img :'img/equipe2.png'},
          {img :'img/equipe3.png'
  }]
  }]


$scope.Evenement1 = [{
    img :'img/image1.png'},
          {img :'img/image1.png'},
          {img :'img/image1.png'},
          {img :'img/image1.png'},
          {img :'img/image1.png'
  
  }];

  var Evenement1 = [
          {img :'img/image1.png'},
          {img :'img/image1.png'},
          {img :'img/image1.png'},
          {img :'img/image1.png'},
          {img :'img/image1.png'
  
  }];

  var Evenement2 = [
          {img :'img/equipe1.png'},
          {img :'img/equipe1.png'},
          {img :'img/equipe1.png'},
          {img :'img/equipe1.png'},
          {img :'img/equipe1.png'
  
  }];


  var datata;

  $scope.affiche = function ( iddd,textt ) {
    
    datata=eval(iddd);
    $scope.datata = textt;

    };

  $scope.getValues = function() {
    
      return datata;
    }

 $scope.showImages = function(index) {

  
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
    };

 
$scope.showModal = function(templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    }
 
    // Close the modal
    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove();
        $ionicSlideBoxDelegate.$getByHandle('allo-viewer').update();
  $ionicSlideBoxDelegate.$getByHandle('allo-viewer').slide(0);

    };
  });
