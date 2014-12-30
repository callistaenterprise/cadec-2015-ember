import Ember from 'ember';
import LoginVo from 'cadec-2015-ember/models/login-vo'

export default Ember.Route.extend({
  model : function(){
    return LoginVo.create({});
  }
});
