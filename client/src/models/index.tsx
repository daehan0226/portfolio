import React, { RefObject } from 'react';

import IBlog from './blog';
import IProject from './project';
import ITimeLineItem from './about';
import { IWorkDetailDates, IWorkDetailDateSeconds } from './work';

import { SocialIconBoxProps, IconBoxProps } from './box';

export interface RefProps {
    refObject: RefObject<HTMLDivElement>;
    handleScroll?: (target: string) => void;
}

export type { IWorkDetailDates, IWorkDetailDateSeconds, IBlog, IProject, ITimeLineItem, SocialIconBoxProps, IconBoxProps };
