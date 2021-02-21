import './custom.css'
import React from 'react';

//Color codes
const defaultColor = '#DCDCE6'
const colors = ["#ea4c33","#EF8C3E","#eec843","#83c43e","#50b17e"]

const defaultSettings = [defaultColor, defaultColor, defaultColor, defaultColor, defaultColor]

const StarComponent = ({tpid, supporturl}) => {

    const [fills, setFills] = React.useState([defaultColor, defaultColor, defaultColor, defaultColor, defaultColor])

    const controllFills = (enter, index) => {
        if(!enter){
            switch (index) {
                case 0:
                    setFills({...defaultSettings, 0:colors[0]})
                    break;
                case 1:
                    setFills({...defaultSettings, 0:colors[1], 1:colors[1]})
                    break;
                case 2:
                    setFills({...defaultSettings, 0:colors[2], 1:colors[2], 2:colors[2]})
                    break;
                case 3:
                    setFills({...defaultSettings, 0:colors[3], 1:colors[3], 2:colors[3], 3:colors[3]})
                    break;
                case 4:
                    setFills({ 0:colors[4], 1:colors[4], 2:colors[4], 3:colors[4], 4:colors[4]})
                    break;
                default:
                    setFills(defaultSettings)
                    break;
            }
        }
        else {
            setFills(defaultSettings)
        }
    }
    const enter = (index) => ()=>controllFills(false, index)
    const exit = (index) => ()=>controllFills(true, index)

    const handleClick = (index) => {
        if(index===4) return "https://dk.trustpilot.com/evaluate/"+tpid
        else return supporturl
    }

    return (
        <div style={{ display: "inline" }}>
            <a href={handleClick(0)} onMouseEnter={enter(0)} onMouseLeave={exit(0)}>
                <svg className="custom_star" viewBox="0 0 96 96">
                    <g stroke="none">
                        <g fillRule="nonzero">
                            <rect className="a b" id="Rectangle-path" fill={fills[0]} x="0" y="0"
                                width="96" height="96"></rect>
                            <path
                                d="M48,64.7 L62.6,61 L68.7,79.8 L48,64.7 Z M81.6,40.4 L55.9,40.4 L48,16.2 L40.1,40.4 L14.4,40.4 L35.2,55.4 L27.3,79.6 L48.1,64.6 L60.9,55.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 Z"
                                id="Shape" fill="#FFFFFF"></path>
                        </g>
                    </g>
                </svg>
            </a>
            <a href={handleClick(1)} onMouseEnter={enter(1)} onMouseLeave={exit(1)}>
                <svg className="custom_star" viewBox="0 0 96 96">
                    <g stroke="none">
                        <g fillRule="nonzero">
                            <rect className="" id="Rectangle-path" fill={fills[1]} x="0" y="0"
                                width="96" height="96"></rect>
                            <path
                                d="M48,64.7 L62.6,61 L68.7,79.8 L48,64.7 Z M81.6,40.4 L55.9,40.4 L48,16.2 L40.1,40.4 L14.4,40.4 L35.2,55.4 L27.3,79.6 L48.1,64.6 L60.9,55.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 Z"
                                id="Shape" fill="#FFFFFF"></path>
                        </g>
                    </g>
                </svg>
            </a>
            <a href={handleClick(2)} onMouseEnter={enter(2)} onMouseLeave={exit(2)}>
                <svg className="custom_star" viewBox="0 0 96 96">
                    <g stroke="none">
                        <g fillRule="nonzero">
                            <rect className="star_3" id="Rectangle-path" fill={fills[2]} x="0" y="0"
                                width="96" height="96"></rect>
                            <path
                                d="M48,64.7 L62.6,61 L68.7,79.8 L48,64.7 Z M81.6,40.4 L55.9,40.4 L48,16.2 L40.1,40.4 L14.4,40.4 L35.2,55.4 L27.3,79.6 L48.1,64.6 L60.9,55.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 Z"
                                id="Shape" fill="#FFFFFF"></path>
                        </g>
                    </g>
                </svg>
            </a>
            <a href={handleClick(3)} onMouseEnter={enter(3)} onMouseLeave={exit(3)}>
                <svg className="custom_star" viewBox="0 0 96 96">
                    <g stroke="none">
                        <g fillRule="nonzero">
                            <rect className="star_4" id="Rectangle-path" fill={fills[3]} x="0" y="0"
                                width="96" height="96"></rect>
                            <path
                                d="M48,64.7 L62.6,61 L68.7,79.8 L48,64.7 Z M81.6,40.4 L55.9,40.4 L48,16.2 L40.1,40.4 L14.4,40.4 L35.2,55.4 L27.3,79.6 L48.1,64.6 L60.9,55.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 Z"
                                id="Shape" fill="#FFFFFF"></path>
                        </g>
                    </g>
                </svg>
            </a>
            <a href={handleClick(4)} onMouseEnter={enter(4)} onMouseLeave={exit(4)}>
                <svg className="custom_star" viewBox="0 0 96 96">
                    <g stroke="none">
                        <g fillRule="nonzero">
                            <rect className="star_5" id="Rectangle-path" fill={fills[4]} x="0" y="0"
                                width="96" height="96"></rect>
                            <path
                                d="M48,64.7 L62.6,61 L68.7,79.8 L48,64.7 Z M81.6,40.4 L55.9,40.4 L48,16.2 L40.1,40.4 L14.4,40.4 L35.2,55.4 L27.3,79.6 L48.1,64.6 L60.9,55.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 Z"
                                id="Shape" fill="#FFFFFF"></path>
                        </g>
                    </g>
                </svg>
            </a>

        </div>
    )
}

export default StarComponent