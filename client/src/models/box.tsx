export interface BoxWrapperProps {
    children?: JSX.Element|JSX.Element[];
    height?: number | string;
    minHeight?: number | string;
    backgroundColor?: string;
    backgroundHoverColor?: string;
    hover?: boolean;
    padding?: number;
}

export interface BoxHeaderProps {
    title: string,
    color?: string,
    divierColor?: string
  }

  
type colorType = "primary" | "secondary" |  "grey";


export interface SocialIconBoxProps {
    children: JSX.Element|JSX.Element[];
    link? : string;
    backgroundColor?: string;
    color?: colorType;
}

export interface IconBoxProps {
    color?: colorType;
}

