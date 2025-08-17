import { Flex, Image } from "@mantine/core";

import styles from "./LogoInBackground.module.scss";

export function LogoInBackground() {
    return (
        <Flex
            pos={"absolute"}
            w={"100%"}
            h={"100%"}
            style={{ flexGrow: 1 }}
            align={"center"}
            justify={"center"}
            className={styles.container}
        >
            <Image src={"/img/bismuth-gray.svg"} alt={"bismuth logo"} w={"95vh"} opacity={0.025} />
        </Flex>
    );
}
