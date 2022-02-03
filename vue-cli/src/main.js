import { createApp, VueElement } from 'vue'

//App.vue라는 싱글 파일 컴포넌트
import App from './App.vue'

//new Vue({ el: '#app' })와 동일
createApp(App).mount('#app')