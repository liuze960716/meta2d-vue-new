export const dictAddType = Object.freeze({
  0: "未知来源",
  1: "扫描二维码",
  2: "搜索手机号",
  3: "名片分享",
  4: "群聊",
  5: "手机通讯录",
  6: "微信联系人",
  8: "安装第三方应用时自动添加的客服人员",
  9: "搜索邮箱",
  10: "视频号添加",
  11: "通过日程参与人添加",
  12: "通过会议参与人添加",
  13: "添加微信好友对应的企业微信",
  14: "通过智慧硬件专属客服添加",
  15: "通过上门服务客服添加",
  201: "内部成员共享",
  202: "管理员/负责人分配",
});

export const activateList = Object.freeze({
  1: "已激活",
  2: "已禁用",
  4: "未激活",
  5: "退出企业",
  6: "删除",
});

/** 进群方式 */
export const dictJoinGroupType = Object.freeze({
  0: "由成员邀请入群（包括直接邀请入群和通过邀请链接入群）",
  1: "由成员邀请入群（直接邀请入群）",
  2: "由成员邀请入群（通过邀请链接入群）",
  3: "通过扫描群二维码入群",
});

/** 退群方式 */
export const dictExitGroupType = Object.freeze({
  0: "自己退群",
  1: "由群主/群管理员移出",
});

/** 跟进状态 */
export const dictTrackState = {
  0: { name: "正常", color: "" },
  1: { name: "客户删员工", color: "warning" },
  2: { name: "员工删客户", color: "success" },
  3: { name: "双方互删", color: "info" },
};

export const membersState = Object.freeze({
  0: "是",
  1: "否",
});

export const carOne = [
  {
    id: 1,
    name: "导购列表",
    url: "/smart-guide/guide-manage/shopping-guide",
  },
  {
    id: 2,
    name: "组织架构",
    url: "/enterprise-wechat/organizational",
  },
];

export const carTwo = [
  {
    name: "客户列表",
    url: "/customer-manage/customer/list",
    img: require("@/assets/index/kehgl.png"),
  },
  {
    name: "客户标签",
    url: "/customer-manage/customer-label",
    img: require("@/assets/index/kehgl.png"),
  },
  {
    name: "客户欢迎语",
    url: "/enterprise-wechat-drainage/customer-welcome/list",
    img: require("@/assets/index/kehgl.png"),
  },
  {
    name: "素材库",
    url: "/enterprise-wechat/material/material-library",
    img: require("@/assets/index/zidgl.png"),
  },
];

export const carThree = [
  {
    name: "任务计划",
    url: "/smart-guide/task-center",
    img: require("@/assets/index/neircd.png"),
  },
  {
    name: "消息通知",
    url: "/smart-guide/message-notice",
    img: require("@/assets/index/renwb.png"),
  },
  {
    name: "裂变活动",
    url: "/enterprise-wechat-drainage/fission-activity",
    img: require("@/assets/index/xiaoxqf.png"),
  },
  {
    name: "营销活动",
    url: "/smart-guide/marketing-activities/list",
    img: require("@/assets/index/yuanghm.png"),
  },
];

/**
 * 首页  汇总数据
 */
export const summaryData = [
  {
    name: "导购总人数",
    remake: "截止查询范围内最后一日，在岗导购的总人数",
    id: "shoppingGuideCnt",
    count: 0,
  },
  {
    name: "留存好友数",
    remake: `截止查询范围内最后一日，企微仍保留好友关系的外部联系人数总和`,
    remakeOne: " · 添加相同成员不去重",
    remakeTwo: " · 任意方单删都不算留存",
    id: "retainCnt",
    count: 0,
  },
  {
    name: "群总数",
    remake: "截止统计周期最后一天，成员拥有的客户群（未解散群）的数量。",
    id: "groupCnt",
    count: 0,
  },
  {
    name: "留存群成员数",
    remake: `截止统计周期最后一天，成员拥有的客户群（未解散群）中群成员的数量。`,
    remakeOne: " · 包含内部成员，外部企微成员",
    id: "retainGroupCnt",
    count: 0,
  },
];
/**
 * 首页  数据趋势
 */
export const dataTrend = [
  {
    name: "新增好友数",
    remake: `查询时间范围内，企微累计新增好友数（即查询时间范围内净新增+流失好友数总和）`,
    remakeOne: " · 查询多日相加不去重",
    id: "addCnt",
    count: "",
    ringRatioId: "addCompareCnt",
    ringRatioCount: "",
  },
  {
    name: "流失好友数",
    remake: `查询时间范围内，员工删除外部联系人或者外部联系人删除员工，或者互删的顾客数总和`,
    remakeOne: " · 当日互删去重",
    remakeTwo: " · 查询多日相加不去重",
    id: "loseCnt",
    count: "",
    ringRatioId: "loseCompareCnt",
    ringRatioCount: "",
  },
  {
    name: "新增群成员数",
    remake: `查询时间范围内，所有的客户（未解散群）中新加入的群成员的数量（包含内部成员）`,
    id: "addGroupCnt",
    count: "",
    ringRatioId: "addGroupCompareCnt",
    ringRatioCount: "",
  },
  {
    name: "退群数",
    remake: `查询时间范围内，在查询时间未解散群内退群的成员数总和（包含内部成员）`,
    id: "reduceMemberCnt",
    count: "",
    ringRatioId: "reduceMemberCompareCnt",
    ringRatioCount: "",
  },
];
/**
 * 客户社群
 */
