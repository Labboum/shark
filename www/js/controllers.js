angular.module('starter.controllers', [])

.controller('AllosCtrl', function($scope, $timeout, $ionicSlideBoxDelegate, Allos) {
  
$scope.$on('$ionicView.beforeEnter', function(){
  $ionicSlideBoxDelegate.$getByHandle('allo-viewer').update();
  $ionicSlideBoxDelegate.$getByHandle('allo-viewer').slide(0);
});
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

.controller('PhotosCtrl', function($scope, $ionicPopup, $ionicSlideBoxDelegate, $ionicModal,$http, PouchDBListener, appSettings) {


console.log(appSettings);


function getItems () {
  $http.get(appSettings.db + '/f00c1d20ebad984df8bbbc998c00167e/name')
    .success(function (data) {
      $scope.items = data.rows;
    });
}
getItems();

$scope.todos = [];
$scope.tests = [];
 
    
 
    $scope.$on('add', function(event, todo) {
        $scope.todos.push(todo);
    });
 
    $scope.$on('delete', function(event, id) {
        for(var i = 0; i < $scope.todos.length; i++) {
            if($scope.todos[i]._id === id) {
                $scope.todos.splice(i, 1);
            }
        }
    });





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
