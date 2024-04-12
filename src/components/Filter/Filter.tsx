import { FC } from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { FilterBoxStyles, FilterTextFieldStyles } from "./Filter.styled";
import { getMovieBySearch } from "../../redux/SearchBox/operation";

export const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("title") ?? "";

  const handleFilterSubmit = () => {
    dispatch(getMovieBySearch(movieName));
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilterSubmit();
    }
  };

  return (
    <Box sx={FilterBoxStyles}>
      <TextField
        label="Find movie by name"
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
                <SearchIcon />
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

// import { FC } from "react";
// import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { getMovieBySearch } from "../../services/api";
// import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
// import { useAppDispatch } from "../../hooks";
// import { setSearchBoxValue } from "../../redux/SearchBox/SearchBoxSlice";
// import { FilterBoxStyles, FilterTextFieldStyles } from "./Filter.styled";

// export const Filter: FC = () => {
//   const dispatch = useAppDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieName = searchParams.get("title") ?? "";

//   const handleFilterSubmit = () => {
//     getMovieBySearch(movieName)
//       .then((response) => {
//         dispatch(setSearchBoxValue(response.data.results));
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };
//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       handleFilterSubmit();
//     }
//   };
//   return (
//     <Box sx={FilterBoxStyles}>
//       <TextField
//         label="Find movie by name"
//         type="text"
//         name="name"
//         variant="filled"
//         sx={FilterTextFieldStyles}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton
//                 type="button"
//                 aria-label="search"
//                 onClick={handleFilterSubmit}
//               >
//                 <SearchIcon />
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//           const title = e.target.value;
//           const nextParams = title !== "" ? { title } : {};
//           setSearchParams(nextParams as URLSearchParamsInit);
//         }}
//         onKeyDown={handleKeyDown}
//       />
//     </Box>
//   );
// };
