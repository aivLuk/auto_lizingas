import React from 'react';
import './Introduction.css';
import Logo from './swed.png';


function Introduction() {
    return (
        <div style={{ backgroundColor: '#FBF2EA' }} className='IntroContainer'>
            <div className='Intro'>
                <img src={Logo} className="logo" />
                <h1>Automobilių lizingas</h1>
                <h2 style={{ fontSize: '35px', color: '#EE7023' }}>Mėgaukitės vairuodami savo naująjį automobilį!</h2>
                <p>Jei svarstote įsigyti naują automobilį – lizingas yra puikus sprendimas.</p>
                <ul>
                    <li>Palūkanų norma įsigyjant naują automobilį nuo 2,29 % + 6 mėnesių Euribor (ne mažiau kaip 0 %).</li>
                    <li>Paprastai ir sklandžiai viską galėsite atlikti internetu: pradedant paraiškos pateikimu ir baigiant paskutine įmoka.</li>
                    <li>Paraiškos pildymas užtruks tik kelias minutes.</li>
                    <li>Palankesnės sąlygos įsigyjant aplinkai draugišką automobilį.</li>
                </ul>
                <p>Netinkamas finansinių įsipareigojimų vykdymas didina Jūsų finansavimosi kaštus ir gali daryti neigiamą įtaką Jūsų kredito istorijai. Jei sutartis bus nutraukta Jums ją iš esmės pažeidus, gali būti pradėtas priverstinis skolos išieškojimas ir galite prarasti ne tik jau sumokėtas įmokas, bet ir teises į finansuojamą turtą.</p>
                <button className='introBtn'><strong>Plačiau</strong></button>
            </div>
        </div>
    )
}

export default Introduction;