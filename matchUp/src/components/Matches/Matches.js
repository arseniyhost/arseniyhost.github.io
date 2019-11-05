import React from 'react';
import style from './Matches.module.css';

const Matches = (props) => {
    
    return (
        <div className={style.matchesMain}>
            <h2>Matches</h2>
            <div className={style.matchesContainer}>{
                props.matches.map(m => {
                    return <div className={style.matchBlock}>
                        <div className={style.matchTitle}>{`${m.firstTeam} ${m.score} ${m.secondTeam}`}</div>
                        <div className={style.matchDate}>{m.date}</div>
                        <div className={style.comments}>
                            <p>Comments:</p>
                            {m.comments.map(c => {
                                return <div className={style.comments}>
                                    <div className={style.comment}>{c.comment}</div>
                                </div>
                            })}
                            <div className={style.formMatch}>
                                <div>
                                    <input type="text" placeholder="add comment" />
                                </div>
                                <div>
                                    <button>send</button>
                                </div>
                            </div>

                        </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default Matches;