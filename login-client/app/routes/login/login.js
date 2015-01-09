import Ember from 'ember';
import LoginVo from 'login-client/models/login-vo';

export default Ember.Route.extend({
  model : function(){
    return LoginVo.create({});
  }
});
