const data = require('./data.json');

const maximalSpend = data.reduce( (acc, datum) => {
    if(acc < datum.spend) {
        acc = datum.spend;
    }
    return acc;
}, 0);

const minimalSpend = data.reduce( (acc, datum) => {
    if(acc > datum.spend) {
        acc = datum.spend;
    }
    return acc;
}, maximalSpend);

const baseData = [0,0,0,0,0,0,0,0,0,0,0,0];

export function getMinimalSpend() {
    return Math.floor(minimalSpend / 100) * 100;
}

export function getMaximalSpend() {
    return Math.ceil(maximalSpend/100) * 100;
}

export default function filterAndCollateData(minimumSpend, region, gender) {
    return data
        .filter( (datum) => datum.spend >= minimumSpend)
        .filter( (datum) => region === null || datum.region == region)
        .filter( (datum) => gender === null || datum.gender == gender)
        .reduce( (acc, datum) => {
            acc[0].data[datum.birthday - 1] += 1;
            for(let month = datum.birthday; month <= 12; month++) {
                acc[1].data[month - 1] += 5;
            }
            return acc;
        },[
            {data:[...baseData]}, // Monthly Data
            {data:[...baseData]} // Cumulative cost
        ])
}
