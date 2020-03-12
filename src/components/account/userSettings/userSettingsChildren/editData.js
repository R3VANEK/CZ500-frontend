import React from 'react';
import a from '../../../../images/a.png';
import plusCircle from '../../../../images/plusCircle.svg';
import '../userSettings.min.css';

const EditData = () => {
    return (
        <div className="edit-data">
            <h2>Twoje dane</h2>
            <div className="img-inside-img">
                <img src={a} alt="Ja" />
                <img className="img-on-img" src={plusCircle} alt="zmień"/>
            </div>
            <div className="change-data-block">
                <div className="change-data-first">
                    <img src={a} alt="dane"/>

                    <div className="change-data-input-and-label">
                        <label className="change-data-label" htmlFor="username">Nazwa</label>
                        <input className="change-data-input" type="text" id="username"/>
                    </div>

                    <div className="change-data-input-and-label">
                        <label className="change-data-label" htmlFor="userEmail">E-mail</label>
                        <input className="change-data-input" type="text" id="userEmail"/> 
                    </div>
                </div>

                <div className="change-data-line"></div>

                <div className="change-data-second">
                    <img src={a} alt="hasło"/>

                    <div className="change-data-input-and-label">
                        <label className="change-data-label" htmlFor="userPass">Hasło</label>
                        <input className="change-data-input" type="text" id="userPass"/>
                    </div>
                    <div className="change-data-input-and-label">
                        <label className="change-data-label" htmlFor="userNewPass">Wpisz nowe hasło</label>
                        <input className="change-data-input" type="text" id="userNewPass"/>     
                    </div>
                    <div className="change-data-input-and-label">
                        <label className="change-data-label" htmlFor="userEmail">Powtórz nowe hasło</label>
                        <input className="change-data-input" type="text" id="userNewPassRep"/> 
                    </div>
                </div>
            </div>
            <button className="btn purple-btn">Zmień dane</button>
        </div>
    )
}

export default EditData
