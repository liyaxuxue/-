// 鼠标进入li时
$('ul').on('mouseenter', 'li', function () {
  // 播放对应的音频
  var num = $(this).index();  // 获取索引
  $('audio')[num].load();    // 加载音频文件
  $('audio')[num].play();    // 播放音频文件

  // 让li内部的span动画
  $(this).find('span').stop().animate({ top: 0 }, 200);
 });

// 鼠标离开li时
$('ul').on('mouseleave', 'li', function () {

  // 让li内部的span动画
  $(this).find('span').stop().animate({ top: 60 }, 200);
});
 
// 给document注册键盘按下事件
$(document).keydown(function (e) { 
  // 获取键码值
  var code = e.keyCode;
  // 判断按键是否是1到7
  if (code >= 49 && code<= 55) {
    // 计算出li对应索引
    var index = code - 49;
    // 触发对应的li的鼠标进入事件
    $('li').eq(index).trigger('mouseenter');
  }
});

// 给document注册键盘弹起事件
$(document).keyup(function (e) { 
  // 获取键码值
  var code = e.keyCode;
  // 判断按键是否是1到7
  if (code >= 49 && code<= 55) {
    // 计算出li对应索引
    var index = code - 49;
    // 触发对应的li的鼠标进入事件
    $('li').eq(index).trigger('mouseleave');
  }
});