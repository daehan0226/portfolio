type dateProp = {
    date: {
        seconds: number;
    };
};

export function compare<T extends dateProp>(a: T, b: T) {
    if (a.date.seconds > b.date.seconds) {
        return -1;
    }
    if (a.date.seconds < b.date.seconds) {
        return 1;
    }
    return 0;
}

export function convertDateToStr(seconds: number, lang: string) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date(seconds * 1000);
    if (lang === 'KR') {
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
    } else {
        return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }
}
