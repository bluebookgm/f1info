import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentRace } from "../../modules/RaceResult/raceResult.slice";
import { RootState } from "../../modules/store";
// import "./RaceResults.scss";
import { DriverResultsRow } from "./DriverResultsRow/DriverResultsRow";

export const RaceResults: FC = () => {
  const dispatch = useDispatch();
  const currentRace = useSelector((state: RootState) => 
    state.currentRace.currentRace?.MRData.RaceTable.Races[0].Results
  );
  const currentRaceStatus = useSelector((state: RootState) => 
    state.currentRace.status
  );

  useEffect(() => {
    if (currentRaceStatus === 'idle') {
      dispatch(fetchCurrentRace());
    }
  }, [currentRaceStatus, dispatch]);

  const raceResults = currentRace?.map((elem) => {
    const driverObject = {
      finishedPosition: elem.position,
      driverName: `${elem.Driver.givenName} ${elem.Driver.familyName}`,
      driverTeam: elem.Constructor.name,
      finishedLaps: elem.laps,
      finishTime: elem.Time?.time,
      points: elem.points
    };

    return (
      <div key={elem.number}>
        <DriverResultsRow driverStats={driverObject} />
      </div>
    );
  })

  return (
    <>
        {raceResults}
    </>
  );
};
