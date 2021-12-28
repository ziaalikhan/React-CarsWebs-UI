import React from 'react'
import './Section.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fade from 'react-reveal/Fade';


const Section = ({ title, description, backgroundImg, leftButtonText, rightButtonText }) => {

    return (
        <div className='section_component'
            style={{
                backgroundImage: `url(${backgroundImg})`
            }}
        >
            <Fade bottom>
                <div className="models_headings">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </Fade>
            <Fade bottom>
                <div className="buttonGroup">
                    <div className="left_Button">
                        <button>{leftButtonText}</button>
                    </div>
                    {
                        rightButtonText &&
                        <div className="right_Button">
                            <button>{rightButtonText}</button>
                        </div>
                    }

                </div>
                <div className="arrow_button">
                    <ExpandMoreIcon style={{ fill: '#fff' }} className='arrow_Icon' />
                </div>
            </Fade>

        </div>
    )
}

export default Section;
