/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        REACT_APP_GITHUB: string;
        REACT_APP_GMAIL: string;
        REACT_APP_TISTORY: string;
        REACT_APP_PROJECT_PATENT_LINK: string;
        REACT_APP_PROJECT_PATENT_GITHUB_BACK: string;
        REACT_APP_PROJECT_PORTFOLIO_LINK: string;
        REACT_APP_PROJECT_PORTFOLIO_GITHUB: string;
        REACT_APP_PROJECT_PORTFOLIO_IMAGE: string;
        REACT_APP_PROJECT_ENGLISH_APP_LINK: string;
        REACT_APP_PROJECT_ENGLISH_APP_GITHUB_FRONT: string;
        REACT_APP_PROJECT_ENGLISH_APP_GITHUB_BACK: string;
        REACT_APP_PROJECT_ENGLISH_APP_GITHUB_CRAWLER: string;
        REACT_APP_PROJECT_ENGLISH_APP_IMAGE: string;
        REACT_APP_PROJECT_FURFELLAS_LINK: string;
        REACT_APP_PROJECT_FURFELLAS_APP_GITHUB_FRONT: string;
        REACT_APP_PROJECT_FURFELLAS_APP_GITHUB_BACK: string;
        REACT_APP_PROJECT_FURFELLAS_APP_IMAGE: string;
        REACT_APP_COPYRIGHT: string;
        REACT_APP_APIKEY: string;
        REACT_APP_AUTHDOMAIN: string;
        REACT_APP_PROJECTID: string;
        REACT_APP_STORAGEBUCKET: string;
        REACT_APP_MESSAGINGSENDERID: string;
        REACT_APP_APPID: string;
    }
}
