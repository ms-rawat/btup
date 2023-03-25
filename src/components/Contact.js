import { styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';
import { Phone, Email, Twitter } from '@mui/icons-material';

const RootCard = styled(Card)(({ theme }) => ({
  width: 440,
  margin: 'auto',
  marginTop: theme.spacing(4),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const IconWrapper = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const SocialLink = styled('a')(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  marginLeft: theme.spacing(1),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export default function Contact() {
  return (
    <RootCard style={{padding:"100px",    margin: "40px auto" , "background-color":"rgb(116, 34, 34)" }}>
      <CardHeader
        avatar={<StyledAvatar><Phone /></StyledAvatar>}
        title="Contact Us"
        subheader="Get in touch with us"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          <IconWrapper><Phone /></IconWrapper> +1 (555) 123-4567
        </Typography>
        <Typography variant="body2" component="p">
          <IconWrapper><Email /></IconWrapper> info@mycompany.com
        </Typography>
        <Typography variant="body2" component="p">
          <IconWrapper><Twitter /></IconWrapper>
          <SocialLink href="https://twitter.com/mycompany">@mycompany</SocialLink>
        </Typography>
      </CardContent>
    </RootCard>
  );
}
