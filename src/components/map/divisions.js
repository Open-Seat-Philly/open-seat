import divisionData from '../../data/divisions.json';
import openSeatsData from '../../data/open-seats.json';

// Is the given seat in the given division?
const seatInDivision = (seat, division) => {
  const comboNum = division.properties.DIVISION_NUM;
  const wardNum = comboNum.slice(0, 2);
  const divisionNum = comboNum.slice(2);
  return seat.ward === wardNum && seat.division === divisionNum;
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

// Get the open seats within a division
export const getDivisionOpenSeats = (division) => (
  openSeatsData.filter(seat => seatInDivision(seat, division))
);

// Filter all divisions, and find the ones having seats
export const divisionsHavingSeats = divisionData.features.filter(
  divisionHasOpenSeats
);

export default divisionData;
