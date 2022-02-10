import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { ITimeLineItem } from '../../models';

interface ITimeLineItemEdit {
    data: ITimeLineItem;
    open: boolean;
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    minHeight: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    boxSizing: 'borderbox',
    p: 1,
};

export default function AboutTimelineEdit({ data, open }: ITimeLineItemEdit) {
    const [title, setTitle] = useState({ KR: data.title.KR, EN: data.title.EN });
    const [startDate, setStartDate] = React.useState<Date | null>(new Date(data.startDate.seconds * 1000));
    const [endDate, setEndDate] = React.useState<Date | null>(new Date((data.endDate ? data.endDate.seconds : data.startDate.seconds) * 1000));

    // const [timeline, setTimeline] = useState<ITimeLineItem>({ ...data });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTitle(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <Fade in={open}>
            <Box sx={style}>
                <TextField margin="normal" id="standard-basic" label="Title KR" value={title.KR} variant="standard" required onChange={handleTitleChange} name="KR" />
                <TextField margin="normal" id="standard-basic" label="Title EN" value={title.EN} variant="standard" required onChange={handleTitleChange} name="EN" />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker label="Start Date" value={startDate} onChange={newDate => setStartDate(newDate)} renderInput={params => <TextField {...params} />} />
                    <DatePicker label="End Date" value={endDate} onChange={newDate => setEndDate(newDate)} minDate={startDate} renderInput={params => <TextField {...params} />} />
                </LocalizationProvider>
            </Box>
        </Fade>
    );
}
