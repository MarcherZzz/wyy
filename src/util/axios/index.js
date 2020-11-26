import http from './axios'

// 推荐歌单
export function resMusic(parmas){
    return http.get('/personalized?limit=6',{
        parmas
    })
}
// 推荐新音乐
export function newSong(){
    return http.get('/personalized/newsong')
}
// 首页轮播图
export function banner(){
    return http.get('/banner')
}
// 封装一个热搜榜列表接口
export function getPlayList (params) {
    return http.get('/top/list', {
      params
    })
  }
//   歌单详情
export function playDetail(params){
    return http.get('/playlist/detail',{
        params
    })
}
// 获取歌曲详情
export function songDetail(params){
    return http.get('/song/detail',{
        params
    })
}
// 获取歌曲链接
export function playUrl(params){
    return http.get('/song/url',{
        params
    })
}
// 获取歌词
export function getLyric(params){
    return http.get('/lyric',{
        params
    })
}
//热搜列表
export function getHotSearch(){
    return http.get('/search/hot/detail')
}

//封装一个搜索接口
export function getSearch(params){
    return http.get('/search',{
        params
    })
}