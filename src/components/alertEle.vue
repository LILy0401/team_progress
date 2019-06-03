<template>
    <div class="alert_box" v-show="isShow">
        <div class="box" slot="project_group">
            <p class="b_title">{{title}}</p>
            <slot></slot>
            <p class="b_btn">
                <button v-on:click="confirm">确定</button>
                <button v-on:click="cancel">取消</button>
            </p>
        </div>
        
    </div>
</template>
<script>

export default {
    props:['isShow','title'],
    data(){
        return{
            
        }   
    },

    methods:{
        confirm(){
            this.$emit('confirm',false)
        },
        cancel(){
            this.$emit('cancel',false)
        }
    }
}
</script>
<style lang='scss' scoped>
.alert_box{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background: rgba(0,0,0,.6);
}
.box{
    width: 80%;
    height: 160px;
    position:absolute; 
    left:0;    
    top:0;   
    right:0;   
    bottom:0;   
    margin:auto;
    background: #fff;
    overflow: hidden;
    border:1px solid #ccc;
    border-radius: 10px;
    &>input{
        width: 80%;
        height: 30px;
        padding-left: 10px;
        border:1px solid#ccc;
        margin-top: 12px;
        margin-left: 15px;
    }
}
.b_title{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    background: rgb(237, 243, 253);
    padding-left: 10px;
}
.b_btn{
    width: 100%;
    height: 40px;
    // background: #ccc;
    text-align: right;
    line-height: 40px;
}
.b_btn>button{
    width: 70px;
    height: 25px;
    line-height: 25px;
    margin-right: 15px;
    border: none;
}
.b_btn>button:nth-child(1){
     background: rgb(75, 118, 236);
     color: #fff;
     font-size: 15px;
}
.b_btn>button:nth-child(2){
     background: #fff;
     border: 1px solid #ccc;
     color: #666;
     font-size: 15px;
}
.member-type{
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
}
</style>
