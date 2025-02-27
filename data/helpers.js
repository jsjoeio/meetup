import speakers from './speakers';
import meetups from './meetups';

const data = {
    speakers,
    meetups
}

const readOnlyData = Object.freeze(data);

export const speakerById = (id) => readOnlyData.speakers.find((speaker) => speaker.id == id);
export const getSpeakers = () => readOnlyData.speakers;

export const meetupById = (id) => readOnlyData.meetups.find((meetup) => meetup.id == id);
export const getMeetups = () => readOnlyData.meetups;