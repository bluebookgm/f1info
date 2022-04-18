import { FC } from "react";
import { Props } from "./DriverResultsRow.types";
import "./DriverResultsRow.scss";

export const DriverResultsRow: FC<Props> = ({
  driverStats: {
    finishedPosition,
    driverName,
    driverTeam,
    finishTime,
    finishedLaps,
    points
  }
}) => {
  return (
    <div className="driverRow">
      <div className="driverRow_cell">{finishedPosition}</div>
      <div className="driverRow_cell">{driverName}</div>
      <div className="driverRow_cell">{driverTeam}</div>
      <div className="driverRow_cell">{finishTime}</div>
      <div className="driverRow_cell">{finishedLaps}</div>
      <div className="driverRow_cell">{points}</div>
    </div>
  );
};
