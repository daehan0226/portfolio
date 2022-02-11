import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import { ITimeLineItem } from '../../models';
import { Typography } from '@mui/material';
import { deleteTimeline } from '../../api/timelines';

interface ITimeLineItemEdit {
    data: ITimeLineItem;
    open: boolean;
    close: () => void;
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    boxSizing: 'borderbox',
    p: 1,
};

const dotColors = ['secondary.50', 'secondary.100', 'secondary.200', 'secondary.300', 'secondary.400', 'secondary.500'];

export default function AboutTimelineEdit({ data, open, close }: ITimeLineItemEdit) {
    const [title, setTitle] = useState({ KR: data.title.KR, EN: data.title.EN });
    const [startDate, setStartDate] = React.useState<Date | null>(new Date(data.startDate.seconds * 1000));
    const [endDate, setEndDate] = React.useState<Date | null>(new Date((data.endDate ? data.endDate.seconds : data.startDate.seconds) * 1000));
    const [dotColor, setDotColor] = React.useState<string>(data.dotColor);

    // const [timeline, setTimeline] = useState<ITimeLineItem>({ ...data });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTitle(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleColorChange = (event: SelectChangeEvent) => {
        setDotColor(event.target.value as string);
    };

    const handleDelete = (id_: string) => {
        deleteTimeline(id_);
    };

    useEffect(() => {
        console.log(title, startDate, endDate, dotColor);
    }, [title, startDate, endDate, dotColor]);

    return (
        <Fade in={open}>
            <Box sx={style}>
                <TextField
                    sx={{ display: 'block', margin: 2, width: '80%' }}
                    fullWidth
                    id="standard-basic"
                    label="Title KR"
                    value={title.KR}
                    variant="standard"
                    required
                    onChange={handleTitleChange}
                    name="KR"
                />
                <TextField
                    sx={{ display: 'block', margin: 2, width: '80%' }}
                    fullWidth
                    id="standard-basic"
                    label="Title EN"
                    value={title.EN}
                    variant="standard"
                    required
                    onChange={handleTitleChange}
                    name="EN"
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Box sx={{ margin: 2 }}>
                        <DatePicker label="Start Date" value={startDate} onChange={newDate => setStartDate(newDate)} renderInput={params => <TextField {...params} />} />
                    </Box>
                    <Box sx={{ margin: 2 }}>
                        <DatePicker label="End Date" value={endDate} onChange={newDate => setEndDate(newDate)} minDate={startDate} renderInput={params => <TextField {...params} />} />
                    </Box>
                </LocalizationProvider>
                <Box sx={{ margin: 1 }}>
                    <Typography variant="body1">Dot color</Typography>
                    {dotColors.map(color => (
                        <Radio
                            key={color}
                            checked={dotColor === color}
                            onChange={handleColorChange}
                            sx={{
                                color,
                                '&.Mui-checked': {
                                    color,
                                },
                            }}
                            value={color}
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                    ))}
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Button sx={{ color: 'secondary.500' }}>{data.id ? 'Update' : 'Create'}</Button>
                    {data.id && (
                        <Button color="error" onClick={() => data.id && handleDelete(data.id)}>
                            Delete
                        </Button>
                    )}
                    <Button color="inherit" sx={{ marginLeft: 'auto' }} onClick={close}>
                        Close
                    </Button>
                </Box>
            </Box>
        </Fade>
    );
}
