import React, {useState} from "react";
import { FcAcceptDatabase,FcFile } from "react-icons/fc";
import '../scss/ContentsBody.scss';

const ContentsBody = ({datas}) => {

  return(
    <div className="contents-frame">
      {datas.map((item,index) => (
        <div className="contents-section" style={item.diffState === "Mismatch" ? {backgroundColor:'#FBDBDB'} : {} && item.diffState =="Matching..." ? {backgroundColor:'#E2DDFB'} : {}}>  
          <div className="contents-card-top">
            <h5>{item.agency}</h5>
          </div>
          <div className="contents-card-middle-top" style={item.diffState === "Mismatch" ? {color:'red'} : {} && item.diffState =="Matching..." ? {color:'blue'} : {}}>
            <h2>{item.diffState}</h2>
          </div>
          <div className="contents-card-middle-bottom">
            <div className="contents-card-middle-bottom-section1">
              <FcAcceptDatabase size={35}/>
              <h5>{item.scriptState}</h5>
            </div>
            <div className="contents-card-middle-bottom-section2">
              <FcFile size={35}/>
              <h5>{item.metaState}</h5>
            </div>
          </div>
          <div className="contents-card-bottom">
            <h5>{item.udtDate}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ContentsBody;