import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const CoursesAction = (props) => {
    // eslint-disable-next-line react/prop-types
    const { id, course_name, course_capacity, course_start_date, course_end_date, isEnrolled } = props.course


    const handleEnroll = async () => {
        await axios
            .post(
                `http://localhost:3000/api/v1/courses/${id}/student/1`,
            )
        alert(`Enrolling in ${course_name}`)
        console.log(`Enrolling in ${course_name}`);
    };

    const handleDisenroll = async () => {
        await axios
            .delete(
                `http://localhost:3000/api/v1/courses/${id}/student/1`,
            )
        console.log(`Disenrolling from ${course_name}`);
    };

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
                { isEnrolled ? (
                    <Button size="small" onClick={ handleDisenroll }>Disenroll</Button>
                ) : (
                    <Button size="small" onClick={ handleEnroll }>Enroll</Button>
                ) }
            </CardActions>
        </Card>
    );
}

export default CoursesAction