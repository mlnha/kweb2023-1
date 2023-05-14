const isValidNumber = num => {
    const input=parseInt(num);
    if (input>=1 && input<=9) return true;
    if (!isFinite(input) || isNaN(input)) return false;
    if (input!=num) return false;
}