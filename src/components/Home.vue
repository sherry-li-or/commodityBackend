<template>
    <div class="el-container">
        <div class="el-aside">
            <el-aside width="200">
                <el-menu
                        text-color="black"
                        active-text-color="dodgerblue"
                        default-active="2"
                        class="el-menu" router>
                    <el-menu-item index="/Order" class="el-menu-item">
                        <i class="el-icon-tickets el-icon"></i>
                        <span slot="title">訂單維護</span>
                    </el-menu-item>
                    <el-menu-item index="/CommodityMaintain" class="el-menu-item">
                        <i class="el-icon-shopping-bag-2 el-icon"></i>
                        <span slot="title">商品維護</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
        </div>
        <el-container>
            <el-header class="header">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="el-breadcrumb">
                    <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
                        <router-link :to="item.path"  v-if='item.meta.title'>{{item.meta.title}}</router-link>
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <el-main class="el-main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>

</template>
<script>
    export default {
        data(){
            return{
                levelList:[],
            }
        },
        created() {
            this.getBreadcrumb()
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            getBreadcrumb(){
                let matched = this.$route.matched.filter(item => item.name);
                this.levelList = matched;
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
    }
</script>
<style>
    html, body {
        height: 100%;
        padding: 0;
        margin: 0;
    }

    .el-container {
        height: 100%;
    }

    .el-aside {
        width: 200px;
        height: 100vh;
    }

    .el-menu {
        min-height: 100%;
        padding: 0;
    }

    .header {
        background-color: #EFF2F7;
        margin: 0px 0px 20px 0px;
    }

    .el-breadcrumb {
        position: absolute;
        top: 20px;
    }

    .el-main {
        padding: 0px 20px;
    }
</style>
