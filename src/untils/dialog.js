import Vue from 'vue';
import dialog from '../components/dialog.vue';
//extend 是component 的底层实现
//component 是extend 的语法糖

// Vue.component('dialogs',dialog);//Vue.component全局组件<dialogs></dialogs>
let DialogConstructor=Vue.extend(dialog); 
// console.log(DialogConstructor);//是个函数

let cdialog=new DialogConstructor();
console.log(cdialog); //对象,他只是一个单纯的对象，还没有和页面有关联，得挂载到元素上

export default function(Vue){
    Object.defineProperty(Vue.prototype,'$dialog',{
        value(){
           
            //把组件挂载到元素上
            let el = document.createElement('div');
            cdialog.$mount(el);
            document.body.appendChild(cdialog.$el);
        }
    })
}