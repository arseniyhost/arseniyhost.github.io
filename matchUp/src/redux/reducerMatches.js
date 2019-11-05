const ADD_MATCH = 'ADD_COMMENT';

let Initstate = {
    title: 'Match',
    matches: [
        {
            id: 1,
            firstTeam: 'Barselona',
            secondTeam: 'Real Marid',
            score: '1:1',
            date: '2019-04-20',
            comments: [
                {
                    id: 1,
                    comment: 'Yesterday I watched this match',
                    date: '2019-04-21'
                }
            ]
        },
        {
            id: 2,
            firstTeam: 'Atletico M',
            secondTeam: 'Atletic B',
            score: '3:1',
            date: '2019-03-15',
            comments: [
                {
                    id: 1,
                    comment: "Atletico goes ahead!",
                    date: '2019-04-15'
                },
                {
                    id: 2,
                    comment: "I was supporting Atletic, but they lost, I'm upset",
                    date: '2019-04-15'
                }
            ]
        },
        {
            id: 3,
            firstTeam: 'Liverpool',
            secondTeam: 'Arsenal',
            score: '5:5',
            date: '2019-11-01',
            comments: [
                {
                    id: 1,
                    comment: 'Incredible',
                    date: '2019-11-01'
                }
            ]
        }
    ]
}

let reducerMatches = (state = Initstate, action) => {
    switch (action.type) {
        case ADD_MATCH: {
            let newMath = {
                id: state.matches.length + 1,
                firstTeam: action.infoMatch.firstTeam,
                secondTeam: action.infoMatch.secondTeam,
                score: action.infoMatch.score,
                date: '2019-10-10',
                comments: [
                    {
                        id: 1,
                        comment: action.infoMatch.comment,
                        date: '2019-10-10'
                    }
                ]
            }
            return {
                ...state, matches: [...state.matches, newMath]
            }
        }

        default:
            return state;
    }
}

export const addMatch = (infoMatch) => ({ type: ADD_MATCH, infoMatch });

export default reducerMatches;
