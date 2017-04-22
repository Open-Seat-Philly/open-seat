import divisionData from '../../data/divisions.json';
import openSeatsData from '../../data/OpenSeats.json';

// Is the given seat in the given division?
const seatInDivision = (seat, division) => {
  const comboNum = division.properties.DIVISION_NUM;
  const wardNum = comboNum.slice(0, 2);
  const divisionNum = comboNum.slice(2);
  return seat.WARD === wardNum && seat.DIVISION === divisionNum;
};

// Does the division have any open seats?
const divisionHasOpenSeats = (division) => {
  for (let seat of openSeatsData) {
    if (seatInDivision(seat, division)) {
      return true;
    }
  }

  return false;
};

// Filter all divisions, and find the ones having seats
const divisionsHavingSeats = divisionData.features.filter(
  divisionHasOpenSeats
);

export default divisionsHavingSeats;
