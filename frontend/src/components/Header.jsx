import { useSelector } from 'react-redux'
import './styles.css'
import { Link } from 'react-router-dom'


export default function  Header (){
    const user = useSelector(state =>state.user)
    return(
        <>
            <header>
                <div className="header container">
                    <Link to='/' className='headeer-title'>Travel</Link>
                    <div className="nav-item">
                        {!user.user ?<>
                            <Link to='/register'>Регистрация</Link>
                            <Link to='/login' style={{marginLeft:'10px'}}>Вход</Link></> 
                            :
                            <>
                           {/* <Link to='/dashboard' >Личный кабинет</Link> */}
                           <Link to='/add' style={{marginLeft:'10px'}}>Добавить путешествие </Link>
                            {/* >с фото и стоимостью + это место культурного наслелия или нет
                            
                            Оценка удобства передвижения / безопасности / населенности / растительности*/}
                            </>
                            }
                        
                    </div>
                </div>
            </header>
        </>
    )
}