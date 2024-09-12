export const filterTimerDiff = (timestamp) => {
	    // 获取当前时间的时间戳
	    const now = Date.now();
	    // 将输入的时间戳转换为毫秒
	    const inputTime = new Date(timestamp);
	    // 计算两个时间戳之间的差值
	    const diff = now - inputTime;
	
	    // 定义各个时间单位的毫秒数
	    const minute = 1000 * 60;
	    const hour = minute * 60;
	    const day = hour * 24;
	    const week = day * 7;
	    const month = day * 30; // 这是一个平均值，实际上月份长度有所不同
	
	    if (diff > month) {
	        return '1个月前';
	    } else if (diff > week) {
	        return '7天前';
	    } else if (diff > day * 3) {
	        return '3天前';
	    } else if (diff > day) {
	        return '1天前';
	    } else if (diff > hour) {
	        return '1小时前';
	    } else {
	        // 如果时间差小于1小时，则直接返回具体的时间
	        return `刚刚（${Math.floor(diff / minute)}分钟前）`;
	    }
}