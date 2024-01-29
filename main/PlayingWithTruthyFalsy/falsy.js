export function falsyCompare(a, b) {
    let c = a == b;
    console.log(`${a} is Equal to ${b}?: ` + c);
}

falsyCompare(null, 0);
falsyCompare(false, 0);
falsyCompare(undefined, 0);
falsyCompare('', 0);
falsyCompare(NaN, false);
falsyCompare(null, false);
falsyCompare(undefined, false);
falsyCompare(null, undefined);
falsyCompare("",false);
falsyCompare(0n, false);
