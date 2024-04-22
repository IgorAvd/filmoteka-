import styled from '@emotion/styled';

export const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // height: 450,
    // width: 580,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: "0px 1px 2px rgba(0, 255, 255, 0.7), 1px 2px 4px rgba(0, 255, 255, 0.7), 2px 4px 8px rgba(0, 255, 255, 0.7), 2px 4px 16px rgba(0, 255, 255, 0.7)",
    p: 4,
    "&:focus": {
        outline: "none",
    },

    img: {
        borderRadius: "10px",
    },
    "@media (max-width: 560px)": {
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
    "@media (max-width: 1020px)": {
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
    // lineHeight: "1.2",
    // "@media (max-width: 1000px)": {
    //     fontSize: "18px",
    // }
};

export const ModalTitleStyle = styled.span`
color: red;
// line-height: 1.2;
@media (max-width: 1150px) {
        font-size: 20px;
    }
`;

export const ModalTextStyle = {
    textAlign: "justify",
    fontSize: "25px",
    lineHeight: "1.2",
    // textAlign: "justify,
    "@media (max-width: 1150px)": {
        fontSize: "20px",
    },
    "@media (max-width: 1000px)": {
        fontSize: "18px",
    }
};
