import { NewDiaryEntry } from "./types";
import { Weather, Visibility } from "./enums";

const parseComment = (commentFromReq: any): string => {
    if(!isString(commentFromReq)) {
        throw new Error('Incorrect of missing comment');
    }
    return commentFromReq;
}

const parseDate = (dateFromReq: any): string => {
    if(!isString(dateFromReq) || !isDate(dateFromReq)) {
        throw new Error('Incorrect of missing date');
    }
    return dateFromReq;
}

const parseWeather = (weatherFromReq: any): Weather => {
    if(!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
        throw new Error('Incorrect of missing weather');
    }
    return weatherFromReq;
}

const parseVisibility = (visibilityFromReq: any): Visibility => {
    if(!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
        throw new Error('Incorrect of missing visibility');
    }
    return visibilityFromReq;
}

const isWeather = (weather: any): boolean => (Object.values(Weather).includes(weather));

const isVisibility = (visibility: any): boolean => (Object.values(Visibility).includes(visibility));

const isString = (string: any): boolean => typeof string === 'string' || string instanceof String;

const isDate = (date: any): boolean => Boolean(Date.parse(date));


const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    };
    return newEntry;
}

export default toNewDiaryEntry;