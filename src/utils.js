export const calculateBill = (
    startTime , 
    duration , 
    basePrice ,
    extraCharge
) => {
    const usedMinutes = (Date.now() - startTime)/1000/60;

    if (usedMinutes <= duration){
        return basePrice
    }

    const extraMinutes = usedMinutes - duration ; 
    const extraBlocks = Math.ceil(extraMinutes / 30);

    return basePrice + extraBlocks * extraCharge;
};