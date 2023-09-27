import React, { useEffect } from "react";
import { getOneUser, clearOneUserState } from "../store/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
const UserDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { oneUser } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getOneUser(id));
    return () => dispatch(clearOneUserState());
  }, []);

  console.log(oneUser);
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {oneUser ? (
              <div>
                <p>name:{oneUser.name}</p>
                <p>position:{oneUser.position}</p>
                <p>exper:{oneUser.experience}</p>
                <Button
                  sx={{
                    color: "black",
                    border: "1px solid",
                    borderRadius: "20px",
                  }}
                  size="small"
                >
                  edit
                </Button>
                <Button
                  sx={{
                    color: "black",
                    border: "1px solid",
                    borderRadius: "20px",
                  }}
                  size="small"
                >
                  delete
                </Button>
              </div>
            ) : (
              <h3>loading</h3>
            )}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetails;
