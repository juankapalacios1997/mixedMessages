let futurePrediction = () => {
    const people = ['mother', 'father', 'brother', 'grandma', 'grandma', 'partner', 'best friend', 'worst enemy', 'teacher', 'boss', 'pet']
    const actions = ['pass away', 'win the lotery', 'get cheated', 'get married', 'lose his/her cellphone', 'crash his/her car', 'get fired from work', 'travel to another country', 'get pregnant', 'find what was looking for', 'get sick']
    const time = ['whithin the next hour', 'tonight', 'tomorrow', 'soon enought', 'in two days', 'next week', 'in two weeks', 'next month', 'next year', 'in two years', 'in five years', 'in ten years', 'in twenty years']
    let who = people[Math.floor(Math.random()*people.length)]
    let what = actions[Math.floor(Math.random()*actions.length)]
    let when = time[Math.floor(Math.random()*time.length)]
    console.log(`Your ${who} will ${what} ${when}!`)
}

futurePrediction()