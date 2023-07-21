import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Courses = (props) => {
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
        </Card>
    );
}

export default Courses