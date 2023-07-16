import './Alert.scss'
import { Context } from '../../../../utils/context'
import { useContext } from 'react'

const Alert = () => {
    const { alert, setAlert } = useContext(Context);

    return (
        <>
            {alert && <div className="success-page">
                <div className="blank-page"></div>
                <div className="success-page-content">
                    <div className="success-icon">
                      {alert.img}
                        <p>{alert.msg}</p>
                        <button className='ok-btn' onClick={() => { setAlert(false) }}>OK</button>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Alert
