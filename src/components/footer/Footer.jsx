import { Typography } from '@mui/material'
import './footer.scss'


export const Footer = () => {
return (
    <div className="footer">
        <Typography variant="h4" content="div" sx={{textAlign:"center", paddingTop:"30px"}}>
            Electron Footer
        </Typography>
    </div>
)
}