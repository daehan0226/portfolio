import React, { FC, useContext, useEffect, useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { IWorkDetailDateSeconds } from '../../models';
import { AlertMsg, LoadingBox } from '../common';
import useGetDocs from '../../hooks/useGetDocs';
import { convertDateToStr } from '../../utils';
import WorkExperienceDetail from './WorkExperienceDetail';
import WorkExperienceEdit from './WorkExperienceEdit';
import { AuthContext, LangContext } from '../../context';

const showDate = (item: IWorkDetailDateSeconds, language: string): string => {
    let date: string = convertDateToStr(item.startDate.seconds, language);
    if (item.endDate && item.endDate.seconds !== item.startDate.seconds) {
        date += ` ~ ${convertDateToStr(item.endDate.seconds, language)}`;
    }
    return date;
};

const currentTime = new Date().getTime() / 1000;
const initialWorkExperience: IWorkDetailDateSeconds = {
    title: {
        KR: '',
        EN: '',
    },
    startDate: {
        seconds: currentTime,
    },
    endDate: {
        seconds: currentTime,
    },
    updatedDate: { seconds: currentTime },
    tasks: [{ id: 0, KR: '', EN: '' }],
    hasDeleted: false,
};

export default function WorkExperienceTimeline() {
    const { data, loading, error } = useGetDocs<IWorkDetailDateSeconds>({ collectionName: 'work', sortKey: 'startDate', deletable: true });
    const [editKey, setEditKey] = useState<string | null>(null);
    const [latestUpdatedDate, setLatestUpdatedDate] = useState<string | null>(null);
    const [editTimeline, setEditTimeline] = useState<IWorkDetailDateSeconds | null>(null);
    const {
        state: { auth },
    } = useContext(AuthContext);
    const {
        state: { language },
        dispatch: { translate },
    } = useContext(LangContext);
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

    useEffect(() => {
        setEditTimeline(null);
        setEditModalOpen(false);
        if (editKey) {
            let editData;
            if (editKey === 'new') {
                editData = { ...initialWorkExperience };
            } else {
                editData = data.find(item => item.id === editKey);
            }
            if (editData) {
                setEditTimeline(editData);
                setEditModalOpen(true);
            }
        }
    }, [editKey]);

    const handleClose = () => setEditKey(null);

    return (
        <>
            <Timeline sx={{ padding: 0, width: { mobile: '100%', laptop: '80%' }, margin: { laptop: '0px auto' } }}>
                <Box sx={{ textAlign: 'center' }}>
                    {auth.isAdmin && (
                        <ModeEditIcon
                            sx={{ cursor: 'pointer' }}
                            onClick={() => {
                                setEditKey('new');
                            }}
                        />
                    )}
                </Box>
                {loading && <LoadingBox />}
                {error && <AlertMsg msg={error} title="Error" type="error" />}
                <Box sx={{ textAlign: 'right' }}>
                    {data && data.length > 0 && (
                        <Typography variant="body1">
                            {translate('updatedAt')}: {convertDateToStr(data.reduce((a, b) => (a.updatedDate.seconds > b.updatedDate.seconds ? a : b)).updatedDate.seconds, language)}
                        </Typography>
                    )}
                    {data &&
                        data.map(item => (
                            <TimelineItem key={item.id} sx={{ width: '100%', margin: { laptop: '0px auto' } }}>
                                <TimelineOppositeContent sx={{ display: 'none' }}></TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot sx={{ backgroundColor: 'secondary.400' }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ display: 'flex', padding: '8px 8px', flexDirection: 'column', alignItems: 'left', justifyContent: 'center' }}>
                                    {item.id && (
                                        <>
                                            <WorkExperienceDetail id={item.id} title={item.title} tasks={item.tasks} date={showDate(item, language)} />
                                            {auth.isAdmin && (
                                                <ModeEditIcon
                                                    sx={{ cursor: 'pointer' }}
                                                    onClick={() => {
                                                        item.id && setEditKey(item.id);
                                                    }}
                                                />
                                            )}
                                        </>
                                    )}
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                </Box>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={editModalOpen}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Box>{editTimeline && <WorkExperienceEdit data={editTimeline} open={editModalOpen} close={handleClose} />}</Box>
                </Modal>
            </Timeline>
        </>
    );
}
