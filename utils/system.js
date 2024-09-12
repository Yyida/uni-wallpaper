
/**
 * 获取状态栏高度
 */
export const getStatuBarHeight = () => {
	const SYSTEM_INFO = uni.getSystemInfoSync()
	return SYSTEM_INFO.statusBarHeight || 0
}

/**
 * 获取左侧胶囊按钮栏距离顶部高度 仅mp-weixin 
 */
export const getMenuButtonBoundingClientRect = () => {
	// #ifdef MP-WEIXIN
	let {height, top} = uni.getMenuButtonBoundingClientRect()
	return ((top - getStatuBarHeight()) * 2) + height
	// #endif
	
	// #ifndef MP-WEIXIN
		return 40
	// #endif
}

/**
 * 获取自定义导航栏高度 （状态栏高度 + 胶囊按钮高度）
 */

export const getNavTarbarHeight = () =>{ 
	return getStatuBarHeight() + getMenuButtonBoundingClientRect()
}