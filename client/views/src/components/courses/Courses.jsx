import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Courses = (props) => {
    console.log(props)
    // eslint-disable-next-line react/prop-types
    const { course_name, course_capacity, course_start_date, course_end_date } = props.course
    return (
        <Card sx={ { minWidth: 350 } }>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align='center'>
                    { course_name }
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    START DATE: { course_start_date }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    END DATE: { course_end_date }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    CAPACITY: { course_capacity }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default Courses