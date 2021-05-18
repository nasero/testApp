<template lang="pug">
    #app
        h1.hidden Last visit
        router-view
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap')
body
    height: 100vh
    margin: 0,
    padding: 0,
    width: 100vw
#app
    color: #919192,
    font-family: 'Open Sans', sans-serif
    height: 100vh,
    width: 100vw,
    -moz-osx-font-smoothing: grayscale,
    -webkit-font-smoothing: antialiased
.view
    align-items: center,
    display: flex,
    flex-direction: column,
    height: 100vh,
    justify-content: center,
    width: 100vw
.hidden
    height: 0,
    opacity: 0,
    pointer-events: none,
    position: absolute
</style>
