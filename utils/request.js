export const request = (config = {
	url: '',
	method: 'get',
	data: {}
}) => {
	return new Promise((resolve, reject) => {
		const BASE_URL = 'https://tea.qingnian8.com/api/bizhi'
		const header = {}
		const { url, data, method} = config
		header['access-key'] = 'yyida123'
		uni.request({
			url: BASE_URL + url,
			method,
			data,
			header,
			success:(result) => { 
				const {data} = result
				if (data.errCode === 0) {
					resolve(data)
				}else {
					uni.showModal({
						title: '提示信息',
						content: result.data.errMsg,
						showCancel: false
					})
					reject(data)
				}
			},
			fail: (err) =>{ 
				uni.showToast({
					title: err,
					icon: 'exception',
					mask: true
				})
			},
			complete: () => {
				// uni.hideToast()
			}
		})
	})
}