import { useDispatch, useSelector } from 'react-redux';
import '../components/Header.css'

import useFetchCur from '../hooks/useFetchCur';



export default function Header (props){

    
    const {dollarData, euroData} = useFetchCur('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    const dispatch = useDispatch();
    const cash = useSelector(state => state.reducer.cash)
    const cashE = useSelector(state => state.reducerE.cashE)

    const courseDolar = (cash) => {
        dispatch({type: 'COURSE_DOLLAR', payload: dollarData  })
    }

    const courseEuro = (cashE) => {
        dispatch({type: 'COURSE_EURO', payload: euroData})
    }



    

    return(
        <div className="Header">
            <h1>Converter</h1>
            <h2>
                <div className='cur'>
                <span className='span1'>$  {(cash * 100) / 100}  </span>
                <button className='btn' onClick={() => courseDolar(cash)}>DOLLAR RATE</button>
                <span className='span2'> € {(cashE * 100) / 100} </span>
                <button className='btn' onClick={() => courseEuro(cashE)}>EURO RATE</button>
                </div>

            </h2>
        </div>
    )
}