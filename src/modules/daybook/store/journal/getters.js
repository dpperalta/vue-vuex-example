export const getEntriesByTermn = ( state ) => ( termn = '' ) => {
    if( termn.length === 0 ) return state.entries
    return state.entries.filter( entry => entry.text.toLowerCase().includes(termn.toLowerCase()) )
}
export const getEntryById = ( state ) => ( id = '' ) => {
    const entry = state.entries.find( entry => entry.id === id )
    if( !entry ) return
    return { ...entry }
}