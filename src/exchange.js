import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Exchange } from './thunks/exchaneThunk';

function Exchanges() {

    const dispatch = useDispatch();
    const { exchanges, loading, error } = useSelector((state) => state.exchanges)
    useEffect(() => {
        dispatch(Exchange());
    }, []);




    const [value, setvalue] = useState('1');
    const [currentFirst, setCurrentFirst] = useState('1');

    function handleChangeCurrent(event) {
        setCurrentFirst(event.target.value);
    }
    const [currentSecond, setCurrentSecond] = useState('1');
    function handleChangeCurrentSecond(event) {
        setCurrentSecond(event.target.value);
    }






    if (loading === 'pedning')
        return 'Loading...';
    if (loading === 'rejected')
        return error;



    //с етой апи мы поулчаем курс валюты к гривне ,то есть нам нужно писать метод конвертации через гривню

    return (
        < div className='exchange'>

            <div div >
                <select style={{ width: '100px' }} onChange={handleChangeCurrent}>
                    {exchanges.map(ex => <option key={ex.r030} value={ex.rate}>{ex.txt}</option>)}
                </select>

                <label>{
                    (value * currentFirst / currentSecond).toFixed(2)
                }</label>

                <select style={{ width: '100px' }} onChange={handleChangeCurrentSecond}>
                    {exchanges.map(ex => <option key={ex.r030} value={ex.rate}>{ex.txt}</option>)}
                </select>
            </div>
            <div> <input type='number' value={value} onInput={(e) => { setvalue(e.target.value); console.log() }} /></div>


        </div >

    );
}

export default Exchanges;
