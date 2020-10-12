/* This module is responsible for managing the state of the application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        'first-name': "Travis",
        'last-name': "Stevenson",
        date: "07/24/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ecstatic"
    },

    {
        id: 2,
        'first-name': "Travis",
        'last-name': "Stevenson",
        date: "07/25/2020",
        concept: "Flexbox",
        entry: "We talked about CSS Flexbox and how to use it to style your webpage responsively.",
        mood: "Happy"
    },

    {
        id: 3,
        'first-name': "Travis",
        'last-name': "Stevenson",
        date: "07/26/2020",
        concept: "Complex Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Scott.",
        mood: "Content"
    },

    {
        id: 4,
        'first-name': "Travis",
        'last-name': "Stevenson",
        date: "07/27/2020",
        concept: "Iteration",
        entry: "We talked about for loops.",
        mood: "Sad"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}