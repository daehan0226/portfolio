export default interface IProject {
    name: string,
    image?: string,
    desc: string,
    link: string,
    back?: {
        github: string,
        desc: string,
        features: string[],
    },
    front?: {
        github: string,
        desc: string,
        features: string[],
    },
    crawler?: {
        github: string,
        desc: string,
        features: string[],
    },
}
  