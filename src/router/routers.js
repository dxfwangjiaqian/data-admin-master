import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/systems',
    name: 'systems',
    meta: {
      title: '系统管理',
      icon: 'ios-cog'
    },
    component: Main,
    children: [
      {
        path: 'role_page',
        name: 'role_page',
        meta: {
          icon: 'ios-contact',
          title: '角色管理'
        },
        component: () => import('@/view/systems/role/index.vue')
      },
      {
        path: 'user_page',
        name: 'user_page',
        meta: {
          icon: 'ios-contacts',
          title: '用户管理'
        },
        component: () => import('@/view/systems/user/index.vue')
      },
      {
        path: 'auth_page',
        name: 'auth_page',
        meta: {
          icon: 'ios-construct',
          title: '权限管理'
        },
        component: () => import('@/view/systems/auth/index.vue')
      }
    ]
  },
  {
    path: '/data',
    name: 'data',
    meta: {
      // hideInBread: true ,
      icon: 'ios-folder',
      title: '资料管理'
    },
    component: Main,
    children: [
      {
        path: 'data_management',
        name: 'data_management',
        meta: {
          icon: 'ios-folder',
          title: '资料管理',
          hideInBread:true
        },
        component: () => import('@/view/data/data_management/index.vue')
      },
      {
        path: 'data_detail',
        name: 'data_detail',
        meta: {
          icon: 'ios-folder',
          title: '资料详情',
          hideInMenu:true
        },
        component: parentView,
        children:[
          {
            path: 'index',
            name: 'data_detail_index',
            meta: {
              icon: 'ios-folder',
              title: '资料详情'
            },
            component: () => import('@/view/data/data_management/detail.vue')
          }
        ]
      },
      {
        path: 'data_dimension',
        name: 'data_dimension',
        meta: {
          icon: 'ios-folder',
          title: '标注',
          hideInMenu:true
        },
        component: parentView,
        children:[
          {
            path: 'index',
            name: 'data_dimension_index',
            meta: {
              icon: 'ios-folder',
              title: '标注'
            },
            component: () => import('@/view/data/data_management/dimension.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    meta: {
      icon: 'ios-folder',
      title: '栽培知识管理'
    },
    component: Main,
    children: [
      {
        path: 'knowledge_management',
        name: 'knowledge_management',
        meta: {
          icon: 'ios-book',
          title: '栽培知识管理',
          hideInBread:true
        },
        component: () => import('@/view/knowledge/knowledge_management/index.vue')
      },
      {
        path: 'knowledge_detail',
        name: 'knowledge_detail',
        meta: {
          icon: 'ios-book',
          title: '栽培知识详情',
          hideInMenu:true
        },
        component: parentView,
        children:[
          {
            path: 'index',
            name: 'knowledge_detail_index',
            meta: {
              icon: 'ios-book',
              title: '栽培知识详情'
            },
            component: () => import('@/view/knowledge/knowledge_management/detail.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/factor',
    name: 'factor',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'factor_mining_page',
        name: 'factor_mining_page',
        meta: {
          icon: 'ios-hammer',
          title: '种植影响因素挖掘'
        },
        component: () => import('@/view/factor/index.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/error-401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/error-500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/error-404.vue')
  }
]
