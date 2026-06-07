import Navbar from "../components/Navbar";
import NotificationCard from "../components/NotificationCard";

import {
  Box,
  Typography,
  TextField,
} from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          maxWidth: 900,
          margin: "auto",
          padding: 3,
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(135deg,#667eea,#764ba2)",
            color: "white",
            p: 4,
            borderRadius: 3,
            mb: 4,
          }}
        >
          <Typography variant="h4">
            🔔 Notification Center
          </Typography>

          <Typography>
            Stay updated with your latest notifications
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="Search Notifications"
          sx={{ mb: 3 }}
        />

        <NotificationCard
          type="Placement"
          message="New Assignment Uploaded"
          timestamp={new Date().toISOString()}
        />

        <NotificationCard
          type="Result"
          message="Exam Schedule Released"
          timestamp={new Date().toISOString()}
        />

        <NotificationCard
          type="Event"
          message="Fee Payment Reminder"
          timestamp={new Date().toISOString()}
        />
      </Box>
    </>
  );
}