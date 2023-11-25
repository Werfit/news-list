import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

type Props = {
  content: string;
};

const Title: React.FC<Props> = ({ content }) => {
  const navigate = useNavigate();

  return (
    <Typography
      display="flex"
      alignItems="center"
      variant="h5"
      sx={{
        cursor: "pointer",
      }}
      onClick={() => navigate("/")}
    >
      <ArrowBack /> {content}
    </Typography>
  );
};

export { Title };
