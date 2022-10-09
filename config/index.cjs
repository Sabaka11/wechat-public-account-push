/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe3c3573aa823e888',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '389fc7ad486cd20ee7c6e485b400c8a8',

  PROVINCE: '山东',
  CITY: '青岛',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojT1R6fxmE0e7C0nNlC7bKHR4EN4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Haji-9vyBBK346E-EaBf--gOSrfnLq4nzbcRE00kh-I',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        {
          type: '生日', name: '鋆哥', year: '2002', date: '10-23',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '文宝', year: '2003', date: '06-19',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '12-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-12-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojT1R6dgmsmKXONAoRfBZKih6f98',
    }
  ],

}

module.exports = USER_CONFIG

