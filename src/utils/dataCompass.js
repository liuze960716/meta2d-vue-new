/**
 * 社群数据
 */
export const communityCardData = [
  {
    name: "群总数",
    tips: "截止统计周期最后一天，成员拥有的客户群（未解散群）的数量。",
    key: "groupNum",
  },
  {
    name: "留存群成员数",
    tips: `截止统计周期最后一天，成员拥有的客户群（未解散群）中群成员的数量。· 包含内部成员，外部企微成员`,
    key: "retainedMemberNum",
  },
  {
    name: "新增群成员数",
    tips: "查询时间范围内，所有的客户（未解散群）中新加入的群成员的数量（包含内部成员）",
    key: "addMemberNum",
  },
  {
    name: "退群数",
    tips: "查询时间范围内，在查询时间未解散群内退群的成员数总和（包含内部成员）",
    key: "reduceMemberNum",
  },
  {
    name: "退群率",
    tips: "截止查询时间范围内，（退群数/退群前累计群成员数）*100%",
    key: "reduceMemberRate",
    noArrow: true,
  },
  {
    name: "群成员加好友数",
    tips: "截止统计周期最后一天，留存群成员（外部成员）中和员工有好友关系的成员累计总和",
    key: "mutualFriendNum",
  },
  {
    name: "群成员加好友率",
    tips: "截止统计周期最后一天，（群成员加好友数/留存群成员数）*100%",
    key: "mutualFriendRate",
    noArrow: true,
  },
  {
    name: "已入群会员数",
    tips: "截止统计周期最后一天，留存在群内且绑定过微信会员的成员数（包含内部成员）",
    key: "retainedVipNum",
  },
  {
    name: "已入群会员率",
    tips: "截止统计周期最后一天，（已入群会员数/留存群成员数）*100%",
    key: "retainedVipRate",
    noArrow: true,
  },
  {
    name: "已入群会员数(去重)",
    tips: "截止统计周期最后一天，留存在群内且绑定过微信会员的成员数（包含内部成员）（会员数去重）",
    key: "distinctRetainedVipNum",
  },
  {
    name: "已入群会员率(去重)",
    tips: "截止统计周期最后一天，（已入群会员数去重/留存群成员数去重）*100%",
    key: "distinctRetainedVipRate",
    noArrow: true,
  },
  {
    name: "群营销活动参与数",
    tips: "截止统计周期最后一天，群内留存的成员中参与过营销活动的成员数",
    key: "marketingNum",
  },
  {
    name: "群营销活动参与率",
    tips: "查询时间范围内，（群营销活动参与数/群留存成员数）*100%",
    key: "marketingRate",
    noArrow: true,
  },
  {
    name: "群裂变活动参与数",
    tips: "截止统计周期最后一天，群内留存的成员中参与过裂变活动的成员数",
    key: "fissionNum",
  },
  {
    name: "群裂变活动参与率",
    tips: "截止统计周期最后一天，（群裂变活动参与数/群留存成员数）*100%",
    key: "fissionRate",
    noArrow: true,
  },
];
/**
 * 好友数据
 */
export const friendsCardData = [
  {
    title: "留存好友数",
    tips: `截止查询范围内最后一日，企微仍保留好友关系的外部联系人数总和 · 添加相同成员不去重 · 任意方单删都不算留存`,
    key: "retainCnt",
  },
  {
    title: "新增好友数",
    tips: `查询时间范围内，企微累计新增好友数（即查询时间范围内净新增+流失好友数总和）· 查询多日相加不去重`,
    key: "addCnt",
  },
  {
    title: "流失好友数",
    tips: `查询时间范围内，员工删除外部联系人或者外部联系人删除员工，或者互删的顾客数总和 · 当日互删去重 · 查询多日相加不去重`,
    key: "loseCnt",
  },
  {
    title: "流失好友率",
    tips: "查询时间范围内，（流失好友数  / 包含流失客户的累计好友数)*100%",
    key: "loseRate",
    noArrow: true,
  },
  {
    title: "留存好友入群数",
    tips: `截止查询范围内最后一日，企微仍是好友且已入客户社群的好友总数 · 好友入单个员工的多个群时去重`,
    key: "retainGroupCnt",
  },
  {
    title: "好友入群率",
    tips: "截止查询范围内最后一日，(留存好友入群数 / 留存好友数）*100%",
    key: "retainGroupRate",
    noArrow: true,
  },
  {
    title: "新增好友入群率",
    tips: "查询时间范围内，（新增的好友还在社群中的好友数 / 新增好友数）*100%",
    key: "addGroupRate",
    noArrow: true,
  },
  {
    title: "新增好友会员绑定率",
    tips: "查询时间范围内，（新增好友数中已注册会员的数据 / 新增好友数）*100%",
    key: "addVipRate",
    noArrow: true,
  },
  {
    title: "微信会员绑定数",
    tips: `截止查询范围内最后一日，绑定微信会员的好友数 · 添加相同成员不去重`,
    key: "vipBingCnt",
  },
  {
    title: "微信会员绑定率",
    tips: `截止查询范围内最后一日，（微信会员绑定数 / 留存好友数）*100%`,
    key: "vipBingRate",
    noArrow: true,
  },
  {
    title: "微信会员绑定数(去重)",
    tips: `截止查询范围内最后一日，绑定微信会员的好友人数 · 添加相同成员去重`,
    key: "vipBingAloneCnt",
  },
  {
    title: "微信会员绑定率(去重)",
    tips: `截止查询范围内最后一日，（微信会员绑定数(去重) / 留存好友数的“去重数”）*100%`,
    key: "vipBingAloneRate",
    noArrow: true,
  },
];
