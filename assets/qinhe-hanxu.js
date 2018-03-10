"use strict";



define('qinhe-hanxu/app', ['exports', 'qinhe-hanxu/resolver', 'ember-load-initializers', 'qinhe-hanxu/config/environment', 'qinhe-hanxu/common/locales/zh-cn'], function (exports, _resolver, _emberLoadInitializers, _environment, _zhCn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  Object.defineProperty(window, "UDL", {
    value: _zhCn.default,
    enumerable: true,
    configurable: false,
    writable: false
  });

  var App = void 0;

  Ember.MODEL_FACTORY_INJECTIONS = true;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define("qinhe-hanxu/common/locales/zh-cn", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // jshint camelcase:false
  var locale = {
    labels: {
      websiteName: "Udesk Repository"
    },
    components: {},
    enums: {},
    fields: {},
    menu: {},
    pages: {},
    business: {
      components: {},
      notifyMessage: {
        haveNoLegalPower: "您没有访问权限",
        catalogFailed: "找不到该空间分类",
        switchFailed: "切换失败，请检查网络连接或稍后再试。",
        createSuccess: "{0}创建成功。",
        createFailedForDuplicate: "{0}创建失败，{1}重复。",
        createFailed: "{0}创建失败，请稍后再试。",
        editSuccess: "{0}编辑成功。",
        editFailedForDuplicate: "{0}编辑失败，{1}重复。",
        editFailed: "{0}编辑失败，请稍后再试。",
        deleteSuccess: "{0}删除成功。",
        deleteFailed: "{0}删除失败，请稍后再试。",
        deleteWarning: "{0}删除将无法恢复，您确定要继续么。",
        enableSuccess: "{0}启用成功。",
        enableFailed: "{0}启用失败，请检查网络连接或稍后再试。",
        disableSuccess: "{0}禁用成功。",
        disableFailed: "{0}禁用失败，请检查网络连接或稍后再试。",
        recoverSuccess: "{0}恢复成功。",
        recoverFaield: "{0}恢复失败，请检查网络连接或稍后再试。",
        recoverWarning: "{0}将要从回收站中被恢复，您确定要继续么？",
        getInformationFailed: "获取{0}信息失败，请检查网络连接或稍后再试",
        isRequired: "{0}不得为空。",
        selectedExist: "您当前选择的{0}已经存在。",
        userNameIsTooLong: "用户名不得大于7个字符",
        getOssAuthFailed: "获取OSS授权失败，请检查网络连接或稍后再试。",
        formatError: "{0}格式不正确",
        resumePasswordWrong: "两次密码输入不相等",
        avatarUploadFailed: "头像上传失败，请检查网络连接或稍后再试",
        reachAgentTotle: "当前坐席数，已经达到上限，无法继续添加新员工",
        userGroupNameIsTooLong: "员工组名称不得超过40个字符。",
        userGroupListFailed: "获取员工组列表失败，请检查网络连接或稍后再试",
        userListFailed: "获取员工列表失败，请检查网络连接或稍后再试",
        dismissionLogin: "对不起，您已经离职。",
        forbiddenLogin: "对不起，您的账户是禁用状态。",
        loginError: "登录失败，邮箱或密码错误。",
        logoutError: "注销失败，请查看网络连接或稍后再试。",
        linkTimeout: "重置密码链接到期，请重试",
        sendEmailSuccess: "修改密码确认信函已经成功发送至您填写的邮箱中，请及时查收。",
        sendEmailFailed: "邮箱发送失败，请检查网络连接或稍后再试。",
        confirmPasswordWrong: "两次输入的密码不相等。",
        passwordResetSuccess: "密码重置成功。",
        passwordResetFailed: "密码重置失败，请检查网络连接或稍后再试。",
        linkTimeover: "重置密码链接到期，请重试",
        categoryEditFailed: "编辑空间分类失败。",
        categoryAddNoPermission: "没有添加空间分类的权限！",
        categoryAddFailed: "添加空间分类失败，请检查网络连接或稍后再试。",
        categoryAddSuccess: "添加空间分类成功。",
        categoryEditSuccess: "编辑空间分类成功。",
        categoryDeleteSuccess: "空间分类删除成功。",
        addQucikSuccess: "添加快速访问成功。",
        addQucikFailed: "添加快速访问失败。",
        updateQuickFailed: "刷新快速访问失败",
        removeQucikSuccess: "取消快速访问成功。",
        removeQucikFailed: "取消快速访问失败。",
        commentCannotEmpty: "评论不得为空",
        deleteCatalogFailed: "删除失败，当前分类下有子分类",
        exportFailed: "导出失败",
        pictureUploadFailed: "图标上传失败",
        userGroupSelectedPrompt: "请选择员工组",
        userSelectedPrompt: "请选择员工",
        files: {
          uploadFileSuccess: "上传文件成功。",
          uploadFileFailed: "上传文件失败，请检查网络连接或稍后再试。",
          deleteSuccess: "删除文件成功",
          deleteFailed: "删除文件失败",
          updateSuccess: "更新文件成功",
          updateFailed: "更新文件失败",
          getFilesFailed: "获取文件信息失败，请检查网络连接或稍后再试。",
          deleteWarning: "您确定要将该文件放入空间回收站吗？"
        },
        articles: {
          switchHistorySuccess: "切换历史版本成功。",
          switchHistoryFailed: "切换版本失败，请检查网络连接或稍后再试。",
          upvoteArticleSuccess: "文章点赞成功",
          upvoteArtilceFailed: "文章点赞失败，请检查网络连接或稍后再试。",
          cancelArticelUpvoteSuccess: "文章取消点赞成功。",
          cancelArticelUpvoteFailed: "文章点赞取消失败，请检查网络连接或稍后再试。",
          deleteUpvoteSuccess: "对该评论取消点赞成功。",
          deleteUpvoteFailed: "对该评论取消点赞失败，请检查网络连接或稍后再试。",
          addCommentSuccess: "添加评论成功。",
          addCommentFailed: "添加评论失败，请检查网络连接或稍后再试。",
          deleteCommentPrompt: "评论删除后将无法恢复，您确定要继续么？",
          deleteCommentSuccess: "删除评论成功。",
          deleteCommentFailed: "删除评论失败，请检查网络连接或稍后再试。",
          getCommentsFailed: "评论获取失败，请检查网络连接或稍后再试。",
          addFollowSuccess: "关注文章成功。",
          addFollowFailed: "关注文章失败，请检查网络连接或稍后再试。",
          moveFileSuccess: "移动文件成功。",
          moveFileFailed: "移动文件失败，请检查网络连接或稍后再试。",
          cancelFollowSuccess: "取消关注成功。",
          cancelFollowFailed: "取消关注失败，请检查网络连接或稍后再试。",
          insertImageFailed: "插入图片失败，请检查网络连接或稍后再试。",
          noPermissiontoCreateArticle: "您的账号当前无权在此空间创建文章。",
          commentUpvoteFailed: "评论点赞失败。",
          commentUpvoteSuccess: "评论点赞成功。",
          commentCancelUpvoteSuccess: "评论取消点赞成功。",
          noViewPermissions: "当前客户没有查看文章的权限"
        }
      }
    }
  };

  exports.default = locale;
});
define('qinhe-hanxu/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('qinhe-hanxu/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('qinhe-hanxu/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('qinhe-hanxu/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('qinhe-hanxu/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('qinhe-hanxu/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('qinhe-hanxu/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('qinhe-hanxu/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('qinhe-hanxu/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('qinhe-hanxu/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('qinhe-hanxu/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('qinhe-hanxu/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('qinhe-hanxu/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('qinhe-hanxu/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('qinhe-hanxu/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('qinhe-hanxu/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('qinhe-hanxu/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('qinhe-hanxu/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('qinhe-hanxu/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('qinhe-hanxu/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('qinhe-hanxu/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('qinhe-hanxu/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('qinhe-hanxu/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('qinhe-hanxu/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('qinhe-hanxu/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('qinhe-hanxu/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('qinhe-hanxu/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('qinhe-hanxu/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('qinhe-hanxu/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('qinhe-hanxu/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('qinhe-hanxu/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('qinhe-hanxu/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('qinhe-hanxu/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('qinhe-hanxu/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('qinhe-hanxu/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('qinhe-hanxu/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('qinhe-hanxu/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('qinhe-hanxu/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('qinhe-hanxu/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('qinhe-hanxu/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('qinhe-hanxu/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('qinhe-hanxu/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('qinhe-hanxu/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('qinhe-hanxu/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('qinhe-hanxu/components/swiper-container', ['exports', 'ember-cli-swiper/components/swiper-container'], function (exports, _swiperContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _swiperContainer.default;
    }
  });
});
define('qinhe-hanxu/components/swiper-slide', ['exports', 'ember-cli-swiper/components/swiper-slide'], function (exports, _swiperSlide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _swiperSlide.default;
    }
  });
});
define('qinhe-hanxu/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('qinhe-hanxu/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    options: {
      loop: true,
      autoplay: 1000,
      speed: 1000,
      autoplayDisableOnInteraction: false,
      effect: 'cube',
      pagination: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },

    actions: {
      qqq: function qqq() {
        console.log(11, this);
      }
    }
  });
});
define('qinhe-hanxu/helpers/app-version', ['exports', 'qinhe-hanxu/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('qinhe-hanxu/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('qinhe-hanxu/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('qinhe-hanxu/helpers/cancel-all', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cancelHelper = cancelHelper;


  var CANCEL_REASON = "the 'cancel-all' template helper was invoked";

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      Ember.assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _helpers.taskHelperClosure)('cancel-all', 'cancelAll', [cancelable, CANCEL_REASON]);
  }

  exports.default = Ember.Helper.helper(cancelHelper);
});
define('qinhe-hanxu/helpers/perform', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.performHelper = performHelper;
  function performHelper(args, hash) {
    return (0, _helpers.taskHelperClosure)('perform', 'perform', args, hash);
  }

  exports.default = Ember.Helper.helper(performHelper);
});
define('qinhe-hanxu/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('qinhe-hanxu/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('qinhe-hanxu/helpers/task', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref),
        task = _ref2[0],
        args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports.default = Ember.Helper.helper(taskHelper);
});
define('qinhe-hanxu/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'qinhe-hanxu/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('qinhe-hanxu/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('qinhe-hanxu/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('qinhe-hanxu/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
define('qinhe-hanxu/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('qinhe-hanxu/initializers/export-application-global', ['exports', 'qinhe-hanxu/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('qinhe-hanxu/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('qinhe-hanxu/initializers/load-bootstrap-config', ['exports', 'qinhe-hanxu/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('qinhe-hanxu/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('qinhe-hanxu/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("qinhe-hanxu/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('qinhe-hanxu/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('qinhe-hanxu/router', ['exports', 'qinhe-hanxu/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define("qinhe-hanxu/routes/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return Ember.RSVP.hash({
        nav: [{
          content: "首页",
          linkTo: "application",
          detail: []
        }, {
          content: "产品信息",
          linkTo: "application",
          detail: []
        }, {
          content: "服务与支持",
          linkTo: "application",
          detail: []
        }, {
          content: "关于沁荷",
          linkTo: "application",
          detail: []
        }]
      });
    }
  });
});
define('qinhe-hanxu/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("qinhe-hanxu/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jU1xWNXR", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"app\"],[15,\"id\",\"app\"],[13],[0,\"\\n  \"],[11,\"header\",[]],[15,\"class\",\"header\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"header-content\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"logo pull-left\"],[13],[14],[0,\"\\n      \"],[11,\"ul\",[]],[15,\"class\",\"header-nav pull-left clearfix\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"nav\"]]],null,{\"statements\":[[0,\"          \"],[11,\"li\",[]],[15,\"class\",\"nav-item pull-left\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[[28,[\"navItem\",\"linkTo\"]]],[[\"classNames\",\"activeClass\"],[\"linkTo\",\"active\"]],{\"statements\":[[0,\"              \"],[1,[28,[\"navItem\",\"content\"]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"          \"],[14],[0,\"\\n\"]],\"locals\":[\"navItem\"]},null],[0,\"      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"global-search pull-left\"],[13],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"type\",\"value\",\"classNames\"],[\"text\",\"\",\"search-box form-control\"]]],false],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"search-button\"],[13],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"section\",[]],[15,\"class\",\"section\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"swiper-box\"],[5,[\"action\"],[[28,[null]],\"qqq\"],[[\"on\"],[\"mouseEnter\"]]],[13],[0,\"\\n\"],[6,[\"swiper-container\"],null,[[\"options\"],[[28,[\"options\"]]]],{\"statements\":[[6,[\"swiper-slide\"],null,null,{\"statements\":[[0,\"          \"],[11,\"img\",[]],[15,\"src\",\"http://www.elkay.com.cn/uploads/e3bbbd43d92c9c3c2d1834ae4bc5f86e.jpg\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"swiper-slide\"],null,null,{\"statements\":[[0,\"          \"],[11,\"img\",[]],[15,\"src\",\"http://www.elkay.com.cn/uploads/6b0375a1d2cac4e4a6622ec763073256.jpg\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"swiper-slide\"],null,null,{\"statements\":[[0,\"          \"],[11,\"img\",[]],[15,\"src\",\"http://www.elkay.com.cn/uploads/30a0d4aaaef09669346174db4b81fad3.jpg\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"swiper-slide\"],null,null,{\"statements\":[[0,\"          \"],[11,\"img\",[]],[15,\"src\",\"http://www.elkay.com.cn/uploads/ca0075686b693882019de074f6785c57.jpg\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"swiper-slide\"],null,null,{\"statements\":[[0,\"          \"],[11,\"img\",[]],[15,\"src\",\"http://www.elkay.com.cn/uploads/3462bd1796b9df2427fefdfd65ae867c.jpg\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"swiper-slide\"],null,null,{\"statements\":[[0,\"          \"],[11,\"img\",[]],[15,\"src\",\"http://www.elkay.com.cn/uploads/8af912fd8e2a5ae0f4a0c6ef4831660e.jpg\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "qinhe-hanxu/templates/application.hbs" } });
});
define('qinhe-hanxu/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});


define('qinhe-hanxu/config/environment', ['ember'], function(Ember) {
  var prefix = 'qinhe-hanxu';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("qinhe-hanxu/app")["default"].create({"name":"qinhe-hanxu","version":"0.0.0+93583ff2"});
}
//# sourceMappingURL=qinhe-hanxu.map
