<template>
    <div class="wrap">
        <header>小组成员</header>
        <section>
            
            <member-ele :memberList="memberList"></member-ele>
           
            <p class="add_project">
                <span v-on:click="create_project">添加成员</span>
            </p>
        </section>
          <alert-ele
            :isShow='isShow'
            @confirm='confirm' 
            @cancel='cancel'
            :title='title'
            >
             <input type="text" v-model="name" placeholder="请输入姓名"/>
             <div class="member-type"> 
                <input type="radio" v-model="radio" value="0"  name='lili'>组长</input >
                <input type="radio" v-model="radio" value="1" name='lili'>组员</input >
             </div>
            </alert-ele>
    </div>
</template>
<script>
import AlertEle from '../components/alertEle.vue';
import MemberEle from '../components/memberEle.vue';
import store from '../store.js';


export default {
    data(){
        return{
            isShow:false,
            title:'添加成员',
            name:'',
            radio: '0', //1是组长，2是组员
            member_gender:'0', //性别
            member_age:18, //年龄
            potriat:''
        }  
    },
    computed:{
        flag(){
            return store.state.flag
        }
    },
    created(){
        store.commit('getmember',this.$route.query.tid)
    },
    computed:{
        memberList(){
            return store.state.memberList
        }
    },
    components:{
        MemberEle,
          AlertEle
    },
    methods:{ 
        create_project(){
            this.isShow=true;
        },
        confirm(is){
            this.isShow=is;
            let tid = this.$route.query.tid;
            store.commit('addMember',{member_name:this.name, team_id:tid,member_gender:this.member_gender,identity:this.radio,member_age:this.member_age,potriat:this.potriat })
            store.commit('getmember',this.$route.query.tid)
        },
        cancel(is){
            this.isShow=is;
            console.log(this.radio)
        }
    }
}
</script>
<style lang='scss' scoped>
.wrap{
    width: 100%;
    height: 100%;
    background: #eee;
}
.add_project{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-top: 25px;
    &>span{
        font-size: 16px;
         background: rgb(75, 118, 236);
         color: #fff;
         font-weight: bold;
         padding: 4px 10px;
         border-radius: 5px;
    }
}
</style>


