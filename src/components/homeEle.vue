<template>
    <ul class="uls">
                
        <li v-for="(item,index) in groupList" :key='index'>
            <!-- <v-touch v-on:swipeleft="onSwipeLeft(index)" v-on:swiperight="onSwipeRight(index)">    -->
            <div v-bind:class="left ?'lis':'lis_left' ">
                <span class="lis_s">{{item.team_name}}</span>  
                <div class="lis_d" @click="gomember(item.team_id)">
                    <progresss :pro_length='pro_length' class="lis_p"></progresss>
                </div>
                <span class="compile" @click='compile_left'>编辑</span>
            </div>
            <!-- </v-touch>   -->
        </li>   
    
    </ul>
</template>
<script>
import Progresss from '../components/progress.vue';
export default {
    props:{
        groupList:Array
    },
    data(){
        return{
            left:true,
            ind:'1',
            pro_length:10
        }
    },
    components:{
        Progresss
    },
    methods:{
        onSwipeLeft(ind){
            this.ind = ind;
            this.left = false;
        },
        onSwipeRight(ind){
            this.left = true;
        },
        gomember(id){
            this.$router.push({path:'/member',query:{tid:id}}); 
        },
        compile_left(){
            console.log('编辑');
        }
    }
}
</script>
<style scoped>
.uls{
    width:100%;
    margin-top: 10px;
    overflow: hidden;
}
.lis{
    width: 100%;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #ccc;
    position: relative;
    display: flex;
   
}
.lis_left{
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #ccc;
    position: relative;
    margin-left: -70px;
    display: flex;
    width:100%;
}
.lis_s{
    width: 70px;
    height: 50px;
    display: inline-block;
    text-align: center;
    line-height: 50px;
    overflow: hidden;
}
.lis_d{
    flex: 7;
    line-height: 50px;
}
.lis_p{
    margin-top: 16px;
}
.compile{
    width: 70px;
    height: 50px;
    background: #f00;
    text-align: center;
    line-height: 50px;
    position: absolute;
    right: -70px;
    top: 0;
}
</style>


