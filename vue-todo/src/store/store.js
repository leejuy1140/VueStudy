import Vue from 'vue'  
import Vuex from 'vuex'

//Vue의 플러그인 기능
//Vue를 사용하는 모든 영역에 특정 기능을 전역으로 추가하고 싶을 때
Vue.use(Vuex);

//store는 밖에서 사용할 수 있게 설정
export const store = new Vuex.Store({
});