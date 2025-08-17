"use client";

import Link from "next/link";
import { Button, Container, Flex, rem, Text, Title } from "@mantine/core";

import { Routes } from "@/constants";
import { LogoInBackground } from "@/modules/layout";

export default function TheTeamPage() {
    return (
        <>
            <LogoInBackground />
            <Container fluid h={"100dvh"} w={"100%"}>
                <Flex direction={"column"} gap={"sm"} mb={"xl"}>
                    <Title size={rem(45)}>Really basic contact page because we need one quickly:</Title>
                    <Text size={rem(25)}>
                        Flowyan:{" "}
                        <Link href="https://steamcommunity.com/id/flowyan" target="_blank">
                            Steam
                        </Link>
                    </Text>
                    <Text size={rem(25)}>
                        Chutoy:{" "}
                        <Link href="https://steamcommunity.com/id/Chutoy22" target="_blank">
                            Steam
                        </Link>
                    </Text>
                </Flex>
                <Button size="xl" href={Routes.HOME_PAGE} component={Link}>
                    go BACK
                </Button>
            </Container>
        </>
    );
}
