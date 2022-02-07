export interface ITimeLineItemDeatail {
    title: {
        [lang: string]: string;
    };
    date: string;
    detail: {
        project: {
            [lang: string]: string;
        };
        tasks: {
            [lang: string]: string;
        }[];
    }[];
}

export default interface ITimeLineItem extends ITimeLineItemDeatail {
    dotColor: string;
    startDate: {
        seconds: number;
    };
    endDate?: {
        seconds: number;
    };
}
