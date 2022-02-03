import React, { FC, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ITimeLineItem } from '../../models';

import { AlertMsg, LoadingBox } from '../common';
import useGetDocs from '../../hooks/useGetDocs';
import { convertDateToStr } from '../../utils';
import AboutTimelineDetail from './AboutTimelineDetail';
import { Typography } from '@mui/material';

const showDate = (item: ITimeLineItem): string => {
    let date: string = convertDateToStr(item.startDate.seconds);
    if (item.endDate && item.endDate.seconds !== item.startDate.seconds) {
        date += `~ ${convertDateToStr(item.endDate.seconds)}`;
    }
    return date;
};

type dateProp = {
    startDate: {
        seconds: number;
    };
};

const compare = (a: dateProp, b: dateProp) => {
    if (a.startDate.seconds > b.startDate.seconds) {
        return -1;
    }
    if (a.startDate.seconds < b.startDate.seconds) {
        return 1;
    }
    return 0;
};

export default function AboutTimeline() {
    const { data, loading, error } = useGetDocs<ITimeLineItem>({ collectionName: 'timeline' });
    return (
        <Timeline sx={{ padding: 0 }}>
            {loading && <LoadingBox />}
            {error && <AlertMsg msg={error} title="Error" type="error" />}
            {data &&
                data.sort(compare).map(item => (
                    <TimelineItem key={item.title.KR}>
                        <TimelineOppositeContent sx={{ m: 'auto 0', padding: '8px 8px', display: { mobile: 'none', tablet: 'block' } }} align="right" variant="body2" color="text.secondary">
                            {showDate(item)}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{ backgroundColor: item.dotColor }} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ display: 'flex', padding: '8px 8px', flexDirection: 'column', alignItems: 'left', justifyContent: 'center' }}>
                            <Typography variant="body2" sx={{ display: { mobile: 'block', tablet: 'none' } }}>
                                {showDate(item)}
                            </Typography>
                            <AboutTimelineDetail title={item.title} detail={item.detail} />
                        </TimelineContent>
                    </TimelineItem>
                ))}
        </Timeline>
    );
}
