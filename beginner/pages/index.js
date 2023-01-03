import NextImage from "next/image";
import { Source_Sans_Pro } from "@next/font/google";
import {
  Box,
  Flex,
  Text,
  HStack,
  chakra,
  VStack,
  useColorMode,
  useColorModeValue,
  Button,
  LightMode,
} from "@chakra-ui/react";

const sourceSansPro = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700"],
});

const Image = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#ECF8FF", "#141D26");

  const styles = {
    color: useColorModeValue("black", "white"),
    bgCard: useColorModeValue("white", "#243447"),
    shadowCard: useColorModeValue(
      "0 15px 60px rgba(29, 161, 242, 0.15)",
      "0 15px 60px rgba(52, 81, 116, 0.15)"
    ),
  };

  return (
    <Flex
      as="main"
      className={sourceSansPro.className}
      justify="center"
      align="center"
      bg={bg}
      h="100vh"
    >
      <Button onClick={toggleColorMode} position="absolute" top={0}>
        {" "}
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Box
        as="section"
        display="flex"
        border={`${
          colorMode === "light" ? "1px solid rgba(29, 161, 242, 0.2)" : ""
        }`}
        shadow={styles.shadowCard}
        flexDir="column"
        gap={4}
        w="601px"
        h="228px"
        bg={styles.bgCard}
        rounded="10px"
        p={8}
      >
        <Flex justify="space-between" align="center">
          <HStack spacing={4}>
            <Image
              src="https://dummyimage.com/50x50/000/fff"
              borderRadius="full"
              alt="testing"
              fallbackSrc="https://via.placeholder.com/150"
              width={50}
              height={50}
            />
            <VStack align="start">
              <Text
                color={colorMode === "light" ? "black" : "white"}
                fontSize="18px"
                lineHeight="22.63px"
                fontWeight="bold"
              >
                John Doe
              </Text>
              <Text
                color={
                  colorMode === "light"
                    ? "rgba(0, 0, 0, 0.6)"
                    : "rgba(255, 255, 255, 0.6)"
                }
                fontWeight="normal"
                fontSize="16px"
                mt={`${0} !important`}
                lineHeight="20.11px"
              >
                @realjohndoe
              </Text>
            </VStack>
          </HStack>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.75 3.75C27.553 4.59434 26.2276 5.24013 24.825 5.6625C24.0722 4.79688 23.0717 4.18336 21.9588 3.9049C20.8459 3.62645 19.6744 3.69649 18.6026 4.10556C17.5308 4.51464 16.6106 5.243 15.9662 6.19214C15.3219 7.14129 14.9846 8.26542 15 9.4125V10.6625C12.8033 10.7195 10.6266 10.2323 8.66376 9.2443C6.70093 8.25635 5.0129 6.79829 3.75 5C3.75 5 -1.25 16.25 10 21.25C7.42566 22.9975 4.35895 23.8737 1.25 23.75C12.5 30 26.25 23.75 26.25 9.375C26.2488 9.02681 26.2154 8.67949 26.15 8.3375C27.4258 7.07936 28.326 5.49089 28.75 3.75Z"
              fill="#1DA1F2"
            />
          </svg>
        </Flex>
        <Text
          color={styles.color}
          fontSize="16px"
          lineHeight="26px"
          fontWeight="normal"
        >
          Why do they call it &apos;debugging&apos; when it feels more like
          &apos;wildly guessing and hoping for the best&apos;?{" "}
          <chakra.span color="rgba(29, 161, 242, 1)">
            #programming #coding #debugging
          </chakra.span>
        </Text>
        <Flex gap={4}>
          <HStack>
            <LightMode>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.84 3.61C20.3292 3.099 19.7228 2.69364 19.0554 2.41708C18.3879 2.14052 17.6725 1.99817 16.95 1.99817C16.2275 1.99817 15.5121 2.14052 14.8446 2.41708C14.1772 2.69364 13.5708 3.099 13.06 3.61L12 4.67L10.94 3.61C9.9083 2.57831 8.50903 1.99871 7.05 1.99871C5.59096 1.99871 4.19169 2.57831 3.16 3.61C2.1283 4.64169 1.54871 6.04097 1.54871 7.5C1.54871 8.95903 2.1283 10.3583 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.351 10.8792 21.7563 10.2728 22.0329 9.60535C22.3095 8.93789 22.4518 8.22249 22.4518 7.5C22.4518 6.77751 22.3095 6.0621 22.0329 5.39464C21.7563 4.72718 21.351 4.12075 20.84 3.61V3.61Z"
                  stroke={colorMode === "light" ? "black" : "white"}
                  strokeOpacity="0.6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Text
                color={
                  colorMode === "light"
                    ? "rgba(0, 0, 0, 0.6)"
                    : "rgba(255, 255, 255, 0.6)"
                }
                fontSize="16px"
                fontWeight={colorMode === "light" ? "semibold" : "normal"}
                lineHeight="26px"
              >
                650
              </Text>
            </LightMode>
          </HStack>
          <HStack>
            <Text
              color={
                colorMode === "light"
                  ? "rgba(0, 0, 0, 0.6)"
                  : "rgba(255, 255, 255, 0.6)"
              }
              fontSize="16px"
              fontWeight={colorMode === "light" ? "semibold" : "normal"}
              lineHeight="26px"
            >
              3:40 PM – Feb 24, 2022
            </Text>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
}
