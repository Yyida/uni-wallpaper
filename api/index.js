
import { request } from "../utils/request";
/**
 * 获取首页banner
 */
export const GetBannerList = () =>{ 
	return request({url: '/homeBanner', method: 'get', data: {}})
}

/**
 * 获取随机9张壁纸
 */
export const GetRandomList = () => {
	return request({url: '/randomWall'})
}

/**
 * 获取公告
 */
export const GetNews = (params) => {
	return request({url: '/wallNewsList', data: params})
}

/**
 * 获取大分类壁纸
 */

export const GetClassify = (params) => {
	return request({url: '/classify', data: params})
}

/**
 * 根据分类id，获取对应的分类列表
 */

export const GetClassifyList = (params) => {
	return request({url: '/wallList',data: {...params} })
}

/**
 * 评分
 */

export const SetStar = (params) =>{ 
	return request({url: '/setupScore', data: params})
}

/**
 * 添加下载记录
 */
export const SetDownloadLog  = () => {
	return request({url: '/downloadWall'})
}