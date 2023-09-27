import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function UserItem({ user }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <li>
            <p>{user.name}</p>
            <p>{user.position}</p>
            <p>{user.experience}</p>
          </li>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ color: "black", border: "1px solid", borderRadius: "20px" }}
          size="small"
          onClick={() => navigate(`/details/${user.id}`)}
        >
          {" "}
          details
        </Button>
      </CardActions>
    </Card>
  );
}
