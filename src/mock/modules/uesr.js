const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    token: '123',
    refreshToken: '9998'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
    token: '123',
    refreshToken: '9998'
  }
}

module.exports = [
  // user login
  {
    url: '/login',
    type: 'post',
    isOpen: true,
    response: config => {
      const token = ''
      if (!token) {
        return {
          code: 404,
          success: false,
          error: {
            msg: '登录失败',
          },
          msg: null,
          result: null
        }
      }

      return {
        code: 200,
        success: true,
        error: null,
        msg: null,
        result: {
          'token': '123',
          'refreshToken': '1232'
        }
      }
    }
  },
]
