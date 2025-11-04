(function () {
  const container = document.getElementById('container');
  function init() {
    setRem();
    setClassName();
    replaceImg();
    window.onresize = function () {
      setRem();
      setClassName();
      replaceImg();
    };
  }
  // 判断是否为移动端设备
  function getIsMobile() {
    return window.innerWidth < 768;
  }
  // 替换网址和邮箱图片
  function replaceImg() {
    const oldUrl = document.getElementById('oldUrl');
    const email = document.getElementById('email');
    if (getIsMobile()) {
      if (oldUrl) {
        oldUrl.src = oldUrl.dataset['mobileUrl'];
        oldUrl.style =
          'width: 102%; position: relative; margin-right: -0.07rem';
      }
      if (email) {
        email.src = email.dataset['mobileUrl'];
        email.style = 'width: 50%; height: auto';
      }
    } else {
      if (oldUrl) {
        oldUrl.src = oldUrl.dataset['pcUrl'];
        oldUrl.style =
          'width: 101%; position: relative; margin-right: -0.07rem';
      }
      if (email) {
        email.src = email.dataset['pcUrl'];
        email.style = 'width: 80%; height: auto';
      }
    }
  }
  // 设置pc mobile类名
  function setClassName() {
    const isMobile = getIsMobile();
    const classs = container.classList;
    const classArr = [...classs];
    if (classArr.indexOf('pc') === -1 && classArr.indexOf('mobile') === -1) {
      classs.add(isMobile ? 'mobile' : 'pc');
    } else if (
      (classArr.indexOf('pc') > -1 && !isMobile) ||
      (classArr.indexOf('mobile') > -1 && isMobile)
    ) {
      return;
    } else {
      classs.replace(isMobile ? 'pc' : 'mobile', isMobile ? 'mobile' : 'pc');
    }
  }
  // 设置rem
  function setRem() {
    const edges = [430, 768, 820, 1050, 1440, 1920];
    const baseSize = 100;
    const vW = window.innerWidth;
    const idx = edges.findIndex((item) => item - vW > 0);
    const maxIdx = idx == -1 ? edges.length - 1 : idx == 0 ? idx : idx - 1;
    const baseVal = baseSize / edges[maxIdx];
    const rem = vW * baseVal;
    document.documentElement.style.fontSize = rem + 'px';
  }

  init();
})();
