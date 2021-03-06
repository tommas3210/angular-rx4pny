const angularValidators = {
  'required': '必填',
  'minlength': '最小字元长度：{{requiredLength}}，当前字元长度：{{actualLength}}',
  'maxlength': '最大字元长度：{{requiredLength}}，当前字元长度：{{actualLength}}',
  'min': '最小值：{{min}}，当前值：{{actual}}',
  'max': '最大值：{{max}}，当前值：{{actual}}',
  'requiredtrue': '必为真(true)',
  'email': '不符合电子邮件格式',
  'pattern': '格式不匹配{{requiredPattern}}',
  'nullValidator': '无操作验证器'
};

const dwI18nProgView = {
  'dw-upload-cc-upload': '上传互联应用',
  'dw-upload-cc-hint': '作业全部上传互联应用',
  'dw-upload-cc-expandAll-show': '展开详情',
  'dw-upload-cc-expandAll-hide': '隐藏详情',
  'dw-upload-cc-noProgramInfo': '作业资讯没有数据',
  'dw-login-rememberMe': '记住我',
  'dw-login-forgetPassword': '忘记密码',
  'dw-login-registered': '注册',
  'dw-login-password': '密码',
  'dw-login-account': '账户',
  'dw-login-signIn': '登入',
  'dw-login-tenant': '租户',
  'dw-login-failure': '登入失败',
  'dw-login-failure-noTenant': '您目前没有被企业授权使用此应用',
  'dw-login-tenant-selectOne': '请选择租户登入',
  'dw-sys-menu-save': '保存',
  'dw-sys-menu-cancel': '取消',
  'dw-sys-menu-add': '新增',
  'dw-sys-menu-increase': '添加',
  'dw-sys-menu-edit': '编辑',
  'dw-sys-menu-delete': '删除',
  'dw-sys-menu-addItem': '新增项目',
  'dw-sys-menu-externalLink': '外部连结',
  'dw-sys-menu-category': '目录',
  'dw-sys-menu-program': '作业',
  'dw-sys-menu-report': '报表',
  'dw-sys-menu-menuPreview': '选单预览',
  'dw-sys-menu-name': '显示名称',
  'dw-sys-menu-iconClass': '图示样式',
  'dw-sys-menu-defaultExpand': '预设展开',
  'dw-sys-menu-nodeEditing': '节点编辑',
  'dw-sys-menu-linkProgram': '连结作业',
  'dw-sys-menu-parameterSetting': '参数设定',
  'dw-sys-menu-parameterName': '参数名称',
  'dw-sys-menu-parameterValue': '参数值',
  'dw-sys-menu-linkURL': '连结网址',
  'dw-sys-menu-openMode': '开启方式',
  'dw-sys-menu-openMode-window': '另开视窗',
  'dw-sys-menu-openMode-iframe': '嵌入网页',
  'dw-sys-menu-msg-updateFailed': '更新失败',
  'dw-sys-menu-msg-updated': '已更新',
  'dw-sys-menu-msg-confirmDelete': '是否删除目录及内含的相关连结作业?',
  'dw-sys-menu-msg-deleteFailed': '删除失败',
  'dw-sys-menu-msg-deleted': '已删除',
  'dw-sys-menu-msg-notExist': '{{value1}}查无资料',
  'dw-sys-menu-msg-exist': '请勿重复设定',
  'dw-schedule-result-program': '任务作业',
  'dw-schedule-result-schedule-type': '排程类型',
  'dw-schedule-result-schedule-id': '排程编号',
  'dw-schedule-result-execution-status': '执行状态',
  'dw-schedule-result-start-time': '开始时间',
  'dw-schedule-result-end-time': '结束时间',
  'dw-schedule-result-search': '查询',
  'dw-schedule-result-reset': '重置',
  'dw-schedule-result-advanced-search': '进阶查询',
  'dw-schedule-result-executor': '执行者',
  'dw-schedule-result-schedule-name': '排程名称',
  'dw-schedule-result-execution-succeed': '执行成功',
  'dw-schedule-result-execution-failed': '执行失败',
  'dw-schedule-result-abnormal-description': '异常说明',
  'dw-schedule-result-enum-schedule-type-0': '立即执行',
  'dw-schedule-result-enum-schedule-type-1': '指定时间于背景执行',
  'dw-schedule-result-enum-schedule-type-2': '周期性背景执行',
  'dw-schedule-result-enum-schedule-type-3': '复杂周期性',
  'dw-schedule-result-enum-schedule-type-4': '重覆规则',
  'dw-schedule-result-enum-execute-status-completed': '执行完成',
  'dw-schedule-result-enum-execute-status-error': '执行错误',
  'dw-schedule-result-enum-execute-status-failure': '执行失败',
  'dw-schedule-result-enum-execute-status-running': '执行中',
  'dw-schedule-result-enum-execute-status-skipped': '执行略过',
  'dw-forget-mailCode': 'mail验证码',
  'dw-forget-mobileCode': '手机验证码',
  'dw-forget-enterEmailReceive': '请输入您的E-mail,收取开通帐号mail',
  'dw-forget-enterCorrectEmail': '请输入正确Email',
  'dw-forget-emailNotExist': 'Email不存在',
  'dw-forget-enterCellphone': '请输入您的手机号码',
  'dw-forget-needsDigits': '手机号码需为11个数字',
  'dw-forget-needAllNumbers': '手机号码需全部是数字',
  'dw-forget-cellphoneNotExist': '手机号码不存在',
  'dw-forget-getCode': '获取验证码',
  'dw-forget-enterCode': '请输验证码',
  'dw-forget-countDown': '{{current}} 秒倒数',
  'dw-forget-newPassword': '新密码',
  'dw-forget-confirmNewPassword': '确认新密码',
  'dw-forget-enterNewPassword': '请输入新密码',
  'dw-forget-enterNewPasswordAgain': '请再次输入新密码',
  'dw-forget-passwordMismatch': '密码不相符',
  'dw-forget-sentSuccessfully': '发送成功',
  'dw-forget-confirmCodeMailbox': '请确认信箱验证码',
  'dw-forget-confirmCodeSMS': '请确认短信验证码',
  'dw-forget-logInAgain': '修改密码后, 请使用新密码重新登入',
  'dw-forget-updatedSuccessfully': '密码更新成功,请使用新密码登入',
  'dw-tenant-default-tenant': '预设租户',
  'dw-tenant-switch-tenant': '切换租户',
  'dw-tenant-logout-title': '即将登出',
  'dw-tenant-logout-content': '即将登出，目前开启的作业将会全部关闭，返回登入页',
  'dw-tenant-changeTenant-title': '切换租户',
  'dw-tenant-changeTenant-content': '切换租户，目前开启的作业将会全部关闭，返回首页'
};

