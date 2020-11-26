import React from 'react';
import axios from 'axios';
import {resMusic,newSong,banner} from '../../util/axios'
// 引入样式
import '../../assets/css/home.css'

import Swiper from "swiper";
import '../../../node_modules/swiper/js/swiper.min.js'
import '../../../node_modules/swiper/css/swiper.css'


import imgLogo from '../../assets/img/logo.png'
// install Swiper components

class Home extends React.Component{
    constructor(){
    super();
    this.state={
        songList: [],
        newsongs: [],
        bannerList:[]
        }
    }
    // 挂载执行
    componentDidMount(){
        
        axios.all([resMusic(),newSong(),banner({type:2})]).then(
            axios.spread((songsList,newSongs,bannerlist)=>{
                // console.log(songsList,'推荐歌单');
                // console.log(newSongs,'新歌曲推荐');
                if(songsList.code==200){
                    this.setState({songList:songsList.result})
                }else{
                    console.log(songsList.msg);
                }
                if(newSongs.code==200){
                    this.setState({newsongs:newSongs.result})
                }else{
                    console.log(newSongs.msg);
                }
                if(bannerlist.code==200){
                    this.setState({bannerList:bannerlist.banners})
                    // console.log(this.state.bannerList)
                }else{
                    console.log(bannerlist.msg);
                }
            })
            )
    }
    // 跳转函数
    goList(id){
        this.props.history.push(`/list/${id}`)
    }
    // 轮播图
    componentDidUpdate () {

        let swiper = new Swiper(".swiper-container", {
            pagination: {
              el: ".swiper-pagination",
            },
            autoplay: {
              //自动播放
              delay: 2000,
            },
            loop: true,
          });
    }
    render(){
        const {songList}=this.state;
        const {newsongs}=this.state;
        const {bannerList}=this.state;
        return(
            <div className='homeremd'>
            {/* 轮播图 */}
            <div className="swiper-container">
           <div className="swiper-wrapper">
            {bannerList.map((item) => {
              return (
                <div key={item.imageUrl} className="swiper-slide">
                  <img src={item.imageUrl} alt="" />
                </div>
              );
            })}
          </div>
          {/* 分页 */}
          <div className="swiper-pagination"></div>

        </div>
            
            {/* title */}
            <h2 className='remd_t1'>
                推荐歌单
            </h2>
            
            {/* list */}
            <div className='remd_songs'>
                <ul className='remd_ul'>
                    {songList.map(item=>{
                        return(
               <li className='remd_li' key={item.id} onClick={this.goList.bind(this,item.id)}>
              <div className='remd_img'>
              <img src={item.picUrl} alt='' className='u-img'></img>
              <span className='remd_lnum'>{item.playCount?(item.playCount/10000).toFixed(2)+
              '万':''}</span>
              <p className='remd_text'>
               {item.name}
              </p>
              </div>
              </li>
              ) 
             })}
            </ul>
            </div>
            {/* 最新音乐 */}
            <h2 className='remd_t1'>
                最新音乐
            </h2>
            <div className="remd_newsg">
                <div className="m-sglst">
                    {newsongs.map(item=>{
                        return(
                    <a className="m-sgitem" href="" key={item.name}>
                       <div className="sgfr f-bd f-bd-btm">
                        <div className="sgchfl">
                          <div className="f-thide sgtl">
                            {item.name}
                        <span className="sgalia">{item.song.alias}</span>
                     
                          </div>
                          <div className="f-thide sginfo">
                          <i className="u-hmsprt1"></i>
                           {item.song.artists[0].name}
                        </div>
                       </div>
                       <div className="sgchfr">
                       <span className="u-hmsprt2"></span>
                      </div>
                    </div>
                   </a>
                   )
                    })}
                </div>
            </div>

            {/* footer */}
            <footer className="m-homeft">
                <div className="ftwrap">
                    <div className="logo">
                        <div className='logobox'>
                        <img src={imgLogo}></img>
                        <h2>网易云音乐</h2>
                        </div>
                        <div className="openapp">打开APP，发现更多好音乐 &gt;</div>
                        <p className="copyright">网易公司版权所有©1997-2020   杭州乐读科技有限公司运营</p>
                    </div>
                </div>
            </footer>
        </div>
            ) 
    }
}
export default Home