import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyParts from './BodyParts';
import RightArrowIcon from '../assets/images/right-arrow.png';
import LeftArrowIcon from '../assets/images/left-arrow.png';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="left-arrow">
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    );
};
  
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="right-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
    return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="5px 10px"
          >
          <BodyParts
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
          </Box>
        ))}
      </ScrollMenu>
    );
}

export default HorizontalScrollbar;