<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <router-link tag="button" :to="{name:'phoneLink'}" class="btn btn-light">手机</router-link>
            <router-link tag="button" :to="{name:'emailLink'}" class="btn btn-light">邮箱</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>