import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface InternshipCardProps {
  logo: string;
  company: string;
  role: string;
  period: string;
  description: string;
  link?: string;
}

export default function InternshipCard({ logo, company, role, period, description, link, }: InternshipCardProps) {
  return (
    <Card
      sx={(theme) => ({
        maxWidth: 520, mx: "auto", borderRadius: 3, display: "flex", flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": { transform: "translateY(-4px)" },
        [theme.breakpoints.up("md")]: { flexDirection: "row" },
      })}
    >
      <CardMedia
        image={logo}
        sx={(theme) => ({
          width: "100%", minHeight: 180, backgroundSize: "contain", backgroundPosition: "center",
          [theme.breakpoints.up("md")]: { width: 180, minHeight: "100%" },
        })}
      />

      <CardContent sx={{ flex: 1 }}>
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" sx={{ textTransform: "uppercase", letterSpacing: "0.08em", color: '#415ce0', fontWeight: 600 }} >
            {company}
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {role}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {period}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>

        {link && (
          <Button variant="outlined" size="small" href={link} target="_blank" rel="noopener noreferrer">
            View Details
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
