import { IPlanetary } from "@/shared/types/planetary";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { FC } from "react";

type MyImageListType = {
  planetaries: IPlanetary[];
};

export const MyImageList: FC<MyImageListType> = ({ planetaries }) => {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="woven"
      cols={3}
      gap={8}
    >
      {planetaries.map((item) => (
        <ImageListItem key={item.url}>
          <img
            srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.url}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
