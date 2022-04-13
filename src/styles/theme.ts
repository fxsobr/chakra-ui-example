import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
    colors: {
        brand: {
            "highlight": "#FFBA08",
            "darkHd": "#47585B",
            "lightHd": "#F5F8FA",
            "dark": "#000000",
            "darkInfo": "#999999",
            "lightInfo": "#DADADA"

        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'brand.lightHd',
                color: 'brand.highlight'
            }
        }
    }
})