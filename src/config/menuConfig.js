export default [{
    title: '首页',
    key: '/home'
  },
  {
    title: '市场管理',
    key: '/mark',
    children: [{
        title: '人员录入',
        key: '/sub1'
      },
      {
        title: '反馈信息',
        key: '/sub2'
      },
      {
        title: '渠道列表',
        key: '/channel'
      },
      {
        title: '关注程度',
        key: '/attention'
      }
    ]
  },
  {
    title: '课程管理',
    key: '/course',
    children: [{
        title: '课程分类',
        key: '/course/category'
      },
      {
        title: '课程信息',
        key: '/course/info'
      }
    ]
  },
  
  {
    title: '个人管理',
    key: '/person',
    children: [
      {
        title: '个人信息',
        key: '/person/info'
      },
      {
        title: '密码修改',
        key: '/person/password'
      },
      {
        title: '任课班级',
        key: '/person/handclass'
      },
      {
        title: '我的班级',
        key: '/person/myclass'
      },
      
    ]
  },
 
  {
    title: '用户管理',
    key: '/user',
    children: [
      {
        title: '教师管理',
        key: '/user/teacher'
      },
      {
        title: '学生管理',
        key: '/user/student'
      },
    ]
  },
  {
    title: '角色管理',
    key: '/role'
  },
  {
    title: '班级管理',
    key: '/class'
  },
  {
    title: '系统管理',
    key: '/system',
    children: [{
      title: '导航菜单',
      key: 'menu'
    }]
  },
]