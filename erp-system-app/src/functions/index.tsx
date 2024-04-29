export const formatKeys = (data: any[]) => {

    const keys = getKeys(data)

    const splittedKeys = keys.map(key => {
        return key.split(/(?=[A-Z])/).join(' ');
    })
    
    const formattedKeys = splittedKeys.map(key => key.charAt(0).toUpperCase() + key.slice(1));

    return formattedKeys

}


export const getKeys = (data: any[]) => 
{
    const keys = Object.keys(data[0]).filter(key => key !== 'id')
    return keys
}