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

export function convertDateToStr(seconds: number) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date(seconds * 1000);
    return `${date.getFullYear()} ${monthNames[date.getMonth()]} ${date.getDate()}`;
}
