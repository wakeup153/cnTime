module.exports = new class Time extends Date{
	// 继承Date对象
	constructor() {
		super();
		return this;
	}
	// 返回中国时间 form 日期格式
	getCurrentDate(format='') {
		format = format.toString().toLowerCase();
		let time = this.getTimeObj();
		let ymd = [time.year, time.month, time.day]
		let hms = [time.hours, time.minutes, time.seconds]
		let matchStr = ['yyyy-mm-dd', 'yyyy/mm/dd', 'hh:mi:ss','yyyy-mm-dd hh:mi:ss', 'yyyy/mm/dd hh:mi:ss', 'yyyy', 'mm', 'dd', 'hh', 'mi', 'ss']
		switch(format) {
			case matchStr[0]:
			  return ymd.join('-');
			break;
			case matchStr[1]:
			  return ymd.join('/');
			break;
			case matchStr[2]:
			  return hms.join(':');
			break;
			case matchStr[3]:
			  return ymd.join('-') + ' ' + hms.join(':');
			break;
			case matchStr[4]:
			  return ymd.join('/') + ' ' + hms.join(':');
			break;
			case matchStr[5]:
			  return ymd[0]
			break;
			case matchStr[6]:
			  return ymd[1]
			break;
			case matchStr[7]:
			  return ymd[2]
			break;
			case matchStr[5]:
			  return hms[0]
			break;
			case matchStr[6]:
			  return hms[1]
			break;
			case matchStr[7]:
			  return hms[2]
			break;
			default:
			  return ymd.join('-') + ' ' + hms.join(':')
		}
	}
	// 获取当前时间
	getTimeObj() {
		// 获取年
		const year = this.getFullYear().toString();
		// 获取月
		const month = this.appendZero(this.getMonth() + 1);
		// 获取日
		const day = this.appendZero(this.getDate());
		// 获取时
		const hours = this.appendZero(this.getHours());
		// 获取分
		const minutes = this.appendZero(this.getMinutes());
		// 获取秒
		const seconds = this.appendZero(this.getSeconds());
		return {
			year,
			month,
			day,
			hours,
			minutes,
			seconds
		}
	}
	// 追加0
	appendZero(n) {
		if (n < 10) {
			return n = '0' + n;
		} else {
			return n.toString();
		}
	}
}