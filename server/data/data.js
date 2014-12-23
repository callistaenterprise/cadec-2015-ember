data = [
  {name :'users', data :[
  {'_id':'1','username' : 'stephen','email':'stephen.white@callistaenterprise.se', posts : ['1']},
  {'_id':'2','username' : 'sedina','email':'sedina.oruc@callistaenterprise.se', posts: ['2']},
  {'_id':'3','username' : 'jonas','email':'jonas.behmer@callistaenterprise.com', posts: ['3']}
]},

  {name:'posts', data : [
  {'_id':'1', 'title':'Stephens Blog', 'body':'Ember Rocks!', 'user':'1', 'comments':['1', '2']},
  {'_id':'2', 'title':'Jonases Blog', 'body':'A host, of golden daffodils', 'user':'2', 'comments':['3', '4']},
  {'_id':'3', 'title':'Sedinas Blog', 'body':'I wandered lonely as a cloud', 'user':'3', 'comments':['5', '6']}
]},

{name:'comments', data : [
  {'_id':'1', 'answer':'A framework for creating ambitous web applications', 'date':new Date(), 'post':'1'},
  {'_id':'2', 'answer':'It really is!', 'date':new Date(), 'post':'1'},
  {'_id':'3', 'answer':'Beside the lake, beneath the trees', 'date':new Date(), 'post':'2'},
  {'_id':'4', 'answer':'Fluttering and dancing in the breeze', 'date':new Date(), 'post':'2'},
  {'_id':'5', 'answer':'That floats on high o er vales and hills', 'date':new Date(), 'post':'3'},
  {'_id':'6', 'answer':'Continuous as the stars that shine', 'date':new Date(), 'post':'3'}
]}
];

/*db.users.insert([
  {'_id':'1','username' : 'stephen','email':'stephen.white@callistaenterprise.se', posts : ['1']},
  {'_id':'2','username' : 'sedina','email':'sedina.oruc@callistaenterprise.se', posts: ['2']},
  {'_id':'3','username' : 'jonas','email':'jonas.behmer@callistaenterprise.com', posts: ['3']}
]);

db.posts.insert([
  {'_id':'1', 'title':'Stephens Blog', 'body':'Ember Rocks!', 'user':1, 'comments':['10', '11']},
  {'_id':'2', 'title':'Jonases Blog', 'body':'A host, of golden daffodils', 'user':'2', 'comments':['20', '21']},
  {'_id':'3', 'title':'Sedinas Blog', 'body':'I wandered lonely as a cloud', 'user':'3', 'comments':['30', '31']}
]);

db.comments.insert([
  {'_id':'1', 'answer':'A framework for creating ambitous web applications', 'date':new Date(), 'post':'1'},
  {'_id':'2', 'answer':'It really is!', 'date':new Date(), 'post':'1'},
  {'_id':'3', 'answer':'Beside the lake, beneath the trees', 'date':new Date(), 'post':'2'},
  {'_id':'4', 'answer':'Fluttering and dancing in the breeze', 'date':new Date(), 'post':'2'},
  {'_id':'5', 'answer':'That floats on high o er vales and hills', 'date':new Date(), 'post':'3'},
  {'_id':'6', 'answer':'Continuous as the stars that shine', 'date':new Date(), 'post':'3'}
])*/
