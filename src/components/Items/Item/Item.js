import React from "react";
import classes from "./Item.module.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

const Item = props => {
  return (
    <Card className={classes.Item}>
      <div>
        <div>
          <TextField
            label="Produto"
            className={classes.textField}
            value={props.name}
            onChange={props.nChanged}
            type="text"
            fullWidth={true}
            inputProps={{
              style: { textAlign: "center" }
            }}
          />
        </div>
        <br />
        <div>
          <TextField
            label="Quantidade/Peso"
            className={classes.textField}
            value={props.amount}
            onChange={props.aChanged}
            type="text"
            fullWidth={true}
            inputProps={{
              style: { textAlign: "center" }
            }}
          />
        </div>
      </div>
      <br />
      <div>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={props.btnDelete}
        >
          Remover
          <DeleteIcon />
        </Button>
      </div>
    </Card>
  );
};

export default Item;
