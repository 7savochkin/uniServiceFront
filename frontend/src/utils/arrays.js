export function shuffle(arrFirst, arrSecond) {
    const mergedArray = [...arrFirst, ...arrSecond];

    // Shuffle the merged array randomly
    for (let i = mergedArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mergedArray[i], mergedArray[j]] = [mergedArray[j], mergedArray[i]]; // Swap elements
    }
    return mergedArray;
}