export const dwI18nBasic = {
  ...angularValidators,
  ...dwI18nProgView,
  'app-title': '',
  'dw-request-url': '请求网址',
  'dw-request-body': '请求内容',
  'dw-response-status': '回应状态',
  'dw-response-message': '回应讯息',
  'dw-http-connect-error': '连线错误',
  'dw-http-error': '抱歉，出错了',
  'dw-http-error-0': '伺服器发生错误，连线失败',
  'dw-http-error-400': '错误的请求',
  'dw-http-error-401': '发送的请求缺乏凭证',
  'dw-http-error-403': '抱歉，您无权访问该页面',
  'dw-http-error-404': '抱歉，您访问的页面不存在',
  'dw-http-error-500': '抱歉，服务器出错了',
  'dw-http-error-cac-title': '应用授权失败',
  'dw-http-error-cac-authorization-failure': '抱歉，您无应用使用权限',
  'dw-loadingData': '加载数据中',
  'dw-pleaseEnter': '请输入搜寻字串',
  'dw-determine': '确定',
  'dw-cancel': '取消',
  'dw-save': '保存',
  'dw-select-modal-error-dataSource': '必需有资料来源',
  'dw-select-modal-error-tableIdField': '使用的 id 栏位不得为空值',
  'dw-select-modal-error-tableNameField': '使用的 name 栏位不得为空值',
  'dw-select-modal-error-tableColDefs': '表格栏位定义不得为空值',
  'dw-select-modal-error-tableColDefs-title': '表格栏位定义-[title]不得为空值',
  'dw-select-modal-error-tableColDefs-field': '表格栏位定义-[field]不得为空值',
  'menu': {
    'dw-tool': '开发工具',
    'dw-upload-cc': '上传互联应用'
  },
  'prog': {
    'dw-sys-menu': '系统菜单设定',
    'dw-schedule-result': '排程任务记录'
  },
  'dw-tab-close-all': '关闭全部',
  'dw-tab-close': '关闭'
};
