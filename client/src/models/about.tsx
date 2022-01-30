export interface ITimeLineItemDeatail {
    title: {
        [lang: string]: string
    },
    detail: {
        project: {
            [lang: string]: string
        },
        tasks: {
            [lang: string]: string
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