export const customerData = [
  {
    name: "群总数",
    remake: `截止统计周期最后一天，成员拥有的客户群（未解散群）的数量。`,
    id: "groupNum",
    count: "",
  },
  {
    name: "新增群成员数",
    remake: `查询时间范围内，所有的客户（未解散群）中新加入的群成员的数量（包含内部成员）`,
    id: "addMemberNum",
    count: "",
  },
  {
    name: "退群数",
    remake: `查询时间范围内，在查询时间未解散群内退群的成员数总和（包含内部成员）`,
    id: "reduceMemberNum",
    count: "",
  },
  {
    name: "留存群成员数",
    remake: `截止统计周期最后一天，成员拥有的客户群（未解散群）中群成员的数量。`,
    remakeOne: ` · 包含内部成员，外部企微成员`,
    id: "retainedMemberNum",
    count: "",
  },
];

/**
 * 客户社群 详情
 */
export const customerDetailDataOne = [
  {
    name: "留存群成员数",
    remake: `截止统计周期最后一天，客户群中留存的成员数量（包含内部成员）`,
    id: "retainedMemberNum",
    count: "",
  },
  {
    name: "新增群成员数",
    remake: `查询时间范围内，客户群中新加入的群成员的数量（包含内部成员）`,
    id: "addMemberNum",
    count: "",
  },
];
export const customerDetailDataTwo = [
  {
    name: "退群数",
    remake: `查询时间范围内，在查询时间未解散群内退群的成员数总和（包含内部成员）`,
    id: "reduceMemberNum",
    count: "",
  },
  {
    name: "退群率",
    remake: `截止查询时间范围内，（退群数/退群前累计群成员数）*100%`,
    id: "reduceMemberRate",
    count: "",
    noArrow: true,
  },
];
export const customerDetailDataThree = [
  {
    name: "群留存会员数",
    remake: `截止统计周期最后一天，留存在群内且绑定过微信会员的成员数（包含内部成员）`,
    id: "retainedVipNum",
    count: "",
  },
  {
    name: "群留存非会员数",
    remake: `截止统计周期最后一天，留存在群内且非会员的总人数`,
    id: "retainedNoVipNum",
    count: "",
  },
  {
    name: "群留存会员率",
    remake: `截止统计周期最后一天，（群留存会员数/留存群成员数）*100%`,
    id: "retainedVipRate",
    count: "",
    noArrow: true,
  },
];

/** 数据罗盘   好友数据｜社群数据 */
export const tableProps = {
  // 客户数据报表
  customerTotalTable: [
    { prop: "date", label: "日期" },
    { prop: "customerCnt", label: "好友总数" },
    { prop: "addCnt", label: "新增好友数" },
    { prop: "loseCnt", label: "流失好友数" },
    { prop: "increaseCnt", label: "净增好友数" },
    { prop: "applyCnt", label: "发送申请数" },
  ],
  // 社群数据报表
  customerGroupTotalTable: [
    { prop: "date", label: "日期" },
    { prop: "groupNum", label: "社群总数" },
    { prop: "addGroupNum", label: "新增社群数" },
    { prop: "dismissGroupNum", label: "解散社群数" },
  ],
  // 社群成员数据报表
  customerGroupMemberTotalTable: [
    { prop: "date", label: "日期" },
    { prop: "retainedMemberNum", label: "社群成员总数" },
    { prop: "addMemberNum", label: "新增社群成员数" },
    { prop: "reduceMemberNum", label: "社群退群数" },
    { prop: "reduceGroupMemberNum", label: "解散社群成员数" },
  ],
  // 客户联系
  customerContactTable: [
    { prop: "xtime", label: "日期" },
    { prop: "chatCnt", label: "单聊总数" },
    { prop: "messageCnt", label: "发送消息数" },
    { prop: "replyPercentage", label: "已回复聊天占比" },
    { prop: "avgReplyTime", label: "平均回复时长(分)" },
  ],
  // 社群联系
  customerGroupContactTable: [
    { prop: "xtime", label: "日期" },
    { prop: "chatTotal", label: "群聊总数" },
    { prop: "msgTotal", label: "群聊消息数" },
    { prop: "memberHasMsg", label: "发送消息群成员数" },
  ],
};
