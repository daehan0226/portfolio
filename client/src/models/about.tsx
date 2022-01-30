export interface ITimeLineItemDeatail {
    title: {
        [key: string]: string
    },
    detail: {
        project: {
            [key: string]: string
        },
        tasks: {
            [key: string]: string
        }[]
    }[]
}

export default interface ITimeLineItem extends ITimeLineItemDeatail {
    dotColor : string,
    date: {
        seconds: number
    },
    startDate: {
        seconds: number
    },
    endDate: {
        seconds: number
    },
  }