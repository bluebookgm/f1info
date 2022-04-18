export type Props = {
    driverStats: DriverStats;
  };
  
  interface DriverStats {
    finishedPosition: string;
    driverName?: string;
    driverTeam?: string;
    finishedLaps?: string;
    finishTime?: string;
    points?: string;
  }
  