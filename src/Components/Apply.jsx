import React from 'react'
import arrow from '../Pic/arrow.jpg'
import './Apply.css'
import { motion } from 'framer-motion'
import pic1 from '../Pic/Rectangle 199.png'
import pic2 from '../Pic/Rectangle 201.png'
import pic3 from '../Pic/Rectangle 202.png'
import pic4 from '../Pic/Rectangle 203.png'
import pic5 from '../Pic/image 34.png'

function Apply() {

    return (
        <>
            <div style={{ margin: '2% 12%' }}>
                <h1 style={{ fontFamily: 'Inria Serif,serif', fontSize: '38px' }}>Every day, we are helping people <br /> to reach their goals- big or small</h1>
                <div style={{ fontFamily: 'Inter', fontWeight: '500', padding: '2%', fontSize: '18px' }}>Medlife employs handpicked professionals not just for their knowledge and experience but for their zeal to make a difference in the world of healthcare. <br />
                    The company believes that our biggest assets are the employees, who lead us to prosperity and growth in the future. Driven by the vision, “None shall be denied”, Medlife focus has always been on making affordable, world-class healthcare services and medicine with a reputation for uncompromising quality standards across the world.</div>

                <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', marginTop: '7%' }}>
                    <h1 style={{ fontFamily: 'Inria Serif,serif', fontSize: '38px', alignContent: 'center' }}>Apply Now</h1>
                    <div style={{ fontFamily: 'Inter', fontWeight: '500', padding: '1% 3%', fontSize: '18px', textAlign: 'center' }}>In pursuit of excellence, Medlife always keeps in mind that its employees come first. The philosophy – Caring for Life – begins with the commitment to Medlife and its employees.</div>
                    <div style={{ fontFamily: 'Inter', fontWeight: '500', padding: '1% 33.5%', fontSize: '18px', textAlign: 'center' }}>So if you share Medlife values of trust, transparency, quality, integrity, safety and respect and you want to work in an organization that will give you space to explore your potential, send us your CVs to </div>
                    <motion.div animate={{ y: '3px' }} transition={{ duration: 0.001, repeat: Infinity, ease: 'linear' }}>
                        <img animate={{ y: '-3px' }} transition={{ duration: 0.01, repeat: Infinity, ease: 'linear' }} src={arrow} alt="" className='arrow' />
                    </motion.div>
                    <div style={{ color: '#0050C9', textDecoration: 'underline', fontFamily: 'Inter', fontSize: '30px', marginTop: '1%' }}>care@medlifepharmacy.com </div>
                </div>

            </div>

            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', marginTop: '5%', marginBottom: '4%' }}>
                <h1 style={{ fontFamily: 'Inria Serif,serif', fontSize: '38px', alignContent: 'center' }}>Life at Medlife:</h1>
            </div>
            <div style={{ background: 'rgb(255,57,57)', background: 'linear-gradient(90deg, rgba(255,57,57,0.72) 0%, rgba(255,255,255,0) 100%)', width: '100% ', height: '450px', margin: 'none !important', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', left: '0%' }}>
                <img src={pic1} alt="" style={{ clipPath: 'polygon(0% 0%, 80% 0, 100% 50%, 80% 100%, 0% 100%)', width: '650px' }} />
                <div style={{ padding: '4%', width: '530px', fontSize: '18px', fontWeight: '500', lineHeight: '23px', }}>
                    Talented and capable people have played a major role in powering and defining the growth of Medlife over the last three decades. They have been supported by an enabling environment that buoys individual talent while fostering teamwork and the creation of shared success. We believe that when people with diverse skills are bound together by a common purpose and value system, they can make magic.
                </div>
            </div>

            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', marginTop: '8%', marginBottom: '2%' }}>
                <h1 style={{ fontFamily: 'Inria Serif,serif', fontSize: '38px', alignContent: 'center' }}>Developing our People</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <img src={pic2} alt="" style={{ width: '350px', height: '370px', clipPath: 'polygon(0 0, 100% 22.5%, 100% 77.5%, 0% 100%)', margin: '0 1.5%' }} />
                <img src={pic3} alt="" style={{ width: '380px', height: '200px' }} />
                <img src={pic4} alt="" style={{ width: '350px', height: '370px', clipPath: 'polygon(0 22.5%, 100% 0, 100% 100%, 0% 77.5%)', margin: '0 1.5%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '5% 9% 1% 9%', }}>
                <div style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: '500', textAlign: 'center' }}>The core objective has been to build organizational capability through skill enhancement across levels, salesforce training and enhancing competencies in line with changing business needs. There has also been a focus on strengthening existing, middle and senior leadership.</div>
            </div>

            <div style={{marginBottom:'4%'}}>
                <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', marginTop: '6%', marginBottom: '2%' }}>
                    <h1 style={{ fontFamily: 'Inria Serif,serif', fontSize: '38px', alignContent: 'center' }}>Working at Medlife</h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ flex: '1', padding: '0% 8% 3% 15%', fontFamily: 'Inter', fontSize: '18px', fontWeight: '500', lineHeight: '31px', lineHeight: '127.68%', textAlign: 'left' }}>
                        Medlife does not just give you a job, it takes pride in helping you build a career for yourself by giving you opportunities to learn, perform and grow. The Human Resources function contributes to Medlife growth story by working as a strategic partner to the business. The technical and quality demands of Medlife combined with the vision to grow significantly over the next few years, drive the need for the company to build an agile, engaged and energized workforce. While doing this, Medlife continues to retain focus on company values and its core philosophy of placing people before profits.
                    </div>
                    <div style={{borderWidth:'100px 1200px 0 0',boderColor:'transparent #fff transparent transparent' }}>
                        <img src={pic5} alt="" style={{ borderRadius: '50% 0% 0% 50%', width: '450px', height: '450px',position:'relative',top:'-50px',}} />
                    </div>
                </div>
            </div>

            <hr style={{ height: '1px', backgroundColor: '#000', width: '35%', borderRadius: '50%', opacity: '0.5' }} />

            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex',margin:'3% 0 5% 0'}}>
                <div style={{width:'58px',height:'58px',backgroundColor:'#FFC7C7',borderRadius:'50%',}}></div>
            </div>
            
        </>

    )
}

export default Apply