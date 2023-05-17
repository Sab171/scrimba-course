import React from "react";
import { Card, Text, Image, Group, Stack, ThemeIcon, Anchor, Divider } from "@mantine/core";
import { IconMapPin } from '@tabler/icons-react';




export default function Content(props) {
    return(
        <Card style={{margin: "18px 40px", padding: 0}}>
            <Group align="center" >
                
                <Image 
                    height={"168px"}
                    width={"126px"}
                    src={props.item.image}
                    alt = {props.item.location}
                    radius={"5px"}
                    />
                <Stack spacing={0} w="75%" style={{ marginLeft: "19px"}}>
                    <Group spacing={0}>
                        <ThemeIcon color="none" size={"15px"} style={{ margin: "4px"}}>
                            <IconMapPin color="red"/>
                        </ThemeIcon>
                        <Text fw={400} fz="15px" c="#2B283A" style={{ marginRight: "12px", marginLeft: "0px"}}>{props.item.country}</Text>
                        <Anchor fz={"13px"} href={props.item.maps_link} target="_blank" color="#918E9B" underline >View on Google Maps</Anchor>
                    </Group>

                    <Text c="#2B283A" fw={700} fz={"25px"} style={{ margin: "7px 0"}}>{props.item.location}</Text>
                    <Text c="#2B283A" fw={700} fz={"13px"} style={{ marginTop: "0px", marginBottom: "9px"}}>{props.item.startDate} - {props.item.endDate}</Text>
                    <Text c="#2B283A" fw={400} fz={"13px"} style={{ marginTop: "Opx", marginBottom: "38px"}}>{props.item.description}</Text>
                </Stack>
            </Group>
            <Divider color="#F5F5F5" style={{ marginTop: "21px", marginBottom: "15px"}}/>
        </Card> 
    );
}