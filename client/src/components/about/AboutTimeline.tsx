import React, { FC, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ITimeLineItem } from '../../models';
import Typography from '@mui/material/Typography';

import { AlertMsg, LoadingBox } from '../common';
import useGetDocs from '../../hooks/useGetDocs';
import { convertDateToStr } from '../../utils';
import AboutTimelineDetail from './AboutTimelineDetail';

const showDate = (item: ITimeLineItem): string => {
    let date: string = convertDateToStr(item.startDate.seconds);
    if (item.endDate && item.endDate.seconds !== item.startDate.seconds) {
        date += ` ~ ${convertDateToStr(item.endDate.seconds)}`;
    }
    return date;
};

export default function AboutTimeline() {
    const { data, loading, error } = useGetDocs<ITimeLineItem>({ collectionName: 'timeline', sortKey: 'startDate' });
    return (
        <Timeline sx={{ padding: 0 }}>
            {loading && <LoadingBox />}
            {error && <AlertMsg msg={error} title="Error" type="error" />}
            {data &&
                data.map(item => (
                    <TimelineItem key={item.title.KR}>
                        <TimelineOppositeContent
                            sx={{ flex: 'none', margin: 'auto 0px', visibility: { mobile: 'hidden', tablet: 'visible' }, width: { mobile: '0%', tablet: '20%', labtop: '25%', desktop: '30%' } }}
                        >
                            <Typography variant="body1">{showDate(item)}</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{ backgroundColor: item.dotColor }} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ display: 'flex', padding: '8px 8px', flexDirection: 'column', alignItems: 'left', justifyContent: 'center' }}>
                            <AboutTimelineDetail title={item.title} detail={item.detail} date={showDate(item)} />
                        </TimelineContent>
                    </TimelineItem>
                ))}
        </Timeline>
    );
}
