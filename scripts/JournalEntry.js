/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entryObj) => {
    return `
        <section id="entryObj--${entryObj.id}" class="journalEntry">
            <h2>${entryObj.concept}</h2>
            <p>${entryObj.entry}</p>
            <p>- ${entryObj["first-name"]} ${entryObj["last-name"]}</p>
            <p>${entryObj.date}</p>
        </section>
    `
}