import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';

const items = [
  {
    title: "Quick Learning",
    desc: "Whenever I have to learn something new, I try to learn from books, official websites, Udemy and etc.",
    icon: LocalLibrarySharpIcon
  },
  {
    title: "Curious",
    desc: "Always curious about the codes that are wrriten in different ways or for different situations. Stackoverflow is my go-to solver for getting various opitions.",
    icon: QuestionMarkIcon

  },
  {
    title: "Open for criticism",
    desc: "I belive I can learn a lot from criticism",
    icon: PeopleAltSharpIcon
  },
]


export default function AboutPersonality() {

  return (
    <Box
      sx={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
        {items.map((item)=> (
          <Box key={item.title} sx={{ width: 250, margin: { mobile: 1, tablet: 2, laptop: 3} }} >
              <item.icon sx={{ color: "secondary.600"}} />
              <Typography variant="h6" sx={{ marginBottom: { mobile: 0.5, tablet: 1, laptop: 2} }} >{item.title}</Typography>
              <Typography variant="body2" sx={{wordBreak: "break-word"}}>{item.desc}</Typography>
          </Box>
        ))}
      </Box>
  );
}