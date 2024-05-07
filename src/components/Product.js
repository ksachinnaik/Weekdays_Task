import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

const Product = ({ category, companyName, description, salaryCurrencyCode, salary, link, stat, location, index, logoUrl }) => {
    const maxLength = 250;
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            sx={{
                backgroundColor: 'white',
                borderRadius: '0.55rem',
                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.15)',
                maxWidth: 340,
                minWidth: 280,
                borderRadius: '30px',
            }}
        >
            <CardContent>
                <Typography variant="body2" sx={{
                    display: 'inline',
                    padding: '5px 10px',
                    flex: '1 1 0%',
                    fontSize:"10px",
                    backgroundColor: 'rgb(255, 255, 255)',
                    color: 'rgba(0, 0, 0, 0.87)',
                    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    border:"1px solid rgba(0, 0, 0, 0.25)",
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px 0px !important',                   
                    
                }}
                >
                    posted 20 days ago
                </Typography>
                <ListItemButton key={index + link} sx={{ p: "0px" , margin: "10px 0"}}>
                    <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={logoUrl} />
                    </ListItemAvatar>
                    <ListItemText primary={companyName} secondary={category} />
                </ListItemButton>

                <Typography variant="body1" component="div">
                    Job location: {location}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    mb: '1rem',
                    letterSpacing: "1px",
                    color: "#8b8b8b",
                }}>
                    Estimated Salary: {salaryCurrencyCode} {salary}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{
                    fontWeight: "500",
                    letterSpacing: "1px",
                    lineHeight: 1.2,
                    margin: "0px",
                }}>
                    About Company
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {expanded ? description : `${description.slice(0, maxLength)}...`}
                    {description.length > maxLength && (
                        <span style={{ color: "blue", cursor: "pointer" }} onClick={toggleExpanded}>
                            {expanded ? " Read less" : "View Job"}
                        </span>
                    )}
                </Typography>
                <Typography variant="button" display="block" gutterBottom marginTop="8px" sx={{
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    marginBottom: "3px",
                    color: "#8b8b8b",
                }}>
                    Minimum Experience
                </Typography>
                <Typography variant="caption" display="block" gutterBottom marginBottom="0px" lineHeight="8px">
                    {stat}
                </Typography>
            </CardContent>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyItems="center"
                gap={2}
                p="8px 16px"
                margin="5px 0px 10px"
            >

                <Button
                    variant="contained"
                    href={link}
                    sx={{
                        fontSize: 16,
                        padding: '12px',
                        width: "100%",
                        lineHeight: 1.5,
                        color: "Black",
                        backgroundColor: 'rgb(85, 239, 196)',
                        cursor: 'pointer',
                    }}
                >
                    ⚡ Easy Apply
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        fontSize: 16,
                        width: "100%",
                        padding: '12px',
                        lineHeight: 1.5,
                        cursor: 'pointer',
                        color: "white",
                        backgroundColor: "rgb(73, 67, 218)"
                    }}
                >
                    Unlock Referral ask
                </Button>
            </Box>

        </Card>
    );
};

export default Product;
