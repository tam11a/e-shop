import { Button, Paper, Stack, Typography } from "@mui/material";
import theme from "../../styles/theme";

const MuiTheme = () => {
  return (
    <Stack direction={'column'} alignItems={'center'}>
    <Stack direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'} sx={{mt: 8}}>
      <Typography variant={'h3'}>MUI Theme</Typography>
    </Stack>
    <Stack direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'} sx={{mt: 5}}>
        Typography
    </Stack>
    <Stack direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'} sx={{mt: 3}}>
        Font Family: {theme.typography.fontFamily}
    </Stack>
    <Stack direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'} sx={{mt: 3}}>
      <Button color={'primary'} sx={{fontWeight: 'bold'}}>bold</Button>
      <Button color={'primary'} sx={{fontWeight: 'normal'}}>normal</Button>
      <Button color={'primary'} sx={{fontWeight: 'light'}}>light</Button>
      </Stack>
    <Stack direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'} sx={{mt: 5}}>
        Color Palette
    </Stack>
    <Stack direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'} sx={{mt: 3}}>
      <Button>primary</Button>
      <Button variant={'contained'}>{theme.palette.primary.main}</Button>
      <Button variant={'outlined'} sx={{fontWeight: 'bold'}}>primary</Button>
    </Stack>

    <Stack direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'} sx={{mt: 1}}>
      <Button color={'secondary'}>secondary</Button>
      <Button variant={'contained'} color={'secondary'}>{theme.palette.secondary.main}</Button>
      <Button variant={'outlined'} color={'secondary'} sx={{fontWeight: 'bold'}}>secondary</Button>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'} sx={{mt: 1}}>
      <Button color={'success'}>success</Button>
      <Button variant={'contained'} color={'success'}>{theme.palette.success.main}</Button>
      <Button variant={'outlined'} color={'success'} sx={{fontWeight: 'bold'}}>success</Button>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'} sx={{mt: 1}}>
      <Button color={'error'}>error</Button>
      <Button variant={'contained'} color={'error'}>{theme.palette.error.main}</Button>
      <Button variant={'outlined'} color={'error'} sx={{fontWeight: 'bold'}}>error</Button>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'} sx={{mt: 1}}>
      <Button color={'warning'}>warning</Button>
      <Button variant={'contained'} color={'warning'}>{theme.palette.warning.main}</Button>
      <Button variant={'outlined'} color={'warning'} sx={{fontWeight: 'bold'}}>warning</Button>
      </Stack>

      <Stack direction={'column'} alignItems={'center'} spacing={1} justifyContent={'center'} sx={{mt: 5}}>
      <Button color={'success'}>Background</Button>
      <Button variant={'outlined'} color={'primary'} sx={{fontWeight: 'bold'}}>{theme.palette.background.default}</Button>
      </Stack>

      <Stack direction={'column'} alignItems={'center'} spacing={1} justifyContent={'center'} sx={{mt: 1}}>
      <Button color={'success'}>Paper</Button>
      <Paper elevation={5} sx={{
          height: '80px',
          width: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
      }}>
        <Button color={'primary'} sx={{fontWeight: 'bold'}}>{theme.palette.background.paper}</Button>
      </Paper>
      </Stack>
      
      <Stack direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'} sx={{mt: 5}}>
          <Typography component={'a'} href={'https://tam11a.netlify.app/'} target={'_blank'}>tam11a &copy; 2022</Typography>
      </Stack>
      </Stack>
  )
}

export default MuiTheme