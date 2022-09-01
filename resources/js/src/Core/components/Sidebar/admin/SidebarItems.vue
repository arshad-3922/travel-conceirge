<template>
<div class="main-menu menu-fixed menu-light menu-accordion" data-scroll-to-active="true">
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation" v-if="items.length > 0">
            <li class="nav-item" v-for="(item,index) in items" :key="index"><router-link :to="{name:item.componentName}">
                <i :class="item.iconClasses" aria-hidden="true"></i>
                <span class="menu-title" data-i18n="">{{item.name}}</span></router-link>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import SidebarItems from './sideBarItems.js';
export default {
    components:{SidebarItems},
    created(){
        this.items = SidebarItems;
   }
}
</script>