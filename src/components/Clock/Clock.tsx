import { Typography } from "@mui/material";
import React, { useState, useEffect, FC } from "react";
import { DateTime } from "luxon";

interface ClockProps {
  autoDetectTimeZone?: boolean; // Add a prop to enable auto-detecting the time zone
}

export const Clock: FC<ClockProps> = ({ autoDetectTimeZone }) => {
  const [dateTime, setDateTime] = useState<DateTime | null>(null);

  useEffect(() => {
    const id = setInterval(() => setDateTime(DateTime.now()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  if (autoDetectTimeZone) {
    return (
      <Typography variant="h5" component="span" color="text.secondary">
        {dateTime
          ? dateTime.toLocaleString(DateTime.TIME_SIMPLE)
          : "Time not available"}
      </Typography>
    );
  } else {
    return (
      <Typography variant="h5" component="span" color="text.secondary">
        {dateTime
          ? dateTime.toLocaleString(DateTime.TIME_SIMPLE)
          : "Time not available"}
      </Typography>
    );
  }
};
