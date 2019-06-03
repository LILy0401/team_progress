import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    groupList:[],
    memberList:[],
    team_id:null,
    taskList:[],
    taskdata:[],
    flag:true,
    pid:null,
    index:0
  },
  mutations: {
    // 获取项目信息
    getlist(state){
      let obj = state;
      fetch('/projectList')
      .then(res=>res.json())
      .then((res)=>{
          obj.list = res.results;
      })
    },
    //创建项目
    confirm(state,body){
      let obj = state;
      let query = new URLSearchParams();
      query.append( 'project_name',body.project_name);
      query.append('project_discription',body.project_discription);

      
      fetch('/createProject',{
          method:'POST',
          headers:{
              'content-type':'application/x-www-form-urlencoded'
          },
          body:query.toString()
      })
      .then((res)=>res.json())
      .then(res=>{
          console.log(res);
      })
      
    },

    //获取小组信息
    getGroupList(state,pid){
      let obj = state;
      obj.pid = pid;
      fetch(`/teamlist?pid=${pid}`)
      .then(res=>res.json())
      .then((res)=>{
          obj.groupList = res.results;
      })
    },
    // 创建小组
    addGroup(state,body){
        fetch(`/createTeam?pid=${body.pid}&teamName=${body.teamName}&gitAddr=${body.gitAddr}`)
        .then((res)=>res.json())
        .then(res=>{
          console.log(res);
        })
    },

    //获取成员
    getmember(state,team_id){
      let obj = state;
      obj.team_id = team_id;
      fetch(`/teamMembers?team_id=${team_id}`)
      .then(res=>res.json())
      .then(res=>{
        obj.memberList = res.result;
        // let flag=obj.memberList.some(ele=>ele.identity==1);
        // obj.flag = flag;
      })
    },
    //添加成员
    addMember(state,mod){
      let obj = state;
      let query =new URLSearchParams();
      query.append('member_name',mod.member_name)
      query.append( 'team_id',mod.team_id)
      query.append(  'member_gender',mod.member_gender)
      query.append('identity',mod.identity)
      query.append( 'member_age',mod.member_age)
      query.append('potriat',mod.potriat)
      let flag=obj.memberList.filter(ele=>ele.identity===0);
      obj.flag = flag;
      if(mod.identity ==0){
        if(obj.flag.length){ //说明有组长
          alert('已有组长');
          return;
        }else{
          fetch('/createMember',{
            method:'POST',
            headers:{
              'content-type':'application/x-www-form-urlencoded'
            },
            body:query.toString()
          }).then(res=>res.json())
          .then(res=>{
            console.log(res)
          })
        }
      
      }
        fetch('/createMember',{
          method:'POST',
          headers:{
            'content-type':'application/x-www-form-urlencoded'
          },
          body:query.toString()
        }).then(res=>res.json())
        .then(res=>{
          console.log(res)
        })
      
     
     
    },

    //获取任务
    getTask(state,mid){
      let obj = state;
      fetch(`/tasksList?mid=${mid}`)
      .then(res=>res.json())
      .then(res=>{
        obj.taskdata = res.results;
        obj.taskList=res.results.filter((ele)=>ele.task_status === 0);
      })
    },
    //添加任务
    addTask(state,mod){
      let obj = state;
      let query = new URLSearchParams();
      query.append( 'task_name',mod.task_name)
      query.append( 'mid',mod.mid)
      query.append('team_id',obj.team_id)
      query.append('pid',obj.pid)
      fetch('/createTask',{
        method:'POST',
        headers:{
          'content-type':'application/x-www-form-urlencoded'
        },
        body:query.toString()
      }).then(res=>res.json())
      .then(res=>{
        console.log(res);
      })
    },
    //点击tab的时候
    checkevery(state,index){
      let obj = state;
      obj.taskList = obj.taskdata.filter((ele)=>ele.task_status==index)
    },

    //修改任务的状态
    checks(state,mod){
      let obj = state;
  
      let index=obj.taskList.findIndex(ele=>ele.tid === mod.tid);
      obj.taskList[index].status = mod.status;
      console.log(obj.taskList);

      fetch(`/taskStatus?tid=${mod.tid}&status=${mod.status*1}`)
      .then(res=>res.json())
      .then(res=>{
         console.log(res);
      })
    
    },
    //删除项目
    project_del(state,pid){

      let obj = state;
     
      let index=obj.list.findIndex(ele=>ele.project_id == pid);
     
      obj.list.splice(index,1);
  
      fetch(`/deleteProject?project_id=${pid}`)
      .then(res=>res.json())
      .then(res=>{
        console.log(res);
      })
      
    },
    //检查任务
    taskCheck(state,mod){
        let obj = state;
      
        fetch(`/taskCheck?tid=${mod.tid}&checkPerson=${mod.mid}`)
        .then(res=>res.json())
        .then(res=>{
          console.log(res);
        })
    }
  },
  actions: {

  }
})
