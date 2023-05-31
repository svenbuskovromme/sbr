import { motion } from "framer-motion";
import { FC, PropsWithChildren, ReactElement } from "react";
import Image from 'next/image';

const CVCard: FC<PropsWithChildren<{title: ReactElement}>> = ({title, children}) => {
    return <motion.div className='cv-card'>
      <style global jsx>{`
        .cv-card-title{
          font-size: 24px;
          font-weight: bold;
        }
        `}</style>
      <div className='cv-card-title'>
        {title}
      </div>
      <div className='cv-card-content'>
        {children}
      </div>
  </motion.div>;
  }
  
  const CVHeader: FC<PropsWithChildren> = ({children}) => {
    return <div className='cv-header'>
      {children}
    </div>
  }
  
  const CV: FC<{header: ReactElement, skills: ReactElement, history: ReactElement, profile: ReactElement, personal: ReactElement}> = ({history,personal,profile,skills, header}) => {
    return (
        <motion.div className='cv-container'>
           <style global jsx>{`
              .cv-container{
                color: #030303;
                font-size: 18px;
                background-color: rgb(255,255,255);
                display: flex;
                margin: 0px auto;
                flex-direction: column;
                width: 800px;
                aspect-ratio: 1/1.41;
                gap:100px;
                padding:60px;
              }
  
              a{
                text-decoration: underline;
              }
  
              .cv-header{
                flex-shrink: 0;
                display: flex;
                align-items: center;
                margin-bottom: auto;
              }
  
              .cv-cards-container{
                flex: 1;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                gap: 60px;
                margin-bottom:60px;
              }
  
              .cv-card{
                display: flex; 
                min-width: 0; 
                min-height: 0; 
                flex: 1; 
                word-break: break-word; 
                flex-direction: column;
                gap: 20px;
              }
  
              .generic-card-container{
                display: flex;
                gap: 15px;
                flex-direction: column;
                font-size: 16px;
                font-weight: 300;
                line-height: 22px;
              }
            `}
          </style>
          <CVHeader>
            {header}
          </CVHeader>
          <motion.div className='cv-cards-container'>
            <CVCard title={<span>Skills</span>}>{skills}</CVCard>
            <CVCard title={<span>History</span>}>{history}</CVCard>
            <CVCard title={<span>Personal</span>}>{personal}</CVCard>
            <CVCard title={<span>Profile</span>}>{profile}</CVCard>
          </motion.div>
        </motion.div>
    )
  }
  
  const HistoryEntry: FC<{from: string, to: string, label: string}> = ({from, to, label}) => {
    return <div>
      <b>{from}</b> - <b>{to}</b><br/>
      {label}
    </div>
  }
  
 export const GenericHistory: FC = () => {
    return <div className='generic-card-container'>
      <HistoryEntry from={'2021'} to={'Now'} label={`CTO and co-owner of Jungle`} />
      <HistoryEntry from={'2017'} to={'2021'} label={'Developer in HallerupNet'} />
      <HistoryEntry from={'2016'} to={'2017'} label={'2-man startup (self taught coding)'} />
      <HistoryEntry from={'2010'} to={'2015'} label={'MSc Civ. Engineer in Nanobiotech.'} />
    </div>
  }
  
  export const GenericHeader: FC = () => {
    return <div className='header-container'>
      <style global jsx>{`
        .header-container{
          display: flex;
          align-items: center;
          gap: 30px;
          justify-content: space-between;
          width: 100%;
        }
        
        .info-container{
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-self: stretch;
        }

        .info-item{
            font-weight: 300;
        }

        .contact-container{
          font-size: 14px;
          display: grid;
          column-gap: 15px;
          grid-template-columns: auto auto;
          row-gap: 5px;
          margin-left: auto;
          margin-right: 40px;
        }
        `}</style>
      <div style={{position: 'relative', height: 100, width: 100}}>
        <Image alt={"Drawn picture of Sven"} src={'/signature.png'} layout={'fill'} objectFit={'cover'} />
      </div>
      <div className='info-container'>
        <div className='info-item'>Sven Buskov Romme</div>
        <div className='info-item'>CTO and Developer</div>
        <div className='info-item'>Copenhagen</div>
      </div>
      <div className='contact-container'>
        <div>Email</div>
        <div><a href={'mailto:svenromme@hotmail.com'}>svenromme@hotmail.com</a></div>
        <div>Phone</div>
        <div>+4521674110</div>
        <div>Web</div>
        <div>
          <a href={'https://svenbuskovromme.com/projects'}>https://svenbuskovromme.com</a>
        </div>
      </div>
    </div>
  }
  
 export const GenericProfile: FC = () => {
    return <div className='generic-card-container'>
      <div>
      After graduation, I started a startup project with a friend, and taught myself coding in the process. It&apos;s on pause, but the experience was
      invaluable.
      </div>
      <div>
    In my first professional job, my
    profile was given structure, and I found a
    drive towards working in a team.
      </div>
      <div>
      After a year in Jungle (and counting), 
      I&apos;ve proven I can build a <b>stable, performant stack</b> of my own to support thousands of daily users with a complex backend and <b>headless CMS</b>. 
      Product wise, I&apos;ve become data-driven and pragmatic. 
      </div>
    </div>
  }
  
  export const GenericPersonal: FC = () => {
    return <div className='generic-card-container'>
      <div>
        I&apos;m 33 years old and from Nordjylland.
        Friends and family describe me as calm,
        optimistic, empathetic. 
      </div>
      <div>
        Personally I think I&apos;m easy going, and sitting solidly in the middle of the extro-introverted spectrum
      </div>
      <div>
        I picked up boxing when I moved to cph,
        both to stay fit and to socialize, and it has
        now become my biggest hobby
      </div>
    </div>
  }
  
  export const Skill: FC<{name: string, amount: string}> = ({name, amount}) => {
    return <div className='skill-wrap'>
      <div className='skill-name'>{name}</div>
      <div className='skill-amount'>{amount}</div>
    </div>
  }
  
  export default CV;