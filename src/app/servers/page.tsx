"use client";

import Link from "next/link";
import { Button, Container, Flex, rem, Title } from "@mantine/core";

import { Routes } from "@/constants";
import { LogoInBackground } from "@/modules/layout";

export default function ServersPage() {
    return (
        <>
            <LogoInBackground />
            <Container fluid h={"100dvh"} w={"100%"}>
                <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"} direction={"column"} gap={"xl"}>
                    <Title size={rem(75)}>servers page work in progress teehee</Title>
                    <Button size="xl" href={Routes.HOME_PAGE} component={Link}>
                        go BACK
                    </Button>
                </Flex>
            </Container>
        </>
    );
}
