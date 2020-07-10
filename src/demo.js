import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    paddingBottom: 76
  },
  listSection: {
    backgroundColor: theme.palette.background.paper
  },
  contentRoot: ({ fullScreen }) =>
    fullScreen
      ? {
          paddingTop: 0
        }
      : {},
  contentTextRoot: ({ fullScreen }) =>
    fullScreen ? { paddingTop: theme.spacing(3) } : {},
  title: {
    flexGrow: 1
  }
}));

export default function RelationshipCards() {
  const [contact, setContact] = React.useState("0");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles({ fullScreen });

  const handleContactChange = event => {
    setContact(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Dialog
        fullScreen={fullScreen}
        open
        onClose={() => {}}
        aria-labelledby="form-dialog-title"
      >
        {fullScreen && (
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={() => {}}>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Duplicate Contacts
              </Typography>
              <Button color="inherit" onClick={() => {}}>
                Confirm
              </Button>
            </Toolbar>
          </AppBar>
        )}
        {!fullScreen && (
          <DialogTitle id="form-dialog-title">Duplicate Contacts</DialogTitle>
        )}
        <DialogContent classes={{ root: classes.contentRoot }}>
          <DialogContentText classes={{ root: classes.contentTextRoot }}>
            The information provided matches other relationships or customers.
            Please choose an entry from the list below.
          </DialogContentText>
          <RadioGroup
            aria-label="contact"
            name="contact"
            value={contact}
            onChange={handleContactChange}
          >
            <List
              disablePadding
              subheader={
                <ListSubheader className={classes.listSection} disableGutters>
                  Your Submission
                </ListSubheader>
              }
            >
              <ListItem disableGutters>
                <FormControlLabel
                  value={"0"}
                  control={<Radio />}
                  label={
                    <ListItemText
                      primary="Harry Dunn"
                      secondary={
                        <>
                          <Typography>hdunn@muttcutts.com</Typography>
                          <Typography>(973) 601-8200</Typography>
                        </>
                      }
                    />
                  }
                />
              </ListItem>
            </List>
            <List
              disablePadding
              subheader={
                <ListSubheader className={classes.listSection} disableGutters>
                  Potential Duplicate Contacts
                </ListSubheader>
              }
            >
              <ListItem disableGutters>
                <FormControlLabel
                  value={"1"}
                  control={<Radio />}
                  label={
                    <ListItemText
                      primary="Harry Dunn"
                      secondary={
                        <>
                          <Typography>hdunn@muttcutts.com</Typography>
                          <Typography>(973) 555-8200</Typography>
                        </>
                      }
                    />
                  }
                />
              </ListItem>
              <ListItem disableGutters>
                <FormControlLabel
                  value={"2"}
                  control={<Radio />}
                  label={
                    <ListItemText
                      primary="Harold Dunn"
                      secondary={
                        <>
                          <Typography>hdunn@muttcutts.com</Typography>
                          <Typography>(973) 601-8200</Typography>
                        </>
                      }
                    />
                  }
                />
              </ListItem>
            </List>
          </RadioGroup>
        </DialogContent>
        {!fullScreen && (
          <DialogActions>
            <Button onClick={() => {}} color="primary">
              Back
            </Button>
            <Button onClick={() => {}} color="primary">
              Confirm
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
