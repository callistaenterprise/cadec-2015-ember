data = [
  {name :'users', data :[
    {'_id':'1','username' : 'stephen','email':'stephen.white@callistaenterprise.se', 'posts' : ['1'], 'comments' : ['3', '4']},
    {'_id':'2','username' : 'sedina','email':'sedina.oruc@callistaenterprise.se', 'posts': ['2'], 'comments' : ['5', '6']},
    {'_id':'3','username' : 'jonas','email':'jonas.behmer@callistaenterprise.com', 'posts': ['3'], 'comments' : ['1', '2']}
  ]},

  {name:'posts', data : [
    {'_id':'1', 'title':'Stephens Blog', 'body':'Ember Rocks!', 'user':'1', 'comments':['1', '2']},
    {'_id':'2', 'title':'Jonases Blog', 'body':'A host, of golden daffodils', 'user':'2', 'comments':['3', '4']},
    {'_id':'3', 'title':'Sedinas Blog', 'body':'I wandered lonely as a cloud', 'user':'3', 'comments':['5', '6']}
  ]},

  {name:'comments', data : [
    {'_id':'1', 'body':'A framework for creating ambitous web applications', 'date':new Date(), 'post':'1', 'user': '3'},
    {'_id':'2', 'body':'It really is!', 'date':new Date(), 'post':'1', 'user': '3'},
    {'_id':'3', 'body':'Beside the lake, beneath the trees', 'date':new Date(), 'post':'2', 'user': '1'},
    {'_id':'4', 'body':'Fluttering and dancing in the breeze', 'date':new Date(), 'post':'2', 'user': '1'},
    {'_id':'5', 'body':'That floats on high o er vales and hills', 'date':new Date(), 'post':'3', 'user': '2'},
    {'_id':'6', 'body':'Continuous as the stars that shine', 'date':new Date(), 'post':'3', 'user': '2'}
  ]}
];

