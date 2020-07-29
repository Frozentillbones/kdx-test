export const REQUEST_CARS = 'REQUEST_CARS';
export const SUCCESS_CARS = 'SUCCESS_CARS';
export const FAILURE_CARS = 'FAILURE_CARS';

const requestCars = () => ({type: REQUEST_CARS });
const successCars = (data) => ({type: SUCCESS_CARS, data});
const failureCars = (error) => ({type: FAILURE_CARS, error});

function fetchCars() {
  return (dispatch) => {
    dispatch(requestCars());

    fetch('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json')
      .then(
        res => (res.json()),
        error => (dispatch(failureCars(error)))
      )
      .then(data => (dispatch(successCars(data))));
  };
}

export default fetchCars;
