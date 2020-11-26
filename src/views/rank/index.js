import React from 'react'
//引入路由属性
import {getPlayList,playDetail} from '../../util/axios'
// import {
//     NavLink
// } from "react-router-dom";
//引入样式
import "../../assets/css/rank.css";
class Rank extends React.Component {
    constructor() {
        super();
        this.state = {
            songList: [],
            updateTime:0
        }
    }
  // 转换事件函数
  formateTime(timer){
    let date=new Date(timer);
    let year=date.getFullYear();
    let month=(date.getMonth()+1+'').padStart(2,'0');
    let day=(date.getDate()+'').padStart(2,'0');
    let hour = (date.getHours() + "").padStart(2, "0");
    let minute = (date.getMinutes() + "").padStart(2, "0");
    let second = (date.getSeconds() + "").padStart(2, "0");
    return `${month}月${day}日`
  }
  // 跳转带参数
  goPlay(id){
    this.props.history.push(`/play?id=${id}`)
  }
    // 挂载
  componentDidMount () {
    // 推荐歌单
    getPlayList({
      id:3778678
    })
      .then(res => {
        console.log(res, '热歌列表响应');
        if (res.code == 200) {
          this.setState({
            songList: res.playlist.tracks.filter((item,i)=>i<20),
            updateTime:res.playlist.updateTime
          })
        }
      })
  }
    render() {
        const {
            songList
        } = this.state;
        return (
            <div className="m-tabct">
            <div className="tabctitem">
            <div className="m-hmhot">
            <div className="hotop">
            <div className="hotopct">
            <div className="u-hmsprt hoticon"></div>
            <div className="hottime">
            更新日期：
            {this.formateTime(this.state.updateTime)}
            </div>
            </div>
            
            </div>
            <div className="hotcont">
            <div className="m-sglst">
            {songList.map((item,index) => {
            return (
            <div href="#" className="m-sgitem" key={item.id} onClick={this.goPlay.bind(this,item.id)}>
            <div className={index+1<=3?"sgfl-cred":"sgfl"}>{index>=0&&index<=8?'0'+(index+1):index+1}</div>
            <i className={item.canDislike ? "u-hmsprt1" : ""}></i>
            <div className="sgfr">
            <div className="sgchfl">
            <div className="f-thide sgtl"> {item.name}</div>
            <div className="f-thide sginfo">{item.ar[0].name}-{item.al.name}</div>
            </div>
            <div className="sgchfr">
            <span className="u-hmsprt sgchply"></span>
            </div>
            </div>
            
            </div>
            )
            })}
            
            </div>
            </div>
            <div className="hotdn">
            <span className="hotview">查看完整榜单></span>
            </div>
            </div>
            
            </div>
            
            </div>
        )
    }
}
export default Rank