import { Heading, Text, Box } from "@chakra-ui/react"
import { transform } from "framer-motion"

export const TitleSeparator = (title) => {
    const string= title.title
    const brand = string.slice(0, string.indexOf('-'))
    const sliceproductname = string.slice(string.indexOf('-'), -1)
    const productname = sliceproductname.slice(2)

    return (
        <Box>
            <Text color="orange.500" as='b' casing={"uppercase"}>{brand}</Text>
            <Heading pt={5} pb={5}>{productname}</Heading>
        </Box>
    )
}