import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { IWorkDetailDateSeconds, IWorkDetailDates } from '../../models';
import { deleteWork, updateWork, createWork, recoverWork } from '../../api/work';

interface IWorkExperienceEdit {
    data: IWorkDetailDateSeconds;
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
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    maxHeight: 500,
    overflowY: 'scroll',
    boxShadow: 24,
    boxSizing: 'border-box',
    p: 1,
};

type ObjectWithId = {
    id: number;
};

const findFreeId = (array: any) => {
    const sortedArray = array.slice().sort(function (a: ObjectWithId, b: ObjectWithId) {
        return a.id - b.id;
    });
    let previousId = 0;
    for (const element of sortedArray) {
        if (element.id != previousId) {
            return previousId;
        }
        previousId += 1;
    }
    return previousId;
};

interface IEditTextField {
    value: string;
    label: string;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditTextField = ({ value, label, name = '', onChange }: IEditTextField) => {
    return <TextField sx={{ display: 'block', margin: 2, width: '80%' }} fullWidth id="standard-basic" label={label} value={value} variant="standard" required onChange={onChange} name={name} />;
};

export default function WorkExperienceEdit({ data, open, close }: IWorkExperienceEdit) {
    const [title, setTitle] = useState({ KR: data.title.KR, EN: data.title.EN });
    const [tasks, setTasks] = useState([...data.tasks]);
    const [startDate, setStartDate] = React.useState<Date | null>(new Date(data.startDate.seconds * 1000));
    const [endDate, setEndDate] = React.useState<Date | null>(new Date((data.endDate ? data.endDate.seconds : data.startDate.seconds) * 1000));
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTitle(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleRecover = async () => {
        if (data.id) {
            if (window.confirm(`Do you want to recover ${title.EN} Work Experience?`)) {
                await recoverWork(data.id);
                close();
            }
        }
    };

    const handleDelete = async () => {
        if (data.id) {
            if (window.confirm(`Do you want to delete ${title.EN} Work Experience?`)) {
                await deleteWork(data.id);
                close();
            }
        }
    };

    const handleUpsert = async () => {
        const updatedDate = new Date();
        const startDateSeconds = startDate || updatedDate;
        const endDateSeconds = endDate || updatedDate;

        const newDoc: IWorkDetailDates = {
            title,
            tasks,
            startDate: startDateSeconds,
            endDate: endDateSeconds,
            updatedDate,
            hasDeleted: false,
        };
        if (data.id) {
            if (window.confirm(`Do you want to Update ${title.EN} Work Experience?`)) {
                await updateWork({ id_: data.id, newDoc });
                close();
            }
        } else {
            if (window.confirm(`Do you want to Create ${title.EN} Work Experience?`)) {
                await createWork({ newDoc });
                close();
            }
        }
    };

    useEffect(() => {
        setSubmitDisabled(true);
        if (!title.EN || !title.KR) {
            return;
        }
        for (const task of tasks) {
            if (!task.EN || !task.KR) {
                return;
            }
        }
        setSubmitDisabled(false);
    }, [title, tasks]);

    const genNewTask = () => {
        return { id: findFreeId(tasks), KR: '', EN: '' };
    };

    return (
        <Fade in={open}>
            <Box sx={style}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Typography variant="h4">New Work Experience </Typography>
                    <Button color="inherit" sx={{ marginLeft: 'auto' }} onClick={close}>
                        Close
                    </Button>
                </Box>
                <EditTextField value={title.KR} label={'Title KR'} name="KR" onChange={handleTitleChange} />
                <EditTextField value={title.EN} label={'Title EN'} name={'EN'} onChange={handleTitleChange} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Box sx={{ margin: 2 }}>
                            <DatePicker label="Start Date" value={startDate} onChange={newDate => setStartDate(newDate)} renderInput={params => <TextField {...params} />} />
                        </Box>
                        <Box sx={{ margin: 2 }}>
                            <DatePicker label="End Date" value={endDate} onChange={newDate => setEndDate(newDate)} minDate={startDate} renderInput={params => <TextField {...params} />} />
                        </Box>
                    </LocalizationProvider>
                </Box>
                {tasks.map(task => (
                    <Box key={task.id}>
                        <EditTextField
                            value={task.KR}
                            label={`Task ${task.id} KR`}
                            onChange={e => {
                                setTasks([
                                    ...tasks.map(t => {
                                        if (t.id === task.id) {
                                            t.KR = e.target.value;
                                        }
                                        return t;
                                    }),
                                ]);
                            }}
                        />
                        <EditTextField
                            value={task.EN}
                            label={`Task ${task.id} EN`}
                            onChange={e => {
                                setTasks([
                                    ...tasks.map(t => {
                                        if (t.id === task.id) {
                                            t.EN = e.target.value;
                                        }
                                        return t;
                                    }),
                                ]);
                            }}
                        />
                        <Button color="error" onClick={() => setTasks([...tasks.filter(t => t.id !== task.id)])}>
                            {`Task ${task.id} Delete`}
                        </Button>
                    </Box>
                ))}
                <Button sx={{ color: 'secondary.500', margin: '0px auto;' }} onClick={() => setTasks([...tasks, genNewTask()])}>
                    Add a new task
                </Button>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {data.id && (
                        <Button color="error" onClick={() => (data.hasDeleted ? handleRecover() : handleDelete())}>
                            {data.hasDeleted ? 'Recover' : 'Delete'}
                        </Button>
                    )}
                    {!data.hasDeleted && (
                        <Button sx={{ color: 'secondary.500' }} disabled={submitDisabled} onClick={() => handleUpsert()}>
                            {data.id ? 'Update' : 'Create'}
                        </Button>
                    )}
                </Box>
            </Box>
        </Fade>
    );
}
