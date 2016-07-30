'use.strict'
/*
 * common/constants.js
 *
 * (c) 2014 Vincent Maliko http://frnchnrd.com
 * License: MIT
 */

angular.module('services.common.constants',[])

.service('Constants',[function(){
  	
  var _API = {
  	baseUrl: "http://authenticate-app-me.herokuapp.com"
    //baseUrl: "http://localhost:3000"
  }

  var _img = {
    avatar : "img/avatar.png",
    profile_bg : "img/bg_new.png"
  }

  var _timeouts = {
    collection: {
      user : 0
    }
  }
  
  var constants = {
    DEBUGMODE : false,
    SHOWBROADCAST_EVENTS : true,
    API: _API,
    IMG: _img,
    timeouts: _timeouts
  };



  return constants;
}])