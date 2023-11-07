import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  CardContent,
  InputBase,
  styled,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useCallback, useState } from "react";
import { Clock } from "../Clock/Clock";

const SearcWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(5),
  gap: 10,
}));

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#fff",
  borderRadius: 15,
  padding: theme.spacing(1, 5, 1, 5),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const WeatherCardWrapper = styled(Card)(({ theme }) => ({
  borderRadius: 15,
  padding: theme.spacing(3.5),
  width: 300,
  height: 350,
}));

const TemperatureStyling = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(5, 3, 5, 3),
}));

const SearchForm = () => {
  const [temperature, setTemperature] = useState(0);
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [humidity, setHumidity] = useState("");
  const [visibility, setVisibility] = useState(0);
  const [windspeed, setWineSpeed] = useState("");
  const [wicon, setWicon] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  // const [cityTime, setCityTime] = useState<Date | null>(null);

  const getWeatherData = async (searchQuery: string) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/weather?q=${searchQuery}&appid=${process.env.REACT_APP_API_KEY}`,
      });

      setCity(response.data.name);
      setTemperature(Math.round(response.data.main.temp - 273.15));
      setDesc(response.data.weather[0].description);
      setName(response.data.name);
      setHumidity(response.data.main.humidity);
      setVisibility(response.data.visibility / 1000);
      setWineSpeed(response.data.wind.speed);
      setWicon(response.data.weather[0].icon);

      console.log(response.data);
    } catch (error) {
      <Typography>Something went wrong</Typography>;
    }
  };

  const handleOnChangeCity = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  const handleSearchClick = useCallback(async () => {
    try {
      const encodedCity = encodeURIComponent(searchQuery); // URL-encode the city name
      await getWeatherData(encodedCity);
    } catch (error) {
      console.error("Please type a correct city");
    }
  }, [searchQuery]);

  return (
    <SearcWrapper>
      <Search sx={{ gap: 1 }}>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleOnChangeCity}
        />

        <IconButton onClick={handleSearchClick}>
          <SearchIcon />
        </IconButton>
      </Search>

      <WeatherCardWrapper>
        <CardContent>
          <Box
            display="flex"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h5" component="div">
              {city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </Box>

          <TemperatureStyling
            variant="h2"
            display="flex"
            sx={{ justifyContent: "center" }}
          >
            {temperature}°C
          </TemperatureStyling>

          <Clock autoDetectTimeZone={true} />
        </CardContent>
      </WeatherCardWrapper>
    </SearcWrapper>
  );
};

export default SearchForm;
