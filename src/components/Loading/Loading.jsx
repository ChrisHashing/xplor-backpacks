import React from 'react';
import style from './Loading.module.css';

function Loading() {
    return (
        <div className={style.loading}>
            <div className={style.loadingText}>
                <span className={style.loadingTextWords}>L</span>
                <span className={style.loadingTextWords}>O</span>
                <span className={style.loadingTextWords}>A</span>
                <span className={style.loadingTextWords}>D</span>
                <span className={style.loadingTextWords}>I</span>
                <span className={style.loadingTextWords}>N</span>
                <span className={style.loadingTextWords}>G</span>
            </div>
        </div>
    );
}

export default Loading;
