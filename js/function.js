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

const isPolindrom = function (inputString)
{
    let newString = inputString;

    newString = newString.replaceAll(' ','');
    newString = newString.toLowerCase();

    let reverseString = '';

    for(let i = newString.length - 1; i >= 0; i--)
    {
        let symbolFromString = newString[i];
        reverseString += symbolFromString;
    }
    return reverseString === newString;
};

const onlyPositiveInteger = function(inputString)
{
    let newString = inputString;
    let result = '';
    newString = newString.replaceAll(' ','');

    for(let i = 0; i <= newString.length; i++)
    {
        let tempSymbol = parseInt(newString[i]);
        if(!isNaN(tempSymbol))
        {
            result += newString[i];
        }
    }

    if(result.length == 0)
    {
        return NaN;
    }

    else
    {
        return parseInt(result);
    }
}