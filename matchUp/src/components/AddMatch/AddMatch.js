import React from 'react';
import style from './AddMatch.module.css';
import { reduxForm, Field} from 'redux-form';
import { Redirect } from 'react-router-dom';

const AddMatch = (props) => {

    let onSubmitMatch = (values) => {
        let matchInfo = {
            firstTeam: values.firstTeam,
            secondTeam: values.secondTeam,
            score: values.score,
            comment: values.comment
        }
        console.log(matchInfo);
        props.addMatch(matchInfo);
        
        return <Redirect to="/matches" />
    }

    return (
        <div className={style.addMatch}>
            <h2>Add Match to List</h2>
            <AddReduxForm onSubmit={onSubmitMatch} />
        </div>
    )
}

const addMatchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div className={style.box}>
                <label>First Team:
                        <Field name={"firstTeam"} component={"input"} placeholder="team" />
                </label>
            </div>
            <div className={style.box}>
                <label>Second Team:
                <Field name={"secondTeam"} component={"input"} placeholder="team" />
                </label>
            </div>
            <div className={style.box}>
                <label>Score:
                        <Field name="score" placeholder="match of score" component={"input"} />
                </label>
            </div>
            <div className={style.box}>
                <Field name="comment" component={"textarea"} placeholder="Your comment" />
            </div>
            <div className={style.btnLink}>
                <button>Send Match</button>
            </div>
        </form>
    )
}

const AddReduxForm = reduxForm({
    form: 'addmatch'
})(addMatchForm);

export default AddMatch;