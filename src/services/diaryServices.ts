import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types';
import diaryEntries from './diaryEntries.json';

const diaries: Array<DiaryEntry> = diaryEntries as Array<DiaryEntry>

export const getEnries = () =>  diaries;

export const findById = (id: number) : NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(diary => diary.id === id);
    if (entry) {
        const { comment, ...nonSensitiveInfo } = entry;
        return nonSensitiveInfo;
    }
    return undefined;
} 

export const getEntryWhitoutSensitiveInfo = () : Array<NonSensitiveInfoDiaryEntry> => diaries.map(({ id, date, weather, visibility }) => ({ id, date, weather, visibility }));

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(entry => entry.id)) + 1,
        ...newDiaryEntry
    }

    diaries.push(newDiary);
    return newDiary;
}