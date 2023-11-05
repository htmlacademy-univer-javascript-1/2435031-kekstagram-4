const SEC_IN_MINUTES = 60;

const convertTimeInSeconds = (time) => {
  const result = time.split(':');
  return result[0] * SEC_IN_MINUTES * SEC_IN_MINUTES + result[1] * SEC_IN_MINUTES;
};

// eslint-disable-next-line no-unused-vars
const isWorkShiftCorrect = (startWorkTime, endWorkTime, meetStartTime, meetDuration) => {
  if(convertTimeInSeconds(meetStartTime) >= convertTimeInSeconds(startWorkTime) &&
  convertTimeInSeconds(meetStartTime) <= convertTimeInSeconds(endWorkTime)){
    if(convertTimeInSeconds(meetStartTime)+meetDuration*SEC_IN_MINUTES <= convertTimeInSeconds(endWorkTime)){
      return true;
    }
  }
  return false;
};
