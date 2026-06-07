import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";

interface NotificationProps {
  type: string;
  message: string;
  timestamp: string;
  viewed?: boolean;
  onClick?: () => void;
}

const NotificationCard = ({
  type,
  message,
  timestamp,
  viewed = false,
  onClick,
}: NotificationProps) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        mb: 2,
        borderRadius: 3,
        boxShadow: 3,
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Chip label={type} />

          {!viewed && (
            <Chip
              label="Unread"
              color="error"
              size="small"
            />
          )}
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: viewed ? 400 : 700,
          }}
        >
          {message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {new Date(timestamp).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;