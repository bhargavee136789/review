import React from 'react'
 import {AppBar, Grid,Box, FormControl,MenuItem, InputLabel, Select} from '@mui/material'
import ImageCard from './components/ImageCard'
import ResponsiveAppBar from './ResponsiveAppBar'
import { TextField } from '@mui/material'
import { padding } from '@mui/system'
import { useState } from 'react'
import BasicButtons from './components/Buttons'




 //import Header from './Header'
 //import Header1 from './Header'

const App = () => {
  const setAge = useState(0)
  const[ Text, setText]= useState('Text')
  const[ Issue, setIssue]= useState('Issue')
  return (
    <div className='App'>
      <ResponsiveAppBar/>
      <text className='Text' sx={{alignItems:'center', display:'flex',margin: 'auto', fontSize: 20, justifyContent:'center'}}>
        Let us know how can we help you
      </text>
      {/* <Grid conatiner  rowSpacing ={1} >
        <Grid item xs={4}>
      <text style={{padding :20
                           }}>
        This is content
      </text>
      </Grid>
      <Grid  item xs={4}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      
      </Grid> */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{p:10}}>
  <Grid item xs={6} sx={{p: 10}}>
    <Box sx={{ display:'flex',fontSize:20, marginLeft:10}}>Chooose your probelm from the given list</Box>
  </Grid>
  <Grid  styles ={{padding : 10}}item xs={6}>
    <Box xs={3} >
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Issues</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={Text}
    label="Select issues"
    onChange={e => setText(e.target.value)}
  >
    <MenuItem value={10}>issue1</MenuItem>
    <MenuItem value={20}>issue 2</MenuItem>
    <MenuItem value={30}>issue 3</MenuItem>
  </Select>
</FormControl>
    </Box>
  </Grid>
  <Grid item xs={6}>
    <Box></Box>
  </Grid>
  <Grid item xs={6}>
    <Box>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Product</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={Issue}
    label="Select issues"
    onChange={e => setIssue(e.target.value)}
  >
    <MenuItem value={10}>p1</MenuItem>
    <MenuItem value={20}>p 2</MenuItem>
    <MenuItem value={30}>p3</MenuItem>
  </Select>
</FormControl>
    </Box>
  </Grid>
</Grid>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p :10}}>
  <Grid item xs={6} sx={{p: 10}}>
    <Box sx={{ display:'flex',fontSize:20, marginLeft:10}}>Chooose your probelm from the given list</Box>
  </Grid>
  <Grid  styles ={{padding : 10}}item xs={6}>
    <Box xs={3} >
    <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          column={6}
       
          fullWidth label="Description" id="fullWidth" 
        />
    </Box>
  </Grid>
</Grid>
<BasicButtons/>
 </div>
    
   
  )
}

export default App
