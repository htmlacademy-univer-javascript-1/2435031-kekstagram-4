/* eslint-disable radix */
// eslint-disable-next-line no-unused-vars
const checkLength = function (inputString, maxLength)
{
  if (inputString.length <= maxLength)
  {
    return true;
  }
  else
  {
    return false;
  }
};

// eslint-disable-next-line no-unused-vars
const isPolindrom = function (inputString)
{
  let newString = inputString;

  newString = newString.replaceAll(' ','');
  newString = newString.toLowerCase();

  let reverseString = '';

  for(let i = newString.length - 1; i >= 0; i--)
  {
    const symbolFromString = newString[i];
    reverseString += symbolFromString;
  }
  return reverseString === newString;
};

// eslint-disable-next-line no-unused-vars
const onlyPositiveInteger = function(inputString)
{
  let newString = inputString;
  let result = '';
  newString = newString.replaceAll(' ','');

  for(let i = 0; i <= newString.length; i++)
  {
    const tempSymbol = parseInt(newString[i]);
    if(!isNaN(tempSymbol))
    {
      result += newString[i];
    }
  }

  if(result.length === 0)
  {
    return NaN;
  }

  else
  {
    return parseInt(result);
  }
};
