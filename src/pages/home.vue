<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
import ServiceBar from './../components/ServiceBar'
export default {
    name:'nav-home',
    components:{
        NavHeader,
        NavFooter,
        ServiceBar
    }
}
</script>