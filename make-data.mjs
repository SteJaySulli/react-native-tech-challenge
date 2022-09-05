import fs from 'fs';

const REGIONS = [
    "United States",
    "Europe",
    "APAC",
    "Latin America"
];

const GENDERS = [
    "Male",
    "Female"
];

function randomInteger(floor, ceiling) {
    const randomFloat = Math.random();
    return Math.round(floor + randomFloat * (ceiling - floor));
}

function randomItem(array) {
    const index = randomInteger(0, array.length - 1);
    return array[index];
}

function makeBirthday() {
    return randomInteger(1, 12);
}

function makeSpend() {
    return randomInteger(0, 5000);
}

function makeRegion() {
    return randomItem(REGIONS);
}

function makeGender() {
    return randomItem(GENDERS);
}

const data = [...new Array(3000)].map((dummy, index) => {
    return {
        "id": index + 1,
        "birthday": makeBirthday(),
        "spend": makeSpend(),
        "region": makeRegion(),
        "gender": makeGender()
    }
});

fs.writeFileSync("./data.json", JSON.stringify(data, null, "\t"));