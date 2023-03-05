import { MessageBox } from 'element-ui'

import router from '@/router'
// 定义一个深拷贝函数，接收目标target参数
const deepClone = target => {
	// 定义一个变量
	let result
	// 如果当前需要深拷贝的是一个对象的话
	if (typeof target === 'object') {
		// 如果是一个数组的话
		if (Array.isArray(target)) {
			result = [] // 将result赋值为一个数组，并且执行遍历
			for (let i in target) {
				// 递归克隆数组中的每一项
				result.push(deepClone(target[i]))
			}
			// 判断如果当前的值是null的话；直接赋值为null
		} else if (target === null) {
			result = null
			// 判断如果当前的值是一个RegExp对象的话，直接赋值
		} else if (target.constructor === RegExp) {
			result = target
		} else {
			// 否则是普通对象，直接for in循环，递归赋值对象的所有值
			result = {}
			for (let i in target) {
				result[i] = deepClone(target[i])
			}
		}
		// 如果不是对象的话，就是基本数据类型，那么直接赋值
	} else {
		result = target
	}
	// 返回最终结果
	return result
}

// 深度合并对象
const deepObjectMerge = (FirstOBJ, SecondOBJ) => {
	for (var key in SecondOBJ) {
		FirstOBJ[key] =
			FirstOBJ[key] && FirstOBJ[key].toString() === '[object Object]' ?
			deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) :
			(FirstOBJ[key] = SecondOBJ[key])
	}
	return FirstOBJ
}

/**
 * 防抖函数
 *
 * @param {*} fnName vue中的函数名
 * @param {*} time 防抖多久
 * @param {*} immediate 是否为立即执行
 * @returns
 */
const debounce = function(fnName, time, immediate) {
	let timeout = null;
	return function() {
		if (immediate) {
			if (timeout) {
				clearTimeout(timeout)
				timeout = setTimeout(() => {
					timeout = null
				}, time);
			} else {
				this[fnName](...arguments);
				timeout = setTimeout(() => {
					timeout = null
				}, time);
			}
		} else {
			if (timeout) {
				clearTimeout(timeout);
			}
			timeout = setTimeout(() => {
				if (immediate) {
					clearTimeout(timeout)
				} else {
					this[fnName](...arguments);
				}
			}, time);
		}
	};
}

/**
 * 节流函数
 *
 * @param {*} func
 * @param {*} wait
 * @returns
 */
const _throttle = (func, wait) => {
	if (typeof func !== 'function') throw new TypeError('func must be a function!')
	wait = +wait
	if (isNaN(wait)) wait = 300
	let timer = null,
		previous = 0,
		result
	return function proxy(...params) {
		let now = +new Date(),
			remaining = wait - (now - previous),
			self = this
		if (remaining <= 0) {
			if (timer) {
				clearTimeout(timer)
				timer = null
			}
			previous = now
			result = func.apply(self, params)
			return result
		}
		if (!timer) {
			timer = setTimeout(() => {
				clearTimeout(timer)
				timer = null
				previous = +new Date()
				result = func.apply(self, params)
			}, remaining)
		}
		return result
	}
}


// 校验开卡和完善注册信息的姓名
const checkName = (name) => {
	console.log(name)
	const val = name || ''
	let test1 = val.match(/[^\u4e00-\u9fa5·•]/);
	let test2 = val.match(/[^a-zA-Z,，·.• ]/);
	if (test1 && test2) {
		uni.showToast({
			title: '姓名字符构成仅可是以下形式中的一种：1.中文、点（·）；2.英文，空格，中英文的逗号和点（，·）',
			icon: 'none',
			duration: 5000
		});
		return false
	}
	let len = val.replace(/[,，·.• ]/g, '').length;
	if (len < 2) {
		uni.showToast({
			title: '您的名称有效字符不足两位，请检查后重新输入',
			icon: 'none',
			duration: 2000
		});
		return false
	}
	return true
}

