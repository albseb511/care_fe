import React from "react";
import { Grid, CardContent, Typography, Button } from "@material-ui/core";
import moment from "moment";
import { SampleTestModel } from "./models";


interface SampleDetailsProps {
  itemData: SampleTestModel;
  handleApproval: (status: number, sample: SampleTestModel) => void;
}

export const SampleTestCard = (props: SampleDetailsProps) => {
  const { itemData, handleApproval } = props;
  return (
    <div className="block border rounded-lg bg-white shadow h-full cursor-pointer hover:border-primary-500 text-black mt-4">
      <CardContent>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={11} container spacing={1}>
            <Grid item xs={6}>
              <Typography>
                <span className="w3-text-grey">Status:</span> {itemData.status}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <span className="w3-text-grey">Result:</span> {itemData.result}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <span className="w3-text-grey">Notes:</span> {itemData.notes}
              </Typography>
            </Grid>
            {itemData.date_of_result && (
              <Grid item xs={6}>
                <Typography>
                  <span className="w3-text-grey">Tested on :</span>{" "}
                  {moment(itemData.date_of_result).format("lll")}
                </Typography>
              </Grid>
            )}
            {itemData.date_of_result && (
              <Grid item xs={6}>
                <Typography>
                  <span className="w3-text-grey">Result on:</span>{" "}
                  {moment(itemData.date_of_result).format("lll")}
                </Typography>
              </Grid>
            )}
            {itemData.status === "APPROVED" && (
              <Button
                style={{ color: "green" }}
                variant="outlined"
                onClick={e => handleApproval(4, itemData)}
              >
                Sent to Collection Centre
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </div>
  );
};
