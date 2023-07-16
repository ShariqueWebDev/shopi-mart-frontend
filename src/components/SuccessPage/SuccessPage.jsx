import './SuccessPage.scss';
import {MdOutlineDoneAll} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const SuccessPage =()=>{
    const navigate = useNavigate()
    return(
        <div className="success-page">
            <div className="blank-page"></div>
            <div className="success-page-content">
                <div className="success-icon">
                    <MdOutlineDoneAll/>
                    <p>Payment Successfully Completed</p>
                    <button className='ok-btn' onClick={()=>{navigate(`/`)}}>OK</button>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage;