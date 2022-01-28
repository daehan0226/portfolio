/// <reference types="react-scripts" />
declare namespace NodeJS {
	interface ProcessEnv {
      		NODE_ENV: 'development' | 'production' | 'test';
              REACT_APP_GITHUB: string;
              REACT_APP_GMAIL: string;
              REACT_APP_TISTORY: string;
				REACT_APP_COPYRIGHT:string;
				REACT_APP_APIKEY:string;
				REACT_APP_AUTHDOMAIN:string;
				REACT_APP_PROJECTID:string;
				REACT_APP_STORAGEBUCKET:string;
				REACT_APP_MESSAGINGSENDERID:string;
				REACT_APP_APPID:string;
	}
}