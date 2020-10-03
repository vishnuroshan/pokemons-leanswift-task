import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		// backgroundColor: theme.palette.grey[400],
		backgroundColor: theme.palette.background.paper
	},
	// 'cardroot': {
	// 	maxWidth: 345,
	// },
	// media: {
	// 	height: 140,
	// },
	gridList: {
		width: '80%',
		height: '100%',
		backgroundColor: theme.palette.background.paper
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
}));

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Modal heading
        </Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Centered Modal</h4>
				<p>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
					dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
					consectetur ac, vestibulum at eros.
        </p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

function Pokemons({ pokemons }) {
	const [modalShow, setModalShow] = React.useState(false);
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
			<GridList cellHeight={400} className={classes.gridList}>
				<GridListTile key="Subheader" cols={2} style={{ height: 'auto', background: '#f8c3c3' }}>
					<ListSubheader component="div">Pokemons</ListSubheader>
				</GridListTile>
				{pokemons.map((pok) => (
					<GridListTile key={pok.name}>
						<img src={pok.image} alt={pok.name} />
						<GridListTileBar
							title={pok.name}
							subtitle={<span>weight: {pok.weight}</span>}
							actionIcon={
								<IconButton onClick={() => setModalShow(true)} aria-label={`info about ${pok.name}`} className={classes.icon}>
									<InfoIcon />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</div >
	)
};


export default Pokemons;