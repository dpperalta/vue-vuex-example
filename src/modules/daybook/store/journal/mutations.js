import journalApi from "@/api/journalApi"

export const setEntries = ( state, entries ) => {
    state.entries = [ ...state.entries, ...entries ],
    state.isLoading = false
}

export const updateEntry = async ( state, entry ) => {
    const idx = state.entries.map( e => e.id ).indexOf( entry.id )
    state.entries[idx] = entry
}

export const addEntry = ( state, entry ) => {
    // state.entries = state.entries.unshift(entry)
    state.entries = [entry, ...state.entries]
}

export const deleteEntry = ( state, id ) => {
    state.entries = state.entries.filter( entry => entry.id !== id )
}