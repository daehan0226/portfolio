export interface IDateSeconds {
    startDate: {
        seconds: number;
    };
    endDate?: {
        seconds: number;
    };
    updatedDate?: {
        seconds: number;
    };
}

export interface IDates {
    startDate: Date;
    endDate: Date;
    updatedDate?: Date;
}

export interface IWorkDetail {
    id?: string;
    title: {
        [lang: string]: string;
    };
    tasks: {
        id: number;
        KR: string;
        EN: string;
    }[];
    hasDeleted?: boolean;
}

export interface IWorkDetailDates extends IWorkDetail, IDates {}
export interface IWorkDetailDateSeconds extends IWorkDetail, IDateSeconds {}
