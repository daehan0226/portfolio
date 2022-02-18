export interface ITimeLineItemDeatail {
    id: string | null;
    title: {
        [lang: string]: string;
    };
    tasks: {
        id: number;
        KR: string;
        EN: string;
    }[];
}

export default interface ITimeLineItem extends ITimeLineItemDeatail {
    startDate: {
        seconds: number;
    };
    endDate?: {
        seconds: number;
    };
}
