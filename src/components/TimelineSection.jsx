import {ReactComponent as WorkIcon} from '../Assets/work.svg';
import {ReactComponent as SchoolIcon} from '../Assets/school.svg';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from '../components/Timeline';
import './timeline.css';

function TimeLineSection() {
    let WorkIconStyle = {background: '#06D6A0'};
    let SchoolIconStyle = {background: '#f9c74f'};

    return<div>
        <h1 className='title'>Timeline</h1>
        <VerticalTimeline animate={true}>
            {
                timelineElements.map((element) => {
                    let isWorkIcon = element.icon === 'work';
                    let showButton = 
                        element.buttonText !== undefined && 
                        element.buttonText !== null && 
                        element.buttonText !== '';

                    return(
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName='date'
                            iconStyle={element.isWorkIcon ? WorkIconStyle : SchoolIconStyle}
                            icon={!element.isWorkIcon ? <WorkIcon/> : <SchoolIcon/>}
                            contentStyle={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
                        >
                            <h3 className='vertical-timeline-element-title'>
                                {element.title}
                            </h3>
                            <h5 className='vertical-timeline-element-subtitle'>
                                {element.location}
                            </h5>
                            <p id='description'>
                                {element.description}
                            </p>
                            {showButton && (
                                <a 
                                    className={`button ${
                                        isWorkIcon ? "workButton" : "schoolButton"
                                    }`} 
                                    href={element.buttonLink}
                                >
                                    {element.buttonText}
                                </a>
                            )}
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    </div>
}

export default TimeLineSection;