// 校验身份证
const checkIdCard = function(num) {
	num = num.toUpperCase();
	//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
	if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
		// alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');
		uni.showToast({
			title: '输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。',
			icon: 'none',
			duration: 2000
		});
		return false;
	}
	//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
	//下面分别分析出生日期和校验位
	var len, re;
	len = num.length;
	if (len == 15) {
		re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
		var arrSplit = num.match(re);
		//检查生日日期是否正确
		var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
		var bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[
			3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
		if (!bGoodDay) {
			// alert('输入的身份证号里出生日期不对！');
			uni.showToast({
				title: '输入的身份证号里出生日期不对！',
				icon: 'none',
				duration: 2000
			});
			return false;
		} else {
			//将15位身份证转成18位
			//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
			var nTemp = 0,
				i;
			num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
			for (i = 0; i < 17; i++) {
				nTemp += num.substr(i, 1) * arrInt[i];
			}
			num += arrCh[nTemp % 11];
			return num;
		}
	}
	if (len == 18) {
		re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
		var arrSplit = num.match(re);
		//检查生日日期是否正确
		var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
		var bGoodDay;
		bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[
			3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
		if (!bGoodDay) {
			// alert(dtmBirth.getYear());
			// alert(arrSplit[2]);
			// alert('输入的身份证号里出生日期不对！');
			uni.showToast({
				title: '输入的身份证号里出生日期不对！',
				icon: 'none',
				duration: 2000
			});
			return false;
		} else {
			//检验18位身份证的校验码是否正确
			//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
			var valnum;
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
			var nTemp = 0,
				i;
			for (i = 0; i < 17; i++) {
				nTemp += num.substr(i, 1) * arrInt[i];
			}
			valnum = arrCh[nTemp % 11];
			if (valnum != num.substr(17, 1)) {
				// alert('18位身份证的校验码不正确！应该为：' + valnum);
				uni.showToast({
					title: '输入的身份证有误！',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			return num;
		}
	}
	return false;
}
//检验白名单
const checkWhite = function(commonApi) {
	commonApi.onIsOpenWhite().then(res => {
		uni.setStorageSync("checkWhite",res.data)
		if (res.data) {
			wx.login({
				success(res) {
					if (res.code) {
						let data = {
							code: res.code
						}
						commonApi.codeSession(data).then(res => {
							let params = {
								unionId: res.data.unionId
							}
							console.log('白名单------',params)
							commonApi.userByUnionId(params).then(res => {
								if (res.success) {
									if (res.data) {
										uni.reLaunch({
											url: '/pages/jurisdiction/jurisdiction?id=2'
										})
									} else {
										uni.reLaunch({
											url: '/pages/jurisdiction/jurisdiction?id=1'
										})
									}
								}
							})
						})
					}
				}
			})
		}
	})
}

// VERA入口白名单
// 检验VERA白名单校验开启(未开启白名单校验则直接展示)  => 校验vera白名单用户 
const checkVeraWhite = function(commonApi,accountId) {
	return new Promise((resolve,reject) => {
		
		// commonApi.onIsOpenVera().then(res => {  //VERA后端配置开关
		commonApi.getPopupInfo().then(res => {	//VERA后管配置开关
			// console.log("onIsOpenVera",res)
			if(res.code != 0) {
				resolve(false)
			}
			const popupInfo = JSON.parse(res.data.content)
			// console.log(66666,popupInfo)
			if (popupInfo && popupInfo.veraFlag) {
				commonApi.onIsVearWhite({accountId}).then(res => {
					if (res.success) {
						resolve(res.data)
					}else{
						reject({err:res})
					}
				})
			} else {
				resolve(true) //未开启校验，直接展示入口
			}
		})
	})
}

// 发送确认请求 & 存储协议
const pricacyConfirmSave = function (commonApi,that,pricacy,token,userInfo) {
		// console.log("确认协议", that,pricacy,token,userInfo)
		const obj = pricacy || {}
		obj.isMatch = 1  //更改状态
		that.$store.commit('privacy/updateCurrentPricacy', obj)		// 确认后直接存储
		uni.setStorage({
			key: 'currentPricacy',
			data: obj
		})
		if(token && obj.termsEo){
			commonApi.savePrivacy({
				memberId:userInfo.accountId,
				termsId:obj.termsEo.id,
				typeId:obj.termsEo.typeId,
				agreeEmp:4,
			}).then(res => {
				console.log("确认协议：",res)
			})
		}
}

// 退出登录清除全部缓存（不清除的写在这里）
const clearStorageAll = function() {
	const res = uni.getStorageInfoSync();
	res.keys.forEach(v => {
		if (v != 'currentPricacy') {
			uni.removeStorageSync(v)
		}
	})
}


/**
 * 分享的title
 * 2022-5-25  __JM改造
 * @param {type} userInfo 用户信息
 * @param {type} flag 是否返回默认文案，默认返回
 * @param {type} text 自定义的文案, 传入则覆盖默认文案
 */
const shareTitle = function(userInfo, flag = true, text = ' 分享了一个小程序给你') {
	let title = ""

	// RC用户
	if (userInfo.type == 1) {
		if (userInfo.defaultUserMessage) {
			// 未绑定微信展示  手机号
			let tel = String(userInfo.mobile);
			let dh = tel.substr(0, 3) + "*****" + tel.substr(8);
			// title = dh + ' ' + '分享了一个小程序给你'
			title = dh
		} else {
			// 绑定微信展示  微信昵称
			// title = userInfo.nickName + ' ' + '分享了一个小程序给你'
			title = userInfo.nickName
		}
	}
	// PC用户
	if (userInfo.type >= 2) {
		let tel = String(userInfo.userName);
		let dh = tel.substr(0, 3) + "*****" + tel.substr(7);
		if (userInfo.defaultUserMessage) {
			// 未绑定微信展示 姓名 + CN号
			// title = userInfo.realName + ' ' + dh + ' 分享了一个小程序给你'
			title = userInfo.realName + ' ' + dh
		} else {
			// 绑定微信展示 微信昵称 + CN号
			// title = userInfo.nickName + ' ' + dh + ' 分享了一个小程序给你'
			title = userInfo.nickName + ' ' + dh
		}
	}

	// return title
	return flag ? (title + text) : title
}

/**
 * 下载弹框
 * @params { * }
 * { text } 弹框标题
 * { iconType } 弹框标识
 * { path } 跳转路径
 */
export const exportMessageBox = (text = '文件已进入下载列表，请前往【下载中心】查看及下载文件。', iconType='warning', path='/setting/download-center/list') => {
  return MessageBox.confirm(text, "警告", {
    confirmButtonText: "前往下载中心",
    cancelButtonText: "暂不前往",
    type: iconType
  }).then((res) => {
    const { href } = router.resolve({
      path,
    });
    window.open(href, "_blank");
    })
    .catch((error) => {
      console.error(error);
    })
 }

export default {
	deepClone,
	deepObjectMerge,
	debounce,
	_throttle,
	checkName,
	checkIdCard,
	checkWhite,
	checkVeraWhite,
	pricacyConfirmSave,
	clearStorageAll,
	shareTitle,
	exportMessageBox
}
