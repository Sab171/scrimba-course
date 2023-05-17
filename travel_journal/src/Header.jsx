import React from "react";
import { Center, Text, ThemeIcon } from '@mantine/core';
import { IconMap } from '@tabler/icons-react';


export default function Header() {

    return (
<>
    <Center style={{backgroundColor: '#F55A5A', height: "55px", marginBottom: "45px"}}>
        <ThemeIcon color="none" size={"24px"} style={{ margin: "7px"}}>
            <IconMap color="white" />
        </ThemeIcon>
        <Text fz = "14.46px" fw={500} c="white" >J'suis la carte !</Text>
    </Center>
</>
  );
}
