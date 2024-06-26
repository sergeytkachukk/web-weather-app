import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";

export const LocationPermission = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/weather`,
          {
            params: {
              lat: latitude,
              lon: longitude,
              appid: process.env.REACT_APP_API_KEY,
            },
          }
        );
        navigate("/weather-display", { state: { weatherData: response.data } });
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
        setDialogContent("Failed to fetch weather data");
        setOpen(true);
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  const handleGeolocationSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    fetchWeatherData(latitude, longitude);
  };

  const handleGeolocationError = () => {
    setLoading(false);
    setDialogContent("Location permission denied.");
    setOpen(true);
  };

  const handleOkButtonClick = () => {
    setOpen(false);
    navigate("/main");
  };

  const handleDialogClose = () => {
    setOpen(false);
    navigate("/main");
  };

  useEffect(() => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleGeolocationSuccess,
        handleGeolocationError
      );
    } else {
      setLoading(false);
      setDialogContent("Geolocation is not supported by this browser.");
      setOpen(true);
    }
  }, [fetchWeatherData]);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography>Loading your location...</Typography>
      )}

      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Location Access"}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContent}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleOkButtonClick} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
