<template>
  <div class="home">
       <div class="header">小组</div>
       <div class="content">
          <home-ele :groupList='groupList'></home-ele>
          <p class="add_project">
            <span @click="addGroup">添加小组</span>
          </p>
          
       </div>
       <div class="footer">
         <span>搜索</span>
       </div>

       <alert-ele :isShow='isShow'
        @confirm='confirm' 
        @cancel='cancel'
        :title='title'
        >
        <input type="text" v-model="teamName" placeholder="请输入小组名称"/>
        <input type="text" v-model='gitAddr' placeholder="请输入小组项目地址"/>
        </alert-ele>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeEle from '@/components/homeEle.vue'
import AlertEle from '../components/alertEle.vue';
import store from '../store.js';

export default {
   
  name: 'home',
  data(){
    return{
       isShow:false,
       title:"添加小组",
       gitAddr:'',
       teamName:''
    }
  },
  computed:{
    groupList(){
      return store.state.groupList
    }
  },
  components: {
    HomeEle,
    AlertEle
  },
  created(){
    
      store.commit('getGroupList',this.$route.query.pid)
  },
  methods:{
    addGroup() {
      this.isShow=true;
    },
     confirm(is){
        this.isShow=is;
        store.commit('addGroup',{pid:this.$route.query.pid,teamName:this.teamName,gitAddr:this.gitAddr})
         store.commit('getGroupList',this.$route.query.pid)
  },
    cancel(is){
        this.isShow=is;
    }
  }
}
</script>
<style scoped lang='scss'>
.home{
    width: 100%;
    height: 100%;
    background: #eee;
    display: flex;
    flex-direction: column;
}
.header{
  width: 100%;
  height: 55px;
  text-align: center;
  line-height: 55px;
  background: rgb(75, 118, 236);
  font-weight: bold;
  color: #fff;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
}
.content{
    width: 100%;
    height: 100%;
}
.footer{
  width: 100%;
  height: 55px;
  text-align: center;
  line-height: 55px;
  background: #fff;
  font-size: 18px;
  border-top: 1px solid #ccc;
}
.s_add{
  width: 100%;
  height: 30px;
  margin-top: 15px;
  text-align: center;
  line-height: 30px;
  &>button{
     font-size: 16px;
      color: #fff;
      background: blue;
      padding: 5px 8px;
      border-radius: 5px;
  }
}

</style>

