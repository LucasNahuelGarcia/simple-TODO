import "./todoCard.css";
import { Card, CardContent, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

const TodoCard = ({ tituloTodo }) => {
    tituloTodo = tituloTodo || "TODO sin nombre";
    return (
        <Card >
          <CardActionArea>
            <CardContent>
                <Typography variant="h4" align="left" nowrap={true}>
                    {tituloTodo}
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card >
    );
};

export default TodoCard;

