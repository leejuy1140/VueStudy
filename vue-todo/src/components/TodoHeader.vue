<template>
  <header>
      <h1>TODO it!</h1>
  </header>
</template>

// scoped: Vue 싱글파일 컴포넌트에서 지원하는 속성으로 해당 컴포넌트 안에서만 유효한 스타일 속성
// 원래 상위 html요소의 스타일을 아래로 상속받는데 그게 무시가 됨
<style scoped>
h1 {
    color: #2F3B52;
    font-weight: 900;
    /* rem은 font의 크기에 따라 배율이 정해짐 */
    margin: 2.5rem 0 1.5rem;
}
</style>