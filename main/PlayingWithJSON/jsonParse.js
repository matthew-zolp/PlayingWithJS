export function createJSONObjectFromString(str){
    console.log(JSON.stringify(JSON.parse(JSON.stringify(str))));
    return JSON.parse(JSON.stringify(str));
}


createJSONObjectFromString('String');