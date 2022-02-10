export default interface IBlog {
    id: string;
    title: string;
    category: string;
    image?: {
        component: 'img';
        height: string;
        url: string;
        alt: string;
    };
    desc: string;
    link: string;
    date: {
        seconds: number;
    };
}
