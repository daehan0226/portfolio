export default interface ITimeLineItem {
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
    title: string,
    subTitle: string,
    detail: {
        project: string,
        tasks: string[]
    }[]
  }