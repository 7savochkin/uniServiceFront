/**
 * Sets the nav class based on the isActive parameter.
 *
 * @param {string} defaultClass - The default class to be applied to the nav element.
 * @param {string} activeClass - The class to be added when isActive is true.
 * @return {object} An object with a single method setNavClass.
 */
export function useNavActive(defaultClass, activeClass){

    function setNavClass(isActive){
        return isActive ? `${defaultClass} ${activeClass}` : defaultClass;
    }

    return {setNavClass};
}