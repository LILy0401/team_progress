<template>
    <ul class="uls">
        <li class="lis" v-for="(item,index) in list " :key="index">
            <p class="p_lis" @click="goGroupPage(item.project_id)">{{item.project_name}}</p>
            <p class="p_title">{{item.project_discription}}</p>
            <p class="p_time">
                <span>{{item.create_time}}</span>|<span @click="project_del(item.project_id)">删除</span>
            </p>
        </li>
         
    </ul>
</template>
<script>

import store from '../store.js';
export default {
    props:{
        list:Array
    },
    methods:{
        goGroupPage(pid){
            // pid是项目id
            this.$router.push({path:'/home',query:{pid:pid}})
        },
        project_del(pid){
            store.commit('project_del',pid)
        }
    }
}
</script>
<style scoped lang='scss'>
.lis{
    width: 100%;
    height: 95px;
    background: rgb(237, 243, 253);
    margin-bottom: 10px;
}
.p_lis{
    width: 100%;
    height: 30px;
    border-bottom: 2px solid #eee;
    line-height: 30px;
    background: rgb(194, 213, 253);
    font-size: 15px;
    font-weight: bold;
    color: black;
    padding-left: 10px;
}
.p_title{
    width: 100%;
    height: 40px;
    font-size: 13px;
    color: #666;
    padding: 2px 10px;
    overflow: hidden;

}
.p_time{
    width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 13px;
    color: #666;
    &>span{
        padding: 0 10px;
        color: #666;
    }
}

</style>

