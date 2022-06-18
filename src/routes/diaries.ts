import express  from "express";
import * as diaryService from "../services/diaryServices";
import toNewDiaryEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
    res.send(diaryService.getEntryWhitoutSensitiveInfo());
});

router.get("/admin", (_req, res) => {
    res.send(diaryService.getEnries());
});

router.get("/:id", (req, res) => {
    const diary = diaryService.findById(+req.params.id); // type conversion, also you can use Number(req.params.id)
    res.send(diary);
});

router.post("/", (req, res) => {

    try{
        const newDiaryEntry = toNewDiaryEntry(req.body);

        const addedDiary = diaryService.addDiary(newDiaryEntry);
        console.log("recived new diary: ", addedDiary);
        
        res.json(addedDiary); 
    } catch (e) {
        res.status(400).send((e as Error).message);
    }

});

export default router