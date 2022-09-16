import React from 'react'
import hero from '../Pic/image 33.jpg'

function Header() {
  return (
    <div style={{marginTop:'95px',display:'flex',flexDirection:'column',fontFamily:'Inter, sansSerif',position:'relative',alignItems:'center',justifyContent:'content'}}>

        <img src={hero} alt="" style={{width:'100%',height:'340px',}}/>
        <div style={{FontFamily: 'Inter',fontWeight: '600',fontSize:' 55px',lineHeight: '77px',lineHeight: '100%',top:'-170px',position:'relative',color:'white',textShadow:'0px 4px  rgba(0, 0, 0, 0.30)'}}>Join us today!</div>

        <div className="search" style={{display:'flex', flexDirection:'row'}}>
            <div style={{marginRight:'2%',width:'160px',fontWeight:'600',fontSize:'18px',lineHeight:'24px'}}>SEARCH JOBS</div>
            <fieldset style={{width:'340px',position:'relative',top:'-28px',marginRight:'1%',fontWeight:'600',fontSize:'18px'}}>
                <legend>KEYWORD</legend>
            <input type="text" name="" id="" placeholder='ENTER JOB TITLE OR DESCRIPTION' style={{border:'none ',width:'100%',backgroundColor:'transparent',outline:'none'}}/>
            </fieldset>
            <fieldset style={{width:'340px',position:'relative',top:'-28px',marginRight:'3%',fontWeight:'600',fontSize:'18px'}}>
                <legend>KEYWORD</legend>
            <input  name="" id="" placeholder='ENTER CITY, STATE OR PINCODE' style={{border:'none',width:'100%',backgroundColor:'transparent',outline:'none'}}/>
            </fieldset>
            <span ><button style={{padding:'10px 60px',position:'relative',top:'-17px',borderRadius:'50px',border:'none',backgroundColor:'#EEA0A0',color:'white',fontWeight:'600',fontSize:'20px',lineHeight:'29px'}}>GO</button></span>
        </div>
        <hr style={{height:'1px',backgroundColor:'E0DECA',width:'99%',borderRadius:'50%',opacity:'0.5'}}/>

    </div>
  )
}

export default Header