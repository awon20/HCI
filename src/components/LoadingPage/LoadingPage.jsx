import { Button, Container, Typography } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import React, {useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";


import './LoadingPage.css';

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
});

export function LoadingPage() {
    const classes = useStyles();
    // const [cat, setCat] = useState();
    // const [loading, setLoading] = useState(false);
    // const [ done, setDone] = useState(false);

    useEffect(() => {
        getCatPic();
    }, []);


    const getCatPic = () =>{
        // setLoading(false);
        // setDone(false);
        setTimeout(() => {
            fetch("https://aws.random.cat/meow")
            .then(res => res.json())
        //     .then(data => {
        //         setCat(data.file);
        // })
        .catch(err => console.log(err));
        }, 1200);
    }
    

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
        <Typography>
              LoadingPage
            </Typography>
            <Button
            classes={{
              root: classes.root, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
            onClick={getCatPic}
            >
                Load...
            </Button>
          <Typography>Loading...</Typography>
        </Container>
      </React.Fragment>
    );
}
