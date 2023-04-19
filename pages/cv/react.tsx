import { NextPage } from "next"
import { FC } from "react"
import CV, { GenericHeader, GenericHistory, GenericPersonal, GenericProfile, Skill } from "../../components/CV"

const ReactSkills: FC = () => {
    return <div className='skills-container-wrap'>
        <style global jsx>{`
          .skills-container{
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: 20px;
          }
          .skills-list-container{
            display:flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px;
          }
          .skill-wrap{
            display: flex;
            align-items: center;
            gap:20px;
          }
          
          .skill-name{
            text-transform: capitalize;
            padding: 5px 10px;
            background-color: rgb(230 237 255);
            font-weight: 500;
            border-radius: 10px;
          }
          .skill-amount{
            font-weight: 300;
          }
  
          .skill-list-item{
            padding: 5px 10px;
            font-weight: 300;
            background-color: rgb(240 246 255);
            border-radius: 10px;
          }
          
          `}</style>
      <div className='skills-container'>
        <Skill name={'fullstack'} amount={'6 years'} />
          <Skill name={'react'} amount={'3000+ hours ~ 3 years'} />
          <div className='skills-list-container'>
            <div className='skill-list-item'>React Native</div>
            <div className='skill-list-item'>ReactJS</div>
            <div className='skill-list-item'>NextJS</div>
            <div className='skill-list-item'>Redux</div>
            <div className='skill-list-item'>Javascript</div>
            <div className='skill-list-item'>Typescript</div>
          </div>
      </div>
    </div>
  }

const ReactCV: NextPage = () => {
    return <CV 
      history={<GenericHistory />}
      skills={<ReactSkills />}
      profile={<GenericProfile />}
      personal={<GenericPersonal />}
      header={<GenericHeader />}
    />
  }

export default ReactCV;