import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import { useDispatch } from 'react-redux';
import { pokemonSelected } from '../store/pokemonSlice';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 140,
  },
}));

export const PokemonListItem = ({ item: { name } }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <ListItem onClick={() => dispatch(pokemonSelected(name))}>
      <Card className={classes.root} variant='outlined'>
        <CardMedia className={classes.media} image='/placeholder-image.png' title={name} />
        <CardContent>{name}</CardContent>
      </Card>
    </ListItem>
  );
};
