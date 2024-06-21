export const FilterBoxStyles = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "120px",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    maxWidth: "530px",

    '@media (max-width: 450px)': {
        top: "210px",
    }
};

export const FilterTextFieldStyles = {
    width: "530px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    '@media (max-width: 550px)': {
        width: "330px",
    }
};