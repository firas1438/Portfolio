import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import ShinyText from './ui/ShinyText';

interface TitleProps {
    title?: string;
    heading?: string;
    description?: string;
}

export default function Title({ title, heading, description }: TitleProps) {

    return (
        <Box textAlign="center">
            {title && (
                <Typography component={motion.p} variant="subtitle2" color="#415ce0" textTransform="uppercase" fontWeight={600} mb={0.5}
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 250, damping: 70, mass: 1 }}
                >
                    <ShinyText text={title} speed={2} color="#415ce0" shineColor="#9fb3ff"/>
                </Typography>
            )}
            {heading && (
                <Typography component={motion.h2} variant="h4" className="text-2xl md:text-4xl font-semibold"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                >
                    {heading}
                </Typography>
            )}
            {description && (
                <Typography component={motion.p} color="text.secondary" className="mx-auto pt-1"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                >
                    {description}
                </Typography>
            )}
        </Box>
    )
}