import styled from '@emotion/styled';


export const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflowY: "auto",
    maxHeight: "500px",
    bgcolor: "background.paper",
    width: "450px",
    borderRadius: "10px",
    boxShadow: "0px 1px 2px rgba(0, 255, 255, 0.7), 1px 2px 4px rgba(0, 255, 255, 0.7), 2px 4px 8px rgba(0, 255, 255, 0.7), 2px 4px 16px rgba(0, 255, 255, 0.7)",
    p: 4,
    "&:focus": {
        outline: "none",
    },

    img: {
        borderRadius: "10px",
    },
    "@media (max-width: 580px)": {
        width: "280px",
    },
    "@media (max-width: 360px)": {
        width: "250px",
    }
};

export const modalImgDescriptionBox = {
    display: "flex",
    marginTop: "15px",
    gap: "10px",
    marginBottom: "15px",
    // width: "450px",
    "@media (max-width: 580px)": {
        flexDirection: "column",
    }
};

export const ModalTitleReleseWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",

};

export const modalTitleStyle = {
    textAlign: "center",
    fontSize: "25px",
    color: "red",
};

export const ModalTitleStyle = styled.span`
color: red;
@media (max-width: 1150px) {
        font-size: 19px;
    }
`;

export const ModalTextStyle = {
    textAlign: "justify",
    fontSize: "19px",
    lineHeight: "1.2",
    // textAlign: "justify,
    "@media (max-width: 1150px)": {
        fontSize: "20px",
    },
    "@media (max-width: 1000px)": {
        fontSize: "18px",
    }
};

export const IconStyle = {
    display: "none",
    "@media (max-width: 580px)": {
        display: "block",
        position: "absolute",
        top: "485px",
        right: "-5px",
        width: "35px",
        height: "45px"
    }
};


