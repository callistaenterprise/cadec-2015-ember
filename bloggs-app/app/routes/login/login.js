import Ember from 'ember';
import LoginVo from 'bloggs-app/models/login-vo';

export default Ember.Route.extend({
  model : function(){
    return LoginVo.create({});
  }
});
