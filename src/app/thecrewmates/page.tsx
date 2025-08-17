"use client";

import Link from "next/link";
import { Button, Container, Flex, Image, rem, Title } from "@mantine/core";

import { Routes } from "@/constants";

export default function Home() {
    return (
        <>
            <Flex pos={"absolute"} w={"100%"} h={"100%"} style={{ flexGrow: 1 }} align={"center"} justify={"center"}>
                <Image src={"/img/bismuth-gray.svg"} alt={"bismuth logo"} w={"95vh"} opacity={0.025} />
            </Flex>
            <Container fluid h={"20dvh"} w={"100%"}>
                <Flex w={"100%"} h={"100%"} justify={"center"} align={"left"} direction={"column"} gap={"x2"}>
                    <Title size={rem(45)}>Really basic contact page because we need one quickly:</Title>
                    <Title size={rem(25)}>Flowyan: <a href="https://steamcommunity.com/id/flowyan">Steam</a></Title>
                    <Title size={rem(25)}>Chutoy: <a href="https://steamcommunity.com/id/Chutoy22">Steam</a></Title>
                </Flex>
            </Container>
        </>
    );
}
