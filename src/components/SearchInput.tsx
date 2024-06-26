import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, styled } from "@mui/material";
import React, { FC } from "react";

const SearchWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#fff",
  borderRadius: theme.spacing(2),
  border: "1px solid grey",
  padding: theme.spacing(1, 5),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
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

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onPressEnter: () => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  value,
  onChange,
  onClick,
  onPressEnter,
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onPressEnter();
    }
  };

  return (
    <SearchWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <IconButton onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </SearchWrapper>
  );
};
