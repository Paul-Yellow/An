import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
  hidden: true                   当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面(默认 false)
  redirect: noredirect           当设置 noredirect 的时候该路由不会在面包屑导航中出现
  name:'router-name'             设定路由的名字，一定要填写不然 使用 <keep-alive> 时会出现各种问题
  meta : {
    role: ['admin','editor']     设置该路由进入的权限，支持多个权限叠加
    title: 'title'               设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             设置该路由的图标
    noCache: true                如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: _import('table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: _import('tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: _import('form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'excel',
    meta: {
      title: '123',
      icon: 'form'
    },
    children: [
      {
        path: 'index',
        name: 'Form',
        component: _import('form/index'),
        meta: { title: '其他选项', icon: 'form' }
      }
    ]
  },

  {
    path: '/institutionalusermanagement',
    component: Layout,
    redirect: '/institutionalusermanagement/informationmaintenance',
    name: 'InstitutionalUserManagement',
    meta: { title: '机构用户管理', icon: 'example' },
    children: [
      {
        path: 'informationmaintenance',
        name: 'InformationMaintenance',
        component: _import('institutionalusermanagement/informationmaintenance/index'),
        meta: { title: '报告机构信息维护', icon: 'table' }
      },
      {
        path: 'informationchange',
        name: 'InformationChange',
        component: _import('institutionalusermanagement/informationchange/index'),
        meta: { title: '报告机构信息变更', icon: 'table' }
      },
      {
        path: 'userquit',
        name: 'UserQuit',
        component: _import('institutionalusermanagement/userquit/index'),
        meta: { title: '报告机构退出申请', icon: 'table' }
      },
      {
        path: 'usermanagement',
        name: 'UserManagement',
        component: _import('institutionalusermanagement/usermanagement/index'),
        meta: { title: '机构网点管理', icon: 'table' }
      }
    ]
  },

  // 保证在最后
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

