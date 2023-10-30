import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from "@mui/material";
import SideNav from "../components/nav/SideNav";
import colors from "../utils/colors";
import { useLocation } from "react-router-dom";
import { bibleBooks, generateListChapters } from "../utils/books";
import { getVerses } from "../services/versesService";
import VerseGrid from "../components/grid/VerseGrid";

const BibleContent = () => {
    const [bookIndex, setBookIndex] = React.useState(1);
    const [chapter, setChapter] = React.useState(1);
    const [verses, setVerves] = React.useState([]);

    // get the object from the location
    const location = useLocation();
    const version = location.state?.version;

    // fetch the data (verses) from the server
    async function fetVerses(versionId, bookId, chapter) {
        try {
            const data = await getVerses(versionId, bookId, chapter);
            setVerves(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    React.useEffect(() => {
        fetVerses(version.versionId, bookIndex, chapter);
    }, [version, bookIndex, chapter]);


    // handle change events of the select Book
    const handleChangeBook = (event) => {
        setBookIndex(event.target.value);
    };

    // handle change events of the select chapter
    const handleChangeChapter = (event) => {
        setChapter(event.target.value);
    };

    return (
        <>
            <Box sx={{ display: "flex", backgroundColor: colors.background }}>
                <SideNav />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        bgcolor: "background.default",
                        p: 3,
                        backgroundColor: " inherit ",
                    }}
                >
                    <Toolbar />
                    <Typography
                        variant="h5"
                        color={colors.primary}
                        mb={2}
                        fontWeight={"bold"}
                    >
                        {version.name}
                    </Typography>

                    <FormControl sx={{ m: 1, minWidth: 200, backgroundColor: "#ffffff", border: "none" }} size="small"  >
                        <InputLabel id="demo-simple-select-label" >Book</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={bookIndex}
                            label="Books"
                            sx={{ border: "none" }}

                            onChange={handleChangeBook}
                        >
                            {bibleBooks.map((book, index) => (
                                <MenuItem key={index} value={book.index}>
                                    {book.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 200, backgroundColor: "#ffffff", border: "none" }} size="small"  >
                        <InputLabel id="demo-simple-select-label" >Chapter</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={chapter}
                            label="Chapter"
                            sx={{ border: "none" }}

                            onChange={handleChangeChapter}
                        >
                            {generateListChapters(bookIndex).map((chapter, index) => (
                                <MenuItem key={index} value={chapter}>
                                    {chapter}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>                

                    <VerseGrid verses={verses}/>

                </Box>
            </Box >
        </>)
}

export default BibleContent