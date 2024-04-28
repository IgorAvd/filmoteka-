import { FC } from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { FilterBoxStyles, FilterTextFieldStyles } from "./Filter.styled";

type FilterProp = {
  title: string;
  onSubmit: any;
};

export const Filter: FC<FilterProp> = ({ title, onSubmit }) => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("title") ?? "";

  const handleFilterSubmit = () => {
    dispatch(onSubmit(movieName));
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilterSubmit();
    }
  };

  return (
    <Box sx={FilterBoxStyles}>
      <TextField
        label={title}
        type="text"
        name="name"
        variant="filled"
        sx={FilterTextFieldStyles}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                type="button"
                aria-label="search"
                onClick={handleFilterSubmit}
              >
                <SearchIcon sx={{ padding: "20px" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const title = e.target.value;
          const nextParams = title !== "" ? { title } : {};
          setSearchParams(nextParams as URLSearchParamsInit);
        }}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